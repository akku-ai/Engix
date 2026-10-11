import { Mail, Phone } from 'lucide-react';
import { Action } from './HomeUI';

export default function CTASection() {
  return (
    <section
      id="start-a-project"
      className="eh-section eh-cta"
      aria-labelledby="start-a-project-title"
    >
      <div className="eh-shell eh-split">
        <div>
          <span className="eh-eyebrow">
            LET’S BUILD WHAT’S NEXT
          </span>

          <h2 id="start-a-project-title">
            Have a challenge?
            <br />
            Let’s move it forward.
          </h2>

          <p>
            Tell us what you want to build, improve or promote.
            We’ll discuss your goals and a practical way to get started.
          </p>
        </div>

        <div className="eh-cta-actions">
          <Action>Talk to Engix</Action>

          <a
            className="eh-contact-link"
            href="mailto:hello@engix.world"
          >
            <Mail size={22} aria-hidden="true" />
            hello@engix.world
          </a>

          <a
            className="eh-contact-link"
            href="tel:+917355985134"
          >
            <Phone size={22} aria-hidden="true" />
            +91 7355985134
          </a>
        </div>
      </div>
    </section>
  );
}