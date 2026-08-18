import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Lightbulb,
  Smartphone,
  Sparkles,
  Workflow
} from 'lucide-react';

export default function Portfolio() {
  usePageTitle('Projects');

  const projects = [
    {
      number: '01',
      title: 'Spinnovate Digital Ecosystem',
      category: 'International Technology Partnership',
      client: 'Spinnovate Limited',
      location: 'Durham, United Kingdom',
      status: 'Delivered',
      description:
        'A multi-brand digital ecosystem developed for Spinnovate Limited, supporting its technology and innovation ventures through three distinct corporate web experiences. Engix translated complex scientific and technology-focused businesses into clear, credible and responsive digital platforms designed for international audiences.',
      secondaryDescription:
        'The engagement covered corporate positioning, information architecture, responsive interface development and maintainable frontend implementation across Palebluedot, Spinnovatech and Allotrope.',
      services:
        'Digital Strategy • UI/UX • Corporate Web Development • Responsive Engineering • Deployment',
      products: [
        'Palebluedot',
        'Spinnovatech',
        'Allotrope'
      ],
      icon: Globe2,
      color: 'lavender',
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90'
    },

    {
      number: '02',
      title: 'AI Conversational & Interview Intelligence',
      category: 'Artificial Intelligence',
      client: 'Technology Client',
      location: 'Singapore',
      status: 'Delivered',
      description:
        'An AI-powered conversational product initiative developed for a Singapore-based client, combining intelligent chatbot experiences with an AI interviewer system.',
      secondaryDescription:
        'The solution was designed around structured digital conversations, automated interactions and intelligent interview workflows while keeping the experience accessible, responsive and simple for end users.',
      services:
        'AI Product Development • Conversational AI • AI Interviewer • Application Engineering • API Integration • UX',
      products: [
        'AI Chatbots',
        'AI Interviewer',
        'Conversational Workflows'
      ],
      icon: BrainCircuit,
      color: 'yellow',
      image:
        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1800&q=90'
    },

    {
      number: '03',
      title: 'Mr Maintenance Service Platform',
      category: 'Service Technology Platform',
      client: 'Alind Gupta',
      location: 'India',
      status: 'Product Development',
      description:
        'An end-to-end service booking ecosystem designed to simplify how customers discover, schedule and manage everyday maintenance services.',
      secondaryDescription:
        'The platform connects customers, administrators and field technicians through a structured digital workflow covering service discovery, scheduling, booking, technician assignment, job completion, verification, payment and customer feedback.',
      services:
        'Product Strategy • Mobile App Development • Backend APIs • OTP Authentication • Admin Workflow • Payments • Database Architecture',
      products: [
        'Customer Application',
        'Admin Operations',
        'Technician Workflow'
      ],
      icon: Smartphone,
      color: 'mint',
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1800&q=90'
    },

    {
      number: '04',
      title: 'Engix AI',
      category: 'Internal Product & AI R&D',
      client: 'Engix Labs',
      location: 'India',
      status: 'In Development',
      description:
        'An internal Engix product initiative exploring how artificial intelligence can be integrated into modern business workflows and digital products.',
      secondaryDescription:
        'Engix AI is being developed as a modular technology foundation for intelligent assistants, workflow automation, AI-enabled applications and reusable services that can support future enterprise products.',
      services:
        'AI Engineering • Product Architecture • Full-Stack Development • API Design • Automation • Cloud Infrastructure',
      products: [
        'AI Assistants',
        'Workflow Automation',
        'Reusable AI Services'
      ],
      icon: Sparkles,
      color: 'peach',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=90'
    },

    {
      number: '05',
      title: 'Enterprise Operations & Workflow Suite',
      category: 'Engix Solution Accelerator',
      client: 'Engix Labs',
      location: 'India',
      status: 'Solution Concept',
      description:
        'A reusable enterprise solution architecture designed for organizations that want to move operational processes away from spreadsheets, disconnected tools and manual workflows.',
      secondaryDescription:
        'The concept brings workflow management, role-based access, operational dashboards, reporting and API-driven integrations into a unified digital environment that can be adapted around different business processes.',
      services:
        'Enterprise Architecture • Dashboard UX • Workflow Automation • Backend Engineering • API Integration • Cloud',
      products: [
        'Operations Dashboard',
        'Workflow Management',
        'Reporting & Integrations'
      ],
      icon: Workflow,
      color: 'lavender',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=90'
    },

    {
      number: '06',
      title: 'AI Customer Experience Accelerator',
      category: 'Engix AI Solution Accelerator',
      client: 'Engix Labs',
      location: 'India',
      status: 'R&D',
      description:
        'A modular AI customer-experience architecture designed to help businesses introduce intelligent assistance across modern digital channels.',
      secondaryDescription:
        'The solution concept combines conversational interfaces, contextual information retrieval, intelligent responses and escalation workflows to support faster and more scalable customer interactions.',
      services:
        'Generative AI • Conversational Systems • Knowledge Retrieval • API Integration • Automation • Product UX',
      products: [
        'AI Customer Assistant',
        'Knowledge Retrieval',
        'Escalation Workflows'
      ],
      icon: Lightbulb,
      color: 'yellow',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90'
    }
  ];

  const capabilities = [
    'Corporate Websites',
    'Custom Software',
    'AI Applications',
    'SaaS Platforms',
    'Mobile Applications',
    'Business Automation',
    'Enterprise Dashboards',
    'Backend Systems',
    'API Integrations',
    'Cloud Solutions',
    'UI/UX Systems',
    'Product Engineering'
  ];

  const valueItems = [
    {
      number: '01',
      icon: Building2,
      title: 'Business context first',
      text:
        'We begin with the organization, users and business challenge before deciding what technology should be built.',
      color: 'lavender'
    },

    {
      number: '02',
      icon: Layers3,
      title: 'Design and engineering together',
      text:
        'Product thinking, user experience and technical architecture stay connected throughout delivery.',
      color: 'yellow'
    },

    {
      number: '03',
      icon: Code2,
      title: 'Built for real operations',
      text:
        'Our focus is software that works inside the day-to-day reality of the business — not technology created only for presentation.',
      color: 'mint'
    },

    {
      number: '04',
      icon: Workflow,
      title: 'Support beyond launch',
      text:
        'Deployment is one milestone. We continue supporting improvements, maintenance and future product evolution.',
      color: 'peach'
    }
  ];

  return (
    <>
      <main className="engix-projects-page">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="engix-projects-hero">
          <div className="engix-projects-shell">

            <span className="engix-projects-eyebrow">
              SELECTED WORK
            </span>

            <h1>
              Selected work.
              <br />

              <span>
                Built for real businesses.
              </span>
            </h1>

            <div className="engix-projects-hero-bottom">

              <p>
                From international corporate platforms and AI-powered
                products to mobile service ecosystems and enterprise
                software, our work combines thoughtful design with
                dependable engineering.
              </p>

              <div className="engix-projects-hero-note">
                <strong>
                  Domestic + International
                </strong>

                <span>
                  Technology delivery across markets
                </span>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROJECT CASE STUDIES
        ====================================================== */}

        <section className="engix-project-list">

          <div className="engix-projects-shell">

            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  className={`engix-project-row project-${project.color}`}
                  key={project.number}
                >

                  {/* PROJECT INFORMATION */}

                  <div className="engix-project-copy">

                    <div className="engix-project-top">

                      <span className="engix-project-number">
                        {project.number}
                      </span>

                      <div className="engix-project-icon">
                        <Icon
                          size={30}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>

                    <span className="engix-project-category">
                      {project.category}
                    </span>

                    <h2>
                      {project.title}
                    </h2>

                    <p className="engix-project-description">
                      {project.description}
                    </p>

                    <p className="engix-project-secondary">
                      {project.secondaryDescription}
                    </p>

                    <div className="engix-project-meta">

                      <div>
                        <span>Client</span>
                        <strong>
                          {project.client}
                        </strong>
                      </div>

                      <div>
                        <span>Location</span>
                        <strong>
                          {project.location}
                        </strong>
                      </div>

                      <div>
                        <span>Status</span>
                        <strong>
                          {project.status}
                        </strong>
                      </div>

                      <div>
                        <span>Capabilities</span>
                        <strong>
                          {project.services}
                        </strong>
                      </div>

                    </div>

                    <div className="engix-project-products">

                      <span>
                        WHAT WE BUILT
                      </span>

                      <div>
                        {project.products.map((product) => (
                          <span
                            key={product}
                            className="engix-project-product"
                          >
                            {product}
                          </span>
                        ))}
                      </div>

                    </div>

                    <Link
                      to="/contact"
                      className="engix-project-link"
                    >
                      Discuss a similar project

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.7}
                      />
                    </Link>

                  </div>


                  {/* PROJECT IMAGE */}

                  <div className="engix-project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="engix-project-image-overlay">

                      <span>
                        {project.category}
                      </span>

                      <strong>
                        {project.title}
                      </strong>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </section>


        {/* =====================================================
            MORE WORK
        ====================================================== */}

        <section className="engix-more-work">

          <div className="engix-projects-shell">

            <div className="engix-more-work-grid">

              <div className="engix-more-work-heading">

                <span>
                  BEYOND THE FEATURED WORK
                </span>

                <h2>
                  More work.
                  <br />
                  More industries.
                  <br />
                  More possibilities.
                </h2>

              </div>

              <div className="engix-more-work-content">

                <p>
                  Beyond the work featured here, Engix continues to
                  design and engineer websites, digital products,
                  business applications, AI experiences and custom
                  software solutions for clients across domestic and
                  international markets.
                </p>

                <p>
                  Some engagements remain private because of client
                  confidentiality, while others are currently in active
                  development.
                </p>

                <div className="engix-capability-tags">

                  {capabilities.map((capability) => (
                    <span key={capability}>
                      {capability}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW WE CREATE VALUE
        ====================================================== */}

        <section className="engix-project-value">

          <div className="engix-projects-shell">

            <div className="engix-project-value-heading">

              <span>
                HOW WE CREATE VALUE
              </span>

              <h2>
                Our work goes beyond
                delivering features.
              </h2>

              <p>
                A successful technology engagement should create
                clarity, improve operations and leave the organization
                with a product that remains useful as the business grows.
              </p>

            </div>


            <div className="engix-project-value-grid">

              {valueItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className={`engix-value-card value-${item.color}`}
                  >

                    <div className="engix-value-top">

                      <span>
                        {item.number}
                      </span>

                      <Icon
                        size={30}
                        strokeWidth={1.5}
                      />

                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
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

        <section className="engix-project-global">

          <div className="engix-projects-shell">

            <div className="engix-project-global-grid">

              <div className="engix-project-global-image">

                <img
                  src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1800&q=90"
                  alt="Global technology delivery"
                />

                <div>
                  <span>
                    GLOBAL DELIVERY
                  </span>

                  <strong>
                    Built in India.
                    <br />
                    Working across borders.
                  </strong>
                </div>

              </div>


              <div className="engix-project-global-copy">

                <span className="engix-global-label">
                  INTERNATIONAL EXPERIENCE
                </span>

                <h2>
                  Technology delivery
                  without geographic
                  boundaries.
                </h2>

                <p>
                  Engix works with businesses across domestic and
                  international markets through a structured,
                  remote-first delivery model built around clear
                  communication and transparent execution.
                </p>

                <div className="engix-global-points">

                  <div>
                    <CheckCircle2 size={20} />

                    <span>
                      International client collaboration
                    </span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />

                    <span>
                      Structured remote product delivery
                    </span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />

                    <span>
                      Design and engineering in one workflow
                    </span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />

                    <span>
                      Continued technology support
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="engix-project-cta">

          <div className="engix-projects-shell">

            <div className="engix-project-cta-grid">

              <div>

                <span>
                  HAVE A PROJECT IN MIND?
                </span>

                <h2>
                  Let’s build something
                  worth putting in our
                  next case study.
                </h2>

                <p>
                  Tell us about the product, platform or business
                  challenge you are working on. We can help shape
                  the strategy, experience and engineering approach.
                </p>

              </div>

              <Link
                to="/contact"
                className="engix-project-cta-button"
              >
                Start a conversation

                <span>
                  <ArrowRight
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

        .engix-projects-page {
          --black: #050505;
          --ink: #111318;
          --white: #ffffff;

          --lavender: #e9e6ff;
          --lavender-soft: #f5f3ff;

          --yellow: #fff14f;
          --mint: #dff5df;
          --peach: #f4dfd2;

          --gray: #686b72;

          --line:
            rgba(17,19,24,.11);

          width: 100%;

          background:
            #ffffff;

          color:
            var(--ink);

          overflow:
            hidden;
        }

        .engix-projects-shell {
          width:
            min(1240px, calc(100% - 56px));

          margin:
            0 auto;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .engix-projects-hero {
          padding:
            115px 0 95px;

          background:
            #ffffff;
        }

        .engix-projects-eyebrow {
          display:
            inline-block;

          margin-bottom:
            25px;

          padding:
            7px 11px;

          background:
            var(--lavender);

          color:
            #35304b;

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            .12em;
        }

        .engix-projects-hero h1 {
          max-width:
            1050px;

          margin:
            0;

          color:
            var(--ink);

          font-size:
            clamp(4rem,7vw,7.4rem);

          line-height:
            .9;

          letter-spacing:
            -.07em;

          font-weight:
            600;
        }

        .engix-projects-hero h1 > span {
          position:
            relative;

          display:
            inline-block;

          padding-left:
            75px;
        }

        .engix-projects-hero h1 > span::before {
          content:
            '';

          position:
            absolute;

          left:
            0;

          top:
            50%;

          width:
            54px;

          height:
            5px;

          transform:
            translateY(-50%);

          background:
            var(--yellow);
        }


        /* HERO BOTTOM */

        .engix-projects-hero-bottom {
          max-width:
            950px;

          margin-top:
            42px;

          display:
            grid;

          grid-template-columns:
            1.4fr .6fr;

          gap:
            60px;

          align-items:
            end;
        }

        .engix-projects-hero-bottom > p {
          margin:
            0;

          color:
            var(--gray);

          font-size:
            17px;

          line-height:
            1.78;
        }

        .engix-projects-hero-note {
          padding-left:
            20px;

          border-left:
            3px solid var(--yellow);
        }

        .engix-projects-hero-note strong,
        .engix-projects-hero-note span {
          display:
            block;
        }

        .engix-projects-hero-note strong {
          color:
            var(--ink);

          font-size:
            14px;
        }

        .engix-projects-hero-note span {
          margin-top:
            5px;

          color:
            #777980;

          font-size:
            11px;
        }


        /* =====================================================
           PROJECT LIST
        ====================================================== */

        .engix-project-list {
          padding:
            20px 0 120px;

          background:
            #ffffff;
        }

        .engix-project-row {
          position:
            relative;

          min-height:
            690px;

          margin-bottom:
            30px;

          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          background:
            #ffffff;

          border:
            1px solid var(--line);

          overflow:
            hidden;

          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .engix-project-row:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 24px 60px rgba(0,0,0,.055);
        }


        /* COLORED EDGE */

        .engix-project-row::before {
          content:
            '';

          position:
            absolute;

          z-index:
            4;

          left:
            0;

          top:
            0;

          bottom:
            0;

          width:
            6px;
        }

        .project-lavender::before {
          background:
            var(--lavender);
        }

        .project-yellow::before {
          background:
            var(--yellow);
        }

        .project-mint::before {
          background:
            var(--mint);
        }

        .project-peach::before {
          background:
            var(--peach);
        }


        /* =====================================================
           PROJECT COPY
        ====================================================== */

        .engix-project-copy {
          min-width:
            0;

          padding:
            45px 46px;

          display:
            flex;

          flex-direction:
            column;

          background:
            #ffffff;
        }

        .engix-project-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            20px;

          margin-bottom:
            37px;
        }

        .engix-project-number {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          min-width:
            38px;

          min-height:
            29px;

          padding:
            0 8px;

          background:
            var(--lavender);

          color:
            #35304b;

          font-size:
            11px;

          font-weight:
            800;
        }

        .project-yellow
        .engix-project-number {
          background:
            var(--yellow);
        }

        .project-mint
        .engix-project-number {
          background:
            var(--mint);
        }

        .project-peach
        .engix-project-number {
          background:
            var(--peach);
        }


        /* PROJECT ICON */

        .engix-project-icon {
          width:
            48px;

          height:
            48px;

          display:
            grid;

          place-items:
            center;

          background:
            var(--lavender);

          color:
            var(--ink);
        }

        .project-yellow
        .engix-project-icon {
          background:
            var(--yellow);
        }

        .project-mint
        .engix-project-icon {
          background:
            var(--mint);
        }

        .project-peach
        .engix-project-icon {
          background:
            var(--peach);
        }


        /* CATEGORY */

        .engix-project-category {
          margin-bottom:
            14px;

          color:
            #7b7c82;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .1em;

          text-transform:
            uppercase;
        }


        /* TITLE */

        .engix-project-copy h2 {
          max-width:
            570px;

          margin:
            0 0 20px;

          color:
            var(--ink);

          font-size:
            clamp(2.4rem,3.5vw,4rem);

          line-height:
            .98;

          letter-spacing:
            -.055em;

          font-weight:
            600;
        }


        /* DESCRIPTION */

        .engix-project-description {
          max-width:
            590px;

          margin:
            0;

          color:
            #575960;

          font-size:
            15px;

          line-height:
            1.75;
        }

        .engix-project-secondary {
          max-width:
            590px;

          margin:
            15px 0 0;

          color:
            #777980;

          font-size:
            13px;

          line-height:
            1.7;
        }


        /* =====================================================
           META
        ====================================================== */

        .engix-project-meta {
          margin-top:
            30px;
        }

        .engix-project-meta > div {
          padding:
            13px 0;

          display:
            grid;

          grid-template-columns:
            105px 1fr;

          gap:
            16px;

          border-top:
            1px solid var(--line);
        }

        .engix-project-meta > div > span {
          color:
            #8b8c91;

          font-size:
            10px;

          font-weight:
            600;
        }

        .engix-project-meta strong {
          color:
            #25262b;

          font-size:
            11px;

          line-height:
            1.6;

          font-weight:
            600;
        }


        /* =====================================================
           PRODUCTS
        ====================================================== */

        .engix-project-products {
          margin-top:
            26px;
        }

        .engix-project-products > span {
          display:
            block;

          margin-bottom:
            11px;

          color:
            #8b8c91;

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-project-products > div {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            7px;
        }

        .engix-project-product {
          padding:
            7px 10px;

          border:
            1px solid var(--line);

          color:
            #48494f;

          font-size:
            10px;

          line-height:
            1;
        }


        /* =====================================================
           PROJECT LINK
        ====================================================== */

        .engix-project-link {
          width:
            max-content;

          margin-top:
            auto;

          padding-top:
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
            12px;

          font-weight:
            750;
        }

        .engix-project-link::after {
          content:
            '';

          position:
            absolute;
        }

        .engix-project-link:hover {
          text-decoration:
            underline;

          text-underline-offset:
            5px;
        }


        /* =====================================================
           PROJECT IMAGE
        ====================================================== */

        .engix-project-image {
          min-height:
            690px;

          position:
            relative;

          overflow:
            hidden;

          background:
            #eeeeee;
        }

        .engix-project-image img {
          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            cover;

          transition:
            transform .7s ease;
        }

        .engix-project-row:hover
        .engix-project-image img {
          transform:
            scale(1.03);
        }

        .engix-project-image::after {
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
              rgba(5,5,5,.73)
            );
        }

        .engix-project-image-overlay {
          position:
            absolute;

          z-index:
            2;

          left:
            30px;

          right:
            30px;

          bottom:
            30px;

          color:
            #ffffff;
        }

        .engix-project-image-overlay span {
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
            .08em;

          text-transform:
            uppercase;
        }

        .engix-project-image-overlay strong {
          display:
            block;

          max-width:
            470px;

          font-size:
            clamp(1.7rem,2.7vw,2.8rem);

          line-height:
            1.05;

          letter-spacing:
            -.04em;
        }


        /* =====================================================
           MORE WORK
        ====================================================== */

        .engix-more-work {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-more-work-grid {
          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          gap:
            100px;
        }

        .engix-more-work-heading > span {
          display:
            inline-block;

          margin-bottom:
            18px;

          padding:
            6px 10px;

          background:
            var(--lavender);

          color:
            #35304b;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-more-work-heading h2 {
          max-width:
            650px;

          margin:
            0;

          color:
            var(--ink);

          font-size:
            clamp(3rem,5vw,5.3rem);

          line-height:
            .96;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-more-work-content {
          padding-top:
            38px;
        }

        .engix-more-work-content > p {
          max-width:
            630px;

          margin:
            0 0 18px;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.75;
        }


        /* CAPABILITY TAGS */

        .engix-capability-tags {
          margin-top:
            35px;

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            8px;
        }

        .engix-capability-tags span {
          padding:
            9px 12px;

          border:
            1px solid var(--line);

          color:
            #42434a;

          font-size:
            11px;
        }

        .engix-capability-tags span:nth-child(4n + 1) {
          background:
            var(--lavender);
        }

        .engix-capability-tags span:nth-child(4n + 2) {
          background:
            var(--yellow);
        }

        .engix-capability-tags span:nth-child(4n + 3) {
          background:
            var(--mint);
        }

        .engix-capability-tags span:nth-child(4n + 4) {
          background:
            var(--peach);
        }


        /* =====================================================
           VALUE
        ====================================================== */

        .engix-project-value {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-project-value-heading {
          max-width:
            850px;

          margin-bottom:
            60px;
        }

        .engix-project-value-heading > span {
          display:
            inline-block;

          margin-bottom:
            18px;

          padding:
            6px 10px;

          background:
            var(--lavender);

          color:
            #35304b;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-project-value-heading h2 {
          margin:
            0;

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

        .engix-project-value-heading p {
          max-width:
            690px;

          margin:
            25px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.75;
        }


        /* VALUE GRID */

        .engix-project-value-grid {
          display:
            grid;

          grid-template-columns:
            repeat(4,1fr);

          border-top:
            1px solid var(--line);
        }

        .engix-value-card {
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

        .engix-value-card:first-child {
          padding-left:
            0;
        }

        .engix-value-card:last-child {
          border-right:
            0;
        }

        .engix-value-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            15px;
        }

        .engix-value-top > span {
          padding:
            6px 9px;

          background:
            var(--lavender);

          font-size:
            10px;

          font-weight:
            800;
        }

        .value-yellow
        .engix-value-top > span {
          background:
            var(--yellow);
        }

        .value-mint
        .engix-value-top > span {
          background:
            var(--mint);
        }

        .value-peach
        .engix-value-top > span {
          background:
            var(--peach);
        }

        .engix-value-top svg {
          width:
            44px;

          height:
            44px;

          padding:
            10px;

          background:
            var(--lavender);
        }

        .value-yellow
        .engix-value-top svg {
          background:
            var(--yellow);
        }

        .value-mint
        .engix-value-top svg {
          background:
            var(--mint);
        }

        .value-peach
        .engix-value-top svg {
          background:
            var(--peach);
        }

        .engix-value-card h3 {
          margin:
            auto 0 14px;

          color:
            var(--ink);

          font-size:
            24px;

          line-height:
            1.08;

          letter-spacing:
            -.04em;
        }

        .engix-value-card p {
          margin:
            0;

          color:
            var(--gray);

          font-size:
            13px;

          line-height:
            1.7;
        }


        /* =====================================================
           GLOBAL DELIVERY
        ====================================================== */

        .engix-project-global {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-project-global-grid {
          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          gap:
            80px;

          align-items:
            center;
        }

        .engix-project-global-image {
          height:
            600px;

          position:
            relative;

          overflow:
            hidden;
        }

        .engix-project-global-image img {
          width:
            100%;

          height:
            100%;

          object-fit:
            cover;
        }

        .engix-project-global-image::after {
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

        .engix-project-global-image > div {
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

        .engix-project-global-image span {
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

        .engix-project-global-image strong {
          display:
            block;

          font-size:
            clamp(2rem,3vw,3rem);

          line-height:
            1.02;

          letter-spacing:
            -.045em;
        }


        /* GLOBAL COPY */

        .engix-global-label {
          display:
            inline-block;

          margin-bottom:
            18px;

          padding:
            6px 10px;

          background:
            var(--lavender);

          color:
            #35304b;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-project-global-copy h2 {
          max-width:
            680px;

          margin:
            0;

          color:
            var(--ink);

          font-size:
            clamp(3rem,4.7vw,5rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-project-global-copy > p {
          max-width:
            650px;

          margin:
            27px 0 35px;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.75;
        }


        /* GLOBAL POINTS */

        .engix-global-points {
          display:
            grid;

          gap:
            0;
        }

        .engix-global-points > div {
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

        .engix-global-points svg {
          flex-shrink:
            0;

          color:
            var(--ink);
        }


        /* =====================================================
           CTA
        ====================================================== */

        .engix-project-cta {
          position:
            relative;

          padding:
            110px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-project-cta::before {
          content:
            '';

          position:
            absolute;

          top:
            0;

          left:
            50%;

          width:
            min(1240px, calc(100% - 56px));

          height:
            5px;

          transform:
            translateX(-50%);

          background:
            var(--yellow);
        }

        .engix-project-cta-grid {
          display:
            grid;

          grid-template-columns:
            1.4fr .6fr;

          gap:
            80px;

          align-items:
            end;
        }

        .engix-project-cta-grid > div > span {
          display:
            inline-block;

          margin-bottom:
            20px;

          padding:
            6px 10px;

          background:
            var(--lavender);

          color:
            #35304b;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-project-cta h2 {
          max-width:
            900px;

          margin:
            0;

          color:
            var(--ink);

          font-size:
            clamp(3.3rem,5.5vw,5.8rem);

          line-height:
            .95;

          letter-spacing:
            -.065em;

          font-weight:
            600;
        }

        .engix-project-cta p {
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


        /* CTA BUTTON */

        .engix-project-cta-button {
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
            #ffffff;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            750;

          transition:
            transform .2s ease;
        }

        .engix-project-cta-button:hover {
          transform:
            translateY(-2px);
        }

        .engix-project-cta-button > span {
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

          .engix-project-row {
            grid-template-columns:
              1fr;
          }

          .engix-project-image {
            min-height:
              520px;
          }

          .engix-more-work-grid {
            grid-template-columns:
              1fr;

            gap:
              40px;
          }

          .engix-more-work-content {
            padding-top:
              0;
          }

          .engix-project-value-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .engix-value-card {
            border-bottom:
              1px solid var(--line);
          }

          .engix-project-global-grid {
            grid-template-columns:
              1fr;

            gap:
              50px;
          }

          .engix-project-global-image {
            height:
              520px;
          }

          .engix-project-cta-grid {
            grid-template-columns:
              1fr;

            gap:
              45px;
          }

          .engix-project-cta-button {
            justify-self:
              start;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media(max-width:650px) {

          .engix-projects-shell {
            width:
              calc(100% - 32px);
          }

          .engix-projects-hero {
            padding:
              75px 0 65px;
          }

          .engix-projects-hero h1 {
            font-size:
              clamp(3.6rem,16vw,5.3rem);
          }

          .engix-projects-hero h1 > span {
            padding-left:
              45px;
          }

          .engix-projects-hero h1 > span::before {
            width:
              32px;

            height:
              3px;
          }

          .engix-projects-hero-bottom {
            grid-template-columns:
              1fr;

            gap:
              30px;
          }

          .engix-project-list {
            padding-bottom:
              85px;
          }

          .engix-project-row {
            margin-bottom:
              20px;
          }

          .engix-project-copy {
            min-height:
              720px;

            padding:
              30px 24px;
          }

          .engix-project-meta > div {
            grid-template-columns:
              1fr;

            gap:
              5px;
          }

          .engix-project-image {
            min-height:
              390px;
          }

          .engix-more-work,
          .engix-project-value,
          .engix-project-global {
            padding:
              85px 0;
          }

          .engix-project-value-grid {
            grid-template-columns:
              1fr;
          }

          .engix-value-card,
          .engix-value-card:first-child {
            min-height:
              290px;

            padding:
              28px 0;

            border-right:
              0;

            border-bottom:
              1px solid var(--line);
          }

          .engix-project-global-image {
            height:
              400px;
          }

          .engix-project-cta {
            padding:
              85px 0;
          }

          .engix-project-cta::before {
            width:
              calc(100% - 32px);
          }

          .engix-project-cta-button {
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