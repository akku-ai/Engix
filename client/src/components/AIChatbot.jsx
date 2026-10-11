import { useEffect, useRef, useState } from 'react';
import {
  Bot,
  MessageCircle,
  Send,
  X,
  RotateCcw,
  LoaderCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import '../styles/engix-chatbot.css';

const welcome = {
  role: 'assistant',
  content:
    'Hi! I’m Engix’s AI assistant. Ask me about software development, AI automation, or digital marketing. How can I help your business?',
};

const suggestions = [
  'What services do you offer?',
  'I need a website for my business',
  'How can AI help my business?',
  'How do I request a quote?',
];

const apiRoot = (
  import.meta.env.VITE_CHAT_API_ORIGIN || 'http://localhost:5000'
).replace(/\/+$/, '');

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([welcome]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const input = useRef(null);
  const launcher = useRef(null);
  const bottom = useRef(null);
  const request = useRef(null);
  const locked = useRef(false);
  const history = useRef([]);

  useEffect(() => {
    return () => request.current?.abort();
  }, []);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  useEffect(() => {
    if (open) {
      bottom.current?.scrollIntoView({
        block: 'nearest',
      });
    }
  }, [messages, busy, open]);

  function close() {
    setOpen(false);
    launcher.current?.focus();
  }

  function reset() {
    if (locked.current) return;

    history.current = [];
    setMessages([welcome]);
    setDraft('');
    setError('');

    input.current?.focus();
  }

  async function send(text = draft) {
    const content = text.trim();

    if (!content || content.length > 1500 || locked.current) {
      return;
    }

    locked.current = true;
    setBusy(true);
    setError('');
    setDraft('');

    // Retain seven complete previous conversation turns.
    const previous = history.current.slice(-14);
    const user = { role: 'user', content };

    setMessages([welcome, ...previous, user]);

    const controller = new AbortController();
    request.current = controller;

    const timeout = setTimeout(() => {
      controller.abort();
    }, 40000);

    try {
      const response = await fetch(`${apiRoot}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...previous, user],
        }),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error ||
            'The assistant is unavailable. Please try again.'
        );
      }

      if (typeof data.reply !== 'string' || !data.reply.trim()) {
        throw new Error('No answer received. Please try again.');
      }

      const next = [
        ...previous,
        user,
        {
          role: 'assistant',
          content: data.reply,
        },
      ];

      history.current = next;
      setMessages([welcome, ...next]);
    } catch (failure) {
      setMessages([welcome, ...previous]);
      setDraft(content);

      setError(
        failure.name === 'AbortError'
          ? 'The request timed out. Your message is ready to resend.'
          : failure.message
      );
    } finally {
      clearTimeout(timeout);
      locked.current = false;
      request.current = null;
      setBusy(false);
    }
  }

  return (
    <div className="engix-chat">
      {open && (
        <section
          className="engix-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="engix-chat-title"
          onKeyDown={event => {
            if (event.key === 'Escape') close();
          }}
        >
          <header className="engix-chat-header">
            <div className="engix-chat-avatar">
              <Bot size={25} aria-hidden="true" />
            </div>

            <div className="engix-chat-heading">
              <h2 id="engix-chat-title">Engix Assistant</h2>
              <p>AI help for your next project</p>
            </div>

            <button
              type="button"
              className="engix-chat-icon"
              onClick={reset}
              disabled={busy}
              aria-label="Start a new conversation"
            >
              <RotateCcw size={18} />
            </button>

            <button
              type="button"
              className="engix-chat-icon"
              onClick={close}
              aria-label="Close chat"
            >
              <X size={22} />
            </button>
          </header>

          <div
            className="engix-chat-messages"
            role="log"
            aria-live="polite"
            aria-relevant="additions text"
            aria-label="Conversation"
            aria-busy={busy}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`engix-chat-message engix-chat-${message.role}`}
              >
                <span className="engix-chat-label">
                  {message.role === 'user' ? 'You' : 'Engix AI'}
                </span>

                <p>{message.content}</p>
              </div>
            ))}

            {busy && (
              <p className="engix-chat-thinking" role="status">
                <LoaderCircle
                  size={16}
                  className="engix-chat-spin"
                  aria-hidden="true"
                />
                Preparing your answer…
              </p>
            )}

            <div ref={bottom} />
          </div>

          {messages.length === 1 && !busy && (
            <div className="engix-chat-suggestions">
              {suggestions.map(text => (
                <button
                  type="button"
                  key={text}
                  onClick={() => send(text)}
                >
                  {text}
                </button>
              ))}
            </div>
          )}

          {error && (
            <p className="engix-chat-error" role="alert">
              {error}
            </p>
          )}

          <form
            className="engix-chat-form"
            onSubmit={event => {
              event.preventDefault();
              send();
            }}
          >
            <label
              htmlFor="engix-chat-input"
              className="engix-chat-sr"
            >
              Your message
            </label>

            <textarea
              id="engix-chat-input"
              ref={input}
              value={draft}
              onChange={event => setDraft(event.target.value)}
              placeholder="Tell us what you need…"
              rows={2}
              maxLength={1500}
              disabled={busy}
              onKeyDown={event => {
                if (
                  event.key === 'Enter' &&
                  !event.shiftKey &&
                  !event.nativeEvent.isComposing
                ) {
                  event.preventDefault();
                  send();
                }
              }}
            />

            <button
              type="submit"
              disabled={busy || !draft.trim()}
              aria-label="Send message"
            >
              <Send size={19} />
            </button>
          </form>

          <footer className="engix-chat-footer">
            <p>
              AI can make mistakes. Messages are sent to OpenAI;
              avoid sensitive details.
            </p>

            <Link to="/contact" onClick={close}>
              Talk to the Engix team ↗
            </Link>
          </footer>
        </section>
      )}

      <button
        type="button"
        ref={launcher}
        className="engix-chat-launcher"
        aria-expanded={open}
        aria-label={
          open ? 'Close Engix chat' : 'Open Engix AI chat'
        }
        onClick={() => {
          if (open) close();
          else setOpen(true);
        }}
      >
        {open ? (
          <X size={23} aria-hidden="true" />
        ) : (
          <MessageCircle size={24} aria-hidden="true" />
        )}

        <span>{open ? 'Close' : 'Ask Engix AI'}</span>
      </button>
    </div>
  );
}