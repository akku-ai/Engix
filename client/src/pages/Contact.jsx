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
  Sparkles,
} from 'lucide-react';

const locations = [
  {
    city: 'Varanasi',
    country: 'India',
    address: '552 Sahityanaka Mod, Ramnagar, Varanasi',
    tone: 'mint',
  },
  {
    city: 'Las Vegas',
    country: 'United States',
    address: '4617 Calderwood St, Las Vegas, NV 89103, USA',
    tone: 'lavender',
  },
  {
    city: 'Austin',
    country: 'United States',
    address: '223 TX-343 Loop, Austin, TX 78701, USA',
    tone: 'yellow',
  },
  {
    city: 'Calgary',
    country: 'Canada',
    address: '618-640 5 Ave SW, Calgary, AB, Canada',
    tone: 'peach',
  },
];

export default function Contact() {
  usePageTitle('Contact');

  const enquiryTypes = [
    {
      number: '01',
      icon: BriefcaseBusiness,
      title: 'Start a new project',
      description:
        'Planning a new website, software platform, mobile application, AI product or digital marketing initiative? Tell us what you are trying to achieve.',
      action: 'Discuss your project',
      tone: 'lavender',
    },
    {
      number: '02',
      icon: Headphones,
      title: 'Existing client support',
      description:
        'Already working with Engix? Connect with us for product improvements, maintenance, technical support or the next phase of your engagement.',
      action: 'Contact our team',
      tone: 'mint',
    },
    {
      number: '03',
      icon: Handshake,
      title: 'Technology partnership',
      description:
        'We collaborate with technology businesses, consultants, agencies and delivery partners where our engineering capabilities can create shared value.',
      action: 'Explore partnership',
      tone: 'yellow',
    },
    {
      number: '04',
      icon: Globe2,
      title: 'General business enquiry',
      description:
        'For corporate enquiries, collaboration opportunities or anything that does not fit the categories above, send us a message.',
      action: 'Send an enquiry',
      tone: 'peach',
    },
  ];

  const engagementPoints = [
    'Custom software and digital product development',
    'AI-powered applications and workflow automation',
    'Web and mobile application engineering',
    'Corporate and technology website development',
    'UI/UX and product experience design',
    'Backend, APIs, cloud and DevOps engineering',
    'SEO, paid advertising and digital marketing strategy',
  ];

  return (
    <>
      <main className="engix-contact-page">
        {/* HERO */}

        <section className="engix-contact-hero">
          <div className="engix-contact-shell">
            <div className="engix-contact-hero-grid">
              <div className="engix-contact-hero-copy">
                <span className="engix-contact-label">
                  CONTACT ENGIX
                </span>

                <h1>
                  Let’s talk about what you’re building.
                </h1>

                <p className="engix-contact-hero-lead">
                  Whether you are launching a new digital product,
                  improving an existing platform, growing your digital
                  presence or looking for a long-term technology partner,
                  the right conversation is a good place to start.
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
                    <ArrowRight size={20} strokeWidth={1.8} />
                  </a>

                  <a
                    href="mailto:hello@engix.world"
                    className="engix-contact-secondary-btn"
                  >
                    hello@engix.world
                    <ArrowUpRight size={19} strokeWidth={1.8} />
                  </a>
                </div>
              </div>

              <div className="engix-contact-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=90"
                  alt="Professional technology workspace"
                />

                <div className="engix-contact-image-overlay">
                  <span>ENGIX TECH PRIVATE LIMITED</span>

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

        {/* QUICK CONTACT */}

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

        {/* ENQUIRY TYPES */}

        <section className="engix-contact-enquiries">
          <div className="engix-contact-shell">
            <div className="engix-contact-heading-grid">
              <div>
                <span className="engix-contact-label">
                  HOW CAN WE HELP?
                </span>

                <h2>Start with what matters to you.</h2>
              </div>

              <p>
                Different conversations require different context.
                Choose the route closest to your requirement and
                share a few details with us.
              </p>
            </div>

            <div className="engix-contact-enquiry-grid">
              {enquiryTypes.map(item => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className={`engix-contact-enquiry enquiry-${item.tone}`}
                  >
                    <div className="engix-contact-enquiry-top">
                      <span>{item.number}</span>

                      <div>
                        <Icon size={31} strokeWidth={1.55} />
                      </div>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <a href="#engix-contact-form">
                      {item.action}
                      <ArrowUpRight size={18} strokeWidth={1.7} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMPANY CONTEXT */}

        <section className="engix-contact-context">
          <div className="engix-contact-shell">
            <div className="engix-contact-context-grid">
              <div className="engix-contact-context-image">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90"
                  alt="Professionals discussing a digital product strategy"
                  loading="lazy"
                  decoding="async"
                />

                <div>
                  <span>START WITH THE PROBLEM</span>

                  <strong>
                    You don’t need a complete specification
                    before talking to us.
                  </strong>
                </div>
              </div>

              <div className="engix-contact-context-copy">
                <span className="engix-contact-label">
                  WORKING WITH ENGIX
                </span>

                <h2>
                  A useful conversation before a line of code.
                </h2>

                <p>
                  Many technology projects begin with an incomplete idea:
                  a process that needs improving, software that no longer
                  supports the business, an opportunity to automate work,
                  or a new product that still needs definition.
                </p>

                <p>
                  Our role is not simply to wait for a specification.
                  We help understand the requirement, identify the
                  important decisions and determine the right product
                  and engineering path.
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

        {/* CONTACT FORM — EXISTING LOGIC PRESERVED */}

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

                <h2>Tell us what you’re trying to achieve.</h2>

                <p>
                  Give us some context about your organization,
                  requirement and the outcome you are working toward.
                  A short introduction is enough to begin.
                </p>

                <div className="engix-contact-response">
                  <Sparkles size={28} strokeWidth={1.5} />

                  <div>
                    <strong>What happens next?</strong>

                    <p>
                      We review your enquiry, determine the right people
                      to involve and respond with the most practical
                      next step.
                    </p>
                  </div>
                </div>

                <div className="engix-contact-capability-list">
                  <span>COMMON ENGAGEMENTS</span>

                  {engagementPoints.map(point => (
                    <div key={point}>
                      <CheckCircle2 size={18} strokeWidth={1.7} />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="engix-contact-form-card">
                <div className="engix-contact-form-card-head">
                  <span>PROJECT ENQUIRY</span>

                  <h3>Start the conversation.</h3>

                  <p>
                    Share as much or as little information
                    as you currently have.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* DIRECT CONTACT */}

        <section className="engix-contact-direct">
          <div className="engix-contact-shell">
            <div className="engix-contact-direct-heading">
              <span className="engix-contact-label">
                DIRECT CONTACT
              </span>

              <h2>Prefer to reach us directly?</h2>
            </div>

            <div className="engix-contact-direct-grid">
              <article>
                <div className="engix-direct-icon direct-lavender">
                  <Mail size={28} strokeWidth={1.5} />
                </div>

                <span>BUSINESS EMAIL</span>
                <h3>hello@engix.world</h3>

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

                <span>CALL ENGIX</span>
                <h3>+91 7355985134</h3>

                <p>
                  Speak directly with us about a new requirement
                  or an existing Engix engagement.
                </p>

                <a href="tel:+917355985134">
                  Call now
                  <ArrowUpRight size={18} />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* FOUR LOCATIONS */}

        <section
          className="engix-contact-locations"
          aria-labelledby="engix-locations-title"
        >
          <div className="engix-contact-shell">
            <div className="engix-contact-direct-heading">
              <span className="engix-contact-label">
                LOCATIONS
              </span>

              <h2 id="engix-locations-title">
                Find the right location.
              </h2>
            </div>

            <div className="engix-location-grid">
              {locations.map((location, index) => (
                <article
                  className="engix-location-card"
                  key={location.city}
                >
                  <div className="engix-location-top">
                    <div
                      className={`engix-direct-icon direct-${location.tone}`}
                    >
                      <MapPin
                        size={26}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <span className="engix-location-country">
                    {location.country}
                  </span>

                  <h3>{location.city}</h3>

                  <address>{location.address}</address>

                  
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERY */}

        <section className="engix-contact-delivery">
          <div className="engix-contact-shell">
            <div className="engix-contact-delivery-grid">
              <div>
                <span className="engix-contact-label">
                  HOW WE ENGAGE
                </span>

                <h2>
                  Professional delivery, wherever your business is.
                </h2>
              </div>

              <div className="engix-contact-delivery-content">
                <article>
                  <Globe2 size={29} strokeWidth={1.5} />

                  <div>
                    <h3>International collaboration</h3>

                    <p>
                      Structured remote delivery enables Engix to work
                      effectively with domestic and international
                      businesses.
                    </p>
                  </div>
                </article>

                <article>
                  <ShieldCheck size={29} strokeWidth={1.5} />

                  <div>
                    <h3>Clear ownership</h3>

                    <p>
                      Requirements, priorities and responsibilities
                      remain visible throughout the engagement.
                    </p>
                  </div>
                </article>

                <article>
                  <Handshake size={29} strokeWidth={1.5} />

                  <div>
                    <h3>Long-term thinking</h3>

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

        {/* FINAL CTA */}

        <section className="engix-contact-final">
          <div className="engix-contact-shell">
            <div className="engix-contact-final-grid">
              <div>
                <span className="engix-contact-label">
                  START SOMETHING
                </span>

                <h2>
                  Great technology starts with the right conversation.
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
                  <ArrowUpRight size={21} strokeWidth={1.8} />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .engix-contact-page {
          --ink: #111318;
          --gray: #565c63;
          --line: #dedfe2;
          --yellow: #fff14f;
          --mint: #dff5df;
          --lavender: #e9e6ff;
          --peach: #f4dfd2;
          --black: #111318;

          width: 100%;
          color: var(--ink);
          background: #fff;
          font-family: inherit;
          font-size: 17px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .engix-contact-page *,
        .engix-contact-page *::before,
        .engix-contact-page *::after {
          box-sizing: border-box;
        }

        .engix-contact-page .engix-contact-shell {
          width: min(1260px, calc(100% - 56px));
          margin-inline: auto;
        }

        .engix-contact-page h1,
        .engix-contact-page h2,
        .engix-contact-page h3 {
          color: var(--ink);
          font-family: inherit;
          font-weight: 700;
          text-wrap: balance;
          text-transform: none;
        }

        .engix-contact-page h1 {
          font-size: clamp(39px, 4.5vw, 64px);
          line-height: 1.1;
          letter-spacing: -.035em;
          margin: 16px 0 20px;
        }

        .engix-contact-page h2 {
          font-size: clamp(29px, 2.85vw, 42px);
          line-height: 1.2;
          letter-spacing: -.025em;
          margin: 14px 0 18px;
        }

        .engix-contact-page h3 {
          font-size: 21px;
          line-height: 1.35;
          letter-spacing: -.01em;
          margin: 0 0 12px;
        }

        .engix-contact-page p {
          color: var(--gray);
          font-size: 17px;
          line-height: 1.7;
          margin: 0 0 16px;
        }

        .engix-contact-page p:last-child {
          margin-bottom: 0;
        }

        .engix-contact-page a {
          color: inherit;
        }

        .engix-contact-page svg {
          flex-shrink: 0;
        }

        .engix-contact-page a:focus-visible {
          outline: 3px solid #678650;
          outline-offset: 5px;
        }

        .engix-contact-page .engix-contact-label {
          display: inline-block;
          background: var(--lavender);
          color: #35304b;
          padding: 6px 11px;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 750;
          letter-spacing: .065em;
        }

        .engix-contact-page .engix-contact-hero {
          padding: 36px 0 44px;
          background: #fffdf0;
          border-bottom: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-enquiries,
        .engix-contact-page .engix-contact-context,
        .engix-contact-page .engix-contact-form-section,
        .engix-contact-page .engix-contact-direct,
        .engix-contact-page .engix-contact-locations,
        .engix-contact-page .engix-contact-delivery,
        .engix-contact-page .engix-contact-final {
          padding: clamp(36px, 4vw, 56px) 0;
          border-bottom: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-context,
        .engix-contact-page .engix-contact-locations {
          background: #fafaf8;
        }

        .engix-contact-page .engix-contact-form-section {
          background: #f3faf1;
          scroll-margin-top: 100px;
        }

        .engix-contact-page .engix-contact-final {
          background: #fffdf0;
        }

        .engix-contact-page .engix-contact-hero-grid,
        .engix-contact-page .engix-contact-context-grid,
        .engix-contact-page .engix-contact-form-layout,
        .engix-contact-page .engix-contact-delivery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 34px;
          align-items: center;
        }

        .engix-contact-page .engix-contact-form-layout,
        .engix-contact-page .engix-contact-delivery-grid {
          align-items: start;
        }

        .engix-contact-page [class$="-grid"] > *,
        .engix-contact-page .engix-contact-form-layout > * {
          min-width: 0;
        }

        .engix-contact-page .engix-contact-hero-lead {
          font-size: 20px;
          line-height: 1.6;
          font-weight: 550;
          color: #353b41;
        }

        .engix-contact-page .engix-contact-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .engix-contact-page .engix-contact-primary-btn,
        .engix-contact-page .engix-contact-secondary-btn,
        .engix-contact-page .engix-contact-final-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          max-width: 100%;
          padding: 12px 18px;
          border: 1px solid var(--ink);
          border-radius: 4px;
          font-size: 15px;
          line-height: 1.5;
          font-weight: 700;
          text-decoration: none;
          transition: background .2s ease, transform .2s ease;
        }

        .engix-contact-page .engix-contact-primary-btn {
          background: var(--yellow);
        }

        .engix-contact-page .engix-contact-secondary-btn {
          background: #fff;
        }

        .engix-contact-page .engix-contact-primary-btn:hover,
        .engix-contact-page .engix-contact-secondary-btn:hover,
        .engix-contact-page .engix-contact-final-btn:hover {
          transform: translateY(-2px);
        }

        .engix-contact-page .engix-contact-hero-image,
        .engix-contact-page .engix-contact-context-image {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          border-radius: 6px;
          background: #353b41;
          aspect-ratio: 4 / 3;
        }

        .engix-contact-page .engix-contact-hero-image img,
        .engix-contact-page .engix-contact-context-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .engix-contact-page .engix-contact-hero-image::after,
        .engix-contact-page .engix-contact-context-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent 20%,
            rgba(17, 19, 24, .85)
          );
          pointer-events: none;
        }

        .engix-contact-page .engix-contact-image-overlay,
        .engix-contact-page .engix-contact-context-image > div {
          position: absolute;
          z-index: 1;
          inset: auto 26px 26px;
          color: #fff;
        }

        .engix-contact-page .engix-contact-image-overlay span,
        .engix-contact-page .engix-contact-context-image > div span {
          display: block;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 700;
          letter-spacing: .06em;
          margin-bottom: 10px;
        }

        .engix-contact-page .engix-contact-image-overlay strong,
        .engix-contact-page .engix-contact-context-image > div strong {
          display: block;
          max-width: 420px;
          font-size: clamp(21px, 2.2vw, 29px);
          line-height: 1.3;
        }

        .engix-contact-page .engix-contact-strip {
          border-bottom: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-strip-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .engix-contact-page .engix-contact-strip-grid > * {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 24px 16px;
          border-right: 1px solid var(--line);
          text-decoration: none;
        }

        .engix-contact-page .engix-contact-strip-grid > :first-child {
          padding-left: 0;
        }

        .engix-contact-page .engix-contact-strip-grid > :last-child {
          border-right: 0;
        }

        .engix-contact-page .engix-contact-strip-grid span {
          display: block;
          color: var(--gray);
          font-size: 13px;
        }

        .engix-contact-page .engix-contact-strip-grid strong {
          display: block;
          font-size: 15px;
          line-height: 1.5;
        }

        .engix-contact-page .engix-contact-strip-icon,
        .engix-contact-page .engix-direct-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          border-radius: 4px;
        }

        .engix-contact-page .strip-lavender,
        .engix-contact-page .direct-lavender {
          background: var(--lavender);
        }

        .engix-contact-page .strip-yellow,
        .engix-contact-page .direct-yellow {
          background: var(--yellow);
        }

        .engix-contact-page .strip-mint,
        .engix-contact-page .direct-mint {
          background: var(--mint);
        }

        .engix-contact-page .strip-peach,
        .engix-contact-page .direct-peach {
          background: var(--peach);
        }

        .engix-contact-page .engix-contact-heading-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 34px;
          align-items: end;
          margin-bottom: 28px;
        }

        .engix-contact-page .engix-contact-heading-grid h2 {
          margin-bottom: 0;
        }

        .engix-contact-page .engix-contact-enquiry-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .engix-contact-page .engix-contact-enquiry {
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 6px;
        }

        .engix-contact-page .enquiry-lavender {
          background: #f3f1ff;
        }

        .engix-contact-page .enquiry-mint {
          background: #f3faf1;
        }

        .engix-contact-page .enquiry-yellow {
          background: #fffdf0;
        }

        .engix-contact-page .enquiry-peach {
          background: #fbf2ed;
        }

        .engix-contact-page .engix-contact-enquiry-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }

        .engix-contact-page .engix-contact-enquiry-top > span {
          font-size: 13px;
          font-weight: 700;
          color: var(--gray);
        }

        .engix-contact-page .engix-contact-enquiry-top > div {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          background: #ffffffb3;
          border-radius: 4px;
        }

        .engix-contact-page .engix-contact-enquiry a,
        .engix-contact-page .engix-contact-direct-grid a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: start;
          margin-top: auto;
          padding-top: 14px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .engix-contact-page .engix-contact-context-points {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .engix-contact-page .engix-contact-context-points > div {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .engix-contact-page .engix-contact-context-points svg {
          margin-top: 4px;
          color: #3f6b3a;
        }

        .engix-contact-page .engix-contact-response {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          gap: 14px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 22px;
          margin: 24px 0;
        }

        .engix-contact-page .engix-contact-response strong {
          display: block;
          margin-bottom: 8px;
        }

        .engix-contact-page .engix-contact-capability-list > span,
        .engix-contact-page .engix-contact-form-card-head > span,
        .engix-contact-page .engix-contact-direct-grid article > span {
          display: block;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 750;
          letter-spacing: .055em;
          color: var(--gray);
          margin-bottom: 14px;
        }

        .engix-contact-page .engix-contact-capability-list > div {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
        }

        .engix-contact-page .engix-contact-capability-list svg {
          color: #3f6b3a;
          margin-top: 5px;
        }

        .engix-contact-page .engix-contact-capability-list p {
          margin: 0;
        }

        .engix-contact-page .engix-contact-form-card {
          min-width: 0;
          background: #fff;
          padding: clamp(22px, 3vw, 34px);
          border: 1px solid var(--line);
          border-radius: 6px;
          box-shadow: 0 12px 32px #11131808;
        }

        .engix-contact-page .engix-contact-form-card-head {
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-form-card form {
          min-width: 0;
          max-width: 100%;
        }

        .engix-contact-page .engix-contact-form-card input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]):not([type="submit"]):not([type="button"]),
        .engix-contact-page .engix-contact-form-card select,
        .engix-contact-page .engix-contact-form-card textarea {
          max-width: 100%;
          min-width: 0;
          font-family: inherit;
          font-size: 16px;
        }

        .engix-contact-page .engix-contact-direct-heading {
          max-width: 850px;
          margin-bottom: 28px;
        }

        .engix-contact-page .engix-contact-direct-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .engix-contact-page .engix-contact-direct-grid article {
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 6px;
        }

        .engix-contact-page .engix-direct-icon {
          margin-bottom: 22px;
        }

        /* FOUR LOCATION CARDS */

        .engix-contact-page .engix-location-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .engix-contact-page .engix-location-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 28px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 6px;
        }

        .engix-contact-page .engix-location-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        .engix-contact-page .engix-location-top .engix-direct-icon {
          margin: 0;
        }

        .engix-contact-page .engix-location-top > span {
          color: var(--gray);
          font-size: 13px;
          font-weight: 700;
        }

        .engix-contact-page .engix-location-country {
          font-size: 12px;
          letter-spacing: .065em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--gray);
          margin-bottom: 8px;
        }

        .engix-contact-page .engix-location-card h3 {
          font-size: 25px;
        }

        .engix-contact-page .engix-location-card address {
          font-style: normal;
          font-size: 17px;
          line-height: 1.7;
          color: var(--gray);
          margin-bottom: 22px;
        }

        .engix-contact-page .engix-location-card a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          align-self: flex-start;
          font-size: 15px;
          font-weight: 700;
          text-underline-offset: 5px;
        }

        .engix-contact-page .engix-contact-delivery-content article {
          display: grid;
          grid-template-columns: 46px minmax(0, 1fr);
          gap: 16px;
          padding: 22px 0;
          border-top: 1px solid var(--line);
        }

        .engix-contact-page .engix-contact-delivery-content article:first-child {
          padding-top: 0;
          border-top: 0;
        }

        .engix-contact-page .engix-contact-delivery-content article > svg {
          width: 46px;
          height: 46px;
          padding: 10px;
          border-radius: 4px;
          background: var(--lavender);
        }

        .engix-contact-page .engix-contact-delivery-content article:nth-child(2) > svg {
          background: var(--yellow);
        }

        .engix-contact-page .engix-contact-delivery-content article:nth-child(3) > svg {
          background: var(--mint);
        }

        .engix-contact-page .engix-contact-final-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 34px;
          align-items: center;
        }

        .engix-contact-page .engix-contact-final-grid > div {
          max-width: 850px;
        }

        .engix-contact-page .engix-contact-final-btn {
          background: var(--black);
          color: #fff;
        }

        .engix-contact-page .engix-contact-final-btn > span {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--yellow);
          color: var(--ink);
        }

        @media (max-width: 1100px) {
          .engix-contact-page .engix-contact-enquiry-grid,
          .engix-contact-page .engix-contact-strip-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .engix-contact-page .engix-contact-strip-grid > * {
            padding: 20px 16px;
          }

          .engix-contact-page .engix-contact-strip-grid > :nth-child(odd) {
            padding-left: 0;
          }

          .engix-contact-page .engix-contact-strip-grid > :nth-child(even) {
            border-right: 0;
          }

          .engix-contact-page .engix-contact-strip-grid > :nth-child(-n+2) {
            border-bottom: 1px solid var(--line);
          }
        }

        @media (max-width: 850px) {
          .engix-contact-page .engix-contact-hero-grid,
          .engix-contact-page .engix-contact-context-grid,
          .engix-contact-page .engix-contact-form-layout,
          .engix-contact-page .engix-contact-delivery-grid,
          .engix-contact-page .engix-contact-heading-grid,
          .engix-contact-page .engix-contact-final-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }

          .engix-contact-page .engix-contact-hero-image,
          .engix-contact-page .engix-contact-context-image {
            aspect-ratio: 16 / 10;
          }

          .engix-contact-page .engix-contact-final-btn {
            justify-self: start;
          }
        }

        @media (max-width: 600px) {
          .engix-contact-page .engix-contact-shell {
            width: calc(100% - 32px);
          }

          .engix-contact-page .engix-contact-hero {
            padding: 32px 0 36px;
          }

          .engix-contact-page .engix-contact-enquiry-grid,
          .engix-contact-page .engix-contact-direct-grid,
          .engix-contact-page .engix-contact-strip-grid,
          .engix-contact-page .engix-location-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .engix-contact-page .engix-location-grid {
            gap: 16px;
          }

          .engix-contact-page .engix-contact-strip-grid > * {
            padding: 18px 0;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .engix-contact-page .engix-contact-strip-grid > :last-child {
            border-bottom: 0;
          }

          .engix-contact-page .engix-contact-hero-actions {
            flex-direction: column;
          }

          .engix-contact-page .engix-contact-primary-btn,
          .engix-contact-page .engix-contact-secondary-btn,
          .engix-contact-page .engix-contact-final-btn {
            width: 100%;
          }

          .engix-contact-page .engix-contact-hero-image,
          .engix-contact-page .engix-contact-context-image {
            aspect-ratio: 4 / 3;
          }

          .engix-contact-page .engix-contact-image-overlay,
          .engix-contact-page .engix-contact-context-image > div {
            inset: auto 20px 20px;
          }

          .engix-contact-page .engix-contact-enquiry,
          .engix-contact-page .engix-contact-direct-grid article,
          .engix-contact-page .engix-location-card {
            padding: 22px;
          }

          .engix-contact-page .engix-contact-response {
            padding: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .engix-contact-page .engix-contact-primary-btn,
          .engix-contact-page .engix-contact-secondary-btn,
          .engix-contact-page .engix-contact-final-btn {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}