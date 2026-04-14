import { processSteps } from '../../data/staticData';

export default function ProcessSection() {
  return (
    <>
      <section className="engix-home-process">
        <div className="engix-home-shell">
          <div className="engix-home-section-head">
            <span className="engix-home-section-badge">Process</span>
            <h2>A clear development process from idea to launch.</h2>
            <p>
              We follow an organized workflow that keeps every project transparent and efficient.
            </p>
          </div>

          <div className="engix-home-process-grid">
            {processSteps.map((step) => (
              <div key={step.number} className="engix-home-process-card">
                <span className="engix-home-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .engix-home-process {
          background: #f8fafc;
          padding: 12px 20px 34px;
        }

        .engix-home-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .engix-home-process-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          padding: 24px;
        }

        .engix-home-process-number {
          display: inline-block;
          margin-bottom: 12px;
          color: #94a3b8;
          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .engix-home-process-card h3 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 1.14rem;
          letter-spacing: -0.02em;
        }

        .engix-home-process-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
          font-size: 0.95rem;
        }

        @media (max-width: 1100px) {
          .engix-home-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .engix-home-process {
            padding: 8px 16px 28px;
          }

          .engix-home-process-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-process-card {
            border-radius: 20px;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}