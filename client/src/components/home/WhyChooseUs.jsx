import {
  Target,
  MessageSquareText,
  Scale,
  ShieldCheck,
} from 'lucide-react';

import { Section } from './HomeUI';

const items = [
  [
    Target,
    'Business-first thinking',
    'Understand the problem and the desired outcome before choosing the solution.',
  ],
  [
    MessageSquareText,
    'Clear communication',
    'Keep requirements, progress, decisions and responsibilities visible.',
  ],
  [
    Scale,
    'Practical execution',
    'Choose technology and marketing channels that fit your goals and resources.',
  ],
  [
    ShieldCheck,
    'Built to evolve',
    'Consider maintainability, security, performance and continued improvement.',
  ],
];

export default function WhyChooseUs() {
  return (
    <Section
      id="why-engix"
      eyebrow="WHY ENGIX"
      title="A partner who sees the bigger picture."
      description="We connect business priorities with practical execution, from the product you build to the way customers discover it."
    >
      <div className="eh-card-grid">
        {items.map(([Icon, title, text]) => (
          <article className="eh-card" key={title}>
            <Icon
              className="eh-reason-icon"
              size={28}
              aria-hidden="true"
            />

            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}