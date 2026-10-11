import {
  Search,
  MousePointerClick,
  Megaphone,
  FileText,
  Mail,
  BarChart3,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { Action, Section } from './HomeUI';

const items = [
  {
    icon: Search,
    title: 'SEO & organic visibility',
    description:
      'Technical, on-page, local and ecommerce SEO to make your business easier to discover.',
  },
  {
    icon: MousePointerClick,
    title: 'Paid ads & PPC',
    description:
      'Google Ads, Meta and LinkedIn campaigns shaped around your audience, budget and goals.',
  },
  {
    icon: Megaphone,
    title: 'Social media marketing',
    description:
      'Channel strategy, content planning, creative production and community management.',
  },
  {
    icon: FileText,
    title: 'Content & brand strategy',
    description:
      'Website copy, articles, landing pages and brand messaging that explain your value clearly.',
  },
  {
    icon: Mail,
    title: 'Email marketing & lead generation',
    description:
      'Audience segmentation, email journeys and lead generation campaigns with clear reporting.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & conversion optimization',
    description:
      'GA4, event tracking, campaign reporting and landing page improvements to inform decisions.',
  },
  {
    icon: ShieldCheck,
    title: 'Online reputation & digital PR',
    description:
      'Reputation monitoring, review strategies, outreach and digital PR to strengthen your presence.',
  },
  {
    icon: Sparkles,
    title: 'AI search & app visibility',
    description:
      'AEO, GEO and app store optimization through clear content, technical foundations and relevance.',
  },
];

export default function DigitalMarketingSection() {
  return (
    <Section
      id="digital-marketing"
      eyebrow="DIGITAL MARKETING SERVICES"
      title="Be discovered. Build trust. Create demand."
      description="Bring search, paid media, social, content and analytics together in a marketing approach built around your business goals."
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