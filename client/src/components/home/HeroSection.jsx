import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <>
      <section className="engix-home-hero">
        <div className="engix-home-shell">
          <div className="engix-home-hero-grid">
            <motion.div
              className="engix-home-hero-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="engix-home-badge">
                Trusted by international and domestic clients
              </span>

              <h1>
                Modern digital products
                <br />
                built with clarity,
                <br />
                quality, and confidence.
              </h1>

              <p>
                Engix is a professional IT company delivering websites, software,
                mobile apps, UI/UX systems, and scalable digital solutions with a
                clean, premium execution style.
              </p>

              <div className="engix-home-hero-actions">
                <Link to="/contact" className="engix-home-btn-primary">
                  Start your project
                </Link>
                <Link to="/services" className="engix-home-btn-secondary">
                  Explore services
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="engix-home-hero-right"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="engix-home-hero-card">
                <span className="engix-home-label">Why Engix</span>
                <h3>Clean design. Strong development. Reliable delivery.</h3>

                <div className="engix-home-mini-grid">
                  <div>
                    <strong>2+</strong>
                    <span>International Clients</span>
                  </div>
                  <div>
                    <strong>Many</strong>
                    <span>Domestic Clients</span>
                  </div>
                  <div>
                    <strong>Modern</strong>
                    <span>Design Systems</span>
                  </div>
                  <div>
                    <strong>End-to-End</strong>
                    <span>Technical Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .engix-home-hero {
          background: #f8fafc;
          padding: 76px 20px 36px;
        }

        .engix-home-shell {
          max-width: 1180px;
          margin: 0 auto;
        }

        .engix-home-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
        }

        .engix-home-badge {
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

        .engix-home-hero-left h1 {
          margin: 0 0 18px;
          font-size: clamp(2.7rem, 6vw, 5.2rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          color: #0f172a;
        }

        .engix-home-hero-left p {
          margin: 0;
          max-width: 680px;
          color: #64748b;
          font-size: 1.05rem;
          line-height: 1.9;
        }

        .engix-home-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .engix-home-btn-primary,
        .engix-home-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .engix-home-btn-primary {
          background: #0f172a;
          color: #ffffff;
        }

        .engix-home-btn-primary:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }

        .engix-home-btn-secondary {
          background: #ffffff;
          color: #0f172a;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .engix-home-btn-secondary:hover {
          transform: translateY(-1px);
          border-color: rgba(15, 23, 42, 0.14);
        }

        .engix-home-hero-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          padding: 30px;
        }

        .engix-home-label {
          display: inline-block;
          margin-bottom: 10px;
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .engix-home-hero-card h3 {
          margin: 0 0 20px;
          color: #0f172a;
          font-size: 1.8rem;
          line-height: 1.18;
          letter-spacing: -0.03em;
        }

        .engix-home-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .engix-home-mini-grid div {
          padding: 18px;
          border-radius: 20px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        .engix-home-mini-grid strong {
          display: block;
          margin-bottom: 6px;
          color: #0f172a;
          font-size: 1.2rem;
        }

        .engix-home-mini-grid span {
          color: #64748b;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        @media (max-width: 960px) {
          .engix-home-hero-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .engix-home-hero {
            padding: 52px 16px 24px;
          }

          .engix-home-hero-card {
            border-radius: 22px;
            padding: 22px;
          }

          .engix-home-mini-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}