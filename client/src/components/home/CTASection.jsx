import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <>
      <section className="engix-home-cta">
        <div className="engix-home-shell">
          <div className="engix-home-cta-box">
            <div>
              <span className="engix-home-label">Let’s build together</span>
              <h2>Ready to build a professional website, app, or software product?</h2>
              <p>
                Engix helps businesses turn ideas into polished digital productss
                with modern design and reliable development.
              </p>
            </div>

            <Link to="/contact" className="engix-home-btn-primary">
              Book a discussion
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .engix-home-cta {
          background: #f8fafc;
          padding: 10px 20px 96px;
        }

        .engix-home-cta-box {
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

        .engix-home-cta-box h2 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          line-height: 1.12;
          letter-spacing: -0.03em;
          max-width: 720px;
        }

        .engix-home-cta-box p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
          max-width: 720px;
        }

        @media (max-width: 800px) {
          .engix-home-cta-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .engix-home-cta {
            padding: 8px 16px 72px;
          }

          .engix-home-cta-box {
            border-radius: 22px;
            padding: 22px;
          }
        }
      `}</style>
    </>
  );
}