import {
  Code2,
  BrainCircuit,
  Smartphone,
  Palette,
  ServerCog,
  CloudCog,
  LayoutDashboard,
  Workflow,
} from 'lucide-react';

import { Action, Section } from './HomeUI';

const items = [
  {
    icon: Code2,
    title: 'Custom software development',
    description:
      'Business applications, SaaS products and internal tools built around your workflows.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & intelligent automation',
    description:
      'AI assistants, conversational products and intelligent workflows integrated with your systems.',
  },
  {
    icon: Smartphone,
    title: 'Web & mobile applications',
    description:
      'Responsive websites and applications designed for usability, performance and everyday use.',
  },
  {
    icon: Palette,
    title: 'Product strategy & UI/UX',
    description:
      'Discovery, user journeys, prototypes and design systems that bring clarity to complex products.',
  },
  {
    icon: ServerCog,
    title: 'Backend & API engineering',
    description:
      'APIs, databases, authentication and integrations that keep your products connected.',
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description:
      'Deployment, delivery pipelines, monitoring and infrastructure for dependable operations.',
  },
  {
    icon: LayoutDashboard,
    title: 'Enterprise systems',
    description:
      'CRM tools, administration portals and operational dashboards shaped around your teams.',
  },
  {
    icon: Workflow,
    title: 'Automation & integrations',
    description:
      'Connected tools and automated handoffs that reduce repetitive manual processes.',
  },
];

export default function ServicesPreview() {
  return (
    <Section
      id="technology-services"
      eyebrow="TECHNOLOGY SERVICES"
      title="Build the right digital foundation."
      description="From an initial product idea to a connected business platform, our capabilities support the complete development lifecycle."
      className="eh-tinted"
    >
      <div className="eh-card-grid">
        {items.map(({ icon: Icon, title, description }, index) => (
          <article className="eh-card" key={title}>
            <div className={`eh-card-icon eh-tone-${index % 4}`}>
              <Icon size={27} aria-hidden="true" />
            </div>

            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <div className="eh-section-action">
        <Action to="/services" secondary>
          Explore all services
        </Action>
      </div>
    </Section>
  );
}