import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`eh-section ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="eh-shell">
        <header className="eh-heading">
          <span className="eh-eyebrow">{eyebrow}</span>

          <h2 id={`${id}-title`}>{title}</h2>

          {description && <p>{description}</p>}
        </header>

        {children}
      </div>
    </section>
  );
}

export function Action({
  to = '/contact',
  children,
  secondary = false,
}) {
  return (
    <Link
      className={`eh-button ${secondary ? 'eh-button-secondary' : ''}`}
      to={to}
    >
      {children}
      <ArrowUpRight size={20} aria-hidden="true" />
    </Link>
  );
}

export function Points({ items }) {
  return (
    <ul className="eh-points">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={20} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function HomeImage({ name, alt, eager = false }) {
  const [failed, setFailed] = useState(false);

  const url = `${import.meta.env.BASE_URL}images/home/${name}.svg`;

  if (failed) {
    return (
      <div
        className="eh-image-fallback"
        role="img"
        aria-label={alt}
      >
        <span>ENGIX</span>
        <strong>Strategy. Design. Engineering.</strong>
      </div>
    );
  }

  return (
    <img
      src={url}
      alt={alt}
      width="960"
      height="760"
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}