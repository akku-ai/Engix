import {
  BriefcaseBusiness,
  CircleAlert,
  FileCheck2,
  Mail,
  Scale,
  ShieldCheck
} from 'lucide-react';

import usePageTitle from '../hooks/usePageTitle';


export default function Terms() {
  usePageTitle('Terms & Conditions');

  return (
    <>
      <main className="engix-terms-page">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="engix-terms-hero">

          <div className="engix-terms-shell">

            <span className="engix-terms-badge">
              TERMS & CONDITIONS
            </span>


            <h1>
              Clear terms for using
              Engix digital services.
            </h1>


            <p>
              These Terms & Conditions govern your use of
              the Engix website and establish general terms
              relating to enquiries, proposals and services
              offered by Engix Tech Private Limited.
            </p>


            <div className="engix-terms-meta">

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

        <section className="engix-terms-summary">

          <div className="engix-terms-shell">

            <div className="engix-terms-summary-grid">

              <article>

                <FileCheck2 size={32} />

                <h3>
                  Website use
                </h3>

                <p>
                  You may use the Engix website for lawful
                  informational and business purposes.
                </p>

              </article>


              <article>

                <BriefcaseBusiness size={32} />

                <h3>
                  Client engagements
                </h3>

                <p>
                  Project-specific scope, fees and timelines
                  are governed by the proposal, agreement
                  or statement of work accepted by the client.
                </p>

              </article>


              <article>

                <Scale size={32} />

                <h3>
                  Fair commercial terms
                </h3>

                <p>
                  Our general website terms do not replace
                  written contractual terms agreed for a
                  specific project or service.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTENT
        ====================================================== */}

        <section className="engix-terms-content">

          <div className="engix-terms-shell">

            <div className="engix-terms-layout">

              <aside className="engix-terms-sidebar">

                <span>
                  ON THIS PAGE
                </span>

                <a href="#acceptance">Acceptance</a>
                <a href="#company">About Engix</a>
                <a href="#website">Website use</a>
                <a href="#services">Services</a>
                <a href="#enquiries">Enquiries & proposals</a>
                <a href="#payments">Fees & payments</a>
                <a href="#client">Client responsibilities</a>
                <a href="#ip">Intellectual property</a>
                <a href="#thirdparty">Third-party services</a>
                <a href="#marketing">Marketing services</a>
                <a href="#warranties">Warranties</a>
                <a href="#liability">Liability</a>
                <a href="#termination">Termination</a>
                <a href="#law">Governing law</a>
                <a href="#changes">Updates</a>
                <a href="#contact">Contact</a>

              </aside>


              <div className="engix-terms-article">

                <section id="acceptance">

                  <span className="engix-terms-number">
                    01
                  </span>

                  <h2>
                    Acceptance of these terms
                  </h2>

                  <p>
                    These Terms & Conditions (“Terms”) apply to
                    your use of the Engix Tech Private Limited
                    website, including engix.world and related pages
                    operated by Engix.
                  </p>

                  <p>
                    By accessing or using this website, you agree
                    to use it in accordance with these Terms and
                    applicable law.
                  </p>

                  <p>
                    If you do not agree with these Terms, you
                    should discontinue use of the website.
                  </p>

                </section>


                <section id="company">

                  <span className="engix-terms-number">
                    02
                  </span>

                  <h2>
                    About Engix
                  </h2>

                  <p>
                    Engix Tech Private Limited is a technology
                    company providing services that may include
                    software development, web application development,
                    website development, mobile applications,
                    artificial intelligence solutions, automation,
                    cloud and DevOps services, UI/UX design,
                    digital marketing and related technology services.
                  </p>

                  <p>
                    Information published on the website is provided
                    for general business and informational purposes.
                  </p>

                </section>


                <section id="website">

                  <span className="engix-terms-number">
                    03
                  </span>

                  <h2>
                    Permitted use of the website
                  </h2>

                  <p>
                    You may access and use our website for lawful
                    personal, professional and business purposes.
                  </p>

                  <p>
                    You must not:
                  </p>

                  <ul>
                    <li>
                      Attempt to gain unauthorized access to our
                      systems, servers or accounts.
                    </li>

                    <li>
                      Interfere with the security, integrity or
                      operation of the website.
                    </li>

                    <li>
                      Use automated tools in a way that causes
                      unreasonable load or disruption.
                    </li>

                    <li>
                      Upload or transmit malicious software,
                      viruses or harmful code.
                    </li>

                    <li>
                      Use the website for fraudulent, unlawful
                      or abusive purposes.
                    </li>

                    <li>
                      Copy, reproduce or commercially exploit
                      Engix content without appropriate authorization.
                    </li>
                  </ul>

                </section>


                <section id="services">

                  <span className="engix-terms-number">
                    04
                  </span>

                  <h2>
                    Services and project engagements
                  </h2>

                  <p>
                    Website descriptions of Engix capabilities
                    are general descriptions and do not constitute
                    a binding commitment to provide any particular
                    service, result, feature or timeline.
                  </p>

                  <p>
                    Specific project work will normally be governed
                    by a separate proposal, quotation, statement
                    of work, service agreement, email confirmation
                    or other written commercial arrangement.
                  </p>

                  <p>
                    Where project-specific contractual terms conflict
                    with these general website Terms, the project-specific
                    written agreement will govern that engagement.
                  </p>

                </section>


                <section id="enquiries">

                  <span className="engix-terms-number">
                    05
                  </span>

                  <h2>
                    Enquiries, consultations and proposals
                  </h2>

                  <p>
                    Submitting an enquiry or booking an initial
                    consultation does not automatically create
                    a client-service relationship or bind Engix
                    to undertake a project.
                  </p>

                  <p>
                    A business relationship is established only
                    when the relevant scope, commercial terms
                    and other required conditions have been
                    mutually accepted.
                  </p>

                  <p>
                    Proposals, estimates and quotations may be
                    subject to validity periods and assumptions
                    stated in the relevant communication.
                  </p>

                </section>


                <section id="payments">

                  <span className="engix-terms-number">
                    06
                  </span>

                  <h2>
                    Fees, invoices and payments
                  </h2>

                  <p>
                    Fees for professional services are determined
                    based on the project scope, engagement model
                    and written commercial agreement.
                  </p>

                  <p>
                    Payment schedules, deposits, milestones,
                    taxes and due dates will be specified in
                    the applicable proposal, invoice or agreement.
                  </p>

                  <p>
                    Unless otherwise agreed in writing, work may
                    be paused where invoices remain overdue or
                    agreed payment requirements are not met.
                  </p>

                </section>


                <section id="client">

                  <span className="engix-terms-number">
                    07
                  </span>

                  <h2>
                    Client responsibilities
                  </h2>

                  <p>
                    Successful delivery may depend on timely
                    cooperation from the client.
                  </p>

                  <ul>
                    <li>Providing accurate project requirements.</li>
                    <li>
                      Providing required content, branding,
                      credentials and business information.
                    </li>
                    <li>Giving timely approvals and feedback.</li>
                    <li>
                      Ensuring they have rights to materials
                      supplied to Engix.
                    </li>
                    <li>
                      Ensuring business claims and supplied
                      content comply with applicable law.
                    </li>
                    <li>
                      Maintaining appropriate access to
                      third-party platforms required for delivery.
                    </li>
                  </ul>

                </section>


                <section id="ip">

                  <span className="engix-terms-number">
                    08
                  </span>

                  <h2>
                    Intellectual property
                  </h2>

                  <h3>
                    Engix materials
                  </h3>

                  <p>
                    The Engix name, branding, website design,
                    website text, graphics, layouts, software,
                    processes and other materials owned by Engix
                    are protected by applicable intellectual
                    property laws.
                  </p>


                  <h3>
                    Client project work
                  </h3>

                  <p>
                    Ownership and licensing of project deliverables
                    will be determined by the applicable proposal
                    or client agreement.
                  </p>

                  <p>
                    Unless otherwise agreed, ownership transfer
                    of specifically commissioned deliverables may
                    be subject to full payment of all applicable fees.
                  </p>


                  <h3>
                    Third-party components
                  </h3>

                  <p>
                    Projects may include open-source software,
                    third-party libraries, licensed assets,
                    cloud services, APIs or other materials that
                    remain subject to their respective licenses
                    and terms.
                  </p>

                </section>


                <section id="thirdparty">

                  <span className="engix-terms-number">
                    09
                  </span>

                  <h2>
                    Third-party platforms and services
                  </h2>

                  <p>
                    Engix projects may integrate or rely on
                    third-party services such as hosting providers,
                    cloud platforms, advertising networks,
                    payment gateways, analytics platforms,
                    domain registrars, messaging services,
                    application stores and APIs.
                  </p>

                  <p>
                    These third-party services operate under their
                    own terms, pricing, availability and policies.
                  </p>

                  <p>
                    Engix is not responsible for outages, account
                    restrictions, pricing changes or service changes
                    caused solely by third-party providers beyond
                    our reasonable control.
                  </p>

                </section>


                <section id="marketing">

                  <span className="engix-terms-number">
                    10
                  </span>

                  <h2>
                    Digital marketing and advertising services
                  </h2>

                  <p>
                    Where Engix provides SEO, advertising,
                    social media or digital marketing services,
                    performance can be influenced by many external
                    factors including competition, market demand,
                    advertising budgets, search-engine algorithms,
                    platform policies, website quality and customer
                    behavior.
                  </p>

                  <p>
                    Statements about expected timelines, growth
                    opportunities or campaign objectives represent
                    planning expectations and should not be interpreted
                    as guarantees of a specific ranking, revenue,
                    number of leads, customer acquisition result
                    or advertising return.
                  </p>

                  <p>
                    Advertising expenditure paid to platforms such
                    as Google or Meta may be separate from Engix
                    professional service fees unless expressly
                    stated otherwise.
                  </p>

                </section>


                <section id="warranties">

                  <span className="engix-terms-number">
                    11
                  </span>

                  <h2>
                    Website information and warranties
                  </h2>

                  <p>
                    We aim to keep information on our website
                    accurate and useful, but website content may
                    occasionally contain errors, become outdated
                    or require revision.
                  </p>

                  <p>
                    The website is provided on an “as available”
                    basis. To the extent permitted by applicable
                    law, Engix does not make warranties that the
                    website will always be uninterrupted, completely
                    error-free or suitable for every particular purpose.
                  </p>

                </section>


                <section id="liability">

                  <span className="engix-terms-number">
                    12
                  </span>

                  <h2>
                    Limitation of liability
                  </h2>

                  <p>
                    To the extent permitted by applicable law,
                    Engix will not be liable for indirect,
                    incidental, special or consequential loss
                    arising solely from the use or inability
                    to use this website.
                  </p>

                  <p>
                    Liability relating to paid professional
                    services will be governed by the applicable
                    client agreement, proposal or statement of work.
                  </p>

                  <p>
                    Nothing in these Terms is intended to exclude
                    liability that cannot lawfully be excluded
                    under applicable law.
                  </p>

                </section>


                <section id="termination">

                  <span className="engix-terms-number">
                    13
                  </span>

                  <h2>
                    Suspension or termination
                  </h2>

                  <p>
                    We may restrict access to our website or services
                    where reasonably necessary for security,
                    misuse prevention, legal compliance or protection
                    of Engix systems and users.
                  </p>

                  <p>
                    Termination or suspension of individual client
                    projects will be governed by the terms agreed
                    for that engagement.
                  </p>

                </section>


                <section id="law">

                  <span className="engix-terms-number">
                    14
                  </span>

                  <h2>
                    Governing law
                  </h2>

                  <p>
                    These general website Terms are governed by
                    the laws of India, subject to any different
                    jurisdiction or dispute-resolution provisions
                    contained in a specific written client agreement.
                  </p>

                </section>


                <section id="changes">

                  <span className="engix-terms-number">
                    15
                  </span>

                  <h2>
                    Changes to these Terms
                  </h2>

                  <p>
                    Engix may update these Terms to reflect changes
                    in our services, website, business practices
                    or applicable requirements.
                  </p>

                  <p>
                    Updated Terms will be published on this page
                    together with the applicable revision date.
                  </p>

                </section>


                <section id="contact">

                  <span className="engix-terms-number">
                    16
                  </span>

                  <h2>
                    Contact us
                  </h2>

                  <p>
                    Questions regarding these Terms & Conditions
                    may be directed to:
                  </p>


                  <div className="engix-terms-contact">

                    <strong>
                      Engix Tech Private Limited
                    </strong>

                    <span>
                      Varanasi, Uttar Pradesh, India
                    </span>


                    <a href="mailto:hello@engix.world">

                      <Mail size={21} />

                      hello@engix.world

                    </a>


                    <a href="tel:+917355985134">

                      <ShieldCheck size={21} />

                      +91 7355985134

                    </a>

                  </div>

                </section>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            NOTICE
        ====================================================== */}

        <section className="engix-terms-notice">

          <div className="engix-terms-shell">

            <CircleAlert size={29} />

            <div>

              <h3>
                Project agreements take priority
              </h3>

              <p>
                Specific Engix client engagements may have their
                own proposal, statement of work or service agreement.
                Those agreed terms govern the relevant project.
              </p>

            </div>

          </div>

        </section>

      </main>


      <style>{`

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 30px;
        }


        .engix-terms-page {
          --ink: #111318;
          --muted: #575d64;
          --line: #dedfe2;
          --soft: #fafaf8;
          --blue: #e3effc;
          --blue-deep: #285e8d;

          background: #ffffff;

          color: var(--ink);
        }


        .engix-terms-shell {
          width:
            min(
              1180px,
              calc(100% - 48px)
            );

          margin: 0 auto;
        }


        /* HERO */

        .engix-terms-hero {
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


        .engix-terms-badge {
          display: block;

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


        .engix-terms-hero h1 {
          max-width: 900px;

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


        .engix-terms-hero > .engix-terms-shell > p {
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


        .engix-terms-meta {
          display: flex;

          flex-wrap: wrap;

          gap:
            10px 25px;

          margin-top: 30px;

          color: #747980;

          font-size: 14px;
        }


        /* SUMMARY */

        .engix-terms-summary {
          padding:
            55px 0;

          background: white;
        }


        .engix-terms-summary-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }


        .engix-terms-summary-grid article {
          padding: 28px;

          border:
            1px solid var(--line);

          border-radius: 15px;
        }


        .engix-terms-summary-grid svg {
          color:
            var(--blue-deep);
        }


        .engix-terms-summary-grid h3 {
          margin:
            20px 0 9px;

          font-size: 21px;
        }


        .engix-terms-summary-grid p {
          margin: 0;

          color: var(--muted);

          font-size: 16px;

          line-height: 1.65;
        }


        /* LAYOUT */

        .engix-terms-content {
          padding:
            45px 0 100px;
        }


        .engix-terms-layout {
          display: grid;

          grid-template-columns:
            250px minmax(0,1fr);

          gap: 80px;

          align-items: start;
        }


        .engix-terms-sidebar {
          position: sticky;

          top: 30px;

          padding:
            24px 0;

          display: flex;

          flex-direction: column;

          gap: 11px;

          border-top:
            1px solid var(--line);

          border-bottom:
            1px solid var(--line);
        }


        .engix-terms-sidebar > span {
          margin-bottom: 8px;

          color: var(--blue-deep);

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-terms-sidebar a {
          color: #62676e;

          text-decoration: none;

          font-size: 14px;

          line-height: 1.4;
        }


        .engix-terms-sidebar a:hover {
          color: var(--ink);
        }


        /* ARTICLE */

        .engix-terms-article {
          max-width: 790px;
        }


        .engix-terms-article section {
          padding-bottom: 55px;

          margin-bottom: 55px;

          border-bottom:
            1px solid var(--line);
        }


        .engix-terms-number {
          display: block;

          margin-bottom: 12px;

          color: var(--blue-deep);

          font-size: 14px;

          font-weight: 800;
        }


        .engix-terms-article h2 {
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


        .engix-terms-article h3 {
          margin:
            28px 0 10px;

          font-size: 21px;
        }


        .engix-terms-article p {
          margin:
            0 0 17px;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.78;
        }


        .engix-terms-article ul {
          margin:
            18px 0 25px;

          padding-left: 23px;
        }


        .engix-terms-article li {
          margin-bottom: 10px;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.65;
        }


        /* CONTACT */

        .engix-terms-contact {
          margin-top: 28px;

          padding: 28px;

          display: grid;

          gap: 14px;

          border:
            1px solid var(--line);

          border-radius: 15px;

          background: var(--soft);
        }


        .engix-terms-contact strong,
        .engix-terms-contact span {
          display: block;
        }


        .engix-terms-contact strong {
          font-size: 18px;
        }


        .engix-terms-contact span {
          color: var(--muted);

          font-size: 15px;
        }


        .engix-terms-contact a {
          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: var(--ink);

          text-decoration: none;

          font-size: 16px;

          font-weight: 650;
        }


        /* NOTICE */

        .engix-terms-notice {
          padding:
            42px 0;

          background:
            var(--blue);
        }


        .engix-terms-notice .engix-terms-shell {
          display: grid;

          grid-template-columns:
            auto 1fr;

          gap: 18px;

          align-items: start;
        }


        .engix-terms-notice svg {
          color:
            var(--blue-deep);
        }


        .engix-terms-notice h3 {
          margin: 0;

          font-size: 21px;
        }


        .engix-terms-notice p {
          max-width: 800px;

          margin:
            6px 0 0;

          color: #536372;

          font-size: 15px;

          line-height: 1.65;
        }


        @media(max-width:900px) {

          .engix-terms-layout {
            grid-template-columns: 1fr;

            gap: 35px;
          }


          .engix-terms-sidebar {
            display: none;
          }


          .engix-terms-article {
            max-width: 100%;
          }

        }


        @media(max-width:650px) {

          .engix-terms-shell {
            width:
              calc(100% - 32px);
          }


          .engix-terms-hero {
            padding:
              55px 0 50px;
          }


          .engix-terms-summary-grid {
            grid-template-columns: 1fr;
          }


          .engix-terms-content {
            padding:
              30px 0 70px;
          }


          .engix-terms-article p,
          .engix-terms-article li {
            font-size: 16px;
          }


          .engix-terms-notice .engix-terms-shell {
            grid-template-columns: 1fr;
          }

        }

      `}</style>

    </>
  );
}