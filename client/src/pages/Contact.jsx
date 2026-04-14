import usePageTitle from '../hooks/usePageTitle';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  usePageTitle('Contact');

  return (
    <>
      <section className="engix-contact-page">
        <div className="engix-contact-shell">
          <div className="engix-contact-hero">
            <span className="engix-contact-badge">Contact</span>

            <h1>
              Let’s build digital products
              <br />
              that move your business forward.
            </h1>

            <p className="engix-contact-subtext">
              Tell us what you are building, what services you need, or what goals
              your company wants to achieve. We’ll help you plan the right solution.
            </p>
          </div>

          <div className="engix-contact-grid">
            <div className="engix-contact-info-card">
              <div className="engix-info-block">
                <span className="engix-info-label">Company</span>
                <h3>Engix</h3>
                <p>
                  We design and develop modern websites, web applications, mobile apps,
                  software systems, and scalable digital products for international
                  and domestic clients.
                </p>
              </div>

              <div className="engix-info-row">
                <div>
                  <span className="engix-info-label">Email</span>
                  <a href="mailto:hello@engix.com">hello@engix.com</a>
                </div>

                <div>
                  <span className="engix-info-label">Location</span>
                  <p>India</p>
                </div>
              </div>

              <div className="engix-info-block">
                <span className="engix-info-label">Services</span>
                <ul>
                  <li>Website Development</li>
                  <li>Web App Development</li>
                  <li>Mobile App Development</li>
                  <li>Custom Software</li>
                  <li>UI/UX Design</li>
                  <li>Backend & Cloud</li>
                </ul>
              </div>
            </div>

            <div className="engix-contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .engix-contact-page {
          background: #f8fafc;
          min-height: 100vh;
          padding: 72px 20px 96px;
        }

        .engix-contact-shell {
          max-width: 1180px;
          margin: 0 auto;
        }

        .engix-contact-hero {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .engix-contact-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 999px;
          background: #eef2ff;
          color: #334155;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 18px;
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        .engix-contact-hero h1 {
          font-size: clamp(2.4rem, 5vw, 4.7rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: #0f172a;
          margin: 0 0 18px;
        }

        .engix-contact-subtext {
          max-width: 680px;
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #64748b;
        }

        .engix-contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 28px;
          align-items: start;
        }

        .engix-contact-info-card,
        .engix-contact-form-wrap {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 28px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
        }

        .engix-contact-info-card {
          padding: 32px;
          display: grid;
          gap: 28px;
        }

        .engix-info-block h3 {
          margin: 10px 0 10px;
          color: #0f172a;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
        }

        .engix-info-block p {
          margin: 0;
          color: #64748b;
          line-height: 1.85;
          font-size: 0.98rem;
        }

        .engix-info-label {
          display: inline-block;
          margin-bottom: 4px;
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .engix-info-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          padding-top: 4px;
        }

        .engix-info-row a,
        .engix-info-row p {
          margin: 8px 0 0;
          color: #0f172a;
          text-decoration: none;
          font-size: 1rem;
          line-height: 1.7;
        }

        .engix-info-block ul {
          list-style: none;
          padding: 0;
          margin: 10px 0 0;
          display: grid;
          gap: 12px;
        }

        .engix-info-block li {
          color: #475569;
          font-size: 0.98rem;
          line-height: 1.7;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }

        .engix-contact-form-wrap {
          padding: 30px;
        }

        @media (max-width: 960px) {
          .engix-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .engix-contact-page {
            padding: 48px 16px 72px;
          }

          .engix-contact-info-card,
          .engix-contact-form-wrap {
            border-radius: 22px;
          }

          .engix-contact-info-card,
          .engix-contact-form-wrap {
            padding: 22px;
          }

          .engix-info-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}