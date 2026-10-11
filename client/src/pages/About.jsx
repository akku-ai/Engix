import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Globe2,
  LayoutDashboard,
  Lightbulb,
  Mail,
  Megaphone,
  MessageSquareText,
  Palette,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Workflow
} from 'lucide-react';

import usePageTitle from '../hooks/usePageTitle';
import '../styles/engix-about.css';

const imageSources = {
  team: [
    'team-collaboration.jpg',
    'photo-1600880292203-757bb62b4baf'
  ],
  office: [
    'project-consultation.jpg',
    'photo-1524758631624-e2822e304c36'
  ],
  session: [
    'working-session.jpg',
    'photo-1531482615713-2afd69097998'
  ],
  engineering: [
    'software-engineering.jpg',
    'photo-1461749280684-dccba630e2f6'
  ],
  marketing: [
    'marketing-research.jpg',
    'photo-1454165804606-c3d57bc86b40'
  ]
};

function AboutImage({ name, alt, priority = false }) {
  const [attempt, setAttempt] = useState(0);

  const [file, photo] = imageSources[name];

  const local =
    `${import.meta.env.BASE_URL}images/about/${file}`;

  const remote =
    `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1600&q=85`;

  if (attempt > 1) {
    return (
      <div
        className="ea-image-fallback"
        role="img"
        aria-label={alt}
      >
        <Globe2 size={48} aria-hidden="true" />

        <span>
          Technology. Collaboration. Progress.
        </span>
      </div>
    );
  }

  return (
    <img
      src={attempt === 0 ? local : remote}
      alt={alt}
      width="1600"
      height="1067"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setAttempt(value => value + 1)}
    />
  );
}

const capabilities = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    text:
      'Business applications, internal tools and tailored software that connect your teams, information and day-to-day operations.'
  },
  {
    icon: Smartphone,
    title: 'Website & Mobile Development',
    text:
      'Company websites, ecommerce experiences and web and mobile applications designed around usability and business requirements.'
  },
  {
    icon: Palette,
    title: 'UI/UX & Experience Design',
    text:
      'Research, user journeys, wireframes and interface design that help people navigate your services and complete tasks with confidence.'
  },
  {
    icon: BrainCircuit,
    title: 'AI & Intelligent Automation',
    text:
      'AI integrations, assistants and automated workflows shaped around practical use cases, data requirements and human oversight.'
  },
  {
    icon: CloudCog,
    title: 'Backend, APIs & Cloud',
    text:
      'Application backends, integrations, databases and deployment foundations, with attention to security, reliability and maintainability.'
  },
  {
    icon: Workflow,
    title: 'Business Workflow Solutions',
    text:
      'Customer management, reporting and operational tools that reduce disconnected processes and improve access to useful information.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing & Content',
    text:
      'SEO, paid advertising, social media, content and email marketing planned around your audience, positioning and business objectives.'
  },
  {
    icon: LayoutDashboard,
    title: 'Analytics & Conversion',
    text:
      'Measurement planning, campaign reporting and website improvements that help you understand engagement and make informed decisions.'
  }
];

const principles = [
  {
    icon: Target,
    title: 'Business understanding first',
    text:
      'We start with the problem, the people affected and the outcome you want before recommending a technical or marketing approach.'
  },
  {
    icon: MessageSquareText,
    title: 'Clear communication',
    text:
      'Scope, responsibilities, decisions and progress reviews are discussed early so everyone understands how the engagement will work.'
  },
  {
    icon: ShieldCheck,
    title: 'Responsible execution',
    text:
      'We consider quality, access controls, maintainability and measurement as part of delivery, rather than leaving them until the end.'
  },
  {
    icon: Lightbulb,
    title: 'Practical improvement',
    text:
      'Recommendations reflect your current needs and constraints, with room to improve as requirements and business priorities change.'
  }
];

const process = [
  {
    icon: Search,
    title: 'Discover',
    text:
      'Understand your business, audience, existing systems and desired outcomes.'
  },
  {
    icon: Target,
    title: 'Define',
    text:
      'Agree on scope, priorities, requirements and delivery responsibilities.'
  },
  {
    icon: Palette,
    title: 'Design',
    text:
      'Shape interfaces, workflows, content and campaign direction.'
  },
  {
    icon: Code2,
    title: 'Build',
    text:
      'Develop systems or prepare campaigns in planned, reviewable stages.'
  },
  {
    icon: ShieldCheck,
    title: 'Validate',
    text:
      'Review functionality, experience, integrations and measurement.'
  },
  {
    icon: Rocket,
    title: 'Launch & Improve',
    text:
      'Launch the agreed work and plan support or improvements within scope.'
  }
];

const engineeringStandards = [
  {
    icon: Code2,
    title: 'Maintainable foundations',
    text:
      'Clear application structure, reusable components and documented integrations help make future changes easier to understand and manage.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality and security considerations',
    text:
      'Testing, permissions, validation and sensible access controls are considered alongside the features required for the engagement.'
  },
  {
    icon: CloudCog,
    title: 'Deployment and handover',
    text:
      'Environment configuration, release planning and useful handover information help your team prepare for the next stage of operation.'
  }
];

const marketingServices = [
  {
    title: 'Search visibility',
    text:
      'Technical SEO, on-page improvements and relevant content help organize your website around the searches that matter to your audience.'
  },
  {
    title: 'Paid campaigns',
    text:
      'Campaign structure, audience selection, creative messaging and landing pages are planned around agreed objectives and advertising budgets.'
  },
  {
    title: 'Social media and content',
    text:
      'Channel planning, brand messaging and useful content help maintain a coherent presence across the places your audience spends time.'
  },
  {
    title: 'Email and measurement',
    text:
      'Email communication, conversion tracking and reporting help connect marketing activity with observable engagement and enquiry data.'
  }
];

const engagementOptions = [
  {
    icon: Target,
    title: 'Defined project delivery',
    text:
      'For a website, application or specific initiative with an agreed scope, delivery stages and review points.'
  },
  {
    icon: Workflow,
    title: 'Ongoing collaboration',
    text:
      'For marketing activity, maintenance or improvements delivered through an agreed schedule and set of responsibilities.'
  },
  {
    icon: MessageSquareText,
    title: 'Support for your existing team',
    text:
      'For businesses that need additional design, development or marketing capability alongside their internal stakeholders.'
  }
];

function Checklist({ items }) {
  return (
    <ul className="ea-checklist">
      {items.map(text => (
        <li key={text}>
          <CheckCircle2
            size={20}
            aria-hidden="true"
          />

          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function CardGrid({ items, className = '' }) {
  return (
    <div className={`ea-card-grid ${className}`}>
      {items.map(({ icon: Icon, title, text }) => (
        <article className="ea-card" key={title}>
          <span className="ea-icon">
            <Icon
              size={26}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </span>

          <h3>{title}</h3>

          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

export default function About() {
  usePageTitle('About');

  return (
    <div className="engix-about-page">
      {/* HERO */}
      <section
        className="ea-hero"
        aria-labelledby="ea-title"
      >
        <div className="ea-shell ea-split">
          <div>
            <span className="ea-eyebrow">
              ABOUT ENGIX TECH PRIVATE LIMITED
            </span>

            <h1 id="ea-title">
              Technology Expertise.
              <br />
              Business Focus.
            </h1>

            <p className="ea-lead">
              IT services, custom development and digital
              marketing built around the way your business works.
            </p>

            <p>
              Engix helps businesses strengthen their digital
              presence, improve operations and develop the
              technology they need. We bring design, engineering
              and marketing capabilities together around clear
              objectives and a practical delivery approach.
            </p>

            <Link className="ea-button" to="/contact">
              Discuss your requirements

              <ArrowUpRight
                size={20}
                aria-hidden="true"
              />
            </Link>
          </div>

          <figure className="ea-photo ea-hero-photo">
            <AboutImage
              name="team"
              priority
              alt="Stock photograph of two professionals celebrating progress at an office table"
            />

            <figcaption>
              Thoughtful collaboration. Clear direction.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section
        className="ea-section"
        aria-labelledby="ea-story"
      >
        <div className="ea-shell">
          <div className="ea-heading">
            <span className="ea-eyebrow">
              WHO WE ARE
            </span>

            <h2 id="ea-story">
              A Services Partner for Your Next Stage of Growth
            </h2>

            <p>
              Engix Tech Private Limited works with organizations
              that want technology and digital marketing to
              support real business priorities.
            </p>
          </div>

          <div className="ea-story-grid">
            <div>
              <p>
                Your requirements may involve a new website, a
                custom application, connected business systems or
                a more coordinated marketing presence. We help
                clarify what is needed and turn that understanding
                into a defined scope of work.
              </p>

              <p>
                Our focus is service delivery: building and
                improving solutions for clients, with attention to
                the people who use them and the teams responsible
                for managing them.
              </p>
            </div>

            <div>
              <p>
                We connect business context with technical
                decisions and creative execution. That means
                considering user experience, operational workflows,
                integrations and measurement alongside the visible
                design.
              </p>

              <p>
                From an initial conversation through delivery, our
                aim is to keep priorities clear, decisions
                understandable and the work aligned with the agreed
                objectives.
              </p>
            </div>
          </div>

          <div className="ea-purpose-grid">
            <article>
              <span className="ea-eyebrow">
                OUR MISSION
              </span>

              <h3>
                Make Digital Work More Useful
              </h3>

              <p>
                Help businesses adopt practical technology and
                marketing solutions that improve how they operate,
                communicate and serve their customers.
              </p>
            </article>

            <article>
              <span className="ea-eyebrow">
                OUR VISION
              </span>

              <h3>
                Build Relationships Through Dependable Work
              </h3>

              <p>
                Become a trusted services partner by combining
                thoughtful advice, clear collaboration and
                consistent attention to delivery quality.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="ea-section ea-soft"
        aria-labelledby="ea-services"
      >
        <div className="ea-shell">
          <div className="ea-heading">
            <span className="ea-eyebrow">
              OUR EXPERTISE
            </span>

            <h2 id="ea-services">
              IT and Digital Marketing, Connected by Your Goals
            </h2>

            <p>
              Choose the capabilities your business needs. We
              discuss how development, design, automation and
              marketing can work together within the engagement.
            </p>
          </div>

          <CardGrid items={capabilities} />

          <Link className="ea-text-link" to="/services">
            View our services

            <ArrowUpRight
              size={19}
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      {/* DELIVERY APPROACH */}
      <section
        className="ea-section"
        aria-labelledby="ea-approach"
      >
        <div className="ea-shell ea-split">
          <figure className="ea-photo">
            <AboutImage
              name="office"
              alt="Stock photograph of a bright office lounge with meeting tables and seating"
            />

            <figcaption>
              Space for clear thinking and organized work.
            </figcaption>
          </figure>

          <div>
            <span className="ea-eyebrow">
              OUR DELIVERY APPROACH
            </span>

            <h2 id="ea-approach">
              Good Work Starts with a Shared Understanding
            </h2>

            <p>
              Before delivery begins, we discuss what success means
              for your business, what needs to be included and which
              dependencies could affect the work.
            </p>

            <p>
              For development, this may include existing systems,
              user roles, integrations and deployment requirements.
              For marketing, it may include audience research,
              messaging, channels, content and reporting.
            </p>

            <Checklist
              items={[
                'Defined scope and practical priorities',
                'Documented requirements and key decisions',
                'Planned reviews and clear responsibilities',
                'Quality checks appropriate to the work',
                'Handover and support arrangements agreed in advance'
              ]}
            />
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section
        className="ea-section ea-soft"
        aria-labelledby="ea-engineering"
      >
        <div className="ea-shell">
          <div className="ea-split">
            <div>
              <span className="ea-eyebrow">
                ENGINEERING QUALITY
              </span>

              <h2 id="ea-engineering">
                Software Designed for Everyday Business Use
              </h2>

              <p>
                A useful business application needs more than an
                attractive interface. It needs to support real
                workflows, exchange information reliably and remain
                understandable when requirements change.
              </p>

              <p>
                We consider architecture, user experience,
                integrations and operational needs together.
                Technology choices are discussed around your
                requirements, existing systems and the resources
                available to maintain the solution.
              </p>

              <Checklist
                items={[
                  'User journeys connected to business workflows',
                  'Frontend, backend and integrations planned together',
                  'Performance and accessibility considered during development',
                  'Support and future enhancements defined within scope'
                ]}
              />
            </div>

            <figure className="ea-photo">
              <AboutImage
                name="engineering"
                alt="Stock photograph of programming code displayed on a desktop monitor"
              />

              <figcaption>
                Engineering with the next stage in mind.
              </figcaption>
            </figure>
          </div>

          <CardGrid
            items={engineeringStandards}
            className="ea-three-grid ea-followup-grid"
          />
        </div>
      </section>

      {/* DIGITAL MARKETING */}
      <section
        className="ea-section"
        aria-labelledby="ea-marketing"
      >
        <div className="ea-shell">
          <div className="ea-split">
            <figure className="ea-photo">
              <AboutImage
                name="marketing"
                alt="Stock photograph of professionals reviewing documents and planning at a desk"
              />

              <figcaption>
                Research, communication and measurement.
              </figcaption>
            </figure>

            <div>
              <span className="ea-eyebrow">
                DIGITAL MARKETING
              </span>

              <h2 id="ea-marketing">
                A Clearer Digital Presence. A More Coordinated
                Marketing Approach.
              </h2>

              <p>
                Your website, content and campaigns should
                communicate a consistent message. We help connect
                the technical and creative work so your audience
                can understand your services and find a clear
                next step.
              </p>

              <p>
                Marketing engagements begin with your objectives,
                target audience, current channels and available
                budget. Reporting focuses on the measurements
                agreed for the work, helping you understand what
                to review and improve.
              </p>

              <div className="ea-note">
                <strong>
                  Planned around your business
                </strong>

                <p>
                  Channel selection, content priorities and
                  campaign recommendations depend on your market,
                  audience and engagement scope.
                </p>
              </div>
            </div>
          </div>

          <div className="ea-marketing-grid">
            {marketingServices.map(({ title, text }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section
        className="ea-section ea-green"
        aria-labelledby="ea-values"
      >
        <div className="ea-shell">
          <div className="ea-heading">
            <span className="ea-eyebrow">
              WHAT GUIDES US
            </span>

            <h2 id="ea-values">
              Professional Standards. Practical Decisions.
            </h2>

            <p>
              These principles guide how we assess requirements,
              collaborate with clients and deliver the agreed work.
            </p>
          </div>

          <CardGrid items={principles} />
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="ea-section"
        aria-labelledby="ea-process"
      >
        <div className="ea-shell">
          <div className="ea-heading">
            <span className="ea-eyebrow">
              HOW WE WORK
            </span>

            <h2 id="ea-process">
              A Clear Path from Conversation to Delivery
            </h2>

            <p>
              We organize the engagement into understandable
              stages, with review points that allow decisions to
              improve as the work develops.
            </p>
          </div>

          <CardGrid
            items={process}
            className="ea-process-grid"
          />
        </div>
      </section>

      {/* INTERNATIONAL COLLABORATION */}
      <section
        className="ea-section ea-soft"
        aria-labelledby="ea-global"
      >
        <div className="ea-shell ea-split">
          <div>
            <span className="ea-eyebrow">
              DOMESTIC & INTERNATIONAL COLLABORATION
            </span>

            <h2 id="ea-global">
              A Technology Partner That Works Beyond Borders
            </h2>

            <p>
              Engix collaborates with businesses across locations
              through structured remote working practices.
              Project scope, dependencies and communication
              arrangements are agreed around the engagement.
            </p>

            <h3>
              Clear Coordination Across Locations
            </h3>

            <p>
              Shared priorities and documented decisions help keep
              development and marketing activities organized.
              We discuss how your team wants to work and establish
              practical review points.
            </p>

            <Checklist
              items={[
                'Agreed communication channels and progress reviews',
                'Delivery stages that make dependencies visible',
                'Continued collaboration based on the agreed scope'
              ]}
            />
          </div>

          <figure className="ea-photo">
            <AboutImage
              name="session"
              alt="Stock photograph of colleagues reviewing code together at a computer"
            />

            <figcaption>
              Connected teams. Shared priorities.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ENGAGEMENT OPTIONS */}
      <section
        className="ea-section ea-green"
        aria-labelledby="ea-partnership"
      >
        <div className="ea-shell">
          <div className="ea-heading">
            <span className="ea-eyebrow">
              WORKING WITH ENGIX
            </span>

            <h2 id="ea-partnership">
              An Engagement Built Around Your Requirements
            </h2>

            <p>
              Different priorities call for different working
              arrangements. We discuss the scope, communication
              and review process before recommending how the
              engagement should be organized.
            </p>
          </div>

          <CardGrid
            items={engagementOptions}
            className="ea-three-grid"
          />

          <div className="ea-handover">
            <h3>
              Clear Handover and Next Steps
            </h3>

            <p>
              At the relevant delivery stage, we agree on the
              documentation, access, training or reporting needed
              for your team. Any ongoing maintenance, campaign
              management or additional development is discussed
              as part of the scope.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section
        className="ea-section"
        aria-labelledby="ea-businesses"
      >
        <div className="ea-shell ea-audiences">
          <span className="ea-eyebrow">
            WHO WE WORK WITH
          </span>

          <h2 id="ea-businesses">
            Different Businesses. A Focus on Useful Outcomes.
          </h2>

          <p>
            We discuss each engagement around its requirements,
            whether the priority is a stronger online presence,
            a custom business system or better coordinated
            digital marketing.
          </p>

          <ul className="ea-tags">
            {[
              'Growing Businesses',
              'Professional Services',
              'Technology Companies',
              'Ecommerce & Retail',
              'Service Businesses',
              'Enterprise Teams'
            ].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="ea-section ea-contact"
        aria-labelledby="ea-contact-title"
      >
        <div className="ea-shell ea-contact-grid">
          <div>
            <span className="ea-eyebrow">
              CONTACT ENGIX
            </span>

            <h2 id="ea-contact-title">
              Have a Challenge? Let’s Plan the Right Solution.
            </h2>

            <p>
              Share your requirements, existing systems and
              business priorities. We will discuss the services
              you need, the proposed scope and the next steps.
            </p>

            <Link className="ea-button" to="/contact">
              Discuss your project

              <ArrowUpRight
                size={20}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="ea-contact-details">
            <h3>Connect with Engix</h3>

            <a href="mailto:hello@engix.world">
              <Mail
                size={22}
                aria-hidden="true"
              />

              <span>
                Email
                <strong>hello@engix.world</strong>
              </span>
            </a>

            <a href="tel:+917355985134">
              <Phone
                size={22}
                aria-hidden="true"
              />

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