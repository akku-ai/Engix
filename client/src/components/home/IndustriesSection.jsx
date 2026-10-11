import { Section } from './HomeUI';

const items = [
  [
    'Technology & SaaS',
    'Product development, customer portals, integrations and digital demand generation.',
  ],
  [
    'Service businesses',
    'Booking systems, workforce workflows, local visibility and customer journeys.',
  ],
  [
    'Enterprise & operations',
    'Internal tools, reporting dashboards and connected business processes.',
  ],
  [
    'Professional services',
    'Client portals, content, lead generation and consistent brand experiences.',
  ],
  [
    'Ecommerce & consumer brands',
    'Shopping experiences, ecommerce SEO, paid campaigns and conversion improvements.',
  ],
  [
    'Startups & growing businesses',
    'MVPs, modernization and a clear foundation for product and marketing growth.',
  ],
];

export default function IndustriesSection() {
  return (
    <Section
      id="industries"
      eyebrow="WHO WE HELP"
      title="Built for the way your business works."
      description="We shape solutions around your customers, workflows and goals, across industries and stages of growth."
      className="eh-tinted"
    >
      <div className="eh-industry-grid">
        {items.map(([title, text], index) => (
          <article key={title}>
            <span className="eh-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}