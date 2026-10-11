import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  FileText,
  Globe2,
  Layers,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  Palette,
  Phone,
  Search,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react';

/* -------------------------------------------------------
   Photos

   Optional local files:
   public/images/home/team-collaboration.jpg
   public/images/home/project-planning.jpg
   public/images/home/digital-workspace.jpg
   public/images/home/growth-workshop.jpg

   Local image -> online image -> branded placeholder.
------------------------------------------------------- */

const photos = {
  team: {
    local: 'team-collaboration.jpg',
    id: 'photo-1522071820081-009f0129c71c',
    alt: 'Stock photograph of professionals collaborating around laptops',
  },

  planning: {
    local: 'project-planning.jpg',
    id: 'photo-1552664730-d307ca884978',
    alt: 'Stock photograph of a professional team discussing project plans',
  },

  workspace: {
    local: 'digital-workspace.jpg',
    id: 'photo-1516321318423-f06f85e504b3',
    alt: 'Stock photograph of professionals reviewing digital work',
  },

  growth: {
    local: 'growth-workshop.jpg',
    id: 'photo-1553877522-43269d4ea984',
    alt: 'Stock photograph of a team working on business strategy',
  },
};

function remotePhoto(id, width) {
  return (
    `https://images.unsplash.com/${id}` +
    `?auto=format&fit=crop&w=${width}&q=85`
  );
}

function Photo({
  name,
  eager = false,
  className = '',
  position = 'center',
}) {
  const [stage, setStage] = useState(0);
  const photo = photos[name];

  if (!photo) {
    return null;
  }

  const localSrc =
    `${import.meta.env.BASE_URL}images/home/${photo.local}`;

  if (stage >= 2) {
    return (
      <div
        className={`ex-photo ex-photo-fallback ${className}`}
        role="img"
        aria-label="Engix branded illustration"
      >
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="800" height="600" fill="#e9e6ff" />

          <circle
            cx="730"
            cy="70"
            r="210"
            fill="#dff5df"
          />

          <circle
            cx="60"
            cy="560"
            r="190"
            fill="#fff14f"
          />

          <rect
            x="130"
            y="140"
            width="540"
            height="320"
            rx="24"
            fill="#ffffff"
          />

          <rect
            x="165"
            y="185"
            width="220"
            height="18"
            rx="9"
            fill="#111318"
          />

          <rect
            x="165"
            y="230"
            width="400"
            height="12"
            rx="6"
            fill="#dedfe2"
          />

          <rect
            x="165"
            y="260"
            width="330"
            height="12"
            rx="6"
            fill="#dedfe2"
          />

          <rect
            x="165"
            y="320"
            width="135"
            height="80"
            rx="14"
            fill="#dff5df"
          />

          <rect
            x="325"
            y="320"
            width="135"
            height="80"
            rx="14"
            fill="#fff14f"
          />

          <rect
            x="485"
            y="320"
            width="135"
            height="80"
            rx="14"
            fill="#f4dfd2"
          />
        </svg>

        <div className="ex-fallback-label">
          <span>ENGIX</span>
          <strong>Ideas. Technology. Growth.</strong>
        </div>
      </div>
    );
  }

  return (
    <div className={`ex-photo ${className}`}>
      <img
        key={`${name}-${stage}`}
        src={
          stage === 0
            ? localSrc
            : remotePhoto(photo.id, 1400)
        }
        srcSet={
          stage === 1
            ? [
                `${remotePhoto(photo.id, 640)} 640w`,
                `${remotePhoto(photo.id, 1000)} 1000w`,
                `${remotePhoto(photo.id, 1600)} 1600w`,
              ].join(', ')
            : undefined
        }
        sizes="(max-width: 820px) 100vw, 50vw"
        alt={photo.alt}
        width="1400"
        height="1050"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        style={{ objectPosition: position }}
        onError={() => {
          setStage((current) => Math.min(current + 1, 2));
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------
   Shared components
------------------------------------------------------- */

function Button({
  to = '/contact',
  children,
  variant = 'dark',
}) {
  return (
    <Link
      to={to}
      className={`ex-button ex-button-${variant}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={20} aria-hidden="true" />
    </Link>
  );
}

function TextLink({ to, children }) {
  return (
    <Link to={to} className="ex-text-link">
      {children}
      <ArrowRight size={19} aria-hidden="true" />
    </Link>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  tone = 'white',
  children,
}) {
  return (
    <section
      id={id}
      className={`ex-section ex-background-${tone}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="ex-container">
        <header className="ex-section-heading">
          <span className="ex-eyebrow">{eyebrow}</span>

          <h2 id={`${id}-title`}>{title}</h2>

          {description && <p>{description}</p>}
        </header>

        {children}
      </div>
    </section>
  );
}

function Checklist({ items }) {
  return (
    <ul className="ex-checklist">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={20} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ServiceCards({ items }) {
  return (
    <div className="ex-service-grid">
      {items.map(
        ({ icon: Icon, title, description }, index) => (
          <article className="ex-service-card" key={title}>
            <div className="ex-service-top">
              <span className="ex-card-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div
                className={`ex-icon-box ex-tone-${index % 4}`}
              >
                <Icon size={27} aria-hidden="true" />
              </div>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        )
      )}
    </div>
  );
}

/* -------------------------------------------------------
   Hero
------------------------------------------------------- */

export function HeroSection() {
  return (
    <section
      className="ex-hero"
      aria-labelledby="ex-home-title"
    >
      <div className="ex-container ex-hero-grid">
        <div className="ex-hero-copy">
          <span className="ex-eyebrow">
            SOFTWARE · AI · DIGITAL MARKETING
          </span>

          <h1 id="ex-home-title">
            Build smarter.
            <br />
            <span className="ex-highlight">Grow further.</span>
          </h1>

          <p className="ex-hero-lead">
            Turn your ideas into digital products.
            Turn your online presence into new opportunities.
          </p>

          <p className="ex-hero-description">
            Engix Tech Private Limited brings software engineering,
            practical AI and digital marketing together to help
            businesses launch, modernize and grow.
          </p>

          <div className="ex-button-row">
            <Button>Discuss your project</Button>

            <Button to="/services" variant="outline">
              Explore our services
            </Button>
          </div>

          <div className="ex-hero-points">
            <span>
              <CheckCircle2 size={18} aria-hidden="true" />
              Business-first approach
            </span>

            <span>
              <CheckCircle2 size={18} aria-hidden="true" />
              Connected digital expertise
            </span>
          </div>
        </div>

        <div className="ex-hero-visual">
          <Photo name="team" eager />

          <div className="ex-hero-photo-label">
            <span>STRATEGY + DESIGN + EXECUTION</span>
            <strong>
              Better ideas start with
              <br />
              better collaboration.
            </strong>
          </div>

          <div className="ex-hero-note">
            <span className="ex-status-dot" />

            <div>
              <strong>One connected approach</strong>
              <span>Technology, experience and growth.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   Value strip
------------------------------------------------------- */

const values = [
  {
    icon: Code2,
    title: 'Product engineering',
    text: 'Plan, design and build useful digital products.',
  },
  {
    icon: BrainCircuit,
    title: 'Practical AI',
    text: 'Connect intelligent tools with everyday workflows.',
  },
  {
    icon: TrendingUp,
    title: 'Digital marketing',
    text: 'Bring search, campaigns and content together.',
  },
  {
    icon: Globe2,
    title: 'Connected delivery',
    text: 'Clear communication across teams and locations.',
  },
];

export function ValueSection() {
  return (
    <section
      className="ex-value-section"
      aria-label="Engix capabilities"
    >
      <div className="ex-container ex-value-grid">
        {values.map(({ icon: Icon, title, text }, index) => (
          <article className="ex-value-item" key={title}>
            <div className={`ex-icon-box ex-tone-${index}`}>
              <Icon size={25} aria-hidden="true" />
            </div>

            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   About
------------------------------------------------------- */

export function AboutSection() {
  return (
    <section
      id="about-engix"
      className="ex-section ex-background-white"
      aria-labelledby="about-engix-title"
    >
      <div className="ex-container ex-split">
        <div className="ex-photo-stack">
          <Photo name="planning" />

          <div className="ex-photo-caption">
            <span className="ex-caption-icon">
              <Users size={25} aria-hidden="true" />
            </span>

            <div>
              <strong>Business goals guide the work.</strong>
              <p>Shared priorities. Clear decisions. Practical delivery.</p>
            </div>
          </div>
        </div>

        <div className="ex-copy">
          <span className="ex-eyebrow">ABOUT ENGIX</span>

          <h2 id="about-engix-title">
            Your business deserves
            <br />
            more than disconnected solutions.
          </h2>

          <p>
            A website, an application and a marketing campaign
            should contribute to the same business goals.
            We help connect those pieces into a clearer digital
            experience for your customers and your team.
          </p>

          <p>
            Whether you are launching a new product, replacing
            manual processes or strengthening your online presence,
            our work starts with understanding what needs to change
            and why it matters.
          </p>

          <Checklist
            items={[
              'Product strategy grounded in real requirements',
              'Design and development shaped around users',
              'Marketing connected to your audience and objectives',
              'Technology foundations that can keep evolving',
            ]}
          />

          <TextLink to="/about">Learn more about Engix</TextLink>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   Technology services
------------------------------------------------------- */

const technologyServices = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'SaaS products, business applications and internal tools designed around the way your organization works.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Intelligent Automation',
    description:
      'AI assistants, conversational experiences and intelligent workflows connected with your existing systems.',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Applications',
    description:
      'Responsive websites, customer platforms and mobile applications with clear, dependable user experiences.',
  },
  {
    icon: Palette,
    title: 'Product Strategy & UI/UX',
    description:
      'Discovery, product scope, user journeys, interface design and prototypes that bring clarity before development.',
  },
  {
    icon: ServerCog,
    title: 'Backend & API Engineering',
    description:
      'Database design, authentication, APIs and integrations that keep information moving between applications.',
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description:
      'Deployment workflows, infrastructure, environment management and monitoring for ongoing operations.',
  },
  {
    icon: LayoutDashboard,
    title: 'Enterprise Applications',
    description:
      'Custom CRM tools, administration panels, reporting dashboards and operational platforms for business teams.',
  },
  {
    icon: Workflow,
    title: 'Workflow Integrations',
    description:
      'Connected tools, automated handoffs and digital workflows that reduce repetitive manual processes.',
  },
];

export function TechnologyServices() {
  return (
    <Section
      id="technology-services"
      eyebrow="TECHNOLOGY SERVICES"
      title="The right foundation for your next stage."
      description="From the first product decision to deployment and continued development, we help you build technology around your business priorities."
      tone="soft"
    >
      <ServiceCards items={technologyServices} />

      <div className="ex-section-bottom">
        <p>
          Need help improving an existing application?
          We can start by reviewing what you already have.
        </p>

        <Button to="/services" variant="outline">
          Explore technology services
        </Button>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------
   Digital marketing
------------------------------------------------------- */

const marketingServices = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description:
      'Technical SEO, on-page optimization, local search and ecommerce SEO to strengthen discoverability.',
  },
  {
    icon: MousePointerClick,
    title: 'Paid Advertising & PPC',
    description:
      'Google Ads, Meta and LinkedIn campaigns planned around relevant audiences, budgets and business goals.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description:
      'Channel strategy, content calendars, creative production and community management for a consistent presence.',
  },
  {
    icon: FileText,
    title: 'Content & Brand Strategy',
    description:
      'Website copy, articles, landing pages and brand messaging that make your value easier to understand.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'Audience segmentation, email journeys and campaign content that support relevant customer communication.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description:
      'Campaign planning, audience research and conversion journeys that connect interest with clear next steps.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Conversion',
    description:
      'GA4, event tracking, reporting and landing page improvements to support better marketing decisions.',
  },
  {
    icon: Sparkles,
    title: 'Reputation & AI Visibility',
    description:
      'Reputation strategies, digital PR, AEO, GEO and app store optimization supported by clear content and technical foundations.',
  },
];

export function DigitalMarketingServices() {
  return (
    <Section
      id="digital-marketing"
      eyebrow="DIGITAL MARKETING"
      title="Help the right people discover your business."
      description="A strong digital presence combines visibility, relevance and a clear customer journey. We connect search, content, advertising and measurement into one practical approach."
      tone="yellow"
    >
      <ServiceCards items={marketingServices} />

      <div className="ex-marketing-banner">
        <div>
          <h3>Build the experience. Support the growth.</h3>

          <p>
            Connect your website and landing pages with the campaigns,
            content and tracking that help you understand what happens next.
          </p>
        </div>

        <Button>Discuss your marketing goals</Button>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------
   Applied AI
------------------------------------------------------- */

const aiUseCases = [
  {
    icon: MessageSquareText,
    title: 'AI Assistants',
    text: 'Conversational interfaces that help users find information and complete defined tasks.',
  },
  {
    icon: FileText,
    title: 'Information Workflows',
    text: 'Document processing, summarization and structured information handling.',
  },
  {
    icon: Workflow,
    title: 'Connected Automation',
    text: 'AI-enabled steps within your existing applications and business processes.',
  },
];

export function AISection() {
  return (
    <section
      id="applied-ai"
      className="ex-section ex-background-white"
      aria-labelledby="applied-ai-title"
    >
      <div className="ex-container ex-split">
        <div className="ex-copy">
          <span className="ex-eyebrow">
            APPLIED AI & AUTOMATION
          </span>

          <h2 id="applied-ai-title">
            Make AI useful to the way you work.
          </h2>

          <p>
            AI creates value when it fits a real use case.
            We help identify where intelligent tools can improve
            access to information, simplify repetitive steps or
            support better digital experiences.
          </p>

          <p>
            The approach depends on your data, systems and workflow.
            We consider integrations, testing and appropriate human
            oversight as part of the solution.
          </p>

          <TextLink to="/contact">Discuss an AI use case</TextLink>
        </div>

        <div className="ex-ai-list">
          {aiUseCases.map(({ icon: Icon, title, text }, index) => (
            <article className="ex-ai-card" key={title}>
              <div className={`ex-icon-box ex-tone-${index}`}>
                <Icon size={26} aria-hidden="true" />
              </div>

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   Portfolio
------------------------------------------------------- */

const projectCategories = [
  'Corporate and digital platforms',
  'AI conversational products',
  'AI interview experiences',
  'Service booking applications',
];

export function PortfolioSection() {
  return (
    <Section
      id="selected-work"
      eyebrow="PRODUCTS & PLATFORMS"
      title="Real requirements deserve thoughtful engineering."
      description="Our work spans digital platforms, AI products and business applications. Explore the problems, experiences and engineering behind the products."
      tone="green"
    >
      <div className="ex-portfolio-grid">
        <div className="ex-portfolio-image">
          <Photo name="workspace" />

          <span className="ex-image-disclosure">
            Illustrative stock photograph
          </span>
        </div>

        <div className="ex-portfolio-copy">
          <span className="ex-small-label">WHAT WE BUILD</span>

          <h3>
            Digital experiences shaped around
            real business workflows.
          </h3>

          <p>
            A useful product brings together clear requirements,
            intuitive interactions and a technical foundation that
            supports how people actually use it.
          </p>

          <ul className="ex-project-list">
            {projectCategories.map((item, index) => (
              <li key={item}>
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <strong>{item}</strong>

                <ArrowUpRight size={19} aria-hidden="true" />
              </li>
            ))}
          </ul>

          <Button to="/portfolio">Explore our work</Button>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------
   Why Engix
------------------------------------------------------- */

const reasons = [
  {
    icon: Target,
    title: 'Business-first thinking',
    text: 'We clarify the problem, the users and the intended outcome before recommending a solution.',
  },
  {
    icon: MessageSquareText,
    title: 'Clear communication',
    text: 'Requirements, decisions, dependencies and progress stay visible throughout the engagement.',
  },
  {
    icon: Layers,
    title: 'Connected expertise',
    text: 'Product, design, engineering and marketing can work toward a shared set of priorities.',
  },
  {
    icon: ShieldCheck,
    title: 'Long-term quality',
    text: 'Maintainability, security, performance and future changes are considered during development.',
  },
];

export function WhyEngixSection() {
  return (
    <Section
      id="why-engix"
      eyebrow="WHY ENGIX"
      title="A digital partner who sees the bigger picture."
      description="The quality of the collaboration matters as much as the quality of the deliverable. We focus on useful solutions, clear ownership and practical decisions."
    >
      <div className="ex-reason-grid">
        {reasons.map(({ icon: Icon, title, text }, index) => (
          <article className="ex-reason-card" key={title}>
            <div className={`ex-icon-box ex-tone-${index}`}>
              <Icon size={26} aria-hidden="true" />
            </div>

            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------
   Collaboration / workplace photography
------------------------------------------------------- */

export function CollaborationSection() {
  return (
    <Section
      id="collaboration"
      eyebrow="HOW WE COLLABORATE"
      title="Good work happens when everyone has clarity."
      description="From the first conversation to the next product release, shared goals and visible decisions help teams move forward together."
      tone="soft"
    >
      <div className="ex-collaboration-grid">
        <div className="ex-collaboration-large">
          <Photo name="team" />

          <div className="ex-collaboration-overlay">
            <span>IDEAS BECOME STRONGER TOGETHER</span>
            <h3>Shared context. Better decisions.</h3>
          </div>
        </div>

        <div className="ex-collaboration-side">
          <Photo name="growth" />

          <div className="ex-collaboration-copy">
            <h3>From conversation to a clear plan.</h3>

            <p>
              We bring product requirements, user needs and business
              priorities into the same discussion so the work has
              direction from the beginning.
            </p>

            <Checklist
              items={[
                'Requirements and priorities documented',
                'Regular progress reviews',
                'Clear feedback and decision ownership',
              ]}
            />
          </div>
        </div>
      </div>

      <p className="ex-stock-note">
        Workplace photographs are illustrative stock imagery.
      </p>
    </Section>
  );
}

/* -------------------------------------------------------
   Industries
------------------------------------------------------- */

const industries = [
  [
    'Technology & SaaS',
    'Product development, customer portals, integrations and digital demand generation.',
  ],
  [
    'Service Businesses',
    'Booking journeys, workforce workflows, local visibility and customer communication.',
  ],
  [
    'Ecommerce & Consumer Brands',
    'Shopping experiences, ecommerce SEO, campaign landing pages and conversion improvements.',
  ],
  [
    'Professional Services',
    'Client portals, brand content, lead generation and connected digital experiences.',
  ],
  [
    'Enterprise & Operations',
    'Internal applications, reporting dashboards and business process automation.',
  ],
  [
    'Startups & Growing Teams',
    'Product discovery, MVP development, modernization and a practical growth foundation.',
  ],
];

export function IndustriesSection() {
  return (
    <Section
      id="industries"
      eyebrow="WHO WE HELP"
      title="Different businesses. Solutions built around their needs."
      description="We shape the approach around your workflows, audience and goals, rather than forcing every business into the same product or campaign."
    >
      <div className="ex-industry-grid">
        {industries.map(([title, text], index) => (
          <article className="ex-industry-card" key={title}>
            <span className={`ex-number-badge ex-tone-${index % 4}`}>
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

/* -------------------------------------------------------
   Process
------------------------------------------------------- */

const process = [
  [
    'Discover',
    'Understand your business, users, current systems and intended outcomes.',
  ],
  [
    'Define',
    'Agree the scope, priorities, responsibilities and practical delivery plan.',
  ],
  [
    'Design',
    'Shape product journeys, interfaces, content and campaign direction.',
  ],
  [
    'Build',
    'Develop the solution and prepare the required assets in clear stages.',
  ],
  [
    'Validate',
    'Review functionality, experience, integrations and measurement.',
  ],
  [
    'Launch & Improve',
    'Deploy, learn from feedback and plan the next improvements.',
  ],
];

export function ProcessSection() {
  return (
    <Section
      id="our-process"
      eyebrow="OUR DELIVERY PROCESS"
      title="Clear stages. Visible progress. Room to evolve."
      description="Our process provides structure while allowing decisions to improve as the product, audience and requirements become better understood."
      tone="yellow"
    >
      <ol className="ex-process-grid">
        {process.map(([title, text], index) => (
          <li className="ex-process-card" key={title}>
            <span className="ex-process-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* -------------------------------------------------------
   Engineering and ongoing collaboration
------------------------------------------------------- */

export function EngineeringSection() {
  return (
    <section
      id="engineering"
      className="ex-section ex-background-white"
      aria-labelledby="engineering-title"
    >
      <div className="ex-container ex-split">
        <div className="ex-copy">
          <span className="ex-eyebrow">
            ENGINEERING & CONTINUITY
          </span>

          <h2 id="engineering-title">
            Build for launch.
            <br />
            Think beyond it.
          </h2>

          <p>
            Software becomes part of how your business operates.
            A strong foundation should help your team understand,
            maintain and improve the system as requirements change.
          </p>

          <Checklist
            items={[
              'Maintainable application structure',
              'Security-conscious authentication and APIs',
              'Performance, testing and error handling',
              'Deployment and monitoring readiness',
              'Integrations that support connected workflows',
            ]}
          />

          <div className="ex-delivery-note">
            <Globe2 size={25} aria-hidden="true" />

            <p>
              Built in India, with structured collaboration for
              domestic and international businesses.
            </p>
          </div>
        </div>

        <div className="ex-photo-stack">
          <Photo name="planning" />

          <div className="ex-photo-caption ex-caption-green">
            <span className="ex-caption-icon">
              <Code2 size={25} aria-hidden="true" />
            </span>

            <div>
              <strong>Launch is a milestone.</strong>
              <p>Keep learning, improving and building what comes next.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   Engagement models
------------------------------------------------------- */

const engagements = [
  {
    icon: Sparkles,
    title: 'Discovery & MVP',
    description:
      'For founders and teams turning an initial idea into a defined, buildable product.',
    points: [
      'Requirements and feature priorities',
      'User journeys and prototypes',
      'A practical first-release plan',
    ],
    cta: 'Discuss your product idea',
  },
  {
    icon: Layers,
    title: 'End-to-End Delivery',
    description:
      'For businesses seeking coordinated support across design, engineering and launch.',
    points: [
      'Connected product and design work',
      'Frontend, backend and integrations',
      'Testing and deployment planning',
    ],
    cta: 'Plan your project',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Improvement',
    description:
      'For organizations improving an existing platform or strengthening digital marketing.',
    points: [
      'Platform enhancements and maintenance',
      'Campaign and content improvements',
      'Reporting and next-step planning',
    ],
    cta: 'Discuss ongoing support',
  },
];

export function EngagementSection() {
  return (
    <Section
      id="engagement-options"
      eyebrow="WAYS TO WORK TOGETHER"
      title="Start where your business needs support."
      description="The right scope depends on what you already have, what needs to change and the level of support you need."
      tone="green"
    >
      <div className="ex-engagement-grid">
        {engagements.map(
          ({ icon: Icon, title, description, points, cta }, index) => (
            <article className="ex-engagement-card" key={title}>
              <div className={`ex-icon-box ex-tone-${index}`}>
                <Icon size={27} aria-hidden="true" />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>

              <Checklist items={points} />

              <TextLink to="/contact">{cta}</TextLink>
            </article>
          )
        )}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------
   FAQs
------------------------------------------------------- */

const faqs = [
  [
    'What services does Engix provide?',
    'Engix provides custom software development, AI and automation, web and mobile applications, product design, backend engineering, cloud and DevOps, and digital marketing services including SEO, paid advertising, social media, content, email and analytics.',
  ],
  [
    'Can you handle both website development and digital marketing?',
    'Yes. We can plan website or application work alongside content, search visibility, campaign landing pages and measurement. The scope is defined around your business priorities.',
  ],
  [
    'Can you improve an existing website or application?',
    'We can review the current code, user experience, performance requirements and integrations, then define a practical improvement or modernization plan.',
  ],
  [
    'Can you integrate AI with our existing systems?',
    'We can explore AI integrations based on the use case, available data, existing architecture and oversight requirements. The proposed approach is assessed before implementation.',
  ],
  [
    'How do projects begin?',
    'Share your goals, current challenges and any existing requirements through our contact page. The initial discussion helps clarify scope, priorities and the next steps.',
  ],
  [
    'How long does a project take?',
    'The timeline depends on scope, complexity, integrations, content readiness and review cycles. A delivery plan is agreed once the requirements are understood.',
  ],
  [
    'Do you work with international businesses?',
    'Engix works with domestic and international businesses using clear requirements, documented decisions and structured remote communication.',
  ],
  [
    'Do you guarantee SEO rankings or campaign results?',
    'No. Rankings, AI-search visibility and campaign outcomes depend on many factors. We focus on strategy, implementation, measurement and continued improvement.',
  ],
];

export function FAQSection() {
  return (
    <Section
      id="frequently-asked-questions"
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      title="A little clarity before we get started."
    >
      <div className="ex-faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>
              <span>{question}</span>
              <span className="ex-faq-symbol" aria-hidden="true">
                +
              </span>
            </summary>

            <p>{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------
   Contact CTA
------------------------------------------------------- */

export function ContactSection() {
  return (
    <section
      id="start-a-conversation"
      className="ex-section ex-contact-section"
      aria-labelledby="start-a-conversation-title"
    >
      <div className="ex-container ex-contact-grid">
        <div>
          <span className="ex-eyebrow">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2 id="start-a-conversation-title">
            Have an idea, a challenge
            <br />
            or a growth goal?
          </h2>

          <p>
            Tell us what you want to build, improve or promote.
            We’ll discuss your requirements and a practical way forward.
          </p>

          <div className="ex-button-row">
            <Button>Start a conversation</Button>

            <Button to="/services" variant="outline">
              Review our services
            </Button>
          </div>
        </div>

        <div className="ex-contact-card">
          <span className="ex-small-label">CONNECT WITH ENGIX</span>

          <h3>Let’s understand what comes next.</h3>

          <a href="mailto:hello@engix.world">
            <Mail size={22} aria-hidden="true" />

            <span>
              <small>Email us</small>
              <strong>hello@engix.world</strong>
            </span>
          </a>

          <a href="tel:+917355985134">
            <Phone size={22} aria-hidden="true" />

            <span>
              <small>Call us</small>
              <strong>+91 7355985134</strong>
            </span>
          </a>

          <p>
            Software engineering, AI and digital marketing,
            connected around your business.
          </p>
        </div>
      </div>
    </section>
  );
}