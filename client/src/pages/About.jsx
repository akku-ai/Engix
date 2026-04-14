import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <section className="engix-about-page">
        <div className="engix-about-shell">
          <div className="engix-about-hero">
            <span className="engix-about-badge">About Engix</span>

            <h1>
              We build modern digital
              <br />
              products with clarity,
              <br />
              quality, and purpose.
            </h1>

            <p className="engix-about-subtext">
              Engix is a modern IT company focused on delivering websites, software,
              mobile applications, and scalable digital systems for businesses that
              want clean execution and long-term value.
            </p>
          </div>

          <div className="engix-about-grid">
            <div className="engix-about-card engix-about-card-large">
              <span className="engix-about-label">Who we are</span>
              <h3>A professional technology partner for ambitious businesses.</h3>
              <p>
                We work with domestic and international clients to design and
                develop digital products that are visually refined, technically
                strong, and aligned with real business goals.
              </p>
              <p>
                Our team believes that modern websites and software should not only
                look premium, but also perform reliably, scale smoothly, and support
                long-term growth.
              </p>
            </div>

            <div className="engix-about-card">
              <span className="engix-about-label">What we build</span>
              <h3>Digital solutions across web, mobile, and software.</h3>
              <p>
                We create business websites, web apps, mobile apps, dashboards,
                internal tools, SaaS products, custom software, and backend systems.
              </p>
            </div>

            <div className="engix-about-card">
              <span className="engix-about-label">How we work</span>
              <h3>Simple process. Strong communication. Clean delivery.</h3>
              <p>
                Our workflow combines discovery, design, development, testing, and
                launch support so that each project remains structured and efficient.
              </p>
            </div>
          </div>

          <div className="engix-about-values">
            <div className="engix-about-values-head">
              <span className="engix-about-label">What defines us</span>
              <h2>Built on thoughtful design, dependable engineering, and business focus.</h2>
              <p>
                We focus on building products that are easy to use, visually strong,
                and technically ready for growth.
              </p>
            </div>

            <div className="engix-about-values-grid">
              <div className="engix-value-box">
                <h4>Modern design quality</h4>
                <p>
                  Clean interfaces, strong visual hierarchy, and premium layouts that
                  build trust.
                </p>
              </div>

              <div className="engix-value-box">
                <h4>Scalable development</h4>
                <p>
                  Maintainable frontend and backend architecture designed for future expansion.
                </p>
              </div>

              <div className="engix-value-box">
                <h4>Client-first execution</h4>
                <p>
                  Clear communication, practical thinking, and solutions that support real outcomes.
                </p>
              </div>

              <div className="engix-value-box">
                <h4>Long-term support</h4>
                <p>
                  Launch assistance, improvements, maintenance, and continued technical partnership.
                </p>
              </div>
            </div>
          </div>

          <div className="engix-about-cta">
            <div>
              <span className="engix-about-label">Let’s work together</span>
              <h2>Need a website, product, or software solution built professionally?</h2>
              <p>
                We help companies move from idea to launch with a cleaner and more reliable development process.
              </p>
            </div>

            <Link to="/contact" className="engix-about-cta-btn">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .engix-about-page {
          background: #f8fafc;
          min-height: 100vh;
          padding: 72px 20px 96px;
        }

        .engix-about-shell {
          max-width: 1180px;
          margin: 0 auto;
        }

        .engix-about-hero {
          max-width: 780px;
          margin-bottom: 48px;
        }

        .engix-about-badge {
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

        .engix-about-hero h1 {
          font-size: clamp(2.5rem, 5vw, 4.9rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
          color: #0f172a;
          margin: 0 0 18px;
        }

        .engix-about-subtext {
          margin: 0;
          max-width: 680px;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #64748b;
        }

        .engix-about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 24px;
          margin-bottom: 34px;
        }

        .engix-about-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 28px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          padding: 30px;
        }

        .engix-about-card-large {
          min-height: 100%;
        }

        .engix-about-label {
          display: inline-block;
          margin-bottom: 10px;
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .engix-about-card h3 {
          margin: 0 0 12px;
          color: #0f172a;
          font-size: 1.55rem;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .engix-about-card p {
          margin: 0 0 14px;
          color: #64748b;
          font-size: 0.98rem;
          line-height: 1.85;
        }

        .engix-about-card p:last-child {
          margin-bottom: 0;
        }

        .engix-about-values {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          padding: 34px;
          margin-bottom: 34px;
        }

        .engix-about-values-head {
          max-width: 760px;
          margin-bottom: 26px;
        }

        .engix-about-values-head h2 {
          margin: 0 0 12px;
          color: #0f172a;
          font-size: clamp(1.8rem, 3.2vw, 3rem);
          line-height: 1.12;
          letter-spacing: -0.03em;
        }

        .engix-about-values-head p {
          margin: 0;
          color: #64748b;
          line-height: 1.85;
          font-size: 1rem;
        }

        .engix-about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .engix-value-box {
          padding: 24px;
          border-radius: 22px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        .engix-value-box h4 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 1.05rem;
          letter-spacing: -0.02em;
        }

        .engix-value-box p {
          margin: 0;
          color: #64748b;
          line-height: 1.75;
          font-size: 0.95rem;
        }

        .engix-about-cta {
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

        .engix-about-cta h2 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: clamp(1.7rem, 3vw, 2.6rem);
          line-height: 1.15;
          letter-spacing: -0.03em;
          max-width: 720px;
        }

        .engix-about-cta p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
          max-width: 720px;
        }

        .engix-about-cta-btn {
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

        .engix-about-cta-btn:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }

        @media (max-width: 1100px) {
          .engix-about-grid {
            grid-template-columns: 1fr 1fr;
          }

          .engix-about-card-large {
            grid-column: span 2;
          }

          .engix-about-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 800px) {
          .engix-about-grid,
          .engix-about-values-grid {
            grid-template-columns: 1fr;
          }

          .engix-about-card-large {
            grid-column: span 1;
          }

          .engix-about-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .engix-about-page {
            padding: 48px 16px 72px;
          }

          .engix-about-card,
          .engix-about-values,
          .engix-about-cta {
            border-radius: 22px;
            padding: 22px;
          }

          .engix-about-card h3 {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </>
  );
}