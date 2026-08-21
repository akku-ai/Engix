import { Link } from 'react-router-dom';

import {
  Database,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

import usePageTitle from '../hooks/usePageTitle';


export default function Privacy() {
  usePageTitle('Privacy Policy');

  return (
    <>
      <main className="engix-legal-page">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="engix-legal-hero">

          <div className="engix-legal-shell">

            <div className="engix-legal-badge">
              PRIVACY POLICY
            </div>

            <h1>
              Your privacy matters to us.
            </h1>

            <p className="engix-legal-intro">
              This Privacy Policy explains how Engix Tech Private
              Limited collects, uses, stores and protects personal
              information when you visit our website, contact our team,
              submit an enquiry or engage with our services.
            </p>

            <div className="engix-legal-meta">

              <span>
                Effective date: 22 August 2026
              </span>

              <span>
                Last updated: 22 August 2026
              </span>

            </div>

          </div>

        </section>


        {/* =====================================================
            SUMMARY
        ====================================================== */}

        <section className="engix-legal-summary">

          <div className="engix-legal-shell">

            <div className="engix-legal-summary-grid">

              <article>

                <UserCheck size={32} />

                <h3>
                  Information you provide
                </h3>

                <p>
                  Contact details, company information,
                  project requirements and other information
                  you choose to submit.
                </p>

              </article>


              <article>

                <Database size={32} />

                <h3>
                  How we use it
                </h3>

                <p>
                  To respond to enquiries, provide services,
                  communicate with clients and improve our
                  website and business operations.
                </p>

              </article>


              <article>

                <ShieldCheck size={32} />

                <h3>
                  How we protect it
                </h3>

                <p>
                  We use reasonable technical and organizational
                  safeguards intended to protect personal
                  information from unauthorized access or misuse.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTENT
        ====================================================== */}

        <section className="engix-legal-content">

          <div className="engix-legal-shell">

            <div className="engix-legal-layout">

              <aside className="engix-legal-sidebar">

                <span>
                  ON THIS PAGE
                </span>

                <a href="#about">
                  About this policy
                </a>

                <a href="#collect">
                  Information we collect
                </a>

                <a href="#use">
                  How we use information
                </a>

                <a href="#legal">
                  Lawful processing
                </a>

                <a href="#cookies">
                  Cookies & analytics
                </a>

                <a href="#sharing">
                  Information sharing
                </a>

                <a href="#retention">
                  Data retention
                </a>

                <a href="#security">
                  Security
                </a>

                <a href="#rights">
                  Your choices & rights
                </a>

                <a href="#international">
                  International engagements
                </a>

                <a href="#children">
                  Children
                </a>

                <a href="#changes">
                  Policy updates
                </a>

                <a href="#contact">
                  Contact us
                </a>

              </aside>


              <div className="engix-legal-article">

                <section id="about">

                  <span className="engix-legal-number">
                    01
                  </span>

                  <h2>
                    About this Privacy Policy
                  </h2>

                  <p>
                    This Privacy Policy applies to the website
                    operated by Engix Tech Private Limited
                    (“Engix”, “we”, “our” or “us”), including
                    engix.world and pages operated under that domain.
                  </p>

                  <p>
                    It applies to personal information collected
                    through website forms, email, telephone,
                    WhatsApp, consultations and other business
                    communications with Engix.
                  </p>

                  <p>
                    By using our website or voluntarily providing
                    information to us, you acknowledge the practices
                    described in this Privacy Policy.
                  </p>

                </section>


                <section id="collect">

                  <span className="engix-legal-number">
                    02
                  </span>

                  <h2>
                    Information we may collect
                  </h2>

                  <p>
                    The information we collect depends on how you
                    interact with Engix.
                  </p>

                  <h3>
                    Information you provide directly
                  </h3>

                  <ul>
                    <li>First name and last name.</li>
                    <li>Business email address.</li>
                    <li>Telephone or WhatsApp number.</li>
                    <li>Company or organization name.</li>
                    <li>Job role or business function.</li>
                    <li>Country or region.</li>
                    <li>Services you are interested in.</li>
                    <li>
                      Project budget or expected timeline,
                      where voluntarily provided.
                    </li>
                    <li>
                      Messages, project requirements and
                      business enquiries.
                    </li>
                    <li>
                      Information included in emails,
                      calls or other communication with us.
                    </li>
                  </ul>

                  <h3>
                    Information collected automatically
                  </h3>

                  <p>
                    When analytics, advertising or similar
                    technologies are enabled, we may receive
                    technical information such as:
                  </p>

                  <ul>
                    <li>IP address.</li>
                    <li>Browser and device information.</li>
                    <li>Pages viewed and approximate visit duration.</li>
                    <li>Referring website or advertising source.</li>
                    <li>
                      Interactions with forms, buttons,
                      calls or WhatsApp links.
                    </li>
                    <li>
                      General geographic information derived
                      from technical data.
                    </li>
                  </ul>

                </section>


                <section id="use">

                  <span className="engix-legal-number">
                    03
                  </span>

                  <h2>
                    How we use your information
                  </h2>

                  <p>
                    We may use personal information for legitimate
                    business purposes including:
                  </p>

                  <ul>
                    <li>Responding to enquiries and consultation requests.</li>
                    <li>Understanding your project or business requirements.</li>
                    <li>Preparing proposals, estimates or commercial discussions.</li>
                    <li>
                      Providing software, marketing, website,
                      AI, cloud and related technology services.
                    </li>
                    <li>Managing ongoing client relationships.</li>
                    <li>Providing customer or technical support.</li>
                    <li>Communicating about requested services.</li>
                    <li>Improving our website, services and user experience.</li>
                    <li>Measuring advertising and marketing performance.</li>
                    <li>Detecting fraud, misuse or security issues.</li>
                    <li>
                      Meeting legal, regulatory, tax or accounting obligations.
                    </li>
                  </ul>

                  <p>
                    We do not sell your personal information
                    to third parties.
                  </p>

                </section>


                <section id="legal">

                  <span className="engix-legal-number">
                    04
                  </span>

                  <h2>
                    Lawful processing
                  </h2>

                  <p>
                    Engix processes personal information for
                    lawful business purposes, including responding
                    to requests initiated by you, providing requested
                    services, administering business relationships,
                    complying with legal obligations and, where
                    applicable, processing information with your consent.
                  </p>

                  <p>
                    Where consent is used as the basis for a particular
                    activity, you may contact us to withdraw that
                    consent for future processing, subject to applicable
                    law and any information we are required to retain.
                  </p>

                </section>


                <section id="cookies">

                  <span className="engix-legal-number">
                    05
                  </span>

                  <h2>
                    Cookies, analytics and advertising
                  </h2>

                  <p>
                    Our website may use cookies and similar technologies
                    to support website functionality, understand visitor
                    behavior and measure marketing performance.
                  </p>

                  <p>
                    We may use services such as Google Analytics,
                    Google Tag Manager and Google Ads measurement tools.
                    These services may process technical information
                    relating to website visits and interactions according
                    to their own terms and privacy practices.
                  </p>

                  <p>
                    If advertising conversion tracking is enabled,
                    we may measure actions such as:
                  </p>

                  <ul>
                    <li>Enquiry form submissions.</li>
                    <li>Telephone link clicks.</li>
                    <li>WhatsApp link clicks.</li>
                    <li>Consultation or project enquiry actions.</li>
                  </ul>

                  <p>
                    You may control cookies through your browser settings
                    and, where available, website cookie controls.
                    Disabling certain technologies may affect some
                    website functionality or measurement.
                  </p>

                </section>


                <section id="sharing">

                  <span className="engix-legal-number">
                    06
                  </span>

                  <h2>
                    When information may be shared
                  </h2>

                  <p>
                    We may share information only where reasonably
                    necessary for business operations, service delivery
                    or legal compliance.
                  </p>

                  <ul>
                    <li>Hosting and cloud infrastructure providers.</li>
                    <li>Email and communication service providers.</li>
                    <li>Website analytics and advertising platforms.</li>
                    <li>
                      Payment providers where payment services
                      are involved.
                    </li>
                    <li>
                      Professional advisers such as accountants,
                      legal advisers or auditors where required.
                    </li>
                    <li>
                      Contractors or service partners involved
                      in delivering an agreed client engagement.
                    </li>
                    <li>
                      Government, regulatory or law-enforcement
                      authorities where disclosure is legally required.
                    </li>
                  </ul>

                  <p>
                    Service providers are expected to use information
                    only for the purposes for which it is provided
                    and subject to applicable contractual and legal
                    requirements.
                  </p>

                </section>


                <section id="retention">

                  <span className="engix-legal-number">
                    07
                  </span>

                  <h2>
                    How long we retain information
                  </h2>

                  <p>
                    We retain personal information only for as long as
                    reasonably necessary for the purpose for which it
                    was collected, including business communication,
                    service delivery, record keeping, dispute resolution
                    and legal or regulatory requirements.
                  </p>

                  <p>
                    Enquiries that do not result in a business engagement
                    may be retained for a reasonable period so that we can
                    manage follow-up communication and maintain appropriate
                    business records.
                  </p>

                  <p>
                    Client records may be retained for longer where
                    reasonably necessary for contractual, accounting,
                    legal, security or compliance purposes.
                  </p>

                </section>


                <section id="security">

                  <span className="engix-legal-number">
                    08
                  </span>

                  <h2>
                    Information security
                  </h2>

                  <p>
                    We use reasonable administrative, organizational
                    and technical safeguards designed to protect
                    personal information against unauthorized access,
                    loss, alteration, disclosure or misuse.
                  </p>

                  <p>
                    These safeguards may include controlled access,
                    secure server configurations, HTTPS encryption,
                    authentication controls and appropriate access
                    restrictions.
                  </p>

                  <p>
                    No internet transmission or electronic storage
                    method can be guaranteed to be completely secure,
                    and therefore we cannot guarantee absolute security.
                  </p>

                </section>


                <section id="rights">

                  <span className="engix-legal-number">
                    09
                  </span>

                  <h2>
                    Your choices and rights
                  </h2>

                  <p>
                    Subject to applicable law, you may contact Engix
                    regarding personal information that we hold about you.
                  </p>

                  <ul>
                    <li>
                      Information about how your personal data is used.
                    </li>
                    <li>
                      Correction of inaccurate or incomplete information.
                    </li>
                    <li>
                      Deletion of information where appropriate.
                    </li>
                    <li>
                      Withdrawal of consent for future processing
                      where consent is the applicable basis.
                    </li>
                    <li>
                      That we stop certain marketing communication.
                    </li>
                  </ul>

                  <p>
                    We may need to verify your identity before processing
                    certain privacy-related requests.
                  </p>

                </section>


                <section id="international">

                  <span className="engix-legal-number">
                    10
                  </span>

                  <h2>
                    International engagements
                  </h2>

                  <p>
                    Engix operates from India and may work with clients,
                    technology providers and service providers located
                    in other countries.
                  </p>

                  <p>
                    As a result, information connected with an international
                    engagement may be processed or stored in jurisdictions
                    outside your country. Where applicable, we take reasonable
                    steps to handle such information in accordance with
                    applicable data-protection requirements and contractual
                    obligations.
                  </p>

                </section>


                <section id="children">

                  <span className="engix-legal-number">
                    11
                  </span>

                  <h2>
                    Children's information
                  </h2>

                  <p>
                    Engix's website and services are primarily intended
                    for businesses and professional users.
                  </p>

                  <p>
                    We do not knowingly seek to collect personal
                    information from children through our business
                    enquiry forms. If you believe a child has submitted
                    personal information to us inappropriately, please
                    contact us so that we can review the matter.
                  </p>

                </section>


                <section id="changes">

                  <span className="engix-legal-number">
                    12
                  </span>

                  <h2>
                    Changes to this policy
                  </h2>

                  <p>
                    We may update this Privacy Policy from time to time
                    to reflect changes in our services, technology,
                    business practices or legal requirements.
                  </p>

                  <p>
                    The latest version will be published on this page
                    with an updated effective or revision date.
                  </p>

                </section>


                <section id="contact">

                  <span className="engix-legal-number">
                    13
                  </span>

                  <h2>
                    Contact Engix
                  </h2>

                  <p>
                    For questions about this Privacy Policy or requests
                    relating to personal information, contact:
                  </p>


                  <div className="engix-legal-contact-card">

                    <div>

                      <strong>
                        Engix Tech Private Limited
                      </strong>

                      <span>
                        Varanasi, Uttar Pradesh, India
                      </span>

                    </div>


                    <a href="mailto:hello@engix.world">

                      <Mail size={21} />

                      hello@engix.world

                    </a>


                    <a href="tel:+917355985134">

                      <FileText size={21} />

                      +91 7355985134

                    </a>

                  </div>

                </section>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <section className="engix-legal-bottom">

          <div className="engix-legal-shell">

            <LockKeyhole size={28} />

            <div>

              <h3>
                Have a privacy question?
              </h3>

              <p>
                Contact our team at hello@engix.world
                and we will review your request.
              </p>

            </div>


            <a href="mailto:hello@engix.world">
              Contact Engix
            </a>

          </div>

        </section>

      </main>


      <style>{`

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 30px;
        }


        .engix-legal-page {
          --ink: #111318;
          --muted: #565c63;
          --line: #dedfe2;
          --soft: #fafaf8;
          --blue: #e3effc;
          --blue-deep: #285e8d;

          background: #ffffff;

          color: var(--ink);
        }


        .engix-legal-shell {
          width:
            min(
              1180px,
              calc(100% - 48px)
            );

          margin: 0 auto;
        }


        /* HERO */

        .engix-legal-hero {
          padding:
            90px 0 75px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fafaf8
            );

          border-bottom:
            1px solid var(--line);
        }


        .engix-legal-badge {
          width: max-content;

          padding:
            9px 13px;

          border-radius: 999px;

          background: var(--blue);

          color: var(--blue-deep);

          font-size: 14px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-legal-hero h1 {
          max-width: 850px;

          margin:
            22px 0 0;

          font-size:
            clamp(
              3.4rem,
              6vw,
              6rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-legal-intro {
          max-width: 850px;

          margin:
            25px 0 0;

          color: var(--muted);

          font-size:
            clamp(
              1.15rem,
              1.6vw,
              1.4rem
            );

          line-height: 1.7;
        }


        .engix-legal-meta {
          display: flex;

          flex-wrap: wrap;

          gap:
            10px 25px;

          margin-top: 30px;

          color: #747980;

          font-size: 14px;
        }


        /* SUMMARY */

        .engix-legal-summary {
          padding:
            55px 0;

          background: white;
        }


        .engix-legal-summary-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }


        .engix-legal-summary-grid article {
          padding: 28px;

          border:
            1px solid var(--line);

          border-radius: 15px;
        }


        .engix-legal-summary-grid svg {
          color: var(--blue-deep);
        }


        .engix-legal-summary-grid h3 {
          margin:
            20px 0 9px;

          font-size: 21px;
        }


        .engix-legal-summary-grid p {
          margin: 0;

          color: var(--muted);

          font-size: 16px;

          line-height: 1.65;
        }


        /* CONTENT */

        .engix-legal-content {
          padding:
            45px 0 100px;

          background: white;
        }


        .engix-legal-layout {
          display: grid;

          grid-template-columns:
            250px minmax(0,1fr);

          gap: 80px;

          align-items: start;
        }


        .engix-legal-sidebar {
          position: sticky;

          top: 30px;

          display: flex;

          flex-direction: column;

          gap: 11px;

          padding:
            24px 0;

          border-top:
            1px solid var(--line);

          border-bottom:
            1px solid var(--line);
        }


        .engix-legal-sidebar > span {
          margin-bottom: 8px;

          color: var(--blue-deep);

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-legal-sidebar a {
          color: #62676e;

          text-decoration: none;

          font-size: 14px;

          line-height: 1.4;
        }


        .engix-legal-sidebar a:hover {
          color: var(--ink);
        }


        /* ARTICLE */

        .engix-legal-article {
          max-width: 790px;
        }


        .engix-legal-article section {
          padding:
            0 0 55px;

          margin-bottom: 55px;

          border-bottom:
            1px solid var(--line);
        }


        .engix-legal-number {
          display: block;

          margin-bottom: 12px;

          color: var(--blue-deep);

          font-size: 14px;

          font-weight: 800;
        }


        .engix-legal-article h2 {
          margin:
            0 0 22px;

          font-size:
            clamp(
              2rem,
              3.4vw,
              3.2rem
            );

          line-height: 1.05;

          letter-spacing: -.04em;
        }


        .engix-legal-article h3 {
          margin:
            28px 0 10px;

          font-size: 21px;

          line-height: 1.3;
        }


        .engix-legal-article p {
          margin:
            0 0 17px;

          color: #565c63;

          font-size: 17px;

          line-height: 1.78;
        }


        .engix-legal-article ul {
          margin:
            18px 0 25px;

          padding-left: 23px;
        }


        .engix-legal-article li {
          margin-bottom: 10px;

          color: #565c63;

          font-size: 17px;

          line-height: 1.65;
        }


        /* CONTACT */

        .engix-legal-contact-card {
          margin-top: 28px;

          padding: 28px;

          display: grid;

          gap: 18px;

          border:
            1px solid var(--line);

          border-radius: 15px;

          background: var(--soft);
        }


        .engix-legal-contact-card strong,
        .engix-legal-contact-card span {
          display: block;
        }


        .engix-legal-contact-card strong {
          font-size: 18px;
        }


        .engix-legal-contact-card span {
          margin-top: 5px;

          color: var(--muted);

          font-size: 15px;
        }


        .engix-legal-contact-card a {
          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: var(--ink);

          text-decoration: none;

          font-size: 16px;

          font-weight: 650;
        }


        /* BOTTOM */

        .engix-legal-bottom {
          padding:
            45px 0;

          background: var(--blue);
        }


        .engix-legal-bottom .engix-legal-shell {
          display: grid;

          grid-template-columns:
            auto 1fr auto;

          gap: 20px;

          align-items: center;
        }


        .engix-legal-bottom svg {
          color: var(--blue-deep);
        }


        .engix-legal-bottom h3 {
          margin: 0;

          font-size: 21px;
        }


        .engix-legal-bottom p {
          margin:
            5px 0 0;

          color: #526272;

          font-size: 15px;
        }


        .engix-legal-bottom a {
          min-height: 48px;

          padding:
            0 18px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          border-radius: 8px;

          background: var(--ink);

          color: white;

          text-decoration: none;

          font-size: 14px;

          font-weight: 700;
        }


        @media(max-width:900px) {

          .engix-legal-layout {
            grid-template-columns: 1fr;

            gap: 35px;
          }


          .engix-legal-sidebar {
            display: none;
          }


          .engix-legal-article {
            max-width: 100%;
          }

        }


        @media(max-width:650px) {

          .engix-legal-shell {
            width:
              calc(100% - 32px);
          }


          .engix-legal-hero {
            padding:
              55px 0 50px;
          }


          .engix-legal-summary-grid {
            grid-template-columns: 1fr;
          }


          .engix-legal-content {
            padding:
              30px 0 70px;
          }


          .engix-legal-article p,
          .engix-legal-article li {
            font-size: 16px;
          }


          .engix-legal-bottom .engix-legal-shell {
            grid-template-columns:
              1fr;

            align-items: start;
          }


          .engix-legal-bottom a {
            width: 100%;

            box-sizing: border-box;
          }

        }

      `}</style>

    </>
  );
}