import { Section } from './HomeUI';

export default function TestimonialsSection({
  testimonials = [],
}) {
  if (!testimonials.length) {
    return null;
  }

  return (
    <Section
      id="client-feedback"
      eyebrow="CLIENT FEEDBACK"
      title="In our clients’ words."
    >
      <div className="eh-industry-grid">
        {testimonials.map((item, index) => (
          <figure
            className="eh-card"
            key={item.id || `${item.name}-${index}`}
          >
            <blockquote>{item.quote}</blockquote>

            <figcaption>
              <strong>{item.name}</strong>

              {item.role && <span> · {item.role}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}