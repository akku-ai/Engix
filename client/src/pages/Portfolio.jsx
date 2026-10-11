import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Globe2,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageSquareText,
  Palette,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Workflow
} from 'lucide-react';

import usePageTitle from '../hooks/usePageTitle';
import '../styles/engix-portfolio.css';

const IMAGES = {
  corporate: [
    'corporate-websites.jpg',
    'photo-1497366754035-f200968a6e72'
  ],
  ai: [
    'ai-conversations.jpg',
    'photo-1531746790731-6c087fecd65a'
  ],
  mobile: [
    'mobile-services.jpg',
    'photo-1551650975-87deedd944c3'
  ],
  technology: [
    'connected-technology.jpg',
    'photo-1677442136019-21780ecad995'
  ],
  reporting: [
    'marketing-reporting.jpg',
    'photo-1551288049-bebda4e38f71'
  ],
  collaboration: [
    'campaign-collaboration.jpg',
    'photo-1552664730-d307ca884978'
  ],
  global: [
    'international-markets.jpg',
    'photo-1521295121783-8a321d551ad2'
  ]
};

function PortfolioImage({ name, alt, className = '' }) {
  const [attempt, setAttempt] = useState(0);
  const [file, photo] = IMAGES[name];

  if (attempt > 1) {
    return (
      <div
        className={`ep-image-fallback ${className}`}
        role="img"
        aria-label={alt}
      >
        <Globe2 size={48} aria-hidden="true" />
      </div>
    );
  }

  const src =
    attempt === 0
      ? `${import.meta.env.BASE_URL}images/portfolio/${file}`
      : `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1600&q=85`;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width="1600"
      height="1067"
      loading="lazy"
      decoding="async"
      onError={() => setAttempt(value => value + 1)}
    />
  );
}

const PROJECTS = [
  {
    id: 'spinnovate',
    icon: Globe2,
    tone: 'lavender',
    category: 'Corporate Website Development',
    title: 'Spinnovate Digital Ecosystem',
    client: 'Spinnovate Limited',
    location: 'Durham, United Kingdom',
    status: 'Delivered',
    description:
      'A multi-brand website engagement supporting Spinnovate Limited and its technology and innovation ventures. The work brought distinct business identities into clear, responsive corporate web experiences for international audiences.',
    detail:
      'The engagement covered information architecture, interface design, responsive frontend development and deployment across Palebluedot, Spinnovatech and Allotrope.',
    scope: [
      'Corporate website structure and brand presentation',
      'Responsive interface design and frontend development',
      'Content organization and deployment'
    ],
    deliverables: [
      'Palebluedot',
      'Spinnovatech',
      'Allotrope'
    ],
    image: 'corporate',
    alt:
      'Representative stock photograph of a modern professional office'
  },
  {
    id: 'conversational-ai',
    icon: BrainCircuit,
    tone: 'yellow',
    category: 'AI Application Development',
    title: 'Conversational AI & Interview Workflows',
    client: 'Technology Client',
    location: 'Singapore',
    status: 'Delivered',
    description:
      'An AI application engagement for a Singapore-based client, combining conversational chatbot experiences with an AI interviewer system.',
    detail:
      'The work focused on structured digital conversations, application interfaces and connected interview workflows, with attention to clear interaction and accessible user journeys.',
    scope: [
      'Conversational interfaces and application engineering',
      'AI interviewer workflows',
      'API integration and user experience'
    ],
    deliverables: [
      'AI Chatbots',
      'AI Interviewer',
      'Conversational Workflows'
    ],
    image: 'ai',
    alt:
      'Representative stock photograph of a humanoid robot hand'
  },
  {
    id: 'mr-maintenance',
    icon: Smartphone,
    tone: 'green',
    category: 'Mobile Application & Business Operations',
    title: 'Mr Maintenance Service Platform',
    client: 'Alind Gupta',
    location: 'India',
    status: 'In Development',
    description:
      'A service booking platform being developed to connect customers, administrators and field technicians through an organized digital workflow.',
    detail:
      'The planned platform covers service discovery, scheduling, booking, technician assignment, completion verification, payments and customer feedback. The project remains in development.',
    scope: [
      'Customer application and service booking journeys',
      'Backend APIs, OTP authentication and administration',
      'Technician workflows and payment integration'
    ],
    deliverables: [
      'Customer Application',
      'Admin Operations',
      'Technician Workflow'
    ],
    image: 'mobile',
    alt:
      'Representative stock photograph of a mobile application interface'
  }
];

const MARKETING_WORK = [
  {
    icon: Search,
    title: 'SEO & Website Visibility',
    text:
      'Search research, technical website reviews and on-page improvements organized around relevant audiences and business services.',
    points: [
      'Keyword and competitor research',
      'Website structure and content priorities',
      'Search visibility and enquiry measurement'
    ]
  },
  {
    icon: Target,
    title: 'Paid Advertising & Campaigns',
    text:
      'Campaign direction that connects the offer, audience, creative message and landing page into a clearer customer journey.',
    points: [
      'Audience and campaign planning',
      'Advertising copy and creative coordination',
      'Conversion tracking and campaign reviews'
    ]
  },
  {
    icon: Megaphone,
    title: 'Social Media & Content',
    text:
      'Content and communication that explain the business consistently across its website, campaigns and social channels.',
    points: [
      'Content calendars and brand messaging',
      'Website, article and campaign content',
      'Social creative and engagement reviews'
    ]
  },
  {
    icon: LayoutDashboard,
    title: 'Email, Analytics & Conversion',
    text:
      'Email communication and digital measurement that help teams understand engagement and identify practical improvements.',
    points: [
      'Email copy, layouts and audience segments',
      'Analytics and reporting arrangements',
      'Landing page and enquiry journey reviews'
    ]
  }
];

const MARKETING_FEATURES = [
  {
    image: 'reporting',
    alt:
      'Representative stock photograph of an analytics dashboard',
    label: 'SEARCH & PERFORMANCE',
    title: 'A Clearer View of Digital Activity',
    text:
      'Measurement connects website and campaign activity with the actions that matter to the engagement. Reviews can cover visibility, relevant visits, engagement and enquiries, according to the agreed scope.'
  },
  {
    image: 'collaboration',
    alt:
      'Representative stock photograph of colleagues planning together',
    label: 'CONTENT & CAMPAIGN COORDINATION',
    title: 'One Message Across Digital Channels',
    text:
      'Website content, advertising and social communication work best when they explain the same offer clearly. We coordinate research, messaging and creative direction around the audience and business priorities.'
  },
  {
    image: 'technology',
    alt:
      'Representative technology illustration associated with artificial intelligence',
    label: 'TECHNOLOGY & MARKETING',
    title: 'Connect the Website with the Wider Journey',
    text:
      'Development and marketing decisions often meet at forms, landing pages, integrations and reporting. Our services bring these parts together so the technical experience supports the intended customer action.'
  }
];

const MARKETS = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Singapore'
];

const VALUES = [
  {
    icon: Target,
    title: 'Business context first',
    text:
      'Understand the organization, audience and problem before recommending the work required.'
  },
  {
    icon: Palette,
    title: 'Connected disciplines',
    text:
      'Keep design, engineering, content and marketing decisions aligned with the engagement.'
  },
  {
    icon: MessageSquareText,
    title: 'Clear collaboration',
    text:
      'Document scope, dependencies and decisions, with review points that keep priorities visible.'
  },
  {
    icon: ShieldCheck,
    title: 'Practical next steps',
    text:
      'Plan handover, reporting, maintenance or further improvements according to the agreed responsibilities.'
  }
];

const PROCESS = [
  {
    icon: Search,
    title: 'Understand',
    text:
      'Review the business context, existing systems, audience and objectives.'
  },
  {
    icon: Workflow,
    title: 'Define',
    text:
      'Agree on scope, responsibilities, dependencies and delivery priorities.'
  },
  {
    icon: Code2,
    title: 'Deliver & Review',
    text:
      'Build or prepare the work in stages, with appropriate checks and feedback.'
  },
  {
    icon: CheckCircle2,
    title: 'Handover & Improve',
    text:
      'Complete the agreed handover and discuss support or next-step improvements.'
  }
];

const CAPABILITIES = [
  'Corporate Websites',
  'Custom Software',
  'AI Integrations',
  'Mobile Applications',
  'Business Automation',
  'Backend APIs',
  'Cloud Deployment',
  'UI/UX Design',
  'SEO',
  'Paid Advertising',
  'Social Media',
  'Content Marketing',
  'Email Marketing',
  'Analytics & Reporting'
];

function Checklist({ items }) {
  return (
    <ul className="ep-checklist">
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
    <div className="ep-heading">
      <span className="ep-eyebrow">{label}</span>
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Cards({ items }) {
  return (
    <div className="ep-card-grid">
      {items.map(({ icon: Icon, title, text, points }) => (
        <article className="ep-card" key={title}>
          <span className="ep-icon">
            <Icon
              size={26}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </span>

          <h3>{title}</h3>
          <p>{text}</p>

          {points && <Checklist items={points} />}
        </article>
      ))}
    </div>
  );
}

export default function Portfolio() {
  usePageTitle('Our Work');

  return (
    <div className="engix-portfolio-page">
      {/* HERO */}
      <section
        className="ep-hero"
        aria-labelledby="ep-title"
      >
        <div className="ep-shell">
          <span className="ep-eyebrow">
            ENGIX TECH PRIVATE LIMITED / OUR WORK
          </span>

          <h1 id="ep-title">
            Client Projects.
            <br />
            Digital Expertise.
            <br />
            International Experience.
          </h1>

          <div className="ep-hero-grid">
            <p className="ep-lead">
              From corporate websites and AI applications to
              service platforms and digital marketing, Engix works
              with businesses on technology and communication
              challenges across domestic and international markets.
            </p>

            <div className="ep-hero-note">
              <Globe2 size={28} aria-hidden="true" />

              <div>
                <strong>
                  Built in India. Working across markets.
                </strong>

                <span>
                  Project experience across the USA, Canada, UK,
                  Australia and Singapore.
                </span>
              </div>
            </div>
          </div>

          <nav
            className="ep-section-nav"
            aria-label="Work page sections"
          >
            <a href="#ep-selected">Selected projects</a>
            <a href="#ep-marketing">Digital marketing</a>
            <a href="#ep-markets">International experience</a>
          </nav>
        </div>
      </section>

      {/* SELECTED CLIENT PROJECTS */}
      <section
        id="ep-selected"
        className="ep-section"
        aria-labelledby="ep-projects-title"
      >
        <div className="ep-shell">
          <Heading
            id="ep-projects-title"
            label="SELECTED CLIENT PROJECTS"
            title="Technology Work Shaped Around Business Requirements"
          >
            A selection of client engagements, with their scope and
            current project status. The accompanying images are
            representative visuals.
          </Heading>

          <div className="ep-project-list">
            {PROJECTS.map(project => {
              const Icon = project.icon;

              return (
                <article
                  key={project.id}
                  className={`ep-project ep-tone-${project.tone}`}
                  aria-labelledby={`ep-${project.id}`}
                >
                  <div className="ep-project-copy">
                    <div className="ep-project-top">
                      <span className="ep-icon">
                        <Icon
                          size={26}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <span
                        className={`ep-status ${
                          project.status === 'Delivered'
                            ? 'ep-delivered'
                            : ''
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <span className="ep-category">
                      {project.category}
                    </span>

                    <h3 id={`ep-${project.id}`}>
                      {project.title}
                    </h3>

                    <p>{project.description}</p>
                    <p>{project.detail}</p>

                    <dl className="ep-project-meta">
                      <div>
                        <dt>Client</dt>
                        <dd>{project.client}</dd>
                      </div>

                      <div>
                        <dt>Location</dt>
                        <dd>{project.location}</dd>
                      </div>
                    </dl>

                    <h4>Engagement scope</h4>

                    <Checklist items={project.scope} />

                    <ul
                      className="ep-tags ep-project-tags"
                      aria-label="Project deliverables"
                    >
                      {project.deliverables.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <figure className="ep-project-photo">
                    <PortfolioImage
                      name={project.image}
                      alt={project.alt}
                    />

                    <figcaption>
                      Representative image · {project.category}
                    </figcaption>
                  </figure>
                </article>
              );
            })}
          </div>

          <div className="ep-note">
            <strong>Have a related requirement?</strong>

            <p>
              Tell us about your business context, current systems
              and proposed scope. We can discuss which design,
              engineering or marketing services are relevant.
            </p>

            <Link className="ep-text-link" to="/contact">
              Discuss your requirements
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING */}
      <section
        id="ep-marketing"
        className="ep-section ep-green"
        aria-labelledby="ep-marketing-title"
      >
        <div className="ep-shell">
          <Heading
            id="ep-marketing-title"
            label="DIGITAL MARKETING WORK"
            title="Website Visibility, Campaigns and Content That Work Together"
          >
            Alongside technology engagements, Engix provides digital
            marketing services for businesses reaching domestic and
            international audiences. The areas below summarize our
            marketing capabilities and engagement approach.
          </Heading>

          <Cards items={MARKETING_WORK} />
        </div>
      </section>

      {/* CONNECTED DIGITAL DELIVERY */}
      <section
        className="ep-section"
        aria-labelledby="ep-connected-title"
      >
        <div className="ep-shell">
          <Heading
            id="ep-connected-title"
            label="CONNECTED DIGITAL DELIVERY"
            title="From the First Impression to the Next Customer Action"
          >
            A professional digital presence brings technical
            experience, clear communication and useful measurement
            into the same plan.
          </Heading>

          <div className="ep-feature-grid">
            {MARKETING_FEATURES.map(item => (
              <article
                className="ep-feature"
                key={item.title}
              >
                <figure>
                  <PortfolioImage
                    name={item.image}
                    alt={item.alt}
                  />

                  <figcaption>
                    Representative visual
                  </figcaption>
                </figure>

                <div className="ep-feature-copy">
                  <span className="ep-eyebrow">
                    {item.label}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL EXPERIENCE */}
      <section
        id="ep-markets"
        className="ep-section ep-soft"
        aria-labelledby="ep-markets-title"
      >
        <div className="ep-shell ep-split">
          <figure className="ep-photo">
            <PortfolioImage
              name="global"
              alt="Stock photograph of a globe representing international collaboration"
            />

            <figcaption>
              Domestic and international project collaboration.
            </figcaption>
          </figure>

          <div>
            <span className="ep-eyebrow">
              INTERNATIONAL PROJECT EXPERIENCE
            </span>

            <h2 id="ep-markets-title">
              Experience Across Markets. A Shared Focus on Delivery.
            </h2>

            <p>
              Engix has worked on various projects across the
              United States, Canada, the United Kingdom, Australia
              and Singapore, alongside engagements in India.
            </p>

            <p>
              Our approach connects business requirements with the
              audience, systems and communication needs of each
              engagement. Scope, responsibilities and review
              arrangements are agreed with the client.
            </p>

            <ul
              className="ep-market-list"
              aria-label="International markets"
            >
              {MARKETS.map(market => (
                <li key={market}>
                  <Globe2 size={18} aria-hidden="true" />
                  <span>{market}</span>
                </li>
              ))}
            </ul>

            <Checklist
              items={[
                'Clear coordination with client stakeholders',
                'Documented priorities and project decisions',
                'Design, development and marketing aligned to the scope',
                'Review and handover arrangements agreed in advance'
              ]}
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="ep-section"
        aria-labelledby="ep-capabilities-title"
      >
        <div className="ep-shell ep-split">
          <div>
            <span className="ep-eyebrow">
              BREADTH OF CAPABILITY
            </span>

            <h2 id="ep-capabilities-title">
              Services for Different Stages of Your Digital Journey
            </h2>

            <p>
              An engagement may begin with a website, an internal
              workflow or a marketing requirement. We discuss how
              the relevant services can connect around your
              priorities.
            </p>
          </div>

          <div>
            <ul className="ep-tags ep-capability-tags">
              {CAPABILITIES.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section
        className="ep-section ep-green"
        aria-labelledby="ep-values-title"
      >
        <div className="ep-shell">
          <Heading
            id="ep-values-title"
            label="HOW WE CREATE VALUE"
            title="Professional Work Starts with Clear Understanding"
          >
            We connect the business context with delivery decisions
            so the work remains understandable, relevant and
            aligned with its purpose.
          </Heading>

          <Cards items={VALUES} />
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="ep-section"
        aria-labelledby="ep-process-title"
      >
        <div className="ep-shell">
          <Heading
            id="ep-process-title"
            label="OUR ENGAGEMENT APPROACH"
            title="A Clear Path from Requirements to Handover"
          >
            Practical stages help organize technology and marketing
            work, with opportunities to review progress and clarify
            the next steps.
          </Heading>

          <Cards items={PROCESS} />
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="ep-section ep-contact"
        aria-labelledby="ep-contact-title"
      >
        <div className="ep-shell ep-contact-grid">
          <div>
            <span className="ep-eyebrow">
              CONTACT ENGIX
            </span>

            <h2 id="ep-contact-title">
              Let’s Discuss Your Next Digital Initiative
            </h2>

            <p>
              Share your requirements, existing systems and business
              priorities. We will discuss the services involved,
              a practical scope and how the engagement can move
              forward.
            </p>

            <Link className="ep-button" to="/contact">
              Discuss your project
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="ep-contact-details">
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