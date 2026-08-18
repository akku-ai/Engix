import usePageTitle from '../hooks/usePageTitle';
import ContactForm from '../components/contact/ContactForm';

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Handshake,
  Headphones,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  usePageTitle('Contact');

  const enquiryTypes = [
    {
      number: '01',
      icon: BriefcaseBusiness,
      title: 'Start a new project',
      description:
        'Planning a new website, software platform, mobile application, AI product or digital transformation initiative? Tell us what you are trying to achieve.',
      action: 'Discuss your project',
      tone: 'lavender'
    },
    {
      number: '02',
      icon: Headphones,
      title: 'Existing client support',
      description:
        'Already working with Engix? Connect with us for product improvements, maintenance, technical support or the next phase of your engagement.',
      action: 'Contact our team',
      tone: 'mint'
    },
    {
      number: '03',
      icon: Handshake,
      title: 'Technology partnership',
      description:
        'We collaborate with technology businesses, consultants, agencies and delivery partners where our engineering capabilities can create shared value.',
      action: 'Explore partnership',
      tone: 'yellow'
    },
    {
      number: '04',
      icon: Globe2,
      title: 'General business enquiry',
      description:
        'For corporate enquiries, collaboration opportunities or anything that does not fit the categories above, send us a message.',
      action: 'Send an enquiry',
      tone: 'peach'
    }
  ];

  const engagementPoints = [
    'Custom software and digital product development',
    'AI-powered applications and workflow automation',
    'Web and mobile application engineering',
    'Corporate and technology website development',
    'UI/UX and product experience design',
    'Backend, APIs, cloud and DevOps engineering'
  ];

  return (
    <>
      <main className="engix-contact-page">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="engix-contact-hero">
          <div className="engix-contact-shell">

            <div className="engix-contact-hero-grid">

              <div className="engix-contact-hero-copy">

                <span className="engix-contact-label">
                  CONTACT ENGIX
                </span>

                <h1>
                  Let’s talk about
                  what you’re building.
                </h1>

                <p className="engix-contact-hero-lead">
                  Whether you are launching a new digital product,
                  improving an existing platform or looking for a
                  long-term technology partner, the right conversation
                  is a good place to start.
                </p>

                <p className="engix-contact-hero-secondary">
                  Share the business challenge, product idea or technical
                  requirement with us. You do not need to have every detail
                  figured out before getting in touch.
                </p>

                <div className="engix-contact-hero-actions">

                  <a
                    href="#engix-contact-form"
                    className="engix-contact-primary-btn"
                  >
                    Start a conversation

                    <ArrowRight
                      size={20}
                      strokeWidth={1.8}
                    />
                  </a>

                  <a
                    href="mailto:hello@engix.world"
                    className="engix-contact-secondary-btn"
                  >
                    hello@engix.world

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.8}
                    />
                  </a>

                </div>

              </div>


              <div className="engix-contact-hero-image">

                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=90"
                  alt="Professional technology team working in a modern office"
                />

                <div className="engix-contact-image-overlay">

                  <span>
                    ENGIX TECH PRIVATE LIMITED
                  </span>

                  <strong>
                    Business understanding.
                    <br />
                    Product thinking.
                    <br />
                    Reliable engineering.
                  </strong>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            QUICK CONTACT STRIP
        ====================================================== */}

        <section className="engix-contact-strip">

          <div className="engix-contact-shell">

            <div className="engix-contact-strip-grid">

              <a href="mailto:hello@engix.world">

                <div className="engix-contact-strip-icon strip-lavender">
                  <Mail size={25} strokeWidth={1.6} />
                </div>

                <div>
                  <span>Business email</span>
                  <strong>hello@engix.world</strong>
                </div>

              </a>


              <a href="tel:+917355985134">

                <div className="engix-contact-strip-icon strip-yellow">
                  <Phone size={25} strokeWidth={1.6} />
                </div>

                <div>
                  <span>Talk to Engix</span>
                  <strong>+91 7355985134</strong>
                </div>

              </a>


              <div>

                <div className="engix-contact-strip-icon strip-mint">
                  <MapPin size={25} strokeWidth={1.6} />
                </div>

                <div>
                  <span>Based in</span>
                  <strong>Varanasi, India</strong>
                </div>

              </div>


              <div>

                <div className="engix-contact-strip-icon strip-peach">
                  <Globe2 size={25} strokeWidth={1.6} />
                </div>

                <div>
                  <span>Delivery</span>
                  <strong>India & international markets</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ENQUIRY TYPES
        ====================================================== */}

        <section className="engix-contact-enquiries">

          <div className="engix-contact-shell">

            <div className="engix-contact-heading-grid">

              <div>

                <span className="engix-contact-label">
                  HOW CAN WE HELP?
                </span>

                <h2>
                  Start with what
                  matters to you.
                </h2>

              </div>

              <p>
                Different conversations require different context.
                Choose the route closest to your requirement and
                share a few details with us.
              </p>

            </div>


            <div className="engix-contact-enquiry-grid">

              {enquiryTypes.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className={`engix-contact-enquiry enquiry-${item.tone}`}
                  >

                    <div className="engix-contact-enquiry-top">

                      <span>
                        {item.number}
                      </span>

                      <div>
                        <Icon
                          size={31}
                          strokeWidth={1.55}
                        />
                      </div>

                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                    <a href="#engix-contact-form">
                      {item.action}

                      <ArrowUpRight
                        size={18}
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
            PROFESSIONAL IMAGE / COMPANY CONTEXT
        ====================================================== */}

        <section className="engix-contact-context">

          <div className="engix-contact-shell">

            <div className="engix-contact-context-grid">

              <div className="engix-contact-context-image">

                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90"
                  alt="Professionals discussing a digital product strategy"
                />

                <div>
                  <span>
                    START WITH THE PROBLEM
                  </span>

                  <strong>
                    You don’t need a complete
                    specification before
                    talking to us.
                  </strong>
                </div>

              </div>


              <div className="engix-contact-context-copy">

                <span className="engix-contact-label">
                  WORKING WITH ENGIX
                </span>

                <h2>
                  A useful conversation
                  before a line of code.
                </h2>

                <p>
                  Many technology projects begin with an incomplete idea:
                  a process that needs improving, software that no longer
                  supports the business, an opportunity to automate work,
                  or a new product that still needs definition.
                </p>

                <p>
                  Our role is not simply to wait for a specification.
                  We help understand the requirement, identify the important
                  decisions and determine the right product and engineering path.
                </p>


                <div className="engix-contact-context-points">

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Product and technical discovery</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Clear scope and delivery priorities</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Design and engineering in one workflow</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Support from development through launch</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT FORM
        ====================================================== */}

        <section
          className="engix-contact-form-section"
          id="engix-contact-form"
        >

          <div className="engix-contact-shell">

            <div className="engix-contact-form-layout">

              <div className="engix-contact-form-intro">

                <span className="engix-contact-label">
                  SEND US A MESSAGE
                </span>

                <h2>
                  Tell us what you’re
                  trying to achieve.
                </h2>

                <p>
                  Give us some context about your organization,
                  requirement and the outcome you are working toward.
                  A short introduction is enough to begin.
                </p>


                <div className="engix-contact-response">

                  <Sparkles
                    size={28}
                    strokeWidth={1.5}
                  />

                  <div>
                    <strong>
                      What happens next?
                    </strong>

                    <p>
                      We review your enquiry, determine the right people
                      to involve and respond with the most practical
                      next step.
                    </p>
                  </div>

                </div>


                <div className="engix-contact-capability-list">

                  <span>
                    COMMON ENGAGEMENTS
                  </span>

                  {engagementPoints.map((point) => (
                    <div key={point}>
                      <CheckCircle2
                        size={18}
                        strokeWidth={1.7}
                      />

                      <p>
                        {point}
                      </p>
                    </div>
                  ))}

                </div>

              </div>


              <div className="engix-contact-form-card">

                <div className="engix-contact-form-card-head">

                  <span>
                    PROJECT ENQUIRY
                  </span>

                  <h3>
                    Start the conversation.
                  </h3>

                  <p>
                    Share as much or as little information as you currently have.
                  </p>

                </div>

                <ContactForm />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DIRECT CONTACT DETAILS
        ====================================================== */}

        <section className="engix-contact-direct">

          <div className="engix-contact-shell">

            <div className="engix-contact-direct-heading">

              <span className="engix-contact-label">
                DIRECT CONTACT
              </span>

              <h2>
                Prefer to reach
                us directly?
              </h2>

            </div>


            <div className="engix-contact-direct-grid">

              <article>

                <div className="engix-direct-icon direct-lavender">
                  <Mail size={28} strokeWidth={1.5} />
                </div>

                <span>
                  BUSINESS EMAIL
                </span>

                <h3>
                  hello@engix.world
                </h3>

                <p>
                  For project enquiries, corporate communication
                  and technology partnerships.
                </p>

                <a href="mailto:hello@engix.world">
                  Send an email

                  <ArrowUpRight size={18} />
                </a>

              </article>


              <article>

                <div className="engix-direct-icon direct-yellow">
                  <Phone size={28} strokeWidth={1.5} />
                </div>

                <span>
                  CALL ENGIX
                </span>

                <h3>
                  +91 7355985134
                </h3>

                <p>
                  Speak directly with us about a new requirement
                  or an existing Engix engagement.
                </p>

                <a href="tel:+917355985134">
                  Call now

                  <ArrowUpRight size={18} />
                </a>

              </article>


              <article>

                <div className="engix-direct-icon direct-mint">
                  <Phone size={28} strokeWidth={1.5} />
                </div>

                <span>
                  ALTERNATE CONTACT
                </span>

                <h3>
                  +91 8960958818
                </h3>

                <p>
                  An additional contact number for business
                  communication and project enquiries.
                </p>

                <a href="tel:+918960958818">
                  Call now

                  <ArrowUpRight size={18} />
                </a>

              </article>


              <article>

                <div className="engix-direct-icon direct-peach">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>

                <span>
                  OFFICE ADDRESS
                </span>

                <h3>
                  Varanasi,
                  Uttar Pradesh
                </h3>

                <p>
                  552 Sahityanaka Mod,
                  Ramnagar, Varanasi,
                  Uttar Pradesh, India.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST / DELIVERY
        ====================================================== */}

        <section className="engix-contact-delivery">

          <div className="engix-contact-shell">

            <div className="engix-contact-delivery-grid">

              <div>

                <span className="engix-contact-label">
                  HOW WE ENGAGE
                </span>

                <h2>
                  Professional delivery,
                  wherever your business is.
                </h2>

              </div>


              <div className="engix-contact-delivery-content">

                <article>
                  <Globe2
                    size={29}
                    strokeWidth={1.5}
                  />

                  <div>
                    <h3>
                      International collaboration
                    </h3>

                    <p>
                      Structured remote delivery enables Engix to work
                      effectively with domestic and international businesses.
                    </p>
                  </div>
                </article>


                <article>
                  <ShieldCheck
                    size={29}
                    strokeWidth={1.5}
                  />

                  <div>
                    <h3>
                      Clear ownership
                    </h3>

                    <p>
                      Requirements, priorities and responsibilities remain
                      visible throughout the engagement.
                    </p>
                  </div>
                </article>


                <article>
                  <Handshake
                    size={29}
                    strokeWidth={1.5}
                  />

                  <div>
                    <h3>
                      Long-term thinking
                    </h3>

                    <p>
                      We build relationships around continued product
                      improvement rather than treating launch as the end.
                    </p>
                  </div>
                </article>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="engix-contact-final">

          <div className="engix-contact-shell">

            <div className="engix-contact-final-grid">

              <div>

                <span className="engix-contact-label">
                  START SOMETHING
                </span>

                <h2>
                  Great technology starts
                  with the right conversation.
                </h2>

                <p>
                  Tell us what is changing in your business
                  and where technology needs to take you next.
                </p>

              </div>


              <a
                href="#engix-contact-form"
                className="engix-contact-final-btn"
              >
                Start yours

                <span>
                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.8}
                  />
                </span>
              </a>

            </div>

          </div>

        </section>

      </main>


      <style>{`

        /* =====================================================
           VARIABLES / ROOT
        ====================================================== */

        .engix-contact-page {
          --black: #050505;
          --ink: #111318;

          --white: #ffffff;

          --lavender: #e9e6ff;
          --yellow: #fff14f;
          --mint: #dff5df;
          --peach: #f4dfd2;

          --gray: #686b72;

          --line:
            rgba(17, 19, 24, 0.11);

          width: 100%;

          background: #ffffff;

          color: var(--ink);

          overflow: hidden;
        }

        .engix-contact-shell {
          width:
            min(1240px, calc(100% - 56px));

          margin:
            0 auto;
        }

        .engix-contact-label {
          width: max-content;

          display: inline-block;

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
            0.11em;

          text-transform:
            uppercase;
        }


        /* =====================================================
           HERO
        ====================================================== */

        .engix-contact-hero {
          padding:
            95px 0 0;

          background:
            #ffffff;
        }

        .engix-contact-hero-grid {
          display: grid;

          grid-template-columns:
            1.05fr .95fr;

          gap:
            75px;

          align-items: end;
        }

        .engix-contact-hero-copy {
          padding:
            70px 0 100px;
        }

        .engix-contact-hero h1 {
          max-width:
            820px;

          margin:
            27px 0 0;

          color:
            var(--ink);

          font-size:
            clamp(4.2rem, 7vw, 7.3rem);

          line-height:
            .89;

          letter-spacing:
            -.072em;

          font-weight:
            600;
        }

        .engix-contact-hero-lead {
          max-width:
            690px;

          margin:
            38px 0 0;

          color:
            #505259;

          font-size:
            clamp(1.15rem, 1.5vw, 1.35rem);

          line-height:
            1.68;

          font-weight:
            500;
        }

        .engix-contact-hero-secondary {
          max-width:
            660px;

          margin:
            17px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.78;
        }


        /* HERO BUTTONS */

        .engix-contact-hero-actions {
          margin-top:
            38px;

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;
        }

        .engix-contact-primary-btn,
        .engix-contact-secondary-btn {
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

        .engix-contact-primary-btn {
          background:
            var(--black);

          color:
            #ffffff;
        }

        .engix-contact-primary-btn svg {
          color:
            var(--yellow);
        }

        .engix-contact-secondary-btn {
          background:
            #ffffff;

          color:
            var(--black);

          border:
            1px solid rgba(5,5,5,.16);
        }

        .engix-contact-primary-btn:hover,
        .engix-contact-secondary-btn:hover {
          transform:
            translateY(-2px);
        }


        /* HERO IMAGE */

        .engix-contact-hero-image {
          min-height:
            690px;

          position:
            relative;

          overflow:
            hidden;

          background:
            #eeeeee;
        }

        .engix-contact-hero-image img {
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

        .engix-contact-hero-image:hover img {
          transform:
            scale(1.025);
        }

        .engix-contact-hero-image::after {
          content:
            '';

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              180deg,
              transparent 48%,
              rgba(5,5,5,.72)
            );
        }

        .engix-contact-image-overlay {
          position:
            absolute;

          z-index:
            2;

          left:
            32px;

          right:
            32px;

          bottom:
            32px;

          color:
            #ffffff;
        }

        .engix-contact-image-overlay span {
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
            .11em;
        }

        .engix-contact-image-overlay strong {
          display:
            block;

          font-size:
            clamp(1.8rem,2.8vw,3rem);

          line-height:
            1.04;

          letter-spacing:
            -.04em;
        }


        /* =====================================================
           CONTACT STRIP
        ====================================================== */

        .engix-contact-strip {
          padding:
            0;

          background:
            #ffffff;

          border-bottom:
            1px solid var(--line);
        }

        .engix-contact-strip-grid {
          display:
            grid;

          grid-template-columns:
            repeat(4,1fr);
        }

        .engix-contact-strip-grid > a,
        .engix-contact-strip-grid > div {
          min-height:
            125px;

          padding:
            27px 28px;

          display:
            grid;

          grid-template-columns:
            54px 1fr;

          gap:
            14px;

          align-items:
            center;

          border-right:
            1px solid var(--line);

          color:
            var(--ink);

          text-decoration:
            none;
        }

        .engix-contact-strip-grid > *:last-child {
          border-right:
            0;
        }

        .engix-contact-strip-icon {
          width:
            48px;

          height:
            48px;

          display:
            grid;

          place-items:
            center;

          color:
            var(--ink);
        }

        .strip-lavender {
          background:
            var(--lavender);
        }

        .strip-yellow {
          background:
            var(--yellow);
        }

        .strip-mint {
          background:
            var(--mint);
        }

        .strip-peach {
          background:
            var(--peach);
        }

        .engix-contact-strip-grid span,
        .engix-contact-strip-grid strong {
          display:
            block;
        }

        .engix-contact-strip-grid span {
          margin-bottom:
            5px;

          color:
            #85868c;

          font-size:
            9px;

          font-weight:
            700;

          letter-spacing:
            .08em;

          text-transform:
            uppercase;
        }

        .engix-contact-strip-grid strong {
          color:
            var(--ink);

          font-size:
            13px;

          line-height:
            1.4;
        }


        /* =====================================================
           HEADINGS
        ====================================================== */

        .engix-contact-heading-grid {
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

        .engix-contact-heading-grid h2 {
          max-width:
            820px;

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

        .engix-contact-heading-grid > p {
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
           ENQUIRIES
        ====================================================== */

        .engix-contact-enquiries {
          padding:
            120px 0;

          background:
            #ffffff;
        }

        .engix-contact-enquiry-grid {
          display:
            grid;

          grid-template-columns:
            repeat(2,1fr);

          gap:
            14px;
        }

        .engix-contact-enquiry {
          position:
            relative;

          min-height:
            420px;

          padding:
            36px;

          display:
            flex;

          flex-direction:
            column;

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

        .engix-contact-enquiry::before {
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

        .enquiry-lavender::before {
          background:
            var(--lavender);
        }

        .enquiry-yellow::before {
          background:
            var(--yellow);
        }

        .enquiry-mint::before {
          background:
            var(--mint);
        }

        .enquiry-peach::before {
          background:
            var(--peach);
        }

        .engix-contact-enquiry:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 22px 52px rgba(0,0,0,.055);
        }

        .engix-contact-enquiry-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;
        }

        .engix-contact-enquiry-top > span {
          color:
            #808187;

          font-size:
            11px;

          font-weight:
            700;
        }

        .engix-contact-enquiry-top > div {
          width:
            50px;

          height:
            50px;

          display:
            grid;

          place-items:
            center;

          color:
            var(--ink);
        }

        .enquiry-lavender
        .engix-contact-enquiry-top > div {
          background:
            var(--lavender);
        }

        .enquiry-yellow
        .engix-contact-enquiry-top > div {
          background:
            var(--yellow);
        }

        .enquiry-mint
        .engix-contact-enquiry-top > div {
          background:
            var(--mint);
        }

        .enquiry-peach
        .engix-contact-enquiry-top > div {
          background:
            var(--peach);
        }

        .engix-contact-enquiry h3 {
          margin:
            auto 0 16px;

          color:
            var(--ink);

          font-size:
            clamp(2rem,3vw,3rem);

          line-height:
            1.03;

          letter-spacing:
            -.05em;

          font-weight:
            600;
        }

        .engix-contact-enquiry > p {
          max-width:
            540px;

          margin:
            0;

          color:
            var(--gray);

          font-size:
            14px;

          line-height:
            1.72;
        }

        .engix-contact-enquiry > a {
          width:
            max-content;

          margin-top:
            27px;

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

          border-bottom:
            1px solid var(--ink);

          padding-bottom:
            4px;
        }


        /* =====================================================
           CONTEXT
        ====================================================== */

        .engix-contact-context {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-contact-context-grid {
          display:
            grid;

          grid-template-columns:
            .95fr 1.05fr;

          gap:
            85px;

          align-items:
            center;
        }

        .engix-contact-context-image {
          height:
            650px;

          position:
            relative;

          overflow:
            hidden;
        }

        .engix-contact-context-image img {
          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          display:
            block;

          transition:
            transform .65s ease;
        }

        .engix-contact-context-image:hover img {
          transform:
            scale(1.025);
        }

        .engix-contact-context-image::after {
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

        .engix-contact-context-image > div {
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

        .engix-contact-context-image span {
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

        .engix-contact-context-image strong {
          display:
            block;

          font-size:
            clamp(2rem,3vw,3rem);

          line-height:
            1.03;

          letter-spacing:
            -.045em;
        }

        .engix-contact-context-copy h2 {
          max-width:
            700px;

          margin:
            20px 0 0;

          color:
            var(--ink);

          font-size:
            clamp(3rem,4.8vw,5rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-contact-context-copy > p {
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

        .engix-contact-context-points {
          margin-top:
            35px;
        }

        .engix-contact-context-points > div {
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
            #4d4f56;

          font-size:
            13px;
        }


        /* =====================================================
           FORM
        ====================================================== */

        .engix-contact-form-section {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-contact-form-layout {
          display:
            grid;

          grid-template-columns:
            .82fr 1.18fr;

          gap:
            90px;

          align-items:
            start;
        }

        .engix-contact-form-intro {
          position:
            sticky;

          top:
            115px;
        }

        .engix-contact-form-intro h2 {
          max-width:
            620px;

          margin:
            20px 0 0;

          color:
            var(--ink);

          font-size:
            clamp(3rem,4.8vw,5rem);

          line-height:
            .97;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-contact-form-intro > p {
          max-width:
            580px;

          margin:
            27px 0 0;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.78;
        }


        /* RESPONSE NOTE */

        .engix-contact-response {
          margin-top:
            45px;

          padding:
            24px;

          display:
            grid;

          grid-template-columns:
            45px 1fr;

          gap:
            15px;

          background:
            var(--lavender);

          border-left:
            4px solid var(--yellow);
        }

        .engix-contact-response svg {
          color:
            var(--ink);
        }

        .engix-contact-response strong {
          display:
            block;

          margin-bottom:
            7px;

          color:
            var(--ink);

          font-size:
            17px;
        }

        .engix-contact-response p {
          margin:
            0;

          color:
            #606168;

          font-size:
            12px;

          line-height:
            1.7;
        }


        /* CAPABILITIES */

        .engix-contact-capability-list {
          margin-top:
            40px;
        }

        .engix-contact-capability-list > span {
          display:
            block;

          margin-bottom:
            10px;

          color:
            #818288;

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            .11em;
        }

        .engix-contact-capability-list > div {
          display:
            flex;

          gap:
            9px;

          padding:
            12px 0;

          border-top:
            1px solid var(--line);
        }

        .engix-contact-capability-list p {
          margin:
            0;

          color:
            #505158;

          font-size:
            12px;

          line-height:
            1.6;
        }


        /* FORM CARD */

        .engix-contact-form-card {
          padding:
            45px;

          background:
            #ffffff;

          border:
            1px solid var(--line);

          box-shadow:
            0 20px 60px rgba(0,0,0,.045);
        }

        .engix-contact-form-card-head {
          padding-bottom:
            30px;

          margin-bottom:
            30px;

          border-bottom:
            1px solid var(--line);
        }

        .engix-contact-form-card-head > span {
          display:
            inline-block;

          padding:
            6px 9px;

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

        .engix-contact-form-card-head h3 {
          margin:
            17px 0 8px;

          color:
            var(--ink);

          font-size:
            30px;

          letter-spacing:
            -.04em;
        }

        .engix-contact-form-card-head p {
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
           DIRECT
        ====================================================== */

        .engix-contact-direct {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-contact-direct-heading {
          max-width:
            850px;

          margin-bottom:
            60px;
        }

        .engix-contact-direct-heading h2 {
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

        .engix-contact-direct-grid {
          display:
            grid;

          grid-template-columns:
            repeat(4,1fr);

          border-top:
            1px solid var(--line);
        }

        .engix-contact-direct-grid article {
          min-height:
            390px;

          padding:
            30px;

          display:
            flex;

          flex-direction:
            column;

          border-right:
            1px solid var(--line);
        }

        .engix-contact-direct-grid article:first-child {
          padding-left:
            0;
        }

        .engix-contact-direct-grid article:last-child {
          border-right:
            0;
        }

        .engix-direct-icon {
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

        .direct-lavender {
          background:
            var(--lavender);
        }

        .direct-yellow {
          background:
            var(--yellow);
        }

        .direct-mint {
          background:
            var(--mint);
        }

        .direct-peach {
          background:
            var(--peach);
        }

        .engix-contact-direct-grid article > span {
          margin-top:
            60px;

          color:
            #85868c;

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-contact-direct-grid h3 {
          margin:
            11px 0 15px;

          color:
            var(--ink);

          font-size:
            22px;

          line-height:
            1.15;

          letter-spacing:
            -.035em;
        }

        .engix-contact-direct-grid p {
          margin:
            0;

          color:
            var(--gray);

          font-size:
            12px;

          line-height:
            1.72;
        }

        .engix-contact-direct-grid a {
          width:
            max-content;

          margin-top:
            auto;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          color:
            var(--ink);

          text-decoration:
            none;

          font-size:
            12px;

          font-weight:
            750;

          border-bottom:
            1px solid var(--ink);

          padding-bottom:
            4px;
        }


        /* =====================================================
           DELIVERY
        ====================================================== */

        .engix-contact-delivery {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-contact-delivery-grid {
          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          gap:
            90px;
        }

        .engix-contact-delivery-grid h2 {
          max-width:
            700px;

          margin:
            20px 0 0;

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

        .engix-contact-delivery-content {
          padding-top:
            35px;
        }

        .engix-contact-delivery-content article {
          padding:
            24px 0;

          display:
            grid;

          grid-template-columns:
            50px 1fr;

          gap:
            15px;

          border-top:
            1px solid var(--line);
        }

        .engix-contact-delivery-content article:nth-child(1) svg {
          background:
            var(--lavender);
        }

        .engix-contact-delivery-content article:nth-child(2) svg {
          background:
            var(--yellow);
        }

        .engix-contact-delivery-content article:nth-child(3) svg {
          background:
            var(--mint);
        }

        .engix-contact-delivery-content svg {
          width:
            46px;

          height:
            46px;

          padding:
            10px;

          color:
            var(--ink);
        }

        .engix-contact-delivery-content h3 {
          margin:
            0 0 7px;

          color:
            var(--ink);

          font-size:
            19px;

          letter-spacing:
            -.03em;
        }

        .engix-contact-delivery-content p {
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
           FINAL CTA
        ====================================================== */

        .engix-contact-final {
          position:
            relative;

          padding:
            110px 0;

          background:
            #ffffff;

          border-top:
            1px solid var(--line);
        }

        .engix-contact-final::before {
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

        .engix-contact-final-grid {
          display:
            grid;

          grid-template-columns:
            1.4fr .6fr;

          gap:
            80px;

          align-items:
            end;
        }

        .engix-contact-final h2 {
          max-width:
            900px;

          margin:
            20px 0 0;

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

        .engix-contact-final p {
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

        .engix-contact-final-btn {
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

        .engix-contact-final-btn:hover {
          transform:
            translateY(-2px);
        }

        .engix-contact-final-btn > span {
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
           LARGE TABLET
        ====================================================== */

        @media(max-width:1100px) {

          .engix-contact-hero-grid,
          .engix-contact-context-grid {
            grid-template-columns:
              1fr;
          }

          .engix-contact-hero-copy {
            padding-bottom:
              35px;
          }

          .engix-contact-hero-image,
          .engix-contact-hero-image img {
            height:
              540px;

            min-height:
              540px;
          }

          .engix-contact-strip-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .engix-contact-strip-grid > *:nth-child(2) {
            border-right:
              0;
          }

          .engix-contact-strip-grid > * {
            border-bottom:
              1px solid var(--line);
          }

          .engix-contact-context-image {
            height:
              520px;
          }

          .engix-contact-form-layout {
            grid-template-columns:
              1fr;

            gap:
              55px;
          }

          .engix-contact-form-intro {
            position:
              static;
          }

          .engix-contact-direct-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .engix-contact-direct-grid article {
            border-bottom:
              1px solid var(--line);
          }

          .engix-contact-direct-grid article:nth-child(2) {
            border-right:
              0;
          }

          .engix-contact-direct-grid article:nth-child(3) {
            padding-left:
              0;
          }

          .engix-contact-final-grid {
            grid-template-columns:
              1fr;

            gap:
              45px;
          }

          .engix-contact-final-btn {
            justify-self:
              start;
          }

        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media(max-width:800px) {

          .engix-contact-heading-grid,
          .engix-contact-delivery-grid {
            grid-template-columns:
              1fr;

            gap:
              28px;
          }

          .engix-contact-enquiry-grid {
            grid-template-columns:
              1fr;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media(max-width:650px) {

          .engix-contact-shell {
            width:
              calc(100% - 32px);
          }

          .engix-contact-hero {
            padding-top:
              45px;
          }

          .engix-contact-hero-copy {
            padding:
              45px 0 55px;
          }

          .engix-contact-hero h1 {
            font-size:
              clamp(3.8rem,17vw,5.6rem);
          }

          .engix-contact-hero-actions {
            flex-direction:
              column;
          }

          .engix-contact-primary-btn,
          .engix-contact-secondary-btn {
            width:
              100%;
          }

          .engix-contact-hero-image,
          .engix-contact-hero-image img {
            min-height:
              410px;

            height:
              410px;
          }

          .engix-contact-image-overlay {
            left:
              20px;

            right:
              20px;

            bottom:
              22px;
          }

          .engix-contact-strip-grid {
            grid-template-columns:
              1fr;
          }

          .engix-contact-strip-grid > * {
            border-right:
              0;
          }

          .engix-contact-enquiries,
          .engix-contact-context,
          .engix-contact-form-section,
          .engix-contact-direct,
          .engix-contact-delivery {
            padding:
              85px 0;
          }

          .engix-contact-enquiry {
            min-height:
              390px;

            padding:
              28px;
          }

          .engix-contact-context-image {
            height:
              410px;
          }

          .engix-contact-form-card {
            padding:
              30px 22px;
          }

          .engix-contact-response {
            grid-template-columns:
              1fr;
          }

          .engix-contact-direct-grid {
            grid-template-columns:
              1fr;
          }

          .engix-contact-direct-grid article,
          .engix-contact-direct-grid article:first-child,
          .engix-contact-direct-grid article:nth-child(3) {
            min-height:
              320px;

            padding:
              28px 0;

            border-right:
              0;
          }

          .engix-contact-direct-grid article > span {
            margin-top:
              38px;
          }

          .engix-contact-final {
            padding:
              85px 0;
          }

          .engix-contact-final::before {
            width:
              calc(100% - 32px);
          }

          .engix-contact-final-btn {
            width:
              100%;

            justify-content:
              space-between;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media(max-width:430px) {

          .engix-contact-hero h1 {
            font-size:
              clamp(3.3rem,16vw,4.6rem);
          }

          .engix-contact-hero-image,
          .engix-contact-hero-image img,
          .engix-contact-context-image {
            min-height:
              360px;

            height:
              360px;
          }

          .engix-contact-form-card {
            padding:
              25px 18px;
          }

        }

      `}</style>

    </>
  );
}