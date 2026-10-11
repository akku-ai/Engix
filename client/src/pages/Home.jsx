import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AIChatbot from '../components/AIChatbot';
import Reviews from '../components/Reviews';

import {
  Code2,
  BrainCircuit,
  Smartphone,
  Palette,
  ServerCog,
  CloudCog,
  LayoutDashboard,
  Workflow,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Wrench,
  Search,
  MousePointerClick,
  Megaphone,
  FileText,
  Mail,
  BarChart3,
  Globe2,
  Sparkles,
  Video,
  Target,
  Users,
  Layers,
  Building2,
  Briefcase,
  Factory,
  Rocket,
  Lightbulb,
  ListChecks,
  PenTool,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

import usePageTitle from '../hooks/usePageTitle';
import '../styles/engix-home.css';

const assetRoot = `${import.meta.env.BASE_URL}images/home/`;

const photos = {
  international: [
    'international-collaboration.jpg',
    'photo-1522071820081-009f0129c71c',
    'Professionals collaborating around laptops in a shared workspace',
  ],
  hero: [
    'hero.jpg',
    'photo-1563461660947-507ef49e9c47',
    'People collaborating with laptops at a shared table',
  ],
  marketing: [
    'marketing.jpg',
    'photo-1758691737124-05c5bffe46f0',
    'A diverse professional team collaborating around a laptop',
  ],
  collaboration: [
    'collaboration.jpg',
    'photo-1519389950473-47ba0277781c',
    'People working together around a table with laptops',
  ],
  development: [
    'development.jpg',
    'photo-1498050108023-c5249f4df085',
    'A coding workspace with a laptop displaying source code',
  ],
  seo: [
    'seo.jpg',
    'photo-1709281847802-9aef10b6d4bf',
    'A digital marketing workspace with a laptop and SEO lettering',
  ],
  review: [
    'engineering-work.jpg',
    'photo-1516321318423-f06f85e504b3',
    'People reviewing digital work together',
  ],
  strategy: [
    'marketing-team.jpg',
    'photo-1553877522-43269d4ea984',
    'A team discussing business strategy',
  ],
};

function Photo({ name, background = false, eager = false }) {
  const [stage, setStage] = useState(0);
  const [file, remote, alt] = photos[name];

  const className = `eg-photo ${
    background ? 'eg-background-photo' : ''
  }`;

  if (stage === 2) {
    return (
      <div
        className={`${className} eg-photo-fallback`}
        role="img"
        aria-label="Photograph unavailable"
      >
        <span>Photograph unavailable</span>
      </div>
    );
  }

  const src =
    stage === 0
      ? `${assetRoot}${file}`
      : `https://images.unsplash.com/${remote}?auto=format&fit=crop&w=1800&q=85`;

  return (
    <div className={className}>
      <img
        key={`${name}-${stage}`}
        src={src}
        alt={`Illustrative stock photograph: ${alt}`}
        width="1800"
        height="1200"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        onError={() =>
          setStage(current => Math.min(current + 1, 2))
        }
      />
    </div>
  );
}

function Button({
  children,
  to = '/contact',
  variant = 'dark',
}) {
  return (
    <Link
      to={to}
      className={`eg-button eg-button-${variant}`}
    >
      {children}
      <ArrowUpRight size={19} aria-hidden="true" />
    </Link>
  );
}

function Points({ items }) {
  return (
    <ul className="eg-points">
      {items.map(item => (
        <li key={item}>
          <CheckCircle2 size={19} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Heading({ id, eyebrow, title, text }) {
  return (
    <header className="eg-heading">
      <span className="eg-eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  text,
  tone = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`eg-section ${tone}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="eg-container">
        <Heading
          id={`${id}-title`}
          eyebrow={eyebrow}
          title={title}
          text={text}
        />
        {children}
      </div>
    </section>
  );
}

function IconBadge({ icon: Icon, index = 0 }) {
  return (
    <div className={`eg-icon eg-tone-${index % 4}`}>
      <Icon
        size={27}
        strokeWidth={1.7}
        aria-hidden="true"
      />
    </div>
  );
}

function Cards({ items }) {
  return (
    <div className="eg-card-grid">
      {items.map(([Icon, title, text], i) => (
        <article className="eg-card" key={title}>
          <IconBadge icon={Icon} index={i} />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function PhotoBanner({
  id,
  photo,
  eyebrow,
  title,
  text,
  children,
}) {
  return (
    <section
      id={id}
      className="eg-photo-banner"
      aria-labelledby={`${id}-title`}
    >
      <Photo name={photo} background />
      <div className="eg-photo-shade" />

      <div className="eg-container eg-banner-content">
        <span className="eg-eyebrow">{eyebrow}</span>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <div className="eg-contact-card">
      <h3>Connect with Engix</h3>

      <div className="eg-contact-row">
        <a href="mailto:hello@engix.world">
          <span>
            <small>Email</small>
            <strong>hello@engix.world</strong>
          </span>
        </a>
      </div>

      <div className="eg-contact-row">
        <a href="tel:+917355985134">
          <span>
            <small>Phone</small>
            <strong>+91 7355985134</strong>
          </span>
        </a>
      </div>

      <p>
        Engix Tech Private Limited — IT services,
        custom development and digital marketing.
      </p>
    </div>
  );
}

const technology = [
  [
    Code2,
    'Custom Software Development',
    'Custom business applications, internal tools and client portals developed around your requirements and workflows.',
  ],
  [
    BrainCircuit,
    'AI & Intelligent Automation',
    'Custom AI assistants, conversational interfaces and automation services integrated with your existing systems.',
  ],
  [
    Smartphone,
    'Web & Mobile Applications',
    'Customer websites, web platforms and mobile experiences designed for usability and performance.',
  ],
  [
    Palette,
    'UI/UX Design & Project Discovery',
    'Requirements analysis, user journeys, prototypes and interface design to establish a clear direction before development.',
  ],
  [
    ServerCog,
    'Backend & API Engineering',
    'APIs, databases, authentication and integrations that connect your applications and information.',
  ],
  [
    CloudCog,
    'Cloud & DevOps',
    'Deployment workflows, infrastructure, monitoring and environment management for ongoing operations.',
  ],
  [
    LayoutDashboard,
    'Enterprise Applications',
    'CRM tools, administration portals, dashboards and operational software tailored to your teams.',
  ],
  [
    Workflow,
    'Workflow Integrations',
    'Connected tools and automated handoffs that reduce repetitive manual steps.',
  ],
  [
    RefreshCw,
    'Legacy Modernization',
    'Review existing applications, reduce technical debt and plan phased upgrades that support business continuity.',
  ],
  [
    ShieldCheck,
    'Quality Assurance & Testing',
    'Functional, integration and regression testing aligned with your critical user journeys and release requirements.',
  ],
  [
    ShoppingCart,
    'Ecommerce Development',
    'Storefronts, product catalogues, checkout journeys and payment or inventory integrations around your operating model.',
  ],
  [
    Wrench,
    'Maintenance & Support',
    'Agreed maintenance, issue investigation and iterative enhancements for applications that need continued attention.',
  ],
];

const marketing = [
  [
    Search,
    'SEO & Organic Visibility',
    'Technical, on-page, local and ecommerce SEO to strengthen search discoverability.',
  ],
  [
    MousePointerClick,
    'Paid Ads & PPC',
    'Google Ads, Meta and LinkedIn campaigns aligned with your audience, goals and budget.',
  ],
  [
    Megaphone,
    'Social Media Marketing',
    'Channel strategy, content planning, creative production and community management.',
  ],
  [
    FileText,
    'Content & Brand Strategy',
    'Website copy, articles, landing pages and messaging that communicate your value clearly.',
  ],
  [
    Mail,
    'Email & Lead Generation',
    'Audience research, segmentation, email journeys and campaigns with clear next steps.',
  ],
  [
    BarChart3,
    'Analytics & Conversion',
    'GA4, event tracking, reporting and landing page improvements to inform decisions.',
  ],
  [
    Globe2,
    'Reputation & Digital PR',
    'Reputation monitoring, review strategies, outreach and public-facing brand communication.',
  ],
  [
    Sparkles,
    'AI Search & App Visibility',
    'AEO, GEO and app store optimization supported by useful content and technical foundations.',
  ],
  [
    Video,
    'Creative & Video Content',
    'Campaign concepts, social creatives, short-form video planning and visual content suited to each channel.',
  ],
  [
    ShoppingCart,
    'Ecommerce Marketing',
    'Product campaigns, shopping feeds, remarketing and customer journeys connected with your store experience.',
  ],
  [
    Target,
    'B2B Demand Generation',
    'Audience definition, LinkedIn content, campaign landing pages and lead nurturing for considered purchases.',
  ],
  [
    Workflow,
    'Marketing Automation',
    'Connect lead capture, CRM handoffs, audience segmentation and reporting into a more consistent process.',
  ],
];

const reasons = [
  [
    Target,
    'Business-Focused Consulting',
    'We examine your business needs, users and existing processes before recommending a technical or marketing approach.',
  ],
  [
    Users,
    'Transparent Project Communication',
    'Defined responsibilities, documented decisions and progress reviews help you stay informed throughout the engagement.',
  ],
  [
    Layers,
    'Integrated Service Delivery',
    'Coordinate consulting, design, development and digital marketing around a shared project scope and business priorities.',
  ],
  [
    ShieldCheck,
    'Maintainable Technical Foundations',
    'Consider testing, access control, performance and maintainability throughout application development.',
  ],
];

const steps = [
  [
    'Discover',
    'Understand your business, users, existing systems and desired outcomes.',
  ],
  [
    'Define',
    'Clarify scope, requirements, priorities and delivery responsibilities.',
  ],
  [
    'Design',
    'Shape user journeys, interfaces, content and campaign direction.',
  ],
  [
    'Build',
    'Develop in clear stages, sharing progress and reviewing decisions.',
  ],
  [
    'Validate',
    'Check functionality, experience, integrations and measurement.',
  ],
  [
    'Launch & Improve',
    'Deploy and plan the maintenance or enhancements agreed in the engagement.',
  ],
];

const industries = [
  [
    'Technology Companies',
    'Custom application development, customer portals, integrations and digital marketing support.',
  ],
  [
    'Service Businesses',
    'Booking journeys, operational tools, local search and customer communication.',
  ],
  [
    'Ecommerce & Consumer Brands',
    'Shopping experiences, ecommerce SEO and campaign conversion journeys.',
  ],
  [
    'Professional Services',
    'Client portals, brand content and lead generation workflows.',
  ],
  [
    'Enterprise & Operations',
    'Internal applications, dashboards and business process automation.',
  ],
  [
    'Startups & Growing Teams',
    'Website development, application planning, process automation and digital marketing for growing teams.',
  ],
];

const faqs = [
  [
    'Can you develop a custom application from scratch?',
    'Yes. We scope custom development around your business requirements, user journeys, integrations and implementation priorities.',
  ],
  [
    'Can AI be integrated into an existing application?',
    'We can assess the intended use case, available information and integration requirements, then discuss a practical implementation and evaluation approach.',
  ],
  [
    'How does an engagement begin?',
    'The first conversation covers your business challenge, existing systems and required services. We then clarify scope, dependencies and the proposed next steps.',
  ],
  [
    'What services does Engix provide?',
    'Engix provides software development, AI and automation, web and mobile applications, UI/UX, backend engineering, cloud and DevOps, and digital marketing including SEO, ads, social media, content, email and analytics.',
  ],
  [
    'Can you handle development and marketing together?',
    'Yes. Website and application work can be planned alongside search visibility, content, campaign landing pages and measurement.',
  ],
  [
    'Can you improve an existing website or application?',
    'We can review your code, experience, integrations and requirements, then define a practical improvement plan.',
  ],
  [
    'How do I get an estimate?',
    'Share your goals, required features or services, existing systems and desired timeline through our contact page. We will discuss the scope and next steps.',
  ],
  [
    'How long does a project take?',
    'Timelines depend on scope, complexity, integrations, content readiness and review cycles. A delivery plan is agreed after the requirements are understood.',
  ],
  [
    'Do you work with international businesses?',
    'Engix collaborates with domestic and international businesses through clear requirements, documented decisions and regular progress reviews.',
  ],
  [
    'Do you guarantee rankings or marketing results?',
    'No. Rankings, AI visibility and campaign outcomes depend on many factors. We focus on strategy, implementation, measurement and improvement.',
  ],
];

export default function Home() {
  usePageTitle('IT Services & Digital Marketing');

  useEffect(() => {
    const existing = document.querySelector(
      'meta[name="description"]'
    );

    const meta = existing || document.createElement('meta');
    const previous = existing?.getAttribute('content');

    if (!existing) {
      meta.name = 'description';
      document.head.appendChild(meta);
    }

    meta.content =
      'Engix Tech Private Limited provides custom software development, web and mobile development, AI integration, cloud services and digital marketing for businesses.';

    return () => {
      if (!existing) {
        meta.remove();
      } else if (previous === null) {
        meta.removeAttribute('content');
      } else {
        meta.setAttribute('content', previous);
      }
    };
  }, []);

  return (
    <div className="engix-photo-home">
      <section
        className="eg-hero"
        aria-labelledby="eg-home-title"
      >
        <Photo name="hero" background eager />
        <div className="eg-photo-shade" />

        <div className="eg-container eg-hero-content">
          <span className="eg-eyebrow">
            SOFTWARE ENGINEERING · AI · DIGITAL MARKETING
          </span>

          <h1 id="eg-home-title">
            Build Smarter.
            <br />
            <span>Scale with Confidence.</span>
          </h1>

          <p className="eg-hero-lead">
            Custom software, AI integration and digital marketing
            services built around your business goals.
          </p>

          <p className="eg-hero-text">
            Engix Tech Private Limited brings consulting, design
            and engineering together to address operational
            challenges, modernize business systems and strengthen
            your digital presence.
          </p>

          <div className="eg-actions">
            <Button variant="yellow">
              Discuss your project
            </Button>

            <Button to="/services" variant="glass">
              Explore our services
            </Button>
          </div>

          <div className="eg-hero-check">
            One technology partner. From planning to delivery
            and ongoing support.
          </div>
        </div>
      </section>

      <section
        className="eg-value-strip"
        aria-label="Our capabilities"
      >
        <div className="eg-container eg-value-grid">
          {[
            [
              Code2,
              'End-to-End Development',
              'From requirements and design to deployment.',
            ],
            [
              BrainCircuit,
              'AI & Automation',
              'Integration services for everyday workflows.',
            ],
            [
              TrendingUp,
              'Ongoing Improvement',
              'Development and marketing support as needs evolve.',
            ],
            [
              Globe2,
              'International Collaboration',
              'Clear coordination across locations and markets.',
            ],
          ].map(([Icon, title, text], i) => (
            <article key={title}>
              <IconBadge icon={Icon} index={i} />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about-engix"
        className="eg-section"
        aria-labelledby="about-engix-title"
      >
        <div className="eg-container eg-split">
          <div>
            <Photo name="collaboration" />

            <div className="eg-caption">
              <strong>Consultation & Collaboration</strong>
              <span>
                Aligning your requirements with a practical
                delivery plan.
              </span>
            </div>
          </div>

          <div className="eg-copy">
            <Heading
              id="about-engix-title"
              eyebrow="ABOUT ENGIX"
              title="Your Business Is Growing. Your Technology Should Keep Up."
            />

            <p>
              Disconnected tools, manual processes and outdated
              systems can slow down a growing business. Engix
              Tech Private Limited provides IT and digital
              marketing services to help you address these
              challenges with a clear plan.
            </p>

            <p>
              We begin with your workflows, users and business
              priorities. Whether you need a custom application,
              improvements to existing software or a coordinated
              marketing campaign, we define the scope and delivery
              approach around your requirements.
            </p>

            <Points
              items={[
                'Understand your business requirements and project priorities',
                'Connect tools, data and business workflows',
                'Build a clearer path from visibility to enquiry',
                'Improve your platform as requirements evolve',
              ]}
            />

            <div className="eg-actions">
              <Button to="/about" variant="outline">
                Learn about Engix
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="business-challenges"
        eyebrow="BUSINESS CHALLENGES WE ADDRESS"
        title="Practical Solutions for Everyday Operational Challenges"
        text="We help identify where technology or marketing can support your team, then define an achievable scope of work."
        tone="eg-soft"
      >
        <Cards
          items={[
            [
              Workflow,
              'Repetitive Manual Work',
              'Connect routine tasks and handoffs with workflows designed around the way your team operates.',
            ],
            [
              Layers,
              'Disconnected Systems',
              'Plan integrations that help applications and information work together across departments.',
            ],
            [
              Lightbulb,
              'An Idea That Needs Direction',
              'Clarify requirements, user journeys and implementation priorities before committing to development.',
            ],
            [
              RefreshCw,
              'Software That Needs Improvement',
              'Review architecture, usability, performance and maintainability to guide focused enhancements.',
            ],
          ]}
        />
      </Section>

      <PhotoBanner
        id="technology-intro"
        photo="development"
        eyebrow="SOFTWARE DEVELOPMENT & IT SERVICES"
        title="Custom Software and IT Solutions for Your Business"
        text="We design and develop applications around your requirements, from customer-facing websites and mobile apps to internal systems, integrations and cloud environments."
      >
        <div className="eg-banner-tags">
          <span>Custom software</span>
          <span>Web & mobile</span>
          <span>AI & automation</span>
          <span>Cloud & APIs</span>
        </div>
      </PhotoBanner>

      <Section
        id="technology-services"
        eyebrow="OUR IT SERVICES"
        title="Technology Services Built Around Your Business Goals"
        text="Choose support for a specific technical requirement or engage us across planning, design, development, integration and ongoing improvement."
        tone="eg-soft"
      >
        <Cards items={technology} />

        <div className="eg-actions">
          <Button to="/services" variant="outline">
            Explore all services
          </Button>
        </div>
      </Section>

      <PhotoBanner
        id="marketing-intro"
        photo="marketing"
        eyebrow="DIGITAL MARKETING"
        title="Digital Marketing Services to Strengthen Your Online Presence"
        text="We plan and manage search, paid media, social, content and analytics activities around your audience, business priorities and available budget."
      >
        <div className="eg-actions">
          <Button variant="yellow">
            Discuss your marketing goals
          </Button>
        </div>
      </PhotoBanner>

      <Section
        id="marketing-services"
        eyebrow="OUR DIGITAL MARKETING SERVICES"
        title="Integrated Marketing Across Search, Social and Paid Media"
        text="Build a consistent presence across channels with relevant messaging, clear customer journeys and reporting aligned with your goals."
        tone="eg-yellow-soft"
      >
        <Cards items={marketing} />
      </Section>

      <section
        id="search-growth"
        className="eg-section"
        aria-labelledby="search-growth-title"
      >
        <div className="eg-container eg-split">
          <div className="eg-copy">
            <Heading
              id="search-growth-title"
              eyebrow="SEARCH VISIBILITY & CONVERSION"
              title="Connect Website Performance with Your Marketing Strategy"
            />

            <p>
              We review website structure, content and customer
              journeys alongside campaign tracking. The aim is
              to make your business easier to discover and help
              you understand how visitors engage with your website.
            </p>

            <Points
              items={[
                'Search-friendly structure and relevant content',
                'Campaign landing pages with clear calls to action',
                'Event tracking and reporting aligned with your goals',
                'Continued improvements informed by available data',
              ]}
            />

            <div className="eg-actions">
              <Button variant="outline">
                Plan your digital growth
              </Button>
            </div>
          </div>

          <Photo name="seo" />
        </div>
      </section>

      <Section
        id="applied-ai"
        eyebrow="APPLIED AI & AUTOMATION"
        title="AI Integration and Business Process Automation"
        text="We provide custom implementation and integration services for selected AI use cases. Each engagement is scoped around your information, existing applications and operational requirements."
        tone="eg-green-soft"
      >
        <div className="eg-three-grid">
          {[
            [
              BrainCircuit,
              'Custom AI Assistant Integration',
              'Conversational interfaces that help people find information and complete defined tasks.',
            ],
            [
              FileText,
              'Document Processing Workflows',
              'Document workflows, summarization and structured information handling.',
            ],
            [
              Workflow,
              'Application & Workflow Automation',
              'AI-enabled steps integrated with your existing applications and processes.',
            ],
            [
              Layers,
              'AI Integration with Existing Systems',
              'Connect selected AI capabilities with your applications, approved information sources and business workflows.',
            ],
            [
              LayoutDashboard,
              'AI-Enabled Business Applications',
              'Develop client-specific interfaces and workflows with defined AI tasks, evaluation criteria and user controls.',
            ],
          ].map(([Icon, title, text], i) => (
            <article className="eg-card" key={title}>
              <IconBadge icon={Icon} index={i} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <p className="eg-section-note">
          AI solutions need use-case-specific testing,
          appropriate data handling and human oversight.
        </p>

        <div className="eg-actions">
          <Button variant="outline">
            Discuss an AI project
          </Button>
        </div>
      </Section>

      <section
        id="engineering-quality"
        className="eg-section"
        aria-labelledby="engineering-quality-title"
      >
        <div className="eg-container eg-split">
          <Photo name="review" />

          <div className="eg-copy">
            <Heading
              id="engineering-quality-title"
              eyebrow="DEVELOPMENT QUALITY & SUPPORT"
              title="Built for Today. Designed for Continued Improvement."
            />

            <p>
              Application development includes more than interface
              implementation. We consider the underlying
              architecture, integration requirements, permissions
              and release process alongside the user experience.
            </p>

            <Points
              items={[
                'Requirements and acceptance criteria before implementation',
                'Authentication and permissions suited to the application',
                'Testing around critical workflows and integration points',
                'Deployment, documentation and agreed maintenance planning',
              ]}
            />

            <div className="eg-actions">
              <Button variant="outline">
                Discuss your platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="marketing-strategy"
        className="eg-section eg-yellow-soft"
        aria-labelledby="marketing-strategy-title"
      >
        <div className="eg-container eg-split">
          <div className="eg-copy">
            <Heading
              id="marketing-strategy-title"
              eyebrow="MARKETING PLANNING & EXECUTION"
              title="A Coordinated Approach to Digital Marketing"
            />

            <p>
              Your audience may discover you through search,
              compare you on social media and return through
              an email. Each touchpoint should communicate a
              consistent message and offer a clear next step.
            </p>

            <Points
              items={[
                'Audit your website, audience and current channels',
                'Define positioning, content themes and campaign priorities',
                'Align creative, landing pages and lead capture',
                'Review enquiries and conversion signals to guide improvements',
              ]}
            />

            <div className="eg-actions">
              <Button variant="outline">
                Discuss a marketing plan
              </Button>
            </div>
          </div>

          <Photo name="strategy" />
        </div>
      </section>

      <Section
        id="business-solutions"
        eyebrow="CUSTOM DEVELOPMENT USE CASES"
        title="Applications Developed for Your Business Requirements"
        text="The following are examples of custom development services we can scope for your business. Each solution is designed for the client's requirements, rather than offered as an existing Engix product."
        tone="eg-soft"
      >
        <Cards
          items={[
            [
              Users,
              'Customer & Client Portals',
              'Give customers a clear place to access information, submit requests and follow progress, with access controls suited to your service.',
            ],
            [
              ListChecks,
              'Booking & Service Platforms',
              'Connect service information, availability, bookings and operational handoffs into a more organized experience.',
            ],
            [
              LayoutDashboard,
              'Business Dashboards',
              'Bring relevant operational information into understandable views that help teams review activity and identify next steps.',
            ],
            [
              Target,
              'Lead Capture & CRM Journeys',
              'Connect campaign enquiries with qualification, follow-up and reporting so teams can manage the customer journey consistently.',
            ],
          ]}
        />
      </Section>

      <Section
        id="why-engix"
        eyebrow="WHY ENGIX"
        title="A Technology Partner Focused on Your Business Priorities"
        text="Our approach combines business understanding, defined project responsibilities and coordinated execution across technology and marketing."
      >
        <Cards items={reasons} />
      </Section>

      <Section
        id="how-we-work"
        eyebrow="OUR PROCESS"
        title="A Clear Path from First Conversation to Delivery"
        text="We agree on scope and responsibilities, deliver work in planned stages and review progress with you as the engagement develops."
        tone="eg-soft"
      >
        <ul className="eg-process">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <IconBadge
                icon={
                  [
                    Lightbulb,
                    ListChecks,
                    PenTool,
                    Code2,
                    ShieldCheck,
                    Rocket,
                  ][i]
                }
                index={i}
              />

              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="industries"
        eyebrow="WHO WE HELP"
        title="Different Industries. Services Shaped Around Your Needs."
        text="We adapt the project scope to your workflows, customers and operating needs, whether you need a new application, improvements to an existing system or digital marketing support."
        tone="eg-green-soft"
      >
        <div className="eg-three-grid">
          {industries.map(([title, text], i) => (
            <article className="eg-industry" key={title}>
              <IconBadge
                icon={
                  [
                    Code2,
                    Wrench,
                    ShoppingCart,
                    Briefcase,
                    Factory,
                    Building2,
                  ][i]
                }
                index={i}
              />

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="international-delivery"
        eyebrow="DOMESTIC & INTERNATIONAL COLLABORATION"
        title="A Technology Partner That Works Beyond Borders"
        text="Engix collaborates with businesses across locations through structured remote working practices. Project scope, dependencies and communication arrangements are agreed around the engagement."
        tone="eg-soft"
      >
        <div className="eg-delivery-grid">
          <div className="eg-copy">
            <h3>Clear Coordination Across Locations</h3>

            <p>
              Shared priorities and documented decisions help
              keep development and marketing activities organized.
              We discuss how your team wants to work and establish
              practical review points for the project.
            </p>

            <Points
              items={[
                'Defined project scope, priorities and responsibilities',
                'Documented requirements and key decisions',
                'Agreed communication channels and progress reviews',
                'Delivery stages that make dependencies visible',
                'Continued collaboration based on the agreed scope',
              ]}
            />
          </div>

          <aside className="eg-delivery-panel">
            <Photo name="international" />

            <h3>Start with Your Requirements</h3>

            <p>
              Tell us about your existing systems, stakeholders
              and business objectives. We will discuss how the
              engagement can be coordinated around your needs.
            </p>

            <div className="eg-actions">
              <Button variant="outline">
                Work with Engix
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        id="engagement-options"
        eyebrow="WAYS TO WORK TOGETHER"
        title="Flexible Ways to Work with Engix"
        text="The scope can be shaped around your existing systems, requirements and level of ongoing support."
      >
        <div className="eg-three-grid">
          {[
            [
              'Consulting & Project Planning',
              'Assess your requirements, review existing systems and define an implementation plan.',
              [
                'Business requirements and project scope',
                'User journeys and prototypes',
                'Implementation priorities and milestones',
              ],
            ],
            [
              'Project Development & Delivery',
              'Coordinate design, engineering, validation and launch.',
              [
                'Website and application interface design',
                'Frontend, backend and integrations',
                'Testing and deployment planning',
              ],
            ],
            [
              'Ongoing Support & Marketing',
              'Improve an existing platform or strengthen your digital marketing.',
              [
                'Platform enhancements',
                'Content and campaign improvements',
                'Reporting and next-step planning',
              ],
            ],
          ].map(([title, text, items], i) => (
            <article className="eg-engagement" key={title}>
              <IconBadge
                icon={[Lightbulb, Layers, TrendingUp][i]}
                index={i}
              />

              <span className={`eg-step eg-tone-${i}`}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3>{title}</h3>
              <p>{text}</p>
              <Points items={items} />

              <div className="eg-actions">
                <Button variant="outline">
                  Discuss this approach
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Reviews />

      <Section
        id="home-faq"
        eyebrow="COMMON QUESTIONS"
        title="Frequently Asked Questions"
        tone="eg-soft"
      >
        <div className="eg-faq">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                <span>{question}</span>
                <span
                  className="eg-faq-symbol"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section
        id="start-a-project"
        className="eg-section eg-contact"
        aria-labelledby="start-a-project-title"
      >
        <div className="eg-container eg-contact-grid">
          <div className="eg-copy">
            <Heading
              id="start-a-project-title"
              eyebrow="CONTACT ENGIX"
              title="Have a Challenge? Let’s Plan the Right Solution."
            />

            <p>
              Share your requirements, existing systems and
              business priorities. We will discuss the services
              you need, the proposed scope and the next steps.
            </p>

            <div className="eg-actions">
              <Button>Discuss your project</Button>
            </div>
          </div>

          <ContactDetails />
        </div>
      </section>
      <AIChatbot />
    </div>
  );
}