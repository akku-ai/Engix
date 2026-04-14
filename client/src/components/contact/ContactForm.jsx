import { useState } from 'react';
import api from '../../api/axios';

const initialState = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await api.post('/leads', form);
      setStatus({
        type: 'success',
        message: res.data.message || 'Your inquiry has been sent successfully.'
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error?.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="engix-form-head">
        <span className="engix-form-kicker">Start a conversation</span>
        <h2>Send us your project brief</h2>
        <p>
          Share your idea, scope, or business requirement and our team will get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="engix-contact-form">
        <div className="engix-form-grid">
          <div className="engix-field">
            <label>Your name</label>
            <input
              name="name"
              placeholder="Akash Gupta"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="engix-field">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="engix-form-grid">
          <div className="engix-field">
            <label>Company name</label>
            <input
              name="company"
              placeholder="Your Company"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div className="engix-field">
            <label>Service needed</label>
            <input
              name="service"
              placeholder="Web development, app, software..."
              value={form.service}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="engix-field">
          <label>Project details</label>
          <textarea
            name="message"
            placeholder="Tell us about your project, goals, audience, features, timeline, and anything else important."
            rows="7"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="engix-submit-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Send inquiry'}
        </button>

        {status.message && (
          <p className={`engix-status ${status.type}`}>
            {status.message}
          </p>
        )}
      </form>

      <style>{`
        .engix-form-head {
          margin-bottom: 28px;
        }

        .engix-form-kicker {
          display: inline-block;
          margin-bottom: 10px;
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .engix-form-head h2 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 1.85rem;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .engix-form-head p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
          font-size: 0.98rem;
        }

        .engix-contact-form {
          display: grid;
          gap: 18px;
        }

        .engix-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .engix-field {
          display: grid;
          gap: 8px;
        }

        .engix-field label {
          color: #334155;
          font-size: 0.92rem;
          font-weight: 600;
        }

        .engix-field input,
        .engix-field textarea {
          width: 100%;
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: #f8fafc;
          color: #0f172a;
          border-radius: 18px;
          padding: 15px 16px;
          outline: none;
          font-size: 0.97rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          resize: vertical;
        }

        .engix-field input::placeholder,
        .engix-field textarea::placeholder {
          color: #94a3b8;
        }

        .engix-field input:focus,
        .engix-field textarea:focus {
          border-color: #94a3b8;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(148, 163, 184, 0.12);
        }

        .engix-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border: none;
          border-radius: 999px;
          background: #0f172a;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .engix-submit-btn:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }

        .engix-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .engix-status {
          margin: 4px 0 0;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .engix-status.success {
          color: #0f766e;
        }

        .engix-status.error {
          color: #b91c1c;
        }

        @media (max-width: 640px) {
          .engix-form-grid {
            grid-template-columns: 1fr;
          }

          .engix-form-head h2 {
            font-size: 1.55rem;
          }
        }
      `}</style>
    </>
  );
}