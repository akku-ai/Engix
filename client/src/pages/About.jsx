import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Globe2,
  Layers3,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Target,
  Workflow
} from 'lucide-react';

export default function About() {
  usePageTitle('About');

  const process = [
    {
      number: '01',
      title: 'Discover',
      description:
        'We begin by understanding the business, users, existing systems, constraints and the outcome the technology needs to create.'
    },
    {
      number: '02',
      title: 'Shape',
      description:
        'We translate the challenge into product priorities, user journeys, technical architecture and a practical delivery roadmap.'
    },
    {
      number: '03',
      title: 'Design',
      description:
        'Interfaces and workflows are designed around clarity, usability and the real tasks people need to complete.'
    },
    {
      number: '04',
      title: 'Engineer',
      description:
        'Our engineers build secure, maintainable frontend, backend, mobile and cloud systems through structured development cycles.'
    },
    {
      number: '05',
      title: 'Validate',
      description:
        'Testing, product reviews and technical validation help ensure the experience works reliably before production release.'
    },
    {
      number: '06',
      title: 'Launch & Evolve',
      description:
        'We support deployment, production improvements, maintenance and future development as the business continues to evolve.'
    }
  ];

  const capabilities = [
    {
      icon: Code2,
      title: 'Software Engineering',
      description:
        'Custom platforms, SaaS products, internal systems and business applications designed around real operational requirements.',
      tone: 'lavender'
    },
    {
      icon: BrainCircuit,
      title: 'AI & Automation',
      description:
        'Conversational AI, intelligent assistants, automation and AI-enabled features designed to create practical business value.',
      tone: 'yellow'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Products',
      description:
        'Responsive web applications and mobile experiences engineered for performance, usability and long-term maintainability.',
      tone: 'mint'
    },
    {
      icon: Layers3,
      title: 'Product & UI/UX',
      description:
        'Product thinking, user journeys, design systems and interfaces that transform complex workflows into clear experiences.',
      tone: 'peach'
    },
    {
      icon: CloudCog,
      title: 'Cloud & Backend',
      description:
        'APIs, databases, authentication, integrations, infrastructure and deployment systems supporting dependable digital products.',
      tone: 'lavender'
    },
    {
      icon: Workflow,
      title: 'Business Automation',
      description:
        'Digital workflows that replace repetitive manual processes and connect teams, customers, data and business operations.',
      tone: 'yellow'
    }
  ];

  const principles = [
    {
      icon: Target,
      title: 'Business outcomes first',
      description:
        'Technology decisions should support measurable business priorities, not exist simply because a technology is available.'
    },
    {
      icon: MessageCircle,
      title: 'Transparent collaboration',
      description:
        'Clear priorities, regular communication and practical discussions keep clients involved throughout the engagement.'
    },
    {
      icon: ShieldCheck,
      title: 'Engineering for the long term',
      description:
        'Maintainability, security, performance and future growth are considered from architecture through production.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous improvement',
      description:
        'Products are expected to evolve. We build foundations that make future improvements easier rather than harder.'
    }
  ];

  const markets = [
    'Startups',
    'SMEs',
    'Technology Companies',
    'Professional Services',
    'Service Businesses',
    'Enterprise Teams',
    'International Businesses',
    'Digital-First Companies'
  ];

  return (
    <>
      <main className="engix-about-page">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="engix-about-hero">
          <div className="engix-about-shell">

            <div className="engix-about-hero-grid">

              <div className="engix-about-hero-copy">

                <span className="engix-about-label">
                  ABOUT ENGIX
                </span>

                <h1>
                  Technology built
                  around businesses,
                  not just briefs.
                </h1>

                <p className="engix-about-hero-intro">
                  Engix Tech Private Limited is a technology and software
                  engineering company helping businesses design, build and
                  evolve modern digital products.
                </p>

                <p className="engix-about-hero-secondary">
                  We bring product thinking, experience design, software
                  engineering, artificial intelligence and cloud technology
                  together to solve real operational challenges and create
                  digital systems designed for long-term growth.
                </p>

                <div className="engix-about-hero-actions">

                  <Link
                    to="/services"
                    className="engix-about-primary-btn"
                  >
                    Explore our capabilities

                    <ArrowRight
                      size={20}
                      strokeWidth={1.8}
                    />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="engix-about-secondary-btn"
                  >
                    See our work

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.8}
                    />
                  </Link>

                </div>

              </div>


              <div className="engix-about-hero-image">

                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=90"
                  alt="Professional technology team collaborating"
                />

                <div className="engix-about-image-overlay">

                  <span>
                    ENGIX TECH PRIVATE LIMITED
                  </span>

                  <strong>
                    Product thinking.
                    <br />
                    Strong engineering.
                    <br />
                    Practical technology.
                  </strong>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            WHO WE ARE
        ====================================================== */}

        <section className="engix-about-company">

          <div className="engix-about-shell">

            <div className="engix-about-company-grid">

              <div className="engix-about-company-label">
                <span>
                  WHO WE ARE
                </span>
              </div>

              <div className="engix-about-company-content">

                <h2>
                  A technology partner
                  for businesses building
                  what comes next.
                </h2>

                <div className="engix-about-company-text-grid">

                  <p>
                    Engix works with organizations that need more than
                    isolated development resources. We help bring clarity
                    to the product, understand how technology fits into the
                    wider business and create systems that remain useful
                    beyond their first release.
                  </p>

                  <p>
                    Our work spans websites, web applications, mobile
                    products, AI-powered experiences, business automation,
                    custom software, APIs, cloud systems and enterprise
                    workflows.
                  </p>

                  <p>
                    We support both domestic and international businesses,
                    combining remote collaboration with structured planning,
                    design, engineering, deployment and ongoing technical
                    support.
                  </p>

                  <p>
                    Whether an organization is launching something new,
                    replacing manual processes or modernizing an existing
                    platform, our focus remains the same: create technology
                    that is clear, reliable and ready to evolve.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            COMPANY IMAGE
        ====================================================== */}

        <section className="engix-about-wide-image">

          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90"
            alt="Business and technology professionals planning a digital product"
          />

          <div className="engix-about-wide-overlay">

            <span>
              TECHNOLOGY WITH CONTEXT
            </span>

            <strong>
              The right solution starts
              with understanding the
              business behind it.
            </strong>

          </div>

        </section>


        {/* =====================================================
            WHAT WE BUILD
        ====================================================== */}

        <section className="engix-about-capabilities">

          <div className="engix-about-shell">

            <div className="engix-about-section-heading">

              <div>
                <span className="engix-about-label">
                  WHAT WE BUILD
                </span>

                <h2>
                  Connected capabilities
                  across the digital
                  product lifecycle.
                </h2>
              </div>

              <p>
                Instead of treating strategy, design, development and
                infrastructure as separate activities, we connect them
                through one product and engineering workflow.
              </p>

            </div>


            <div className="engix-about-capabilities-grid">

              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`engix-about-capability capability-${item.tone}`}
                  >

                    <div className="engix-about-capability-top">

                      <span>
                        0{index + 1}
                      </span>

                      <div>
                        <Icon
                          size={31}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            INTERNATIONAL DELIVERY
        ====================================================== */}

        <section className="engix-about-global">

          <div className="engix-about-shell">

            <div className="engix-about-global-grid">

              <div className="engix-about-global-image">

                <img
                  src="https://images.unsplash.com/photo-1497366811364-ccf3f5bdb57d?auto=format&fit=crop&w=1800&q=90"
                  alt="Modern international business environment"
                />

                <div>

                  <span>
                    GLOBAL DELIVERY
                  </span>

                  <strong>
                    Built from India.
                    <br />
                    Designed to work
                    across borders.
                  </strong>

                </div>

              </div>


              <div className="engix-about-global-copy">

                <span className="engix-about-label">
                  INTERNATIONAL PERSPECTIVE
                </span>

                <h2>
                  Working across markets
                  with one clear delivery
                  process.
                </h2>

                <p>
                  Modern technology teams no longer need to be separated
                  by geography. Engix uses structured remote collaboration
                  to work effectively with businesses operating across
                  different markets and time zones.
                </p>

                <p>
                  Our approach emphasizes documentation, regular reviews,
                  transparent priorities and clear ownership so that
                  distributed engagements remain organized from discovery
                  through production.
                </p>


                <div className="engix-about-global-points">

                  <div>
                    <CheckCircle2 size={21} />
                    <span>Domestic and international collaboration</span>
                  </div>

                  <div>
                    <CheckCircle2 size={21} />
                    <span>Remote-first product delivery</span>
                  </div>

                  <div>
                    <CheckCircle2 size={21} />
                    <span>Transparent project communication</span>
                  </div>

                  <div>
                    <CheckCircle2 size={21} />
                    <span>Long-term engineering support</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="engix-about-process">

          <div className="engix-about-shell">

            <div className="engix-about-process-heading">

              <span className="engix-about-label">
                HOW WE WORK
              </span>

              <h2>
                From business challenge
                to production software.
              </h2>

              <p>
                Our process provides enough structure to keep development
                predictable while remaining flexible enough to respond
                when product priorities evolve.
              </p>

            </div>


            <div className="engix-about-process-grid">

              {process.map((step, index) => (
                <article
                  key={step.number}
                  className={`engix-about-process-step step-${index + 1}`}
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
            ENGINEERING IMAGE
        ====================================================== */}

        <section className="engix-about-engineering">

          <div className="engix-about-shell">

            <div className="engix-about-engineering-grid">

              <div className="engix-about-engineering-copy">

                <span className="engix-about-label">
                  ENGINEERING CULTURE
                </span>

                <h2>
                  We care about what
                  happens after launch.
                </h2>

                <p>
                  Shipping the first release is only one stage of a
                  product’s life. Architecture choices, code quality,
                  deployment processes and documentation influence how
                  easily that product can continue to improve.
                </p>

                <p>
                  That is why we think about scalability,
                  maintainability, performance and operational reliability
                  throughout development — not as problems to solve later.
                </p>

                <Link
                  to="/services"
                  className="engix-about-text-link"
                >
                  Explore engineering services

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.7}
                  />
                </Link>

              </div>


              <div className="engix-about-engineering-image">

                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=90"
                  alt="Professional software engineering team working"
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PRINCIPLES
        ====================================================== */}

        <section className="engix-about-principles">

          <div className="engix-about-shell">

            <div className="engix-about-principles-heading">

              <span className="engix-about-label">
                WHAT GUIDES US
              </span>

              <h2>
                Principles behind
                the way we build.
              </h2>

            </div>


            <div className="engix-about-principles-grid">

              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article key={principle.title}>

                    <div className={`engix-about-principle-icon principle-${index + 1}`}>

                      <Icon
                        size={28}
                        strokeWidth={1.6}
                      />

                    </div>

                    <span>
                      0{index + 1}
                    </span>

                    <h3>
                      {principle.title}
                    </h3>

                    <p>
                      {principle.description}
                    </p>

                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            MARKETS
        ====================================================== */}

        <section className="engix-about-markets">

          <div className="engix-about-shell">

            <div className="engix-about-markets-grid">

              <div>

                <span className="engix-about-label">
                  WHO WE WORK WITH
                </span>

                <h2>
                  Technology for businesses
                  at different stages of growth.
                </h2>

              </div>


              <div className="engix-about-market-content">

                <p>
                  Our delivery model can support early-stage product
                  development as well as established businesses modernizing
                  existing operations and technology systems.
                </p>

                <div className="engix-about-market-tags">

                  {markets.map((market) => (
                    <span key={market}>
                      {market}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            STATEMENT
        ====================================================== */}

        <section className="engix-about-statement">

          <div className="engix-about-shell">

            <div className="engix-about-statement-inner">

              <Globe2
                size={38}
                strokeWidth={1.4}
              />

              <blockquote>
                We believe strong digital products happen when
                business understanding, thoughtful experience
                design and dependable engineering work together.
              </blockquote>

              <span>
                ENGIX TECH PRIVATE LIMITED
              </span>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="engix-about-cta">

          <div className="engix-about-shell">

            <div className="engix-about-cta-grid">

              <div>

                <span className="engix-about-label">
                  LET'S WORK TOGETHER
                </span>

                <h2>
                  Have a technology
                  challenge worth solving?
                </h2>

                <p>
                  Tell us what you are trying to launch, improve or
                  transform. We can help define the right product,
                  experience and engineering approach.
                </p>

              </div>


              <Link
                to="/contact"
                className="engix-about-cta-btn"
              >
                Start a conversation

                <span>
                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.8}
                  />
                </span>
              </Link>

            </div>

          </div>

        </section>

      </main>


      <style>{`

        /* =====================================================
           BASE
        ====================================================== */

        .engix-about-page {
          --black: #050505;
          --ink: #111318;

          --white: #ffffff;

          --lavender: #e9e6ff;
          --yellow: #fff14f;
          --mint: #dff5df;
          --peach: #f4dfd2;

          --gray: #686b72;

          --line:
            rgba(17,19,24,.11);

          background:
            #ffffff;

          color:
            var(--ink);

          overflow:
            hidden;
        }

        .engix-about-shell {
          width:
            min(1240px, calc(100% - 56px));

          margin:
            0 auto;
        }

        .engix-about-label {
          display:
            inline-block;

          width:
            max-content;

          padding:
            7px 11px;

          background:
            var(--lavender);

          color:
            #35304b;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .11em;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .engix-about-hero {
          padding:
            95px 0 0;

          background:
            #ffffff;
        }

        .engix-about-hero-grid {
          display:
            grid;

          grid-template-columns:
            1.05fr .95fr;

          gap:
            75px;

          align-items:
            end;
        }

        .engix-about-hero-copy {
          padding:
            70px 0 100px;
        }

        .engix-about-hero h1 {
          max-width:
            820px;

          margin:
            27px 0 0;

          color:
            var(--ink);

          font-size:
            clamp(4rem,7vw,7.2rem);

          line-height:
            .89;

          letter-spacing:
            -.07em;

          font-weight:
            600;
        }

        .engix-about-hero-intro {
          max-width:
            680px;

          margin:
            38px 0 0;

          color:
            #505259;

          font-size:
            clamp(1.15rem,1.6vw,1.4rem);

          line-height:
            1.65;

          font-weight:
            500;
        }

        .engix-about-hero-secondary {
          max-width:
            680px;

          margin:
            18px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.78;
        }


        /* HERO ACTIONS */

        .engix-about-hero-actions {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            38px;
        }

        .engix-about-primary-btn,
        .engix-about-secondary-btn {
          min-height:
            57px;

          padding:
            0 22px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            9px;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            700;

          transition:
            transform .2s ease,
            background .2s ease;
        }

        .engix-about-primary-btn {
          background:
            var(--black);

          color:
            white;
        }

        .engix-about-primary-btn svg {
          color:
            var(--yellow);
        }

        .engix-about-secondary-btn {
          background:
            white;

          color:
            var(--black);

          border:
            1px solid rgba(5,5,5,.16);
        }

        .engix-about-primary-btn:hover,
        .engix-about-secondary-btn:hover {
          transform:
            translateY(-2px);
        }


        /* HERO IMAGE */

        .engix-about-hero-image {
          position:
            relative;

          min-height:
            690px;

          overflow:
            hidden;
        }

        .engix-about-hero-image img {
          width:
            100%;

          height:
            690px;

          display:
            block;

          object-fit:
            cover;

          transition:
            transform .7s ease;
        }

        .engix-about-hero-image:hover img {
          transform:
            scale(1.025);
        }

        .engix-about-hero-image::after {
          content:
            '';

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(5,5,5,.72)
            );
        }

        .engix-about-image-overlay {
          position:
            absolute;

          z-index:
            2;

          left:
            32px;

          bottom:
            32px;

          color:
            white;
        }

        .engix-about-image-overlay span {
          display:
            inline-block;

          margin-bottom:
            10px;

          padding:
            5px 8px;

          background:
            var(--yellow);

          color:
            #050505;

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-about-image-overlay strong {
          display:
            block;

          font-size:
            30px;

          line-height:
            1.04;

          letter-spacing:
            -.04em;
        }


        /* =====================================================
           COMPANY
        ====================================================== */

        .engix-about-company {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-about-company-grid {
          display:
            grid;

          grid-template-columns:
            .45fr 1.55fr;

          gap:
            80px;
        }

        .engix-about-company-label span {
          display:
            inline-block;

          padding:
            7px 11px;

          background:
            var(--lavender);

          color:
            #35304b;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .11em;
        }

        .engix-about-company-content h2 {
          max-width:
            900px;

          margin:
            0;

          font-size:
            clamp(3rem,5vw,5.2rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-about-company-text-grid {
          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          gap:
            25px 50px;

          margin-top:
            45px;
        }

        .engix-about-company-text-grid p {
          margin:
            0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.78;
        }


        /* =====================================================
           WIDE IMAGE
        ====================================================== */

        .engix-about-wide-image {
          position:
            relative;

          width:
            100%;

          height:
            min(700px,65vw);

          min-height:
            500px;

          overflow:
            hidden;
        }

        .engix-about-wide-image img {
          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          display:
            block;
        }

        .engix-about-wide-image::after {
          content:
            '';

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              180deg,
              transparent 55%,
              rgba(5,5,5,.72)
            );
        }

        .engix-about-wide-overlay {
          position:
            absolute;

          z-index:
            2;

          left:
            max(28px,calc((100vw - 1240px)/2));

          bottom:
            40px;

          max-width:
            600px;

          color:
            white;
        }

        .engix-about-wide-overlay span {
          display:
            inline-block;

          margin-bottom:
            12px;

          padding:
            5px 8px;

          background:
            var(--yellow);

          color:
            var(--black);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-about-wide-overlay strong {
          display:
            block;

          font-size:
            clamp(2.3rem,4vw,4rem);

          line-height:
            1;

          letter-spacing:
            -.05em;
        }


        /* =====================================================
           COMMON SECTION HEADING
        ====================================================== */

        .engix-about-section-heading {
          display:
            grid;

          grid-template-columns:
            1.25fr .75fr;

          gap:
            80px;

          align-items:
            end;

          margin-bottom:
            65px;
        }

        .engix-about-section-heading h2 {
          max-width:
            850px;

          margin:
            20px 0 0;

          color:
            var(--ink);

          font-size:
            clamp(3rem,5vw,5.2rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-about-section-heading > p {
          margin:
            0;

          color:
            var(--gray);

          font-size:
            16px;

          line-height:
            1.75;
        }


        /* =====================================================
           CAPABILITIES
        ====================================================== */

        .engix-about-capabilities {
          padding:
            120px 0;

          background:
            #ffffff;
        }

        .engix-about-capabilities-grid {
          display:
            grid;

          grid-template-columns:
            repeat(3,1fr);

          gap:
            14px;
        }

        .engix-about-capability {
          position:
            relative;

          min-height:
            380px;

          padding:
            32px;

          display:
            flex;

          flex-direction:
            column;

          border:
            1px solid var(--line);

          background:
            #ffffff;

          overflow:
            hidden;

          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .engix-about-capability::before {
          content:
            '';

          position:
            absolute;

          top:
            0;

          left:
            0;

          right:
            0;

          height:
            6px;
        }

        .capability-lavender::before {
          background:
            var(--lavender);
        }

        .capability-yellow::before {
          background:
            var(--yellow);
        }

        .capability-mint::before {
          background:
            var(--mint);
        }

        .capability-peach::before {
          background:
            var(--peach);
        }

        .engix-about-capability:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 22px 50px rgba(0,0,0,.055);
        }

        .engix-about-capability-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;
        }

        .engix-about-capability-top > span {
          color:
            #7e7f84;

          font-size:
            11px;

          font-weight:
            700;
        }

        .engix-about-capability-top > div {
          width:
            49px;

          height:
            49px;

          display:
            grid;

          place-items:
            center;

          color:
            var(--ink);
        }

        .capability-lavender
        .engix-about-capability-top > div {
          background:
            var(--lavender);
        }

        .capability-yellow
        .engix-about-capability-top > div {
          background:
            var(--yellow);
        }

        .capability-mint
        .engix-about-capability-top > div {
          background:
            var(--mint);
        }

        .capability-peach
        .engix-about-capability-top > div {
          background:
            var(--peach);
        }

        .engix-about-capability h3 {
          margin:
            auto 0 15px;

          font-size:
            27px;

          line-height:
            1.05;

          letter-spacing:
            -.04em;
        }

        .engix-about-capability p {
          margin:
            0;

          color:
            var(--gray);

          font-size:
            13px;

          line-height:
            1.72;
        }


        /* =====================================================
           GLOBAL
        ====================================================== */

        .engix-about-global {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-about-global-grid {
          display:
            grid;

          grid-template-columns:
            .95fr 1.05fr;

          gap:
            85px;

          align-items:
            center;
        }

        .engix-about-global-image {
          position:
            relative;

          height:
            650px;

          overflow:
            hidden;
        }

        .engix-about-global-image img {
          width:
            100%;

          height:
            100%;

          object-fit:
            cover;
        }

        .engix-about-global-image::after {
          content:
            '';

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(5,5,5,.7)
            );
        }

        .engix-about-global-image > div {
          position:
            absolute;

          z-index:
            2;

          left:
            30px;

          bottom:
            30px;

          color:
            white;
        }

        .engix-about-global-image span {
          display:
            inline-block;

          margin-bottom:
            10px;

          padding:
            5px 8px;

          background:
            var(--yellow);

          color:
            var(--black);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-about-global-image strong {
          display:
            block;

          font-size:
            clamp(2rem,3vw,3rem);

          line-height:
            1.02;

          letter-spacing:
            -.045em;
        }

        .engix-about-global-copy h2 {
          max-width:
            700px;

          margin:
            20px 0 0;

          font-size:
            clamp(3rem,4.8vw,5rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-about-global-copy > p {
          max-width:
            680px;

          margin:
            25px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.78;
        }

        .engix-about-global-points {
          margin-top:
            35px;
        }

        .engix-about-global-points > div {
          padding:
            15px 0;

          display:
            flex;

          align-items:
            center;

          gap:
            11px;

          border-top:
            1px solid var(--line);

          color:
            #4e5057;

          font-size:
            13px;
        }


        /* =====================================================
           PROCESS
        ====================================================== */

        .engix-about-process {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-about-process-heading {
          max-width:
            900px;

          margin-bottom:
            65px;
        }

        .engix-about-process-heading h2 {
          margin:
            20px 0 0;

          font-size:
            clamp(3rem,5vw,5.2rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-about-process-heading p {
          max-width:
            700px;

          margin:
            25px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.75;
        }

        .engix-about-process-grid {
          display:
            grid;

          grid-template-columns:
            repeat(3,1fr);

          border-top:
            1px solid var(--line);
        }

        .engix-about-process-step {
          min-height:
            330px;

          padding:
            30px;

          display:
            flex;

          flex-direction:
            column;

          border-right:
            1px solid var(--line);

          border-bottom:
            1px solid var(--line);
        }

        .engix-about-process-step:nth-child(3n + 1) {
          padding-left:
            0;
        }

        .engix-about-process-step:nth-child(3n) {
          border-right:
            0;
        }

        .engix-about-process-step > span {
          width:
            max-content;

          padding:
            6px 9px;

          background:
            var(--lavender);

          font-size:
            10px;

          font-weight:
            800;
        }

        .step-2 > span,
        .step-6 > span {
          background:
            var(--yellow);
        }

        .step-3 > span {
          background:
            var(--mint);
        }

        .step-4 > span {
          background:
            var(--peach);
        }

        .step-5 > span {
          background:
            var(--lavender);
        }

        .engix-about-process-step h3 {
          margin:
            auto 0 15px;

          color:
            var(--ink);

          font-size:
            29px;

          letter-spacing:
            -.04em;
        }

        .engix-about-process-step p {
          margin:
            0;

          color:
            var(--gray);

          font-size:
            13px;

          line-height:
            1.72;
        }


        /* =====================================================
           ENGINEERING
        ====================================================== */

        .engix-about-engineering {
          padding:
            120px 0;

          background:
            #ffffff;
        }

        .engix-about-engineering-grid {
          display:
            grid;

          grid-template-columns:
            .9fr 1.1fr;

          gap:
            80px;

          align-items:
            center;
        }

        .engix-about-engineering-copy h2 {
          max-width:
            660px;

          margin:
            20px 0 0;

          font-size:
            clamp(3rem,4.8vw,5rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-about-engineering-copy p {
          max-width:
            620px;

          margin:
            25px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.78;
        }

        .engix-about-text-link {
          width:
            max-content;

          margin-top:
            30px;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          color:
            var(--ink);

          text-decoration:
            none;

          font-size:
            13px;

          font-weight:
            750;

          border-bottom:
            1px solid var(--ink);

          padding-bottom:
            4px;
        }

        .engix-about-engineering-image {
          height:
            620px;

          overflow:
            hidden;
        }

        .engix-about-engineering-image img {
          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          transition:
            transform .65s ease;
        }

        .engix-about-engineering-image:hover img {
          transform:
            scale(1.025);
        }


        /* =====================================================
           PRINCIPLES
        ====================================================== */

        .engix-about-principles {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-about-principles-heading {
          max-width:
            850px;

          margin-bottom:
            60px;
        }

        .engix-about-principles-heading h2 {
          margin:
            20px 0 0;

          font-size:
            clamp(3rem,5vw,5.2rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-about-principles-grid {
          display:
            grid;

          grid-template-columns:
            repeat(4,1fr);

          border-top:
            1px solid var(--line);
        }

        .engix-about-principles-grid article {
          min-height:
            360px;

          padding:
            30px;

          display:
            flex;

          flex-direction:
            column;

          border-right:
            1px solid var(--line);
        }

        .engix-about-principles-grid article:first-child {
          padding-left:
            0;
        }

        .engix-about-principles-grid article:last-child {
          border-right:
            0;
        }

        .engix-about-principle-icon {
          width:
            48px;

          height:
            48px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            20px;

          color:
            var(--ink);
        }

        .principle-1 {
          background:
            var(--lavender);
        }

        .principle-2 {
          background:
            var(--yellow);
        }

        .principle-3 {
          background:
            var(--mint);
        }

        .principle-4 {
          background:
            var(--peach);
        }

        .engix-about-principles-grid article > span {
          color:
            #88898f;

          font-size:
            10px;
        }

        .engix-about-principles-grid h3 {
          margin:
            auto 0 14px;

          font-size:
            23px;

          line-height:
            1.08;

          letter-spacing:
            -.04em;
        }

        .engix-about-principles-grid p {
          margin:
            0;

          color:
            var(--gray);

          font-size:
            13px;

          line-height:
            1.72;
        }


        /* =====================================================
           MARKETS
        ====================================================== */

        .engix-about-markets {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-about-markets-grid {
          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          gap:
            90px;
        }

        .engix-about-markets h2 {
          max-width:
            700px;

          margin:
            20px 0 0;

          font-size:
            clamp(3rem,4.8vw,5rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-about-market-content > p {
          margin:
            40px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.75;
        }

        .engix-about-market-tags {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            8px;

          margin-top:
            35px;
        }

        .engix-about-market-tags span {
          padding:
            10px 13px;

          border:
            1px solid var(--line);

          color:
            #46474e;

          font-size:
            11px;
        }

        .engix-about-market-tags span:nth-child(4n + 1) {
          background:
            var(--lavender);
        }

        .engix-about-market-tags span:nth-child(4n + 2) {
          background:
            var(--yellow);
        }

        .engix-about-market-tags span:nth-child(4n + 3) {
          background:
            var(--mint);
        }

        .engix-about-market-tags span:nth-child(4n + 4) {
          background:
            var(--peach);
        }


        /* =====================================================
           STATEMENT
        ====================================================== */

        .engix-about-statement {
          padding:
            100px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-about-statement-inner {
          max-width:
            950px;

          margin:
            0 auto;

          text-align:
            center;
        }

        .engix-about-statement-inner > svg {
          width:
            58px;

          height:
            58px;

          padding:
            12px;

          background:
            var(--yellow);

          color:
            var(--black);
        }

        .engix-about-statement blockquote {
          margin:
            35px 0 25px;

          color:
            var(--ink);

          font-size:
            clamp(2.1rem,4vw,4rem);

          line-height:
            1.07;

          letter-spacing:
            -.05em;

          font-weight:
            600;
        }

        .engix-about-statement-inner > span {
          color:
            #7b7c82;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .12em;
        }


        /* =====================================================
           CTA
        ====================================================== */

        .engix-about-cta {
          position:
            relative;

          padding:
            110px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-about-cta::before {
          content:
            '';

          position:
            absolute;

          top:
            0;

          left:
            50%;

          width:
            min(1240px,calc(100% - 56px));

          height:
            5px;

          transform:
            translateX(-50%);

          background:
            var(--yellow);
        }

        .engix-about-cta-grid {
          display:
            grid;

          grid-template-columns:
            1.4fr .6fr;

          gap:
            80px;

          align-items:
            end;
        }

        .engix-about-cta h2 {
          max-width:
            900px;

          margin:
            20px 0 0;

          font-size:
            clamp(3.3rem,5.5vw,5.8rem);

          line-height:
            .95;

          letter-spacing:
            -.065em;

          font-weight:
            600;
        }

        .engix-about-cta p {
          max-width:
            680px;

          margin:
            27px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.75;
        }

        .engix-about-cta-btn {
          justify-self:
            end;

          min-height:
            59px;

          padding:
            7px 8px 7px 22px;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            14px;

          border-radius:
            999px;

          background:
            var(--black);

          color:
            white;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            750;

          transition:
            transform .2s ease;
        }

        .engix-about-cta-btn:hover {
          transform:
            translateY(-2px);
        }

        .engix-about-cta-btn > span {
          width:
            42px;

          height:
            42px;

          display:
            grid;

          place-items:
            center;

          border-radius:
            50%;

          background:
            var(--yellow);

          color:
            var(--black);
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media(max-width:1000px) {

          .engix-about-hero-grid,
          .engix-about-global-grid,
          .engix-about-engineering-grid {
            grid-template-columns:
              1fr;
          }

          .engix-about-hero-copy {
            padding-bottom:
              35px;
          }

          .engix-about-hero-image,
          .engix-about-hero-image img {
            min-height:
              520px;

            height:
              520px;
          }

          .engix-about-company-grid {
            grid-template-columns:
              1fr;

            gap:
              30px;
          }

          .engix-about-section-heading {
            grid-template-columns:
              1fr;

            gap:
              25px;
          }

          .engix-about-capabilities-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .engix-about-global-image {
            height:
              520px;
          }

          .engix-about-process-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .engix-about-process-step:nth-child(3n) {
            border-right:
              1px solid var(--line);
          }

          .engix-about-process-step:nth-child(2n) {
            border-right:
              0;
          }

          .engix-about-process-step:nth-child(3n + 1) {
            padding-left:
              30px;
          }

          .engix-about-process-step:nth-child(2n + 1) {
            padding-left:
              0;
          }

          .engix-about-engineering-image {
            height:
              520px;
          }

          .engix-about-principles-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .engix-about-principles-grid article {
            border-bottom:
              1px solid var(--line);
          }

          .engix-about-markets-grid {
            grid-template-columns:
              1fr;

            gap:
              30px;
          }

          .engix-about-market-content > p {
            margin-top:
              0;
          }

          .engix-about-cta-grid {
            grid-template-columns:
              1fr;

            gap:
              45px;
          }

          .engix-about-cta-btn {
            justify-self:
              start;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media(max-width:650px) {

          .engix-about-shell {
            width:
              calc(100% - 32px);
          }

          .engix-about-hero {
            padding-top:
              45px;
          }

          .engix-about-hero-copy {
            padding:
              45px 0 55px;
          }

          .engix-about-hero h1 {
            font-size:
              clamp(3.7rem,17vw,5.5rem);
          }

          .engix-about-primary-btn,
          .engix-about-secondary-btn {
            width:
              100%;
          }

          .engix-about-hero-image,
          .engix-about-hero-image img {
            min-height:
              410px;

            height:
              410px;
          }

          .engix-about-company,
          .engix-about-capabilities,
          .engix-about-global,
          .engix-about-process,
          .engix-about-engineering,
          .engix-about-principles,
          .engix-about-markets {
            padding:
              85px 0;
          }

          .engix-about-company-text-grid {
            grid-template-columns:
              1fr;
          }

          .engix-about-wide-image {
            min-height:
              420px;

            height:
              420px;
          }

          .engix-about-wide-overlay {
            left:
              20px;

            right:
              20px;

            bottom:
              24px;
          }

          .engix-about-capabilities-grid {
            grid-template-columns:
              1fr;
          }

          .engix-about-capability {
            min-height:
              350px;
          }

          .engix-about-global-image,
          .engix-about-engineering-image {
            height:
              410px;
          }

          .engix-about-process-grid {
            grid-template-columns:
              1fr;
          }

          .engix-about-process-step,
          .engix-about-process-step:nth-child(3n + 1),
          .engix-about-process-step:nth-child(2n + 1) {
            min-height:
              270px;

            padding:
              26px 0;

            border-right:
              0;
          }

          .engix-about-principles-grid {
            grid-template-columns:
              1fr;
          }

          .engix-about-principles-grid article,
          .engix-about-principles-grid article:first-child {
            min-height:
              290px;

            padding:
              28px 0;

            border-right:
              0;
          }

          .engix-about-statement {
            padding:
              75px 0;
          }

          .engix-about-cta {
            padding:
              85px 0;
          }

          .engix-about-cta::before {
            width:
              calc(100% - 32px);
          }

          .engix-about-cta-btn {
            width:
              100%;

            justify-content:
              space-between;
          }

        }

      `}</style>
    </>
  );
}