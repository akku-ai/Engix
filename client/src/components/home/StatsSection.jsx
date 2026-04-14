import { stats } from '../../data/staticData';

export default function StatsSection() {
  return (
    <>
      <section className="engix-home-stats">
        <div className="engix-home-shell">
          <div className="engix-home-stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="engix-home-stat-card">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .engix-home-stats {
          background: #f8fafc;
          padding: 0 20px 22px;
        }

        .engix-home-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .engix-home-stat-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          padding: 24px;
        }

        .engix-home-stat-card h3 {
          margin: 0 0 8px;
          color: #0f172a;
          font-size: 2rem;
          letter-spacing: -0.04em;
        }

        .engix-home-stat-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.7;
        }

        @media (max-width: 1000px) {
          .engix-home-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .engix-home-stats {
            padding: 0 16px 18px;
          }

          .engix-home-stats-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-stat-card {
            border-radius: 20px;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}