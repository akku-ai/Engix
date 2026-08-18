import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  CloudCog,
  Code2,
  Database,
  Globe2,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Target,
  Workflow,
  Wrench
} from 'lucide-react';

import ContactForm from '../components/contact/ContactForm';
import usePageTitle from '../hooks/usePageTitle';

export default function Solutions() {
  usePageTitle('Technology Solutions');

  const services = [
    {
      number: '01',
      id: 'web-development',
      icon: Globe2,
      eyebrow: 'WEB DEVELOPMENT',
      title:
        'Professional websites and web applications built for business growth.',
      description:
        'Engix designs and develops modern corporate websites, digital platforms and web applications focused on credibility, performance, user experience and long-term maintainability.',
      points: [
        'Corporate & business websites',
        'Custom web applications',
        'Responsive frontend development',
        'E-commerce platforms',
        'Customer & business portals',
        'Website redesign & modernization'
      ],
      tone: 'lavender'
    },

    {
      number: '02',
      id: 'app-development',
      icon: Smartphone,
      eyebrow: 'MOBILE APP DEVELOPMENT',
      title:
        'Mobile applications designed around real customer and operational workflows.',
      description:
        'We develop modern mobile applications for businesses that need reliable customer experiences, internal applications and digital services connected with secure backend systems.',
      points: [
        'Android applications',
        'iOS applications',
        'Cross-platform development',
        'Customer-facing apps',
        'Internal business applications',
        'App maintenance & upgrades'
      ],
      tone: 'mint'
    },

    {
      number: '03',
      id: 'software-development',
      icon: Code2,
      eyebrow: 'CUSTOM SOFTWARE DEVELOPMENT',
      title:
        'Software engineered around the way your organization actually works.',
      description:
        'From internal systems and operational tools to SaaS products and enterprise applications, we create software around real business requirements instead of forcing companies into generic solutions.',
      points: [
        'Custom business software',
        'SaaS product development',
        'Internal management platforms',
        'Operational dashboards',
        'Enterprise applications',
        'Workflow-driven software'
      ],
      tone: 'yellow'
    },

    {
      number: '04',
      id: 'ai-solutions',
      icon: BrainCircuit,
      eyebrow: 'AI & AUTOMATION',
      title:
        'Practical artificial intelligence for customer experiences and business operations.',
      description:
        'Engix helps organizations introduce AI where it can create practical value through conversational products, intelligent assistants, automated workflows and AI-enabled software.',
      points: [
        'AI chatbot development',
        'AI interviewer solutions',
        'AI assistants',
        'Generative AI integration',
        'Business automation',
        'Custom AI applications'
      ],
      tone: 'peach'
    },

    {
      number: '05',
      id: 'backend-development',
      icon: ServerCog,
      eyebrow: 'BACKEND & API ENGINEERING',
      title:
        'Secure backend systems that keep modern applications connected.',
      description:
        'We develop APIs, authentication systems, server-side applications and integrations that connect products, users, databases, payments and third-party services.',
      points: [
        'REST API development',
        'Authentication & authorization',
        'Third-party API integration',
        'Payment integrations',
        'Server-side applications',
        'Scalable backend architecture'
      ],
      tone: 'lavender'
    },

    {
      number: '06',
      id: 'database-engineering',
      icon: Database,
      eyebrow: 'DATABASE ENGINEERING',
      title:
        'Reliable data architecture for applications that need to grow.',
      description:
        'We design and manage database systems that support digital products, customer platforms, reporting systems and business applications while maintaining consistency and performance.',
      points: [
        'Database architecture',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Schema design',
        'Database optimization & management'
      ],
      tone: 'yellow'
    },

    {
      number: '07',
      id: 'cloud-devops',
      icon: CloudCog,
      eyebrow: 'CLOUD & DEVOPS',
      title:
        'Infrastructure and deployment systems designed for dependable production.',
      description:
        'Engix supports cloud deployment, CI/CD, web infrastructure and production environments so applications can be released reliably and improved safely.',
      points: [
        'Cloud deployment',
        'DigitalOcean infrastructure',
        'Docker environments',
        'CI/CD pipelines',
        'Nginx & reverse proxy',
        'Monitoring & production support'
      ],
      tone: 'mint'
    },

    {
      number: '08',
      id: 'ui-ux',
      icon: Palette,
      eyebrow: 'UI/UX & PRODUCT DESIGN',
      title:
        'Digital experiences built around clarity, usability and business goals.',
      description:
        'We transform requirements and complex workflows into professional interfaces that are easier for customers, teams and administrators to understand and use.',
      points: [
        'UI/UX design',
        'Product discovery',
        'User journeys',
        'Wireframes & prototypes',
        'Design systems',
        'Responsive interface design'
      ],
      tone: 'peach'
    },

    {
      number: '09',
      id: 'crm-erp',
      icon: LayoutDashboard,
      eyebrow: 'CRM & ERP SOLUTIONS',
      title:
        'Business platforms connecting teams, customers and operational information.',
      description:
        'We create customized CRM, ERP and administration systems for organizations that need clearer workflows, centralized information and more efficient business operations.',
      points: [
        'Custom CRM solutions',
        'ERP modules',
        'Administration dashboards',
        'Role-based access',
        'Business reporting',
        'Workflow management'
      ],
      tone: 'lavender'
    },

    {
      number: '10',
      id: 'business-automation',
      icon: Workflow,
      eyebrow: 'BUSINESS AUTOMATION',
      title:
        'Replace repetitive manual work with connected digital workflows.',
      description:
        'Engix helps organizations reduce dependency on spreadsheets, disconnected tools and repetitive processes by creating structured and automated digital workflows.',
      points: [
        'Workflow automation',
        'Process digitization',
        'System integrations',
        'Notifications',
        'Approval workflows',
        'Operational automation'
      ],
      tone: 'yellow'
    },

    {
      number: '11',
      id: 'maintenance-support',
      icon: Wrench,
      eyebrow: 'MAINTENANCE & SUPPORT',
      title:
        'Technology support that continues after your product goes live.',
      description:
        'A digital product continues evolving after launch. We provide maintenance, technical upgrades, improvements and continued development based on the needs of the product.',
      points: [
        'Application maintenance',
        'Bug fixes',
        'Performance improvements',
        'Security updates',
        'Feature development',
        'Ongoing technical support'
      ],
      tone: 'mint'
    },

    {
      number: '12',
      id: 'digital-transformation',
      icon: Rocket,
      eyebrow: 'DIGITAL TRANSFORMATION',
      title:
        'Modern technology for organizations ready to improve how they operate.',
      description:
        'We help businesses move away from outdated processes and disconnected systems through modern software, automation, cloud technology and digital product engineering.',
      points: [
        'Business digitization',
        'Legacy modernization',
        'Process redesign',
        'Automation strategy',
        'Cloud adoption',
        'Technology consulting'
      ],
      tone: 'peach'
    }
  ];

  const projects = [
    {
      number: '01',
      location: 'Durham, United Kingdom',
      title: 'International technology web ecosystem',
      description:
        'Corporate digital platforms developed for Spinnovate Limited and its technology-focused businesses, translating complex scientific and technical information into professional web experiences.',
      tags: [
        'Corporate Web',
        'UI/UX',
        'Frontend Engineering',
        'Deployment'
      ]
    },

    {
      number: '02',
      location: 'Singapore',
      title: 'AI conversational & interview solutions',
      description:
        'AI-focused development involving intelligent chatbot experiences and an AI-supported interviewing solution for an international technology engagement.',
      tags: [
        'Artificial Intelligence',
        'Chatbots',
        'AI Interviewer',
        'Product Engineering'
      ]
    },

    {
      number: '03',
      location: 'India',
      title: 'Mr Maintenance service platform',
      description:
        'A service-booking ecosystem connecting customers, administrators and field technicians through scheduling, assignment, verification, payments and customer feedback workflows.',
      tags: [
        'Mobile App',
        'Backend',
        'OTP',
        'Admin Platform',
        'Payments'
      ]
    }
  ];

  const reasons = [
    {
      icon: Target,
      title: 'Business-first thinking',
      description:
        'We begin with the problem, users and business outcome before deciding what technology should be developed.'
    },
    {
      icon: Workflow,
      title: 'Connected delivery',
      description:
        'Strategy, UI/UX, frontend, backend, mobile, AI and infrastructure remain part of one delivery workflow.'
    },
    {
      icon: ShieldCheck,
      title: 'Long-term engineering',
      description:
        'Maintainability, reliability, security and future expansion are considered from architecture through production.'
    },
    {
      icon: BriefcaseBusiness,
      title: 'Professional communication',
      description:
        'Priorities, decisions and progress remain visible so stakeholders understand where the project stands.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Understand',
      description:
        'We understand the business, users, processes and outcome the technology needs to support.'
    },
    {
      number: '02',
      title: 'Define',
      description:
        'We shape scope, priorities, user journeys and the appropriate technical architecture.'
    },
    {
      number: '03',
      title: 'Design',
      description:
        'Interfaces and experiences are designed around usability and real workflows.'
    },
    {
      number: '04',
      title: 'Engineer',
      description:
        'Frontend, backend, mobile, database, cloud and AI components are developed.'
    },
    {
      number: '05',
      title: 'Validate',
      description:
        'Testing and product reviews confirm reliability, usability and production readiness.'
    },
    {
      number: '06',
      title: 'Launch & Evolve',
      description:
        'We support deployment, improvements and continued product development.'
    }
  ];

  const faqs = [
    {
      question: 'What services does Engix provide?',
      answer:
        'Engix provides web development, mobile app development, custom software, AI and automation, backend engineering, database development, cloud and DevOps, UI/UX, CRM and ERP development, business automation, maintenance and broader digital transformation services.'
    },
    {
      question: 'Can Engix work with international clients?',
      answer:
        'Yes. Engix has experience supporting international technology engagements and uses structured remote collaboration, documentation and project communication.'
    },
    {
      question: 'Can you help if we only have an idea?',
      answer:
        'Yes. You do not need to arrive with a completed technical specification. We can begin with the business problem and help structure the product requirements and technical direction.'
    },
    {
      question: 'Can Engix develop both frontend and backend?',
      answer:
        'Yes. Engix supports complete application development covering interface design, frontend applications, backend APIs, databases, authentication, integrations, cloud deployment and production infrastructure.'
    },
    {
      question: 'Do you provide maintenance after launch?',
      answer:
        'Yes. Depending on the engagement, we can provide maintenance, improvements, production support and continued product development after launch.'
    },
    {
      question: 'How can we start a project?',
      answer:
        'Send a short description of what you are trying to build or improve using the enquiry form. We can begin with an initial discussion and determine the most practical next step.'
    }
  ];

  return (
    <>
      <main className="engix-solutions-page">

        {/* =====================================================
            LANDING PAGE HEADER
        ====================================================== */}

        <header className="engix-solutions-header">
          <div className="engix-solutions-shell engix-solutions-header-inner">

            <Link
              to="/"
              className="engix-solutions-logo"
            >
              <span>✣</span>

              <strong>
                Engix
              </strong>
            </Link>

            <nav className="engix-solutions-nav">

              <a href="#services">
                Solutions
              </a>

              <a href="#work">
                Work
              </a>

              <a href="#why-engix">
                Why Engix
              </a>

              <a href="#process">
                Process
              </a>

            </nav>

            <a
              href="#consultation"
              className="engix-solutions-header-btn"
            >
              Free Consultation

              <ArrowUpRight
                size={18}
                strokeWidth={1.7}
              />
            </a>

          </div>
        </header>


        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="engix-solutions-hero">
          <div className="engix-solutions-shell">

            <div className="engix-solutions-hero-grid">

              <div className="engix-solutions-hero-copy">

                <span className="engix-solutions-label">
                  ENGIX TECH PRIVATE LIMITED
                </span>

                <h1>
                  Technology built
                  around your
                  business.
                </h1>

                <p className="engix-solutions-hero-lead">
                  End-to-end digital product and technology engineering
                  for businesses that need reliable software, modern
                  applications, artificial intelligence and scalable
                  digital infrastructure.
                </p>

                <p className="engix-solutions-hero-description">
                  Engix brings product strategy, UI/UX, web and mobile
                  development, custom software, AI, backend engineering,
                  databases, cloud infrastructure and DevOps together
                  through one structured delivery process.
                </p>

                <div className="engix-solutions-hero-buttons">

                  <a
                    href="#consultation"
                    className="engix-solutions-primary-btn"
                  >
                    Book a Free Consultation

                    <ArrowRight
                      size={21}
                      strokeWidth={1.8}
                    />
                  </a>

                  <a
                    href="#work"
                    className="engix-solutions-secondary-btn"
                  >
                    View Selected Work

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.8}
                    />
                  </a>

                </div>


                <div className="engix-solutions-hero-trust">

                  <div>
                    <CheckCircle2 size={20} />
                    <span>International project experience</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Domestic technology delivery</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>End-to-end engineering</span>
                  </div>

                </div>

              </div>


              <div className="engix-solutions-hero-image">

                {/* UNIQUE TO SOLUTIONS PAGE */}
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=90"
                  alt="Professional software and technology workspace"
                />

                <div className="engix-solutions-hero-overlay">

                  <span>
                    END-TO-END DELIVERY
                  </span>

                  <strong>
                    Product.
                    <br />
                    Engineering.
                    <br />
                    Intelligence.
                  </strong>

                </div>


                <div className="engix-solutions-hero-card">

                  <small>
                    CAPABILITIES
                  </small>

                  <div>
                    <span>Web</span>
                    <span>Apps</span>
                    <span>Software</span>
                    <span>AI</span>
                    <span>Cloud</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            TRUST
        ====================================================== */}

        <section className="engix-solutions-trust">
          <div className="engix-solutions-shell engix-solutions-trust-grid">

            <article>
              <Globe2 size={29} />

              <div>
                <strong>
                  International Delivery
                </strong>

                <span>
                  Experience supporting overseas technology engagements
                </span>
              </div>
            </article>


            <article>
              <BriefcaseBusiness size={29} />

              <div>
                <strong>
                  Business Focused
                </strong>

                <span>
                  Technology designed around real operational requirements
                </span>
              </div>
            </article>


            <article>
              <Workflow size={29} />

              <div>
                <strong>
                  End-to-End
                </strong>

                <span>
                  Product, engineering, infrastructure and support
                </span>
              </div>
            </article>


            <article>
              <ShieldCheck size={29} />

              <div>
                <strong>
                  Built for Growth
                </strong>

                <span>
                  Maintainable technology with future development in mind
                </span>
              </div>
            </article>

          </div>
        </section>


        {/* =====================================================
            SERVICE INTRO
        ====================================================== */}

        <section
          className="engix-solutions-services"
          id="services"
        >

          <div className="engix-solutions-shell">

            <div className="engix-solutions-heading-grid">

              <div>

                <span className="engix-solutions-label">
                  TECHNOLOGY CAPABILITIES
                </span>

                <h2>
                  Complete technology
                  capabilities under
                  one engineering partner.
                </h2>

              </div>

              <p>
                From websites and mobile applications to custom software,
                AI, databases, backend engineering, cloud infrastructure
                and business automation, Engix provides the capabilities
                required to design, build, deploy and support modern
                digital systems.
              </p>

            </div>


            <div className="engix-solutions-service-grid">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className={`engix-solutions-service service-${service.tone}`}
                  >

                    <div className="engix-solutions-service-top">

                      <span>
                        {service.number}
                      </span>

                      <div>
                        <Icon
                          size={33}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>

                    <span className="engix-solutions-service-category">
                      {service.eyebrow}
                    </span>

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>


                    <div className="engix-solutions-service-points">

                      {service.points.map((point) => (
                        <div key={point}>

                          <Check
                            size={16}
                            strokeWidth={2}
                          />

                          <span>
                            {point}
                          </span>

                        </div>
                      ))}

                    </div>


                    <a href="#consultation">
                      Discuss this service

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.7}
                      />
                    </a>

                  </article>
                );
              })}

            </div>

          </div>
        </section>


        {/* =====================================================
            TECHNOLOGY STACK
        ====================================================== */}

        <section className="engix-solutions-stack">

          <div className="engix-solutions-shell">

            <div className="engix-solutions-stack-grid">

              <div>

                <span className="engix-solutions-label">
                  TECHNOLOGY STACK
                </span>

                <h2>
                  From interface
                  to infrastructure.
                </h2>

                <p>
                  Our engineering capabilities cover the technical
                  layers required to design, build and operate modern
                  digital products.
                </p>

              </div>


              <div className="engix-solutions-stack-list">

                <article>
                  <span>FRONTEND</span>

                  <div>
                    <strong>React</strong>
                    <strong>JavaScript</strong>
                    <strong>Next.js</strong>
                    <strong>HTML</strong>
                    <strong>CSS</strong>
                  </div>
                </article>


                <article>
                  <span>MOBILE</span>

                  <div>
                    <strong>React Native</strong>
                    <strong>Expo</strong>
                    <strong>Android</strong>
                    <strong>iOS</strong>
                  </div>
                </article>


                <article>
                  <span>BACKEND</span>

                  <div>
                    <strong>Node.js</strong>
                    <strong>Express</strong>
                    <strong>REST APIs</strong>
                    <strong>Authentication</strong>
                  </div>
                </article>


                <article>
                  <span>DATABASE</span>

                  <div>
                    <strong>MongoDB</strong>
                    <strong>PostgreSQL</strong>
                    <strong>MySQL</strong>
                  </div>
                </article>


                <article>
                  <span>CLOUD & DEVOPS</span>

                  <div>
                    <strong>Docker</strong>
                    <strong>DigitalOcean</strong>
                    <strong>Nginx</strong>
                    <strong>GitHub</strong>
                    <strong>CI/CD</strong>
                  </div>
                </article>


                <article>
                  <span>AI</span>

                  <div>
                    <strong>AI Chatbots</strong>
                    <strong>LLM Integration</strong>
                    <strong>AI APIs</strong>
                    <strong>Automation</strong>
                  </div>
                </article>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PRODUCT THINKING
        ====================================================== */}

        <section className="engix-solutions-context">

          <div className="engix-solutions-shell">

            <div className="engix-solutions-context-grid">

              <div className="engix-solutions-context-image">

                {/* UNIQUE TO SOLUTIONS PAGE */}
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1800&q=90"
                  alt="Professional technology planning session"
                />

                <div>

                  <span>
                    TECHNOLOGY WITH CONTEXT
                  </span>

                  <strong>
                    Good development
                    begins before
                    the first line of code.
                  </strong>

                </div>

              </div>


              <div className="engix-solutions-context-copy">

                <span className="engix-solutions-label">
                  HOW WE THINK
                </span>

                <h2>
                  We start with
                  the problem,
                  not the framework.
                </h2>

                <p>
                  The technology itself is only part of a successful
                  digital product. We first understand the business,
                  users, operational requirements and expected outcome.
                </p>

                <p>
                  That context helps us make better decisions around
                  product scope, architecture, experience design,
                  integrations and future development.
                </p>


                <div className="engix-solutions-context-points">

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Business and product discovery</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Clear technical direction</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Design and engineering working together</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Support through production and beyond</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <section
          className="engix-solutions-work"
          id="work"
        >

          <div className="engix-solutions-shell">

            <div className="engix-solutions-work-heading">

              <span className="engix-solutions-label">
                SELECTED EXPERIENCE
              </span>

              <h2>
                Experience across
                domestic and
                international projects.
              </h2>

              <p>
                Our work includes corporate technology platforms,
                artificial intelligence and operational software.
              </p>

            </div>


            <div className="engix-solutions-work-grid">

              {projects.map((project) => (

                <article key={project.number}>

                  <div className="engix-solutions-work-top">

                    <span>
                      {project.number}
                    </span>

                    <Globe2
                      size={26}
                      strokeWidth={1.5}
                    />

                  </div>


                  <span className="engix-solutions-work-location">
                    {project.location}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="engix-solutions-work-tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </article>

              ))}

            </div>


            <Link
              to="/portfolio"
              className="engix-solutions-work-link"
            >
              Explore selected Engix projects

              <ArrowUpRight size={18} />
            </Link>

          </div>
        </section>


        {/* =====================================================
            WHY ENGIX
        ====================================================== */}

        <section
          className="engix-solutions-why"
          id="why-engix"
        >

          <div className="engix-solutions-shell">

            <div className="engix-solutions-why-grid">

              <div className="engix-solutions-why-copy">

                <span className="engix-solutions-label">
                  WHY ENGIX
                </span>

                <h2>
                  More than
                  development
                  capacity.
                </h2>

                <p>
                  We aim to operate as a technology partner that
                  understands the product, business and operational
                  context behind the software.
                </p>


                <div className="engix-solutions-reasons">

                  {reasons.map((reason, index) => {
                    const Icon = reason.icon;

                    return (
                      <article key={reason.title}>

                        <div className={`reason-icon reason-${index + 1}`}>

                          <Icon
                            size={25}
                            strokeWidth={1.6}
                          />

                        </div>

                        <div>

                          <h3>
                            {reason.title}
                          </h3>

                          <p>
                            {reason.description}
                          </p>

                        </div>

                      </article>
                    );
                  })}

                </div>

              </div>


              <div className="engix-solutions-why-image">

                {/* UNIQUE TO SOLUTIONS PAGE */}
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=90"
                  alt="Professional software engineering team"
                />

                <div>

                  <span>
                    PARTNERSHIP MINDSET
                  </span>

                  <strong>
                    Good software is
                    created through
                    good decisions.
                  </strong>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section
          className="engix-solutions-process"
          id="process"
        >

          <div className="engix-solutions-shell">

            <div className="engix-solutions-process-heading">

              <span className="engix-solutions-label">
                DELIVERY PROCESS
              </span>

              <h2>
                Clear from the
                first conversation
                to production.
              </h2>

              <p>
                Enough structure to keep development organized,
                with enough flexibility to improve decisions as
                the product becomes clearer.
              </p>

            </div>


            <div className="engix-solutions-process-grid">

              {process.map((step, index) => (

                <article
                  key={step.number}
                  className={`solution-process-${index + 1}`}
                >

                  <span>
                    {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </article>

              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            CONSULTATION
        ====================================================== */}

        <section
          className="engix-solutions-consultation"
          id="consultation"
        >

          <div className="engix-solutions-shell">

            <div className="engix-solutions-consultation-grid">

              <div className="engix-solutions-consultation-copy">

                <span className="engix-solutions-label">
                  FREE INITIAL CONSULTATION
                </span>

                <h2>
                  Tell us what
                  you need to
                  build.
                </h2>

                <p>
                  You do not need a finished technical specification.
                  Tell us about your business, current challenge or
                  product idea and we can begin from there.
                </p>


                <div className="engix-solutions-consultation-points">

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Discuss your requirements</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Explore possible technical approaches</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Determine a practical next step</span>
                  </div>

                </div>


                <div className="engix-solutions-contact-options">

                  <span>
                    CONTACT ENGIX DIRECTLY
                  </span>


                  <a href="tel:+917355985134">

                    <Phone size={22} />

                    <div>
                      <small>
                        Call
                      </small>

                      <strong>
                        +91 7355985134
                      </strong>
                    </div>

                  </a>


                  <a
                    href="https://wa.me/917355985134"
                    target="_blank"
                    rel="noreferrer"
                  >

                    <MessageCircle size={22} />

                    <div>
                      <small>
                        WhatsApp
                      </small>

                      <strong>
                        Start a conversation
                      </strong>
                    </div>

                  </a>


                  <a href="mailto:hello@engix.world">

                    <Mail size={22} />

                    <div>
                      <small>
                        Email
                      </small>

                      <strong>
                        hello@engix.world
                      </strong>
                    </div>

                  </a>

                </div>

              </div>


              <div className="engix-solutions-form-card">

                <div className="engix-solutions-form-head">

                  <span>
                    PROJECT ENQUIRY
                  </span>

                  <h3>
                    Start the conversation.
                  </h3>

                  <p>
                    Share a few details about your business,
                    requirement or project idea.
                  </p>

                </div>


                <ContactForm />


                <div className="engix-solutions-form-note">

                  <ShieldCheck size={19} />

                  <span>
                    Your information is used to respond to your
                    business enquiry.
                  </span>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            ABOUT / AUTHENTICITY
        ====================================================== */}

        <section className="engix-solutions-company">

          <div className="engix-solutions-shell">

            <div className="engix-solutions-company-grid">

              <div className="engix-solutions-company-image">

                {/* UNIQUE TO SOLUTIONS PAGE */}
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=90"
                  alt="Professional software development workspace"
                />

              </div>


              <div className="engix-solutions-company-copy">

                <span className="engix-solutions-label">
                  ABOUT ENGIX
                </span>

                <h2>
                  Practical technology.
                  Professional delivery.
                </h2>

                <p>
                  Engix Tech Private Limited is an India-based
                  technology and software engineering company working
                  across web development, mobile applications, custom
                  software, artificial intelligence, backend systems,
                  databases and cloud infrastructure.
                </p>

                <p>
                  Our experience includes domestic and international
                  projects, with delivery focused on clear
                  communication, maintainable engineering and
                  long-term product thinking.
                </p>

                <Link to="/about">
                  Learn more about Engix

                  <ArrowUpRight size={18} />
                </Link>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="engix-solutions-faq">

          <div className="engix-solutions-shell">

            <div className="engix-solutions-faq-grid">

              <div>

                <span className="engix-solutions-label">
                  FREQUENTLY ASKED QUESTIONS
                </span>

                <h2>
                  Before we
                  get started.
                </h2>

              </div>


              <div className="engix-solutions-faq-list">

                {faqs.map((faq) => (

                  <details key={faq.question}>

                    <summary>

                      <span>
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={20}
                        strokeWidth={1.7}
                      />

                    </summary>

                    <p>
                      {faq.answer}
                    </p>

                  </details>

                ))}

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="engix-solutions-final">

          <div className="engix-solutions-shell">

            <div className="engix-solutions-final-grid">

              <div>

                <span className="engix-solutions-label">
                  START A CONVERSATION
                </span>

                <h2>
                  Your next digital
                  solution can start
                  with one conversation.
                </h2>

                <p>
                  Web, mobile, software, AI, cloud or automation —
                  tell us what your business needs to improve.
                </p>

              </div>


              <a
                href="#consultation"
                className="engix-solutions-final-btn"
              >
                Book a Free Consultation

                <span>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.8}
                  />
                </span>
              </a>

            </div>

          </div>
        </section>


        {/* =====================================================
            LANDING FOOTER
        ====================================================== */}

        <footer className="engix-solutions-footer">

          <div className="engix-solutions-shell">

            <div className="engix-solutions-footer-main">

              <div>

                <Link
                  to="/"
                  className="engix-solutions-footer-logo"
                >
                  <span>
                    ✣
                  </span>

                  <strong>
                    Engix
                  </strong>
                </Link>

                <p>
                  End-to-end software, AI, application and digital
                  technology engineering for modern businesses.
                </p>

              </div>


              <div>

                <h4>
                  Company
                </h4>

                <Link to="/about">
                  About
                </Link>

                <Link to="/portfolio">
                  Projects
                </Link>

                <Link to="/contact">
                  Contact
                </Link>

              </div>


              <div>

                <h4>
                  Solutions
                </h4>

                <a href="#web-development">
                  Web Development
                </a>

                <a href="#app-development">
                  App Development
                </a>

                <a href="#software-development">
                  Custom Software
                </a>

                <a href="#ai-solutions">
                  AI Solutions
                </a>

              </div>


              <div>

                <h4>
                  Connect
                </h4>

                <a href="mailto:hello@engix.world">
                  hello@engix.world
                </a>

                <a href="tel:+917355985134">
                  +91 7355985134
                </a>

                <a href="tel:+918960958818">
                  +91 8960958818
                </a>

                <div className="engix-solutions-address">

                  <MapPin size={17} />

                  <span>
                    552 Sahityanaka Mod,
                    Ramnagar, Varanasi, India
                  </span>

                </div>

              </div>

            </div>


            <div className="engix-solutions-footer-bottom">

              <p>
                © {new Date().getFullYear()} Engix Tech Private Limited.
                All rights reserved.
              </p>

              <div>

                <Link to="/privacy">
                  Privacy Policy
                </Link>

                <Link to="/terms">
                  Terms & Conditions
                </Link>

              </div>

            </div>

          </div>
        </footer>

      </main>


      <style>{`

        html {
          scroll-behavior: smooth;
        }

        .engix-solutions-page {
          --black: #050505;
          --ink: #111318;

          --gray: #686b72;

          --lavender: #e9e6ff;
          --yellow: #fff14f;
          --mint: #dff5df;
          --peach: #f4dfd2;

          --line: rgba(17,19,24,.11);

          background: #ffffff;
          color: var(--ink);

          overflow-x: hidden;
  overflow-y: visible;
        }

        .engix-solutions-shell {
          width: min(1240px, calc(100% - 56px));

          margin: 0 auto;
        }

        .engix-solutions-label {
          display: inline-block;

          width: max-content;

          padding: 7px 11px;

          background: var(--lavender);

          color: #35304b;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .11em;

          text-transform: uppercase;
        }


        /* =====================================================
           HEADER
        ====================================================== */

        .engix-solutions-header {
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  width: 100%;

  z-index: 9999;

  background: rgba(255, 255, 255, 0.96);

  border-bottom: 1px solid var(--line);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow: 0 8px 30px rgba(17, 19, 24, 0.05);
}

        .engix-solutions-header-inner {
          min-height: 78px;

          display: grid;

          grid-template-columns: 1fr auto 1fr;

          align-items: center;

          gap: 35px;
        }

        .engix-solutions-logo {
          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: var(--ink);

          text-decoration: none;
        }

        .engix-solutions-logo > span {
          font-size: 37px;

          line-height: 1;
        }

        .engix-solutions-logo strong {
          font-size: 24px;

          letter-spacing: -.045em;
        }

        .engix-solutions-nav {
          display: flex;

          align-items: center;

          gap: 32px;
        }

        .engix-solutions-nav a {
          color: #56585f;

          text-decoration: none;

          font-size: 13px;

          font-weight: 600;
        }

        .engix-solutions-header-btn {
          justify-self: end;

          min-height: 46px;

          padding: 0 18px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          border-radius: 999px;

          background: var(--black);

          color: white;

          text-decoration: none;

          font-size: 12px;

          font-weight: 700;
        }


        /* =====================================================
           HERO
        ====================================================== */

       .engix-solutions-hero {
  padding: 158px 0 0;

  background: #ffffff;
}

        .engix-solutions-hero-grid {
          display: grid;

          grid-template-columns: 1.05fr .95fr;

          gap: 75px;

          align-items: end;
        }

        .engix-solutions-hero-copy {
          padding: 70px 0 100px;
        }

        .engix-solutions-hero h1 {
          max-width: 850px;

          margin: 26px 0 0;

          color: var(--ink);

          font-size: clamp(4.2rem,7vw,7.4rem);

          line-height: .88;

          letter-spacing: -.073em;

          font-weight: 600;
        }

        .engix-solutions-hero-lead {
          max-width: 700px;

          margin: 38px 0 0;

          color: #45474e;

          font-size: clamp(1.16rem,1.5vw,1.37rem);

          line-height: 1.66;

          font-weight: 500;
        }

        .engix-solutions-hero-description {
          max-width: 680px;

          margin: 17px 0 0;

          color: var(--gray);

          font-size: 14px;

          line-height: 1.78;
        }

        .engix-solutions-hero-buttons {
          display: flex;

          flex-wrap: wrap;

          gap: 12px;

          margin-top: 38px;
        }

        .engix-solutions-primary-btn,
        .engix-solutions-secondary-btn {
          min-height: 58px;

          padding: 0 22px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          text-decoration: none;

          font-size: 13px;

          font-weight: 750;

          transition: transform .2s ease;
        }

        .engix-solutions-primary-btn {
          background: var(--black);

          color: white;
        }

        .engix-solutions-primary-btn svg {
          color: var(--yellow);
        }

        .engix-solutions-secondary-btn {
          border: 1px solid rgba(5,5,5,.16);

          background: white;

          color: var(--black);
        }

        .engix-solutions-primary-btn:hover,
        .engix-solutions-secondary-btn:hover {
          transform: translateY(-2px);
        }

        .engix-solutions-hero-trust {
          display: flex;

          flex-wrap: wrap;

          gap: 14px 22px;

          margin-top: 36px;
        }

        .engix-solutions-hero-trust > div {
          display: flex;

          align-items: center;

          gap: 7px;

          color: #62646a;

          font-size: 11px;
        }


        /* HERO IMAGE */

        .engix-solutions-hero-image {
          min-height: 720px;

          position: relative;

          overflow: hidden;
        }

        .engix-solutions-hero-image > img {
          width: 100%;

          height: 720px;

          display: block;

          object-fit: cover;

          transition: transform .7s ease;
        }

        .engix-solutions-hero-image:hover > img {
          transform: scale(1.025);
        }

        .engix-solutions-hero-image::after {
          content: '';

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 46%,
              rgba(5,5,5,.74)
            );
        }

        .engix-solutions-hero-overlay {
          position: absolute;

          z-index: 2;

          left: 30px;

          bottom: 32px;

          color: white;
        }

        .engix-solutions-hero-overlay > span {
          display: inline-block;

          margin-bottom: 10px;

          padding: 5px 8px;

          background: var(--yellow);

          color: var(--black);

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-solutions-hero-overlay strong {
          display: block;

          font-size: clamp(2rem,3vw,3rem);

          line-height: 1.03;

          letter-spacing: -.045em;
        }

        .engix-solutions-hero-card {
          position: absolute;

          z-index: 3;

          top: 25px;

          right: 25px;

          width: 235px;

          padding: 20px;

          background: rgba(255,255,255,.96);

          backdrop-filter: blur(10px);
        }

        .engix-solutions-hero-card small {
          color: #85868c;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-solutions-hero-card > div {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          margin-top: 15px;
        }

        .engix-solutions-hero-card span {
          padding: 7px 9px;

          border: 1px solid rgba(5,5,5,.08);

          color: #36373c;

          font-size: 9px;
        }

        .engix-solutions-hero-card span:nth-child(1) {
          background: var(--lavender);
        }

        .engix-solutions-hero-card span:nth-child(2) {
          background: var(--yellow);
        }

        .engix-solutions-hero-card span:nth-child(3) {
          background: var(--mint);
        }

        .engix-solutions-hero-card span:nth-child(4) {
          background: var(--peach);
        }


        /* =====================================================
           TRUST
        ====================================================== */

        .engix-solutions-trust {
          border-top: 1px solid var(--line);

          border-bottom: 1px solid var(--line);

          background: white;
        }

        .engix-solutions-trust-grid {
          display: grid;

          grid-template-columns: repeat(4,1fr);
        }

        .engix-solutions-trust-grid article {
          min-height: 125px;

          padding: 26px;

          display: grid;

          grid-template-columns: 48px 1fr;

          gap: 13px;

          align-items: center;

          border-right: 1px solid var(--line);
        }

        .engix-solutions-trust-grid article:first-child {
          padding-left: 0;
        }

        .engix-solutions-trust-grid article:last-child {
          border-right: 0;
        }

        .engix-solutions-trust-grid svg {
          width: 45px;

          height: 45px;

          padding: 10px;

          color: var(--ink);
        }

        .engix-solutions-trust-grid article:nth-child(1) svg {
          background: var(--lavender);
        }

        .engix-solutions-trust-grid article:nth-child(2) svg {
          background: var(--yellow);
        }

        .engix-solutions-trust-grid article:nth-child(3) svg {
          background: var(--mint);
        }

        .engix-solutions-trust-grid article:nth-child(4) svg {
          background: var(--peach);
        }

        .engix-solutions-trust-grid strong {
          display: block;

          color: var(--ink);

          font-size: 13px;
        }

        .engix-solutions-trust-grid span {
          display: block;

          margin-top: 5px;

          color: #777980;

          font-size: 10px;

          line-height: 1.5;
        }


        /* =====================================================
           COMMON HEADING
        ====================================================== */

        .engix-solutions-heading-grid {
          display: grid;

          grid-template-columns: 1.25fr .75fr;

          gap: 80px;

          align-items: end;

          margin-bottom: 65px;
        }

        .engix-solutions-heading-grid h2 {
          max-width: 850px;

          margin: 20px 0 0;

          color: var(--ink);

          font-size: clamp(3rem,5vw,5.2rem);

          line-height: .97;

          letter-spacing: -.06em;

          font-weight: 600;
        }

        .engix-solutions-heading-grid > p {
          margin: 0;

          color: var(--gray);

          font-size: 15px;

          line-height: 1.75;
        }


        /* =====================================================
           SERVICES
        ====================================================== */

        .engix-solutions-services {
          padding: 120px 0;

          background: white;
        }

        .engix-solutions-service-grid {
          display: grid;

          grid-template-columns: repeat(2,1fr);

          gap: 14px;
        }

        .engix-solutions-service {
          position: relative;

          min-height: 520px;

          padding: 35px;

          display: flex;

          flex-direction: column;

          background: white;

          border: 1px solid var(--line);

          overflow: hidden;

          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .engix-solutions-service::before {
          content: '';

          position: absolute;

          top: 0;
          left: 0;
          right: 0;

          height: 6px;
        }

        .service-lavender::before {
          background: var(--lavender);
        }

        .service-yellow::before {
          background: var(--yellow);
        }

        .service-mint::before {
          background: var(--mint);
        }

        .service-peach::before {
          background: var(--peach);
        }

        .engix-solutions-service:hover {
          transform: translateY(-4px);

          box-shadow: 0 22px 52px rgba(0,0,0,.055);
        }

        .engix-solutions-service-top {
          display: flex;

          align-items: center;

          justify-content: space-between;
        }

        .engix-solutions-service-top > span {
          color: #818288;

          font-size: 10px;

          font-weight: 700;
        }

        .engix-solutions-service-top > div {
          width: 50px;

          height: 50px;

          display: grid;

          place-items: center;

          color: var(--ink);
        }

        .service-lavender
        .engix-solutions-service-top > div {
          background: var(--lavender);
        }

        .service-yellow
        .engix-solutions-service-top > div {
          background: var(--yellow);
        }

        .service-mint
        .engix-solutions-service-top > div {
          background: var(--mint);
        }

        .service-peach
        .engix-solutions-service-top > div {
          background: var(--peach);
        }

        .engix-solutions-service-category {
          margin-top: 55px;

          color: #85868c;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-solutions-service h3 {
          max-width: 580px;

          margin: 14px 0 18px;

          color: var(--ink);

          font-size: clamp(2rem,3vw,3rem);

          line-height: 1.03;

          letter-spacing: -.05em;

          font-weight: 600;
        }

        .engix-solutions-service > p {
          max-width: 570px;

          margin: 0;

          color: var(--gray);

          font-size: 13px;

          line-height: 1.72;
        }

        .engix-solutions-service-points {
          display: grid;

          grid-template-columns: repeat(2,1fr);

          gap: 0 15px;

          margin-top: 25px;
        }

        .engix-solutions-service-points > div {
          padding: 11px 0;

          display: flex;

          gap: 7px;

          align-items: center;

          border-top: 1px solid var(--line);

          color: #55575d;

          font-size: 10px;
        }

        .engix-solutions-service > a {
          width: max-content;

          margin-top: auto;

          padding-top: 26px;

          display: inline-flex;

          align-items: center;

          gap: 7px;

          color: var(--ink);

          text-decoration: none;

          font-size: 12px;

          font-weight: 750;

          border-bottom: 1px solid var(--ink);
        }


        /* =====================================================
           STACK
        ====================================================== */

        .engix-solutions-stack {
          padding: 120px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-stack-grid {
          display: grid;

          grid-template-columns: .8fr 1.2fr;

          gap: 90px;
        }

        .engix-solutions-stack-grid h2 {
          max-width: 650px;

          margin: 20px 0 0;

          color: var(--ink);

          font-size: clamp(3rem,4.8vw,5rem);

          line-height: .97;

          letter-spacing: -.06em;

          font-weight: 600;
        }

        .engix-solutions-stack-grid > div:first-child > p {
          max-width: 580px;

          margin: 25px 0 0;

          color: var(--gray);

          font-size: 14px;

          line-height: 1.75;
        }

        .engix-solutions-stack-list article {
          padding: 23px 0;

          display: grid;

          grid-template-columns: 130px 1fr;

          gap: 25px;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-stack-list article > span {
          color: #85868c;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-solutions-stack-list article > div {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }

        .engix-solutions-stack-list strong {
          padding: 8px 10px;

          border: 1px solid var(--line);

          color: #474950;

          font-size: 10px;

          font-weight: 600;
        }

        .engix-solutions-stack-list article:nth-child(4n + 1) strong {
          background: var(--lavender);
        }

        .engix-solutions-stack-list article:nth-child(4n + 2) strong {
          background: var(--yellow);
        }

        .engix-solutions-stack-list article:nth-child(4n + 3) strong {
          background: var(--mint);
        }

        .engix-solutions-stack-list article:nth-child(4n + 4) strong {
          background: var(--peach);
        }


        /* =====================================================
           CONTEXT
        ====================================================== */

        .engix-solutions-context {
          padding: 120px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-context-grid {
          display: grid;

          grid-template-columns: .95fr 1.05fr;

          gap: 85px;

          align-items: center;
        }

        .engix-solutions-context-image {
          height: 650px;

          position: relative;

          overflow: hidden;
        }

        .engix-solutions-context-image img {
          width: 100%;

          height: 100%;

          object-fit: cover;
        }

        .engix-solutions-context-image::after {
          content: '';

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(5,5,5,.72)
            );
        }

        .engix-solutions-context-image > div {
          position: absolute;

          z-index: 2;

          left: 30px;

          right: 30px;

          bottom: 30px;

          color: white;
        }

        .engix-solutions-context-image span,
        .engix-solutions-why-image span {
          display: inline-block;

          margin-bottom: 10px;

          padding: 5px 8px;

          background: var(--yellow);

          color: var(--black);

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-solutions-context-image strong,
        .engix-solutions-why-image strong {
          display: block;

          max-width: 470px;

          font-size: clamp(2rem,3vw,3rem);

          line-height: 1.03;

          letter-spacing: -.045em;
        }

        .engix-solutions-context-copy h2,
        .engix-solutions-why-copy h2 {
          max-width: 700px;

          margin: 20px 0 0;

          color: var(--ink);

          font-size: clamp(3rem,4.8vw,5rem);

          line-height: .97;

          letter-spacing: -.06em;

          font-weight: 600;
        }

        .engix-solutions-context-copy > p,
        .engix-solutions-why-copy > p {
          max-width: 680px;

          margin: 25px 0 0;

          color: var(--gray);

          font-size: 14px;

          line-height: 1.78;
        }

        .engix-solutions-context-points {
          margin-top: 35px;
        }

        .engix-solutions-context-points > div {
          padding: 14px 0;

          display: flex;

          align-items: center;

          gap: 9px;

          border-top: 1px solid var(--line);

          color: #4e5056;

          font-size: 12px;
        }


        /* =====================================================
           WORK
        ====================================================== */

        .engix-solutions-work {
          padding: 120px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-work-heading {
          max-width: 900px;

          margin-bottom: 60px;
        }

        .engix-solutions-work-heading h2,
        .engix-solutions-process-heading h2 {
          margin: 20px 0 0;

          color: var(--ink);

          font-size: clamp(3rem,5vw,5.2rem);

          line-height: .97;

          letter-spacing: -.06em;

          font-weight: 600;
        }

        .engix-solutions-work-heading p,
        .engix-solutions-process-heading p {
          max-width: 650px;

          margin: 24px 0 0;

          color: var(--gray);

          font-size: 14px;

          line-height: 1.75;
        }

        .engix-solutions-work-grid {
          display: grid;

          grid-template-columns: repeat(3,1fr);

          gap: 14px;
        }

        .engix-solutions-work-grid article {
          min-height: 410px;

          padding: 31px;

          display: flex;

          flex-direction: column;

          border: 1px solid var(--line);

          background: white;
        }

        .engix-solutions-work-grid article:nth-child(1) {
          border-top: 6px solid var(--lavender);
        }

        .engix-solutions-work-grid article:nth-child(2) {
          border-top: 6px solid var(--yellow);
        }

        .engix-solutions-work-grid article:nth-child(3) {
          border-top: 6px solid var(--mint);
        }

        .engix-solutions-work-top {
          display: flex;

          align-items: center;

          justify-content: space-between;
        }

        .engix-solutions-work-top > span {
          color: #85868c;

          font-size: 10px;
        }

        .engix-solutions-work-location {
          margin-top: 55px;

          color: #85868c;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .1em;

          text-transform: uppercase;
        }

        .engix-solutions-work-grid h3 {
          margin: 12px 0 15px;

          color: var(--ink);

          font-size: 25px;

          line-height: 1.05;

          letter-spacing: -.04em;
        }

        .engix-solutions-work-grid p {
          margin: 0;

          color: var(--gray);

          font-size: 12px;

          line-height: 1.72;
        }

        .engix-solutions-work-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          margin-top: auto;

          padding-top: 25px;
        }

        .engix-solutions-work-tags span {
          padding: 7px 8px;

          border: 1px solid var(--line);

          color: #55575d;

          font-size: 9px;
        }

        .engix-solutions-work-link {
          width: max-content;

          margin-top: 35px;

          display: inline-flex;

          align-items: center;

          gap: 7px;

          color: var(--ink);

          text-decoration: none;

          font-size: 12px;

          font-weight: 750;

          padding-bottom: 4px;

          border-bottom: 1px solid var(--ink);
        }


        /* =====================================================
           WHY
        ====================================================== */

        .engix-solutions-why {
          padding: 120px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-why-grid {
          display: grid;

          grid-template-columns: 1.05fr .95fr;

          gap: 85px;

          align-items: center;
        }

        .engix-solutions-reasons {
          margin-top: 38px;
        }

        .engix-solutions-reasons article {
          padding: 21px 0;

          display: grid;

          grid-template-columns: 58px 1fr;

          gap: 15px;

          border-top: 1px solid var(--line);
        }

        .reason-icon {
          width: 46px;

          height: 46px;

          display: grid;

          place-items: center;

          color: var(--ink);
        }

        .reason-1 {
          background: var(--lavender);
        }

        .reason-2 {
          background: var(--yellow);
        }

        .reason-3 {
          background: var(--mint);
        }

        .reason-4 {
          background: var(--peach);
        }

        .engix-solutions-reasons h3 {
          margin: 0 0 6px;

          color: var(--ink);

          font-size: 18px;
        }

        .engix-solutions-reasons p {
          margin: 0;

          color: var(--gray);

          font-size: 12px;

          line-height: 1.68;
        }

        .engix-solutions-why-image {
          height: 670px;

          position: relative;

          overflow: hidden;
        }

        .engix-solutions-why-image img {
          width: 100%;

          height: 100%;

          object-fit: cover;
        }

        .engix-solutions-why-image::after {
          content: '';

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(5,5,5,.7)
            );
        }

        .engix-solutions-why-image > div {
          position: absolute;

          z-index: 2;

          left: 30px;

          bottom: 30px;

          color: white;
        }


        /* =====================================================
           PROCESS
        ====================================================== */

        .engix-solutions-process {
          padding: 120px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-process-heading {
          max-width: 900px;

          margin-bottom: 60px;
        }

        .engix-solutions-process-grid {
          display: grid;

          grid-template-columns: repeat(3,1fr);

          border-top: 1px solid var(--line);
        }

        .engix-solutions-process-grid article {
          min-height: 300px;

          padding: 30px;

          display: flex;

          flex-direction: column;

          border-right: 1px solid var(--line);

          border-bottom: 1px solid var(--line);
        }

        .engix-solutions-process-grid article:nth-child(3n + 1) {
          padding-left: 0;
        }

        .engix-solutions-process-grid article:nth-child(3n) {
          border-right: 0;
        }

        .engix-solutions-process-grid article > span {
          width: max-content;

          padding: 6px 9px;

          background: var(--lavender);

          font-size: 10px;

          font-weight: 800;
        }

        .solution-process-2 > span,
        .solution-process-6 > span {
          background: var(--yellow) !important;
        }

        .solution-process-3 > span {
          background: var(--mint) !important;
        }

        .solution-process-4 > span {
          background: var(--peach) !important;
        }

        .engix-solutions-process-grid h3 {
          margin: auto 0 13px;

          color: var(--ink);

          font-size: 26px;

          letter-spacing: -.04em;
        }

        .engix-solutions-process-grid p {
          margin: 0;

          color: var(--gray);

          font-size: 12px;

          line-height: 1.7;
        }


        /* =====================================================
           CONSULTATION
        ====================================================== */

        .engix-solutions-consultation {
          padding: 120px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-consultation-grid {
          display: grid;

          grid-template-columns: .85fr 1.15fr;

          gap: 90px;

          align-items: start;
        }

        .engix-solutions-consultation-copy {
          position: sticky;

          top: 110px;
        }

        .engix-solutions-consultation-copy h2 {
          max-width: 620px;

          margin: 20px 0 0;

          color: var(--ink);

          font-size: clamp(3rem,4.8vw,5rem);

          line-height: .97;

          letter-spacing: -.06em;

          font-weight: 600;
        }

        .engix-solutions-consultation-copy > p {
          max-width: 570px;

          margin: 25px 0 0;

          color: var(--gray);

          font-size: 14px;

          line-height: 1.75;
        }

        .engix-solutions-consultation-points {
          margin-top: 34px;
        }

        .engix-solutions-consultation-points > div {
          padding: 13px 0;

          display: flex;

          align-items: center;

          gap: 8px;

          border-top: 1px solid var(--line);

          color: #505258;

          font-size: 12px;
        }

        .engix-solutions-contact-options {
          margin-top: 40px;
        }

        .engix-solutions-contact-options > span {
          display: block;

          margin-bottom: 10px;

          color: #898a90;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-solutions-contact-options > a {
          padding: 15px 0;

          display: grid;

          grid-template-columns: 44px 1fr;

          gap: 10px;

          align-items: center;

          border-top: 1px solid var(--line);

          color: var(--ink);

          text-decoration: none;
        }

        .engix-solutions-contact-options svg {
          width: 42px;

          height: 42px;

          padding: 10px;

          background: var(--lavender);
        }

        .engix-solutions-contact-options > a:nth-of-type(2) svg {
          background: var(--mint);
        }

        .engix-solutions-contact-options > a:nth-of-type(3) svg {
          background: var(--yellow);
        }

        .engix-solutions-contact-options small,
        .engix-solutions-contact-options strong {
          display: block;
        }

        .engix-solutions-contact-options small {
          margin-bottom: 3px;

          color: #85868c;

          font-size: 9px;
        }

        .engix-solutions-contact-options strong {
          font-size: 12px;

          font-weight: 650;
        }

        .engix-solutions-form-card {
          padding: 45px;

          background: white;

          border: 1px solid var(--line);

          box-shadow: 0 20px 60px rgba(0,0,0,.045);
        }

        .engix-solutions-form-head {
          padding-bottom: 28px;

          margin-bottom: 30px;

          border-bottom: 1px solid var(--line);
        }

        .engix-solutions-form-head > span {
          display: inline-block;

          padding: 6px 9px;

          background: var(--yellow);

          color: var(--black);

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-solutions-form-head h3 {
          margin: 17px 0 8px;

          color: var(--ink);

          font-size: 30px;

          letter-spacing: -.04em;
        }

        .engix-solutions-form-head p {
          margin: 0;

          color: var(--gray);

          font-size: 12px;

          line-height: 1.65;
        }

        .engix-solutions-form-note {
          margin-top: 24px;

          padding-top: 18px;

          display: flex;

          align-items: flex-start;

          gap: 8px;

          border-top: 1px solid var(--line);

          color: #76777d;

          font-size: 10px;

          line-height: 1.6;
        }


        /* =====================================================
           COMPANY
        ====================================================== */

        .engix-solutions-company {
          padding: 120px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-company-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 85px;

          align-items: center;
        }

        .engix-solutions-company-image {
          height: 600px;

          overflow: hidden;
        }

        .engix-solutions-company-image img {
          width: 100%;

          height: 100%;

          object-fit: cover;
        }

        .engix-solutions-company-copy h2 {
          max-width: 680px;

          margin: 20px 0 0;

          color: var(--ink);

          font-size: clamp(3rem,4.7vw,5rem);

          line-height: .97;

          letter-spacing: -.06em;

          font-weight: 600;
        }

        .engix-solutions-company-copy > p {
          max-width: 640px;

          margin: 24px 0 0;

          color: var(--gray);

          font-size: 14px;

          line-height: 1.78;
        }

        .engix-solutions-company-copy > a {
          width: max-content;

          margin-top: 30px;

          display: inline-flex;

          align-items: center;

          gap: 7px;

          color: var(--ink);

          text-decoration: none;

          font-size: 12px;

          font-weight: 750;

          padding-bottom: 4px;

          border-bottom: 1px solid var(--ink);
        }


        /* =====================================================
           FAQ
        ====================================================== */

        .engix-solutions-faq {
          padding: 120px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-faq-grid {
          display: grid;

          grid-template-columns: .75fr 1.25fr;

          gap: 90px;
        }

        .engix-solutions-faq-grid h2 {
          margin: 20px 0 0;

          color: var(--ink);

          font-size: clamp(3rem,4.8vw,5rem);

          line-height: .97;

          letter-spacing: -.06em;

          font-weight: 600;
        }

        .engix-solutions-faq-list details {
          border-top: 1px solid var(--line);
        }

        .engix-solutions-faq-list details:last-child {
          border-bottom: 1px solid var(--line);
        }

        .engix-solutions-faq-list summary {
          min-height: 78px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          cursor: pointer;

          list-style: none;

          color: var(--ink);

          font-size: 15px;

          font-weight: 650;
        }

        .engix-solutions-faq-list summary::-webkit-details-marker {
          display: none;
        }

        .engix-solutions-faq-list summary svg {
          flex-shrink: 0;

          transition: transform .2s ease;
        }

        .engix-solutions-faq-list details[open] summary svg {
          transform: rotate(180deg);
        }

        .engix-solutions-faq-list details p {
          max-width: 720px;

          margin: 0;

          padding: 0 0 28px;

          color: var(--gray);

          font-size: 13px;

          line-height: 1.75;
        }


        /* =====================================================
           FINAL CTA
        ====================================================== */

        .engix-solutions-final {
          position: relative;

          padding: 110px 0;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-final::before {
          content: '';

          position: absolute;

          top: 0;

          left: 50%;

          width: min(1240px,calc(100% - 56px));

          height: 5px;

          transform: translateX(-50%);

          background: var(--yellow);
        }

        .engix-solutions-final-grid {
          display: grid;

          grid-template-columns: 1.4fr .6fr;

          gap: 80px;

          align-items: end;
        }

        .engix-solutions-final h2 {
          max-width: 900px;

          margin: 20px 0 0;

          color: var(--ink);

          font-size: clamp(3.3rem,5.5vw,5.8rem);

          line-height: .95;

          letter-spacing: -.065em;

          font-weight: 600;
        }

        .engix-solutions-final p {
          max-width: 650px;

          margin: 26px 0 0;

          color: var(--gray);

          font-size: 14px;

          line-height: 1.75;
        }

        .engix-solutions-final-btn {
          justify-self: end;

          min-height: 59px;

          padding: 7px 8px 7px 22px;

          display: inline-flex;

          align-items: center;

          gap: 14px;

          border-radius: 999px;

          background: var(--black);

          color: white;

          text-decoration: none;

          font-size: 13px;

          font-weight: 750;
        }

        .engix-solutions-final-btn > span {
          width: 42px;

          height: 42px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: var(--yellow);

          color: var(--black);
        }


        /* =====================================================
           FOOTER
        ====================================================== */

        .engix-solutions-footer {
          padding: 80px 0 28px;

          background: white;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-footer-main {
          display: grid;

          grid-template-columns: 1.4fr .7fr .9fr 1fr;

          gap: 60px;

          padding-bottom: 60px;
        }

        .engix-solutions-footer-logo {
          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: var(--ink);

          text-decoration: none;
        }

        .engix-solutions-footer-logo span {
          font-size: 35px;
        }

        .engix-solutions-footer-logo strong {
          font-size: 24px;

          letter-spacing: -.04em;
        }

        .engix-solutions-footer-main > div:first-child > p {
          max-width: 360px;

          margin: 20px 0 0;

          color: var(--gray);

          font-size: 12px;

          line-height: 1.7;
        }

        .engix-solutions-footer-main > div:not(:first-child) {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 10px;
        }

        .engix-solutions-footer-main h4 {
          margin: 0 0 8px;

          color: var(--ink);

          font-size: 11px;
        }

        .engix-solutions-footer-main a {
          color: #6c6e74;

          text-decoration: none;

          font-size: 11px;

          line-height: 1.6;
        }

        .engix-solutions-address {
          display: flex;

          gap: 8px;

          color: #6c6e74;

          font-size: 10px;

          line-height: 1.6;
        }

        .engix-solutions-address svg {
          flex-shrink: 0;

          margin-top: 2px;
        }

        .engix-solutions-footer-bottom {
          padding-top: 24px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          border-top: 1px solid var(--line);
        }

        .engix-solutions-footer-bottom p {
          margin: 0;

          color: #898a90;

          font-size: 10px;
        }

        .engix-solutions-footer-bottom > div {
          display: flex;

          gap: 20px;
        }

        .engix-solutions-footer-bottom a {
          color: #898a90;

          text-decoration: none;

          font-size: 10px;
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media(max-width:1050px) {

          .engix-solutions-hero-grid,
          .engix-solutions-context-grid,
          .engix-solutions-why-grid,
          .engix-solutions-company-grid {
            grid-template-columns: 1fr;
          }

          .engix-solutions-hero-copy {
            padding-bottom: 40px;
          }

          .engix-solutions-hero-image,
          .engix-solutions-hero-image > img {
            min-height: 550px;

            height: 550px;
          }

          .engix-solutions-trust-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .engix-solutions-service-grid {
            grid-template-columns: 1fr;
          }

          .engix-solutions-stack-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }

          .engix-solutions-context-image,
          .engix-solutions-why-image,
          .engix-solutions-company-image {
            height: 520px;
          }

          .engix-solutions-work-grid {
            grid-template-columns: 1fr;
          }

          .engix-solutions-process-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .engix-solutions-consultation-grid,
          .engix-solutions-faq-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }

          .engix-solutions-consultation-copy {
            position: static;
          }

          .engix-solutions-final-grid {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .engix-solutions-final-btn {
            justify-self: start;
          }

          .engix-solutions-footer-main {
            grid-template-columns: repeat(2,1fr);
          }

        }


        /* =====================================================
           MOBILE HEADER
        ====================================================== */

        @media(max-width:750px) {

          .engix-solutions-shell {
            width: calc(100% - 32px);
          }

          .engix-solutions-header-inner {
            min-height: 70px;

            grid-template-columns: 1fr auto;
          }

          .engix-solutions-nav {
            display: none;
          }

          .engix-solutions-header-btn {
            min-height: 42px;

            padding: 0 13px;

            font-size: 10px;
          }

          .engix-solutions-heading-grid {
            grid-template-columns: 1fr;

            gap: 25px;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media(max-width:650px) {

          .engix-solutions-hero {
            padding-top: 35px;
          }

          .engix-solutions-hero-copy {
            padding: 45px 0 55px;
          }

          .engix-solutions-hero h1 {
            font-size: clamp(3.7rem,17vw,5.5rem);
          }

          .engix-solutions-hero-buttons {
            flex-direction: column;
          }

          .engix-solutions-primary-btn,
          .engix-solutions-secondary-btn {
            width: 100%;
          }

          .engix-solutions-hero-trust {
            flex-direction: column;
          }

          .engix-solutions-hero-image,
          .engix-solutions-hero-image > img {
            min-height: 420px;

            height: 420px;
          }

          .engix-solutions-hero-card {
            display: none;
          }

          .engix-solutions-hero-overlay {
            left: 20px;

            right: 20px;

            bottom: 22px;
          }

          .engix-solutions-trust-grid {
            grid-template-columns: 1fr;
          }

          .engix-solutions-trust-grid article,
          .engix-solutions-trust-grid article:first-child {
            padding: 24px 0;

            border-right: 0;

            border-bottom: 1px solid var(--line);
          }

          .engix-solutions-services,
          .engix-solutions-stack,
          .engix-solutions-context,
          .engix-solutions-work,
          .engix-solutions-why,
          .engix-solutions-process,
          .engix-solutions-consultation,
          .engix-solutions-company,
          .engix-solutions-faq {
            padding: 85px 0;
          }

          .engix-solutions-service {
            min-height: 570px;

            padding: 28px 23px;
          }

          .engix-solutions-service-points {
            grid-template-columns: 1fr;
          }

          .engix-solutions-stack-list article {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .engix-solutions-context-image,
          .engix-solutions-why-image,
          .engix-solutions-company-image {
            height: 400px;
          }

          .engix-solutions-process-grid {
            grid-template-columns: 1fr;
          }

          .engix-solutions-process-grid article,
          .engix-solutions-process-grid article:nth-child(3n + 1) {
            min-height: 250px;

            padding: 26px 0;

            border-right: 0;
          }

          .engix-solutions-form-card {
            padding: 28px 20px;
          }

          .engix-solutions-final {
            padding: 85px 0;
          }

          .engix-solutions-final::before {
            width: calc(100% - 32px);
          }

          .engix-solutions-final-btn {
            width: 100%;

            justify-content: space-between;
          }

          .engix-solutions-footer-main {
            grid-template-columns: 1fr;

            gap: 38px;
          }

          .engix-solutions-footer-bottom {
            flex-direction: column;

            align-items: flex-start;
          }

        }


        @media(max-width:430px) {

          .engix-solutions-header-btn svg {
            display: none;
          }

          .engix-solutions-logo span {
            font-size: 31px;
          }

          .engix-solutions-logo strong {
            font-size: 21px;
          }

          .engix-solutions-hero h1 {
            font-size: clamp(3.3rem,16vw,4.6rem);
          }

        }

      `}</style>
    </>
  );
}