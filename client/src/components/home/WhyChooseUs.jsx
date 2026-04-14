import { whyChooseUs } from '../../data/staticData';

export default function WhyChooseUs() {
  return (
    <>
      <section className="engix-home-why">
        <div className="engix-home-shell">
          <div className="engix-home-section-head">
            <span className="engix-home-section-badge">Why choose Engix</span>
            <h2>We blend modern design quality with dependable engineering.</h2>
            <p>
              Every project is handled with a structured process, scalable code,
              and business-focused execution.
            </p>
          </div>

          <div className="engix-home-why-grid">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="engix-home-why-card">
                  <div className="engix-home-why-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .engix-home-why {
          background: #f8fafc;
          padding: 12px 20px 30px;
        }

        .engix-home-section-head {
          max-width: 760px;
          margin-bottom: 32px;
        }

        .engix-home-section-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 999px;
          background: #eef2ff;
          color: #334155;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 16px;
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        .engix-home-section-head h2 {
          margin: 0 0 12px;
          color: #0f172a;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .engix-home-section-head p {
          margin: 0;
          color: #64748b;
          line-height: 1.85;
          font-size: 1rem;
        }

        .engix-home-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .engix-home-why-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          padding: 24px;
        }

        .engix-home-why-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.06);
          margin-bottom: 16px;
          color: #0f172a;
        }

        .engix-home-why-card h3 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 1.15rem;
          letter-spacing: -0.02em;
        }

        .engix-home-why-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
          font-size: 0.95rem;
        }

        @media (max-width: 1100px) {
          .engix-home-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .engix-home-why {
            padding: 8px 16px 26px;
          }

          .engix-home-why-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-why-card {
            border-radius: 20px;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}