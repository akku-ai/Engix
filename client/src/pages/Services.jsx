import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  Globe2,
  LayoutDashboard,
  Mail,
  Megaphone,
  Palette,
  PenTool,
  Phone,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Target,
  Workflow
} from 'lucide-react';

import usePageTitle from '../hooks/usePageTitle';
import '../styles/engix-services.css';

const IMAGES = {
  hero: [
    'services-team.jpg',
    'photo-1552664730-d307ca884978'
  ],
  planning: [
    'project-planning.jpg',
    'photo-1542744173-8e7e53415bb0'
  ],
  technology: [
    'technology-foundations.jpg',
    'photo-1518770660439-4636190af475'
  ],
  marketing: [
    'marketing-analytics.jpg',
    'photo-1551288049-bebda4e38f71'
  ],
  delivery: [
    'delivery-collaboration.jpg',
    'photo-1517245386807-bb43f82c33c4'
  ]
};

function ServicePhoto({
  name,
  alt = '',
  priority = false,
  className = ''
}) {
  const [attempt, setAttempt] = useState(0);
  const [file, photo] = IMAGES[name];

  if (attempt > 1) {
    return (
      <div
        className={`es-image-fallback ${className}`}
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      >
        <Globe2 size={48} aria-hidden="true" />
      </div>
    );
  }

  const src =
    attempt === 0
      ? `${import.meta.env.BASE_URL}images/services/${file}`
      : `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1600&q=85`;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width="1600"
      height="1067"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setAttempt(value => value + 1)}
    />
  );
}

const TECHNOLOGY = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    text:
      'Applications tailored to your business rules, users and operational workflows.',
    points: [
      'Business applications and internal tools',
      'Customer portals and dashboards',
      'Workflow automation',
      'Existing software improvements'
    ]
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Applications',
    text:
      'Connected application experiences with clear user journeys and maintainable foundations.',
    points: [
      'Responsive web applications',
      'Mobile application development',
      'Booking and service workflows',
      'Authentication and user roles'
    ]
  },
  {
    icon: Globe2,
    title: 'Websites & Ecommerce',
    text:
      'Professional websites that explain your offer and make customer actions straightforward.',
    points: [
      'Company and service websites',
      'Ecommerce storefronts',
      'Campaign landing pages',
      'Website performance improvements'
    ]
  },
  {
    icon: Palette,
    title: 'UI/UX & Interface Design',
    text:
      'Design that turns complex requirements into interfaces people can understand and use.',
    points: [
      'User research and journey mapping',
      'Wireframes and interactive prototypes',
      'Interface and design systems',
      'Accessibility considerations'
    ]
  },
  {
    icon: BrainCircuit,
    title: 'AI & Intelligent Automation',
    text:
      'Practical AI integrations shaped around your information, workflows and review requirements.',
    points: [
      'AI assistants and integrations',
      'Document and data workflows',
      'Process automation',
      'Human review and exception handling'
    ]
  },
  {
    icon: ServerCog,
    title: 'Backend & API Engineering',
    text:
      'Server-side systems that connect applications, business data and third-party services.',
    points: [
      'APIs and application architecture',
      'Authentication and permissions',
      'Payment and business integrations',
      'Validation and error handling'
    ]
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    text:
      'Deployment foundations and release workflows planned around how your application operates.',
    points: [
      'Cloud and server deployment',
      'CI/CD and release planning',
      'Environment configuration',
      'Monitoring and maintenance scope'
    ]
  },
  {
    icon: Database,
    title: 'Business Systems & Data',
    text:
      'Connected records, reporting and administration tools for everyday business operations.',
    points: [
      'CRM and ERP workflows',
      'Database design and integration',
      'Administration dashboards',
      'Operational reporting'
    ]
  }
];

const MARKETING = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    text:
      'Improve how search engines and visitors discover, understand and navigate your website.',
    points: [
      'Technical and on-page SEO',
      'Keyword and competitor research',
      'Content and internal linking',
      'Local search optimization'
    ]
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    text:
      'Campaign planning and management aligned with your audience, offer and agreed budget.',
    points: [
      'Google and Meta campaigns',
      'Audience and keyword planning',
      'Creative and landing page reviews',
      'Tracking and campaign optimization'
    ]
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    text:
      'A coherent brand presence supported by useful content and planned communication.',
    points: [
      'Channel and content planning',
      'Publishing calendars',
      'Campaign creative coordination',
      'Engagement and reporting'
    ]
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    text:
      'Content that explains your expertise, answers relevant questions and supports customer decisions.',
    points: [
      'Website and landing page copy',
      'Articles and topic planning',
      'Service and campaign messaging',
      'Content review and refreshes'
    ]
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    text:
      'Relevant email communication designed around the audience and its relationship with your business.',
    points: [
      'Campaign planning and copy',
      'Audience segmentation',
      'Email layouts and workflows',
      'Engagement measurement'
    ]
  },
  {
    icon: Palette,
    title: 'Branding & Creative Design',
    text:
      'Consistent visual communication across your website, campaigns and marketing materials.',
    points: [
      'Brand identity and guidelines',
      'Social and advertising creatives',
      'Business presentation design',
      'Campaign visual consistency'
    ]
  },
  {
    icon: LayoutDashboard,
    title: 'Analytics & Reporting',
    text:
      'Measurement that helps connect digital activity with the actions your business needs to understand.',
    points: [
      'Measurement and event planning',
      'Analytics and Search Console review',
      'Campaign performance reporting',
      'Enquiry and conversion analysis'
    ]
  },
  {
    icon: Workflow,
    title: 'Conversion & Landing Pages',
    text:
      'Improve the journey between discovering your business and taking a meaningful next step.',
    points: [
      'Landing page structure',
      'Forms and enquiry journeys',
      'Messaging and usability reviews',
      'Testing recommendations'
    ]
  }
];

const PLANS = [
  {
    name: 'Starter',
    price: 350,
    text:
      'Focused SEO support for businesses establishing their search presence.',
    keywords: 10,
    pages: 5,
    articles: 1,
    competitors: 2,
    local: false,
    advanced: false,
    review: 'Monthly report'
  },
  {
    name: 'Growth',
    price: 600,
    text:
      'Broader optimization and content support for expanding search visibility.',
    keywords: 20,
    pages: 10,
    articles: 2,
    competitors: 3,
    local: true,
    advanced: false,
    review: 'Monthly review call',
    recommended: true
  },
  {
    name: 'Scale',
    price: 900,
    text:
      'Deeper SEO coverage for larger websites and more competitive opportunities.',
    keywords: 35,
    pages: 15,
    articles: 3,
    competitors: 4,
    local: true,
    advanced: true,
    review: 'Monthly review call'
  },
  {
    name: 'Premium',
    price: 1200,
    text:
      'Extended scope for broader website, content and search requirements.',
    keywords: 50,
    pages: 20,
    articles: 4,
    competitors: 5,
    local: true,
    advanced: true,
    review: 'Fortnightly review call'
  }
];

const COMPARISON = [
  ['Tracked target keywords', p => `Up to ${p.keywords}`],
  ['Priority pages in agreed scope', p => `Up to ${p.pages}`],
  ['Content drafts per month', p => p.articles],
  ['Competitors reviewed', p => p.competitors],
  ['Initial technical SEO audit', () => 'Included'],
  ['On-page optimization', () => 'Included'],
  ['Search Console and analytics review', () => 'Included'],
  ['Monthly performance report', () => 'Included'],
  [
    'Eligible Google Business Profile review',
    p => p.local ? 'Included' : 'Not included'
  ],
  [
    'Structured data and internal linking review',
    p => p.advanced ? 'Included' : 'Not included'
  ],
  ['Progress reviews', p => p.review]
];

const PROCESS = [
  {
    icon: Search,
    title: 'Understand',
    text:
      'Review your objectives, users, existing systems and current digital activity.'
  },
  {
    icon: Target,
    title: 'Define',
    text:
      'Agree on priorities, scope, responsibilities and practical delivery stages.'
  },
  {
    icon: Code2,
    title: 'Deliver & Review',
    text:
      'Develop or prepare the agreed work, with checks and feedback at planned points.'
  },
  {
    icon: Rocket,
    title: 'Launch & Improve',
    text:
      'Launch, hand over the agreed information and plan support or next steps.'
  }
];

const SUPPORT = [
  {
    icon: CloudCog,
    title: 'Deployment & Operations',
    text:
      'Release planning, environment configuration and operational checks appropriate to your application.'
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Reliability',
    text:
      'Agreed updates, issue investigation and maintenance priorities for existing systems.'
  },
  {
    icon: Workflow,
    title: 'Continued Improvement',
    text:
      'A practical plan for refining workflows, improving campaigns or extending functionality as needs change.'
  }
];

const INDUSTRIES = [
  [
    'Growing Businesses',
    'Company websites, enquiry management and internal tools that support the next stage of operations.'
  ],
  [
    'Retail & Ecommerce',
    'Storefront experiences, product information, order workflows and customer communication.'
  ],
  [
    'Professional Services',
    'Service websites, appointment workflows, client portals and useful business content.'
  ],
  [
    'Real Estate',
    'Property information, enquiry journeys, lead follow-up and team dashboards.'
  ],
  [
    'Education & Training',
    'Registration, course administration, learning portals and audience communication.'
  ],
  [
    'Operations & Logistics',
    'Task tracking, approvals, operational reporting and connected business records.'
  ]
];

const FAQS = [
  [
    'What do the starting prices cover?',
    'The four packages describe monthly SEO services. Final pricing depends on your website, market, implementation requirements and agreed scope. A written proposal confirms deliverables and billing terms before work begins.'
  ],
  [
    'Are software and AI projects included in these packages?',
    'Software development, AI integrations, mobile applications, business systems and cloud projects are quoted separately after reviewing your requirements.'
  ],
  [
    'Is advertising spend included?',
    'Advertising spend, paid tools, hosting, domains and third-party fees are separate unless specifically included in your proposal. Applicable taxes are confirmed in the quote.'
  ],
  [
    'How are SEO results measured?',
    'We review search visibility, relevant traffic and agreed conversions or enquiries. Results depend on factors including competition and website condition; specific rankings or revenue are not guaranteed.'
  ],
  [
    'Can you work with our existing website or application?',
    'Yes. We can review your current setup and identify whether optimization, integration, maintenance or a larger rebuild is the appropriate next step.'
  ],
  [
    'Can the scope be customized?',
    'Yes. We discuss priorities around your website size, locations, audience, content needs and existing systems. Changes to deliverables and fees are confirmed in the proposal.'
  ],
  [
    'Do you provide ongoing support?',
    'Maintenance, marketing management and continued development can be scoped around your requirements. The proposal defines responsibilities, communication, response arrangements and fees.'
  ]
];

function contactLink(service, plan) {
  const params = new URLSearchParams({ service });

  if (plan) {
    params.set('plan', plan.name);
    params.set('startingPrice', String(plan.price));
  }

  return `/contact?${params.toString()}`;
}

function Checklist({ items }) {
  return (
    <ul className="es-checklist">
      {items.map(item => (
        <li key={item}>
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Heading({ id, label, title, children }) {
  return (
    <div className="es-heading">
      <span className="es-eyebrow">{label}</span>
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Cards({
  items,
  detailed = false,
  className = ''
}) {
  return (
    <div className={`es-card-grid ${className}`}>
      {items.map(({ icon: Icon, title, text, points }) => (
        <article className="es-card" key={title}>
          <span className="es-icon">
            <Icon
              size={26}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </span>

          <h3>{title}</h3>
          <p>{text}</p>

          {detailed && <Checklist items={points} />}
        </article>
      ))}
    </div>
  );
}

export default function Services() {
  usePageTitle('Services & Pricing');

  return (
    <div className="engix-services-page">
      {/* FULL BACKGROUND HERO */}
      <section
        className="es-hero"
        aria-labelledby="es-title"
      >
        <ServicePhoto
          name="hero"
          priority
          className="es-hero-background"
        />

        <div className="es-shell es-hero-content">
         

          <span className="es-eyebrow">
            ENGIX TECH PRIVATE LIMITED
          </span>

          <h1 id="es-title">
            IT Expertise.
            <br />
            Digital Marketing.
            <br />
            Built Around Your Business.
          </h1>

          <p>
            Software development, websites, AI, cloud and digital
            marketing services connected by clear business
            objectives and a practical delivery approach.
          </p>

          <div className="es-actions">
            <Link
              className="es-button es-yellow"
              to="/contact"
            >
              Discuss your requirements
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>

            <a
              className="es-button es-outline"
              href="#es-pricing"
            >
              View SEO packages
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        className="es-section"
        aria-labelledby="es-intro-title"
      >
        <div className="es-shell es-split">
          <div>
            <span className="es-eyebrow">
              SERVICES THAT WORK TOGETHER
            </span>

            <h2 id="es-intro-title">
              From Business Requirements to Practical Digital
              Solutions
            </h2>

            <p>
              Engix Tech Private Limited helps organizations build
              useful systems, strengthen their online presence and
              coordinate digital marketing around their audience.
            </p>

            <p>
              Whether you need a focused project or ongoing support,
              we begin with your current situation, the work
              required and the responsibilities needed to deliver it.
            </p>
          </div>

          <div className="es-intro-panel">
            <h3>Start with the outcome you need</h3>

            <Checklist
              items={[
                'A clearer website and customer journey',
                'Software aligned with your business workflows',
                'Connected systems and practical automation',
                'Marketing activity with useful measurement'
              ]}
            />

            <p>
              Scope, deliverables and review arrangements are
              confirmed around the engagement.
            </p>
          </div>
        </div>
      </section>

      {/* IT SERVICES */}
      <section
        className="es-section es-soft"
        aria-labelledby="es-technology-title"
      >
        <div className="es-shell">
          <Heading
            id="es-technology-title"
            label="IT & DEVELOPMENT SERVICES"
            title="Engineering for the Way Your Business Works"
          >
            Design, development and infrastructure capabilities
            for customer-facing experiences and internal operations.
          </Heading>

          <Cards items={TECHNOLOGY} detailed />
        </div>
      </section>

      {/* DIGITAL MARKETING */}
      <section
        className="es-section es-green"
        aria-labelledby="es-marketing-title"
      >
        <div className="es-shell">
          <Heading
            id="es-marketing-title"
            label="DIGITAL MARKETING SERVICES"
            title="Connect Visibility, Communication and Customer Action"
          >
            Coordinate your website, search presence, campaigns and
            content around a consistent message and agreed marketing
            objectives.
          </Heading>

          <Cards items={MARKETING} detailed />
        </div>
      </section>

      {/* DISCOVERY */}
      <section
        className="es-section"
        aria-labelledby="es-planning-title"
      >
        <div className="es-shell es-split">
          <figure className="es-photo">
            <ServicePhoto
              name="planning"
              alt="Stock photograph of professionals planning work around an office table"
            />

            <figcaption>
              Business context before delivery decisions.
            </figcaption>
          </figure>

          <div>
            <span className="es-eyebrow">
              DISCOVERY & PLANNING
            </span>

            <h2 id="es-planning-title">
              Define the Right Work Before Delivery Begins
            </h2>

            <p>
              A clear scope helps everyone understand what is being
              delivered and why. We discuss your stakeholders,
              existing systems, audience and priorities before
              shaping a delivery plan.
            </p>

            <p>
              For technical work, this includes workflows,
              integrations, user roles and deployment needs.
              For marketing, it includes positioning, channel
              selection, content priorities and measurement.
            </p>

            <Checklist
              items={[
                'Agreed objectives and deliverables',
                'Dependencies and access requirements identified',
                'Responsibilities and review points documented',
                'Changes discussed against the agreed scope'
              ]}
            />
          </div>
        </div>
      </section>

      {/* TECHNICAL FOUNDATIONS */}
      <section
        className="es-section es-soft"
        aria-labelledby="es-engineering-title"
      >
        <div className="es-shell es-split">
          <div>
            <span className="es-eyebrow">
              TECHNICAL FOUNDATIONS
            </span>

            <h2 id="es-engineering-title">
              Build for Operation, Maintenance and Future Change
            </h2>

            <p>
              Reliable software depends on how its parts work
              together. We consider application structure, data
              flows and operational needs alongside the features
              people see.
            </p>

            <p>
              Technology decisions reflect your requirements and
              the resources available to manage the system.
              Testing, documentation and handover are planned
              according to the agreed work.
            </p>

            <Checklist
              items={[
                'Maintainable application architecture',
                'Permissions, validation and integration checks',
                'Performance and accessibility considerations',
                'Release planning and useful handover information'
              ]}
            />
          </div>

          <figure className="es-photo">
            <ServicePhoto
              name="technology"
              alt="Stock photograph of electronic components on a circuit board"
            />

            <figcaption>
              Connected foundations for useful technology.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* MARKETING MEASUREMENT */}
      <section
        className="es-section"
        aria-labelledby="es-measurement-title"
      >
        <div className="es-shell es-split">
          <figure className="es-photo">
            <ServicePhoto
              name="marketing"
              alt="Stock photograph of a computer screen displaying analytics charts"
            />

            <figcaption>
              Clear measurement supports informed decisions.
            </figcaption>
          </figure>

          <div>
            <span className="es-eyebrow">
              MARKETING STRATEGY & MEASUREMENT
            </span>

            <h2 id="es-measurement-title">
              Understand What Your Digital Activity Is Contributing
            </h2>

            <p>
              Marketing should make your offer easier to discover
              and understand. We connect research, content,
              creative work and measurement around the audience
              you want to reach.
            </p>

            <p>
              Reports focus on the metrics agreed for your
              engagement, such as search visibility, relevant
              visits, campaign engagement and enquiries.
              Reviews help identify what to refine next.
            </p>

            <Checklist
              items={[
                'Audience, offer and channel alignment',
                'Consistent website and campaign messaging',
                'Conversion tracking where appropriate',
                'Reporting and improvement priorities'
              ]}
            />
          </div>
        </div>
      </section>

      {/* SEO PRICING */}
      <section
        id="es-pricing"
        className="es-section es-pricing"
        aria-labelledby="es-pricing-title"
      >
        <div className="es-shell">
          <Heading
            id="es-pricing-title"
            label="MONTHLY SEO PACKAGES"
            title="A Defined Starting Point for Your SEO Engagement"
          >
            Starting prices in USD. We review your website and
            objectives before confirming the package scope and
            implementation responsibilities.
          </Heading>

          <div className="es-pricing-grid">
            {PLANS.map(plan => (
              <article
                key={plan.name}
                className={`es-plan ${
                  plan.recommended ? 'es-featured' : ''
                }`}
                aria-labelledby={
                  `es-plan-${plan.name.toLowerCase()}`
                }
              >
                <span className="es-plan-tag">
                  {plan.recommended
                    ? 'RECOMMENDED'
                    : 'MONTHLY SEO'}
                </span>

                <h3
                  id={`es-plan-${plan.name.toLowerCase()}`}
                >
                  {plan.name}
                </h3>

                <p>{plan.text}</p>

                <div className="es-price">
                  <span>Starting at</span>

                  <div>
                    <strong>
                      ${plan.price.toLocaleString('en-US')}
                    </strong>

                    <span> / month</span>
                  </div>

                  <span>USD</span>
                </div>

                <Checklist
                  items={[
                    `Up to ${plan.keywords} tracked keywords`,
                    `Up to ${plan.pages} priority pages`,
                    `${plan.articles} content ${
                      plan.articles === 1 ? 'draft' : 'drafts'
                    } per month`,
                    `Review of ${plan.competitors} competitors`,
                    'Initial technical SEO audit',
                    'On-page optimization',
                    'Monthly performance report',
                    plan.local
                      ? 'Eligible business profile review'
                      : 'Search Console and analytics review',
                    plan.advanced
                      ? 'Structured data and linking review'
                      : 'Content and keyword planning',
                    plan.review
                  ]}
                />

                <Link
                  className="es-button"
                  to={contactLink('SEO', plan)}
                >
                  Enquire about {plan.name}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="es-note">
            <strong>Clear scope before we begin.</strong>

            <p>
              These prices cover SEO services. Software, AI,
              mobile, cloud and other marketing services are
              quoted separately. Advertising spend, paid tools,
              hosting, third-party charges and applicable taxes
              are separate unless included in the proposal.
            </p>
          </div>

          <details className="es-details es-comparison">
            <summary>
              Compare SEO package inclusions
            </summary>

            <p className="es-table-help">
              On smaller screens, scroll across the table to
              compare all packages.
            </p>

            <div
              className="es-table-scroll"
              role="region"
              aria-label="SEO package comparison"
              tabIndex={0}
            >
              <table>
                <caption>Monthly SEO package scope</caption>

                <thead>
                  <tr>
                    <th scope="col">Inclusions</th>

                    {PLANS.map(plan => (
                      <th scope="col" key={plan.name}>
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {COMPARISON.map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>

                      {PLANS.map(plan => (
                        <td key={plan.name}>
                          {value(plan)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="es-table-help">
              Business profile work applies to eligible businesses
              and requires the necessary access.
            </p>
          </details>
        </div>
      </section>

      {/* BUSINESS APPLICATIONS */}
      <section
        className="es-section"
        aria-labelledby="es-industries-title"
      >
        <div className="es-shell">
          <Heading
            id="es-industries-title"
            label="BUSINESS APPLICATIONS"
            title="Different Sectors. Requirements That Shape the Solution."
          >
            These examples illustrate the workflows and digital
            needs we can discuss with your business.
          </Heading>

          <div className="es-industry-grid">
            {INDUSTRIES.map(([title, text]) => (
              <article className="es-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY PROCESS */}
      <section
        className="es-section es-green"
        aria-labelledby="es-process-title"
      >
        <div className="es-shell">
          <Heading
            id="es-process-title"
            label="HOW WE DELIVER"
            title="Clear Stages. Shared Priorities. Practical Reviews."
          >
            We organize work around the engagement, with planned
            opportunities to check progress and clarify decisions.
          </Heading>

          <Cards items={PROCESS} />
        </div>
      </section>

      {/* SUPPORT */}
      <section
        className="es-section"
        aria-labelledby="es-support-title"
      >
        <div className="es-shell">
          <div className="es-split">
            <div>
              <span className="es-eyebrow">
                SUPPORT & CONTINUED COLLABORATION
              </span>

              <h2 id="es-support-title">
                Plan What Happens After the Initial Delivery
              </h2>

              <p>
                Launch is one stage of an engagement. We discuss
                the access, documentation, reporting and support
                your team needs to manage the next stage.
              </p>

              <p>
                For domestic and international collaboration,
                communication channels, review arrangements and
                responsibilities are agreed around the scope.
                Ongoing work can include maintenance, campaign
                management or further development.
              </p>

              <Checklist
                items={[
                  'Defined handover and ownership responsibilities',
                  'Documented decisions and next-step priorities',
                  'Support arrangements agreed in the proposal'
                ]}
              />
            </div>

            <figure className="es-photo">
              <ServicePhoto
                name="delivery"
                alt="Stock photograph of a group collaborating during a business meeting"
              />

              <figcaption>
                Organized collaboration from planning to handover.
              </figcaption>
            </figure>
          </div>

          <Cards
            items={SUPPORT}
            className="es-three-grid es-followup"
          />
        </div>
      </section>

      {/* FAQS */}
      <section
        className="es-section es-soft"
        aria-labelledby="es-faq-title"
      >
        <div className="es-shell es-faq-shell">
          <Heading
            id="es-faq-title"
            label="COMMON QUESTIONS"
            title="Before Your Engagement Begins"
          >
            Useful information about scope, packages and working
            with Engix.
          </Heading>

          <div className="es-faq-list">
            {FAQS.map(([question, answer]) => (
              <details className="es-details" key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="es-section es-contact"
        aria-labelledby="es-contact-title"
      >
        <div className="es-shell es-contact-grid">
          <div>
            <span className="es-eyebrow">
              CONTACT ENGIX
            </span>

            <h2 id="es-contact-title">
              Let’s Define the Right Services for Your Business
            </h2>

            <p>
              Tell us about your requirements, existing systems
              and priorities. We will discuss the proposed scope,
              the services involved and the next steps.
            </p>

            <Link className="es-button" to="/contact">
              Discuss your project
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="es-contact-details">
            <h3>Connect with Engix</h3>

            <a href="mailto:hello@engix.world">
              <Mail size={22} aria-hidden="true" />

              <span>
                Email
                <strong>hello@engix.world</strong>
              </span>
            </a>

            <a href="tel:+917355985134">
              <Phone size={22} aria-hidden="true" />

              <span>
                Phone
                <strong>+91 7355985134</strong>
              </span>
            </a>

            <p>
              Engix Tech Private Limited — IT services,
              custom development and digital marketing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}