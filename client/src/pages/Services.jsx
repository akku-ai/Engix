import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import ServicesGrid from '../components/services/ServicesGrid';

export default function Services() {
  usePageTitle('Services');

  return (
    <>
      <ServicesGrid />

      <section className="engix-services-cta-section">
        <div className="engix-services-cta-shell">
          <div className="engix-services-cta-box">
            <div>
              <span className="engix-services-cta-label">Let’s build together</span>
              <h2>Need a professional team for your next website, app, or software product?</h2>
              <p>
                We help companies design and develop digital products with modern
                UI, strong engineering, and a clean delivery process.
              </p>
            </div>

            <Link to="/contact" className="engix-services-cta-btn">
              Start your project
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .engix-services-cta-section {
          background: #f8fafc;
          padding: 0 20px 96px;
        }

        .engix-services-cta-shell {
          max-width: 1180px;
          margin: 0 auto;
        }

        .engix-services-cta-box {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          padding: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .engix-services-cta-label {
          display: inline-block;
          margin-bottom: 10px;
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .engix-services-cta-box h2 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: clamp(1.7rem, 3vw, 2.6rem);
          line-height: 1.15;
          letter-spacing: -0.03em;
          max-width: 720px;
        }

        .engix-services-cta-box p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
          max-width: 720px;
        }

        .engix-services-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          background: #0f172a;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          white-space: nowrap;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .engix-services-cta-btn:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }

        @media (max-width: 800px) {
          .engix-services-cta-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 700px) {
          .engix-services-cta-section {
            padding: 0 16px 72px;
          }

          .engix-services-cta-box {
            border-radius: 22px;
            padding: 22px;
          }
        }
      `}</style>
    </>
  );
}