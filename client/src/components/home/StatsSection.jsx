import {
  Globe2,
  Code2,
  BrainCircuit,
  TrendingUp,
} from 'lucide-react';

const items = [
  [
    Globe2,
    'Connected collaboration',
    'Clear priorities and communication across locations.',
  ],
  [
    Code2,
    'End-to-end engineering',
    'Product strategy, design, development and deployment.',
  ],
  [
    BrainCircuit,
    'Practical AI',
    'Intelligent tools shaped around your business workflows.',
  ],
  [
    TrendingUp,
    'Digital growth',
    'Search, content, campaigns and conversion optimization.',
  ],
];

export default function StatsSection() {
  return (
    <section className="eh-trust" aria-label="Our approach">
      <div className="eh-shell eh-trust-grid">
        {items.map(([Icon, title, text]) => (
          <article key={title}>
            <Icon size={26} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}