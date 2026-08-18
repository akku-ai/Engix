import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  LayoutDashboard,
  Palette,
  ServerCog,
  Smartphone,
  Workflow,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Services() {
  usePageTitle('Services');

  const services = [
    {
      number: '01',
      icon: Code2,
      title: 'Custom Software Development',
      description:
        'We design and engineer custom software products around real business workflows, operational challenges and long-term growth requirements.',
      points: [
        'Business applications',
        'Internal tools',
        'SaaS platforms',
        'Workflow automation'
      ],
      tone: 'lavender'
    },
    {
      number: '02',
      icon: BrainCircuit,
      title: 'AI Solutions & Automation',
      description:
        'We help businesses apply AI where it creates practical value — from intelligent automation to AI-enabled product features and business workflows.',
      points: [
        'AI integrations',
        'Process automation',
        'AI assistants',
        'Data-driven workflows'
      ],
      tone: 'mint'
    },
    {
      number: '03',
      icon: Smartphone,
      title: 'Web & Mobile Applications',
      description:
        'Modern web and mobile products built with a strong focus on usability, performance, scalability and consistent cross-device experiences.',
      points: [
        'Web applications',
        'Mobile applications',
        'Responsive platforms',
        'Customer portals'
      ],
      tone: 'peach'
    },
    {
      number: '04',
      icon: Palette,
      title: 'Product & UI/UX Design',
      description:
        'We turn complex business requirements into clear interfaces, structured user journeys and digital experiences that are easier to understand and use.',
      points: [
        'Product discovery',
        'UX architecture',
        'UI design systems',
        'Interactive prototypes'
      ],
      tone: 'yellow'
    },
    {
      number: '05',
      icon: ServerCog,
      title: 'Backend & API Engineering',
      description:
        'Secure backend systems, APIs, authentication and integrations designed to support reliable digital products and future expansion.',
      points: [
        'REST APIs',
        'Authentication',
        'Third-party integrations',
        'Scalable backend systems'
      ],
      tone: 'neutral'
    },
    {
      number: '06',
      icon: CloudCog,
      title: 'Cloud & DevOps',
      description:
        'Deployment, infrastructure and operational systems that help products stay available, maintainable and ready to scale.',
      points: [
        'Cloud deployment',
        'CI/CD pipelines',
        'Nginx & server setup',
        'Monitoring & maintenance'
      ],
      tone: 'lavender-soft'
    },
    {
      number: '07',
      icon: LayoutDashboard,
      title: 'Enterprise CRM & ERP Solutions',
      description:
        'Custom business systems for managing customers, operations, teams, workflows and reporting from a single digital environment.',
      points: [
        'CRM systems',
        'ERP workflows',
        'Admin dashboards',
        'Operational reporting'
      ],
      tone: 'mint'
    },
    {
      number: '08',
      icon: Database,
      title: 'Data & Database Solutions',
      description:
        'Structured data systems and database architecture that support reliable applications, business reporting and long-term product performance.',
      points: [
        'Database architecture',
        'MongoDB systems',
        'Data modeling',
        'Reporting workflows'
      ],
      tone: 'peach'
    }
  ];

  const deliverySteps = [
    {
      number: '01',
      title: 'Understand',
      text:
        'We begin with the business challenge, current systems, users, priorities and the outcome you need to create.'
    },
    {
      number: '02',
      title: 'Shape',
      text:
        'We define the right product scope, user experience, technical architecture and delivery plan before unnecessary development begins.'
    },
    {
      number: '03',
      title: 'Engineer',
      text:
        'Design and engineering move together through structured development cycles, testing and regular reviews.'
    },
    {
      number: '04',
      title: 'Launch & Evolve',
      text:
        'We deploy, monitor, support and continue improving the product as your business and user requirements change.'
    }
  ];

  return (
    <>
      <main className="engix-services-page">

        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="engix-services-hero">
          <div className="engix-services-shell">

            <div className="engix-services-hero-grid">

              <div className="engix-services-hero-copy">
                <span className="engix-services-kicker">
                  SERVICES & CAPABILITIES
                </span>

                <h1>
                  Technology services
                  <br />
                  built around
                  <br />
                  business outcomes.
                </h1>

                <p>
                  Engix Tech Private Limited brings product strategy,
                  design, software engineering, AI and cloud together
                  to help businesses create modern digital products,
                  improve operations and scale with confidence.
                </p>

                <div className="engix-services-hero-actions">
                  <Link
                    to="/contact"
                    className="engix-services-primary-btn"
                  >
                    Discuss your requirement
                    <ArrowRight size={19} />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="engix-services-secondary-btn"
                  >
                    View our work
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="engix-services-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=90"
                  alt="Professional technology team working together"
                />

                <div className="engix-services-image-overlay">
                  <span>ENGIX</span>

                  <strong>
                    Strategy.
                    <br />
                    Product.
                    <br />
                    Engineering.
                  </strong>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================
            INTRO
        ====================================================== */}

        <section className="engix-services-intro">
          <div className="engix-services-shell">

            <div className="engix-services-intro-grid">

              <div>
                <span>OUR APPROACH</span>
              </div>

              <div>
                <h2>
                  One technology partner
                  across the entire digital
                  product lifecycle.
                </h2>

                <p>
                  Businesses often lose time coordinating separate
                  design, development, infrastructure and support teams.
                  Engix brings those capabilities together so product
                  decisions remain aligned from first idea through launch
                  and long-term improvement.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================
            SERVICES GRID
        ====================================================== */}

        <section className="engix-services-capabilities">
          <div className="engix-services-shell">

            <div className="engix-services-heading">
              <span>WHAT WE DO</span>

              <h2>
                Capabilities designed
                for modern businesses.
              </h2>

              <p>
                From customer-facing applications to internal software,
                AI systems and cloud infrastructure, our services are
                designed to work together — not as isolated offerings.
              </p>
            </div>

            <div className="engix-services-grid">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className={`engix-service-card engix-service-${service.tone}`}
                    key={service.title}
                  >

                    <div className="engix-service-card-top">
                      <span>{service.number}</span>

                      <Icon
                        size={29}
                        strokeWidth={1.6}
                      />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="engix-service-points">
                      {service.points.map((point) => (
                        <div key={point}>
                          <CheckCircle2 size={15} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      Discuss this capability
                      <ArrowUpRight size={17} />
                    </Link>

                  </article>
                );
              })}

            </div>

          </div>
        </section>

        {/* ======================================================
            BUSINESS VALUE / IMAGE
        ====================================================== */}

        <section className="engix-services-value">

          <div className="engix-services-shell">

            <div className="engix-services-value-grid">

              <div className="engix-services-value-image">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90"
                  alt="Business team discussing technology strategy"
                />

                <div className="engix-services-value-overlay">
                  <span>ENGINEERING WITH CONTEXT</span>

                  <strong>
                    Better technology starts
                    with understanding the
                    business behind it.
                  </strong>
                </div>
              </div>

              <div className="engix-services-value-copy">

                <span className="engix-services-small-label">
                  WHY ENGIX
                </span>

                <h2>
                  We think beyond
                  the specification.
                </h2>

                <p>
                  A feature list can tell us what to build.
                  It rarely explains why the product matters.
                  Our role is to understand both — so technical
                  decisions support the wider business goal.
                </p>

                <div className="engix-services-value-list">

                  <article>
                    <Workflow size={25} />

                    <div>
                      <h3>Integrated delivery</h3>

                      <p>
                        Product thinking, UI/UX and engineering work
                        together rather than through disconnected handovers.
                      </p>
                    </div>
                  </article>

                  <article>
                    <ShieldCheck size={25} />

                    <div>
                      <h3>Reliable architecture</h3>

                      <p>
                        Systems are designed with maintainability,
                        security and future growth in mind.
                      </p>
                    </div>
                  </article>

                  <article>
                    <ServerCog size={25} />

                    <div>
                      <h3>End-to-end ownership</h3>

                      <p>
                        From backend and APIs to deployment and support,
                        one team stays accountable for the complete solution.
                      </p>
                    </div>
                  </article>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================================
            DELIVERY MODEL
        ====================================================== */}

        <section className="engix-services-process">

          <div className="engix-services-shell">

            <div className="engix-services-process-heading">
              <span>HOW WE DELIVER</span>

              <h2>
                From business challenge
                to working software.
              </h2>
            </div>

            <div className="engix-services-process-grid">

              {deliverySteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}

            </div>

          </div>

        </section>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}

        <section className="engix-services-final-cta">

          <div className="engix-services-shell">

            <div className="engix-services-final-grid">

              <div>
                <span>LET'S BUILD TOGETHER</span>

                <h2>
                  Have a product,
                  platform or business
                  challenge to solve?
                </h2>

                <p>
                  Tell us what you are trying to achieve.
                  Engix can help you shape the right strategy,
                  user experience and engineering approach.
                </p>
              </div>

              <Link
                to="/contact"
                className="engix-services-final-btn"
              >
                Start a conversation
                <ArrowUpRight size={20} />
              </Link>

            </div>

          </div>

        </section>

      </main>

    <style>{`

  /* ======================================================
     BASE
  ====================================================== */

  .engix-services-page {
    --black: #050505;
    --ink: #111318;
    --white: #ffffff;

    --lavender: #e9e6ff;
    --lavender-soft: #f4f2ff;

    --yellow: #fff14f;
    --mint: #dff5df;
    --peach: #f4dfd2;

    --light-gray: #f7f7f7;
    --gray: #686b72;

    --line:
      rgba(17,19,24,.11);

    background: #ffffff;
    color: var(--ink);

    overflow: hidden;
  }

  .engix-services-shell {
    width:
      min(1240px, calc(100% - 56px));

    margin: 0 auto;
  }


  /* ======================================================
     HERO
  ====================================================== */

  .engix-services-hero {
    background: #ffffff;

    color: var(--ink);

    padding-top: 80px;
  }

  .engix-services-hero-grid {
    display: grid;

    grid-template-columns:
      1.05fr .95fr;

    gap: 75px;

    align-items: end;
  }

  .engix-services-hero-copy {
    padding:
      75px 0 100px;
  }

  .engix-services-kicker {
    display: inline-block;

    margin-bottom: 26px;

    padding:
      7px 11px;

    background:
      var(--lavender);

    color: #35304b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .12em;
  }

  .engix-services-hero h1 {
    max-width: 830px;

    margin: 0;

    color: var(--ink);

    font-size:
      clamp(4rem,7vw,7.2rem);

    line-height: .89;

    letter-spacing: -.07em;

    font-weight: 600;
  }

  .engix-services-hero-copy > p {
    max-width: 680px;

    margin:
      38px 0 0;

    color: var(--gray);

    font-size:
      clamp(1.08rem,1.45vw,1.25rem);

    line-height: 1.75;
  }


  /* HERO ACTIONS */

  .engix-services-hero-actions {
    margin-top: 40px;

    display: flex;

    flex-wrap: wrap;

    gap: 13px;
  }

  .engix-services-primary-btn,
  .engix-services-secondary-btn {
    min-height: 56px;

    padding:
      0 22px;

    display: inline-flex;

    align-items: center;

    gap: 9px;

    text-decoration: none;

    font-size: 14px;

    font-weight: 700;

    transition:
      transform .2s ease,
      background .2s ease;
  }

  .engix-services-primary-btn {
    background:
      var(--black);

    color: #ffffff;
  }

  .engix-services-primary-btn svg {
    color: var(--yellow);
  }

  .engix-services-secondary-btn {
    border:
      1px solid rgba(5,5,5,.16);

    color: var(--black);

    background: #ffffff;
  }

  .engix-services-primary-btn:hover,
  .engix-services-secondary-btn:hover {
    transform:
      translateY(-2px);
  }

  .engix-services-secondary-btn:hover {
    background:
      var(--light-gray);
  }


  /* HERO IMAGE */

  .engix-services-hero-image {
    min-height: 660px;

    position: relative;

    overflow: hidden;

    background: #eee;
  }

  .engix-services-hero-image img {
    width: 100%;
    height: 660px;

    object-fit: cover;

    display: block;

    transition:
      transform .65s ease;
  }

  .engix-services-hero-image:hover img {
    transform:
      scale(1.025);
  }

  .engix-services-hero-image::after {
    content: '';

    position: absolute;

    inset: 0;

    background:
      linear-gradient(
        180deg,
        transparent 48%,
        rgba(5,5,5,.72)
      );
  }

  .engix-services-image-overlay {
    position: absolute;

    z-index: 2;

    left: 32px;
    bottom: 32px;

    color: #ffffff;
  }

  .engix-services-image-overlay span {
    display: inline-block;

    margin-bottom: 11px;

    padding:
      5px 8px;

    background:
      var(--yellow);

    color: #050505;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: .12em;
  }

  .engix-services-image-overlay strong {
    display: block;

    font-size: 30px;

    line-height: 1.04;

    letter-spacing: -.035em;
  }


  /* ======================================================
     INTRO
  ====================================================== */

  .engix-services-intro {
    padding:
      110px 0;

    background: #ffffff;

    border-top:
      1px solid var(--line);
  }

  .engix-services-intro-grid {
    display: grid;

    grid-template-columns:
      .55fr 1.45fr;

    gap: 80px;
  }

  .engix-services-intro-grid > div:first-child span {
    display: inline-block;

    padding:
      6px 10px;

    background:
      var(--lavender);

    color: #35304b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .11em;
  }

  .engix-services-intro-grid h2 {
    max-width: 900px;

    margin: 0;

    color: var(--ink);

    font-size:
      clamp(3rem,5vw,5.2rem);

    line-height: .97;

    letter-spacing: -.06em;

    font-weight: 600;
  }

  .engix-services-intro-grid p {
    max-width: 760px;

    margin:
      28px 0 0;

    color: var(--gray);

    font-size: 17px;

    line-height: 1.75;
  }


  /* ======================================================
     CAPABILITIES
  ====================================================== */

  .engix-services-capabilities {
    padding:
      120px 0;

    background: #ffffff;

    border-top:
      1px solid var(--line);
  }

  .engix-services-heading {
    display: grid;

    grid-template-columns:
      1.25fr .75fr;

    gap: 80px;

    margin-bottom: 65px;
  }

  .engix-services-heading > span {
    grid-column:
      1 / -1;

    width: max-content;

    margin-bottom: -48px;

    padding:
      6px 10px;

    background:
      var(--lavender);

    color: #35304b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .11em;
  }

  .engix-services-heading h2 {
    max-width: 850px;

    margin: 0;

    color: var(--ink);

    font-size:
      clamp(3rem,5vw,5.2rem);

    line-height: .97;

    letter-spacing: -.06em;

    font-weight: 600;
  }

  .engix-services-heading p {
    align-self: end;

    margin: 0;

    color: var(--gray);

    font-size: 16px;

    line-height: 1.75;
  }


  /* ======================================================
     SERVICES GRID
  ====================================================== */

  .engix-services-grid {
    display: grid;

    grid-template-columns:
      repeat(2,1fr);

    gap: 14px;
  }

  .engix-service-card {
    position: relative;

    min-height: 500px;

    padding: 38px;

    display: flex;

    flex-direction: column;

    background: #ffffff;

    border:
      1px solid var(--line);

    overflow: hidden;

    transition:
      transform .25s ease,
      box-shadow .25s ease;
  }

  .engix-service-card:hover {
    transform:
      translateY(-5px);

    box-shadow:
      0 22px 52px rgba(17,24,39,.07);
  }


  /*
    KEEP CARD WHITE
    COLOR ONLY AS A TOP ACCENT
  */

  .engix-service-card::before {
    content: '';

    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    height: 6px;

    background:
      var(--lavender);
  }

  .engix-service-lavender::before {
    background:
      var(--lavender);
  }

  .engix-service-mint::before {
    background:
      var(--mint);
  }

  .engix-service-peach::before {
    background:
      var(--peach);
  }

  .engix-service-yellow::before {
    background:
      var(--yellow);
  }

  .engix-service-neutral::before {
    background:
      #dedede;
  }

  .engix-service-lavender-soft::before {
    background:
      var(--lavender-soft);
  }


  /* CARD TOP */

  .engix-service-card-top {
    display: flex;

    align-items: center;

    justify-content: space-between;

    color: #111318;
  }

  .engix-service-card-top > span {
    min-width: 35px;

    min-height: 27px;

    padding:
      0 8px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    background:
      var(--lavender);

    color: #35304b;

    font-size: 11px;

    font-weight: 800;
  }

  .engix-service-mint
  .engix-service-card-top > span {
    background:
      var(--mint);
  }

  .engix-service-peach
  .engix-service-card-top > span {
    background:
      var(--peach);
  }

  .engix-service-yellow
  .engix-service-card-top > span {
    background:
      var(--yellow);
  }

  .engix-service-neutral
  .engix-service-card-top > span {
    background:
      #eeeeee;
  }

  .engix-service-card-top svg {
    width: 34px;

    height: 34px;

    stroke-width: 1.5;

    color: #111318;
  }


  /* CARD COPY */

  .engix-service-card h3 {
    max-width: 520px;

    margin:
      72px 0 18px;

    color: var(--ink);

    font-size:
      clamp(2rem,3vw,3.2rem);

    line-height: 1.02;

    letter-spacing: -.05em;

    font-weight: 600;
  }

  .engix-service-card > p {
    max-width: 560px;

    margin: 0;

    color: #62646b;

    font-size: 15px;

    line-height: 1.72;
  }


  /* SERVICE POINTS */

  .engix-service-points {
    margin-top: 30px;

    display: grid;

    grid-template-columns:
      repeat(2,1fr);

    gap:
      12px 18px;
  }

  .engix-service-points > div {
    display: flex;

    align-items: center;

    gap: 8px;

    color: #3f4146;

    font-size: 12px;
  }

  .engix-service-points svg {
    color: #111318;
  }


  /* SERVICE LINK */

  .engix-service-card > a {
    margin-top: auto;

    width: max-content;

    display: inline-flex;

    align-items: center;

    gap: 7px;

    color: var(--ink);

    text-decoration: none;

    font-size: 13px;

    font-weight: 750;

    padding-bottom: 4px;

    border-bottom:
      1px solid var(--ink);
  }


  /* ======================================================
     WHY ENGIX / VALUE
  ====================================================== */

  .engix-services-value {
    padding:
      120px 0;

    background: #ffffff;

    border-top:
      1px solid var(--line);
  }

  .engix-services-value-grid {
    display: grid;

    grid-template-columns:
      .95fr 1.05fr;

    gap: 85px;

    align-items: center;
  }


  /* VALUE IMAGE */

  .engix-services-value-image {
    height: 720px;

    position: relative;

    overflow: hidden;

    background: #eeeeee;
  }

  .engix-services-value-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;
  }

  .engix-services-value-image::after {
    content: '';

    position: absolute;

    inset: 0;

    background:
      linear-gradient(
        180deg,
        transparent 48%,
        rgba(5,5,5,.7)
      );
  }

  .engix-services-value-overlay {
    position: absolute;

    z-index: 2;

    left: 32px;
    bottom: 32px;

    max-width: 440px;

    color: #ffffff;
  }

  .engix-services-value-overlay span {
    display: inline-block;

    margin-bottom: 10px;

    padding:
      5px 8px;

    background:
      var(--yellow);

    color: #050505;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: .12em;
  }

  .engix-services-value-overlay strong {
    display: block;

    font-size: 29px;

    line-height: 1.08;

    letter-spacing: -.035em;
  }


  /* VALUE COPY */

  .engix-services-small-label {
    display: inline-block;

    margin-bottom: 18px;

    padding:
      6px 10px;

    background:
      var(--lavender);

    color: #35304b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .11em;
  }

  .engix-services-value-copy h2 {
    max-width: 680px;

    margin: 0;

    color: var(--ink);

    font-size:
      clamp(3rem,5vw,5rem);

    line-height: .97;

    letter-spacing: -.06em;

    font-weight: 600;
  }

  .engix-services-value-copy > p {
    max-width: 670px;

    margin:
      28px 0 42px;

    color: #60626a;

    font-size: 17px;

    line-height: 1.75;
  }


  /* VALUE LIST */

  .engix-services-value-list {
    display: grid;
  }

  .engix-services-value-list article {
    padding:
      24px 0;

    display: grid;

    grid-template-columns:
      58px 1fr;

    gap: 15px;

    border-top:
      1px solid rgba(17,19,24,.14);
  }


  /* COLORED ICON SQUARES */

  .engix-services-value-list article > svg {
    width: 46px;

    height: 46px;

    padding: 11px;

    background:
      var(--lavender);

    color: #111318;
  }

  .engix-services-value-list article:nth-child(2) > svg {
    background:
      var(--mint);
  }

  .engix-services-value-list article:nth-child(3) > svg {
    background:
      var(--peach);
  }

  .engix-services-value-list h3 {
    margin:
      0 0 7px;

    color: var(--ink);

    font-size: 21px;

    letter-spacing: -.03em;
  }

  .engix-services-value-list p {
    margin: 0;

    color: #62646b;

    font-size: 14px;

    line-height: 1.7;
  }


  /* ======================================================
     PROCESS
  ====================================================== */

  .engix-services-process {
    padding:
      120px 0;

    background: #ffffff;

    border-top:
      1px solid var(--line);
  }

  .engix-services-process-heading {
    max-width: 950px;

    margin-bottom: 65px;
  }

  .engix-services-process-heading span {
    display: inline-block;

    margin-bottom: 18px;

    padding:
      6px 10px;

    background:
      var(--lavender);

    color: #35304b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .11em;
  }

  .engix-services-process-heading h2 {
    margin: 0;

    color: var(--ink);

    font-size:
      clamp(3rem,5vw,5.2rem);

    line-height: .97;

    letter-spacing: -.06em;

    font-weight: 600;
  }


  /* PROCESS GRID */

  .engix-services-process-grid {
    display: grid;

    grid-template-columns:
      repeat(4,1fr);

    border-top:
      1px solid var(--line);
  }

  .engix-services-process-grid article {
    min-height: 350px;

    padding:
      30px 30px 30px 0;

    display: flex;

    flex-direction: column;

    border-right:
      1px solid var(--line);

    background:
      #ffffff;
  }

  .engix-services-process-grid article:not(:first-child) {
    padding-left: 30px;
  }

  .engix-services-process-grid article:last-child {
    border-right: 0;
  }


  /* PROCESS NUMBERS */

  .engix-services-process-grid article > span {
    width: max-content;

    padding:
      6px 9px;

    background:
      var(--lavender);

    color: #35304b;

    font-size: 11px;

    font-weight: 800;
  }

  .engix-services-process-grid article:nth-child(2) > span {
    background:
      var(--yellow);
  }

  .engix-services-process-grid article:nth-child(3) > span {
    background:
      var(--mint);
  }

  .engix-services-process-grid article:nth-child(4) > span {
    background:
      var(--peach);
  }

  .engix-services-process-grid h3 {
    margin:
      auto 0 15px;

    color: var(--ink);

    font-size: 32px;

    letter-spacing: -.04em;
  }

  .engix-services-process-grid p {
    margin: 0;

    color: var(--gray);

    font-size: 14px;

    line-height: 1.72;
  }


  /* ======================================================
     FINAL CTA
  ====================================================== */

  .engix-services-final-cta {
    position: relative;

    padding:
      110px 0;

    background: #ffffff;

    border-top:
      1px solid var(--line);
  }


  /*
    SMALL YELLOW ACCENT ONLY
  */

  .engix-services-final-cta::before {
    content: '';

    position: absolute;

    top: 0;
    left: 50%;

    width:
      min(1240px, calc(100% - 56px));

    height: 5px;

    transform:
      translateX(-50%);

    background:
      var(--yellow);
  }

  .engix-services-final-grid {
    display: grid;

    grid-template-columns:
      1.4fr .6fr;

    gap: 80px;

    align-items: end;
  }

  .engix-services-final-grid > div > span {
    display: inline-block;

    margin-bottom: 20px;

    padding:
      6px 10px;

    background:
      var(--lavender);

    color: #35304b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .11em;
  }

  .engix-services-final-grid h2 {
    max-width: 900px;

    margin: 0;

    color: var(--ink);

    font-size:
      clamp(3.3rem,5.5vw,5.8rem);

    line-height: .96;

    letter-spacing: -.062em;

    font-weight: 600;
  }

  .engix-services-final-grid p {
    max-width: 700px;

    margin:
      28px 0 0;

    color: var(--gray);

    font-size: 16px;

    line-height: 1.75;
  }


  /* FINAL BUTTON */

  .engix-services-final-btn {
    justify-self: end;

    min-height: 58px;

    padding:
      7px 9px 7px 21px;

    display: inline-flex;

    align-items: center;

    gap: 14px;

    border-radius:
      999px;

    background:
      var(--black);

    color: #ffffff;

    text-decoration: none;

    font-size: 14px;

    font-weight: 750;

    transition:
      transform .2s ease;
  }

  .engix-services-final-btn:hover {
    transform:
      translateY(-2px);
  }

  .engix-services-final-btn svg {
    width: 40px;

    height: 40px;

    padding: 9px;

    border-radius: 50%;

    background:
      var(--yellow);

    color:
      var(--black);
  }


  /* ======================================================
     TABLET
  ====================================================== */

  @media(max-width:1050px) {

    .engix-services-hero-grid,
    .engix-services-value-grid {
      grid-template-columns:
        1fr;
    }

    .engix-services-hero-copy {
      padding-bottom:
        35px;
    }

    .engix-services-hero-image,
    .engix-services-hero-image img {
      min-height:
        520px;

      height:
        520px;
    }

    .engix-services-heading {
      grid-template-columns:
        1fr;

      gap:
        25px;
    }

    .engix-services-heading > span {
      margin-bottom:
        0;
    }

    .engix-services-value-image {
      height:
        520px;
    }

    .engix-services-process-grid {
      grid-template-columns:
        repeat(2,1fr);
    }

    .engix-services-process-grid article {
      border-bottom:
        1px solid var(--line);
    }

    .engix-services-final-grid {
      grid-template-columns:
        1fr;

      gap:
        40px;
    }

    .engix-services-final-btn {
      justify-self:
        start;
    }

  }


  /* ======================================================
     TABLET SMALL
  ====================================================== */

  @media(max-width:800px) {

    .engix-services-intro-grid {
      grid-template-columns:
        1fr;

      gap:
        25px;
    }

    .engix-services-grid {
      grid-template-columns:
        1fr;
    }

  }


  /* ======================================================
     MOBILE
  ====================================================== */

  @media(max-width:650px) {

    .engix-services-shell {
      width:
        calc(100% - 32px);
    }

    .engix-services-hero {
      padding-top:
        45px;
    }

    .engix-services-hero-copy {
      padding:
        45px 0 55px;
    }

    .engix-services-hero h1 {
      font-size:
        clamp(3.7rem,17vw,5.6rem);
    }

    .engix-services-hero-image,
    .engix-services-hero-image img {
      min-height:
        400px;

      height:
        400px;
    }

    .engix-services-intro,
    .engix-services-capabilities,
    .engix-services-value,
    .engix-services-process {
      padding:
        85px 0;
    }

    .engix-service-card {
      min-height:
        520px;

      padding:
        30px 26px;
    }

    .engix-service-card h3 {
      margin-top:
        55px;
    }

    .engix-service-points {
      grid-template-columns:
        1fr;
    }

    .engix-services-value-image {
      height:
        410px;
    }

    .engix-services-process-grid {
      grid-template-columns:
        1fr;
    }

    .engix-services-process-grid article,
    .engix-services-process-grid article:not(:first-child) {
      min-height:
        275px;

      padding:
        27px 0;

      border-right:
        0;
    }

    .engix-services-final-cta {
      padding:
        85px 0;
    }

    .engix-services-final-cta::before {
      width:
        calc(100% - 32px);
    }

    .engix-services-primary-btn,
    .engix-services-secondary-btn,
    .engix-services-final-btn {
      width: 100%;

      justify-content:
        center;
    }

    .engix-services-final-btn {
      justify-content:
        space-between;
    }

  }

`}</style>
    </>
  );
}