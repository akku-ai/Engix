import { services } from '../../data/staticData';
import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  return (
    <>
      <section className="engix-services-section">
        <div className="engix-services-shell">
          <div className="engix-services-hero">
            <span className="engix-services-badge">Services</span>
            <h1>
              Full-cycle digital services
              <br />
              built for modern businesses.
            </h1>
            <p>
              Engix provides end-to-end technology services across design,
              development, deployment, and long-term support. We help businesses
              launch polished digital products with clarity and reliability.
            </p>
          </div>

          <div className="engix-services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .engix-services-section {
          background: #f8fafc;
          min-height: 100vh;
          padding: 72px 20px 40px;
        }

        .engix-services-shell {
          max-width: 1180px;
          margin: 0 auto;
        }

        .engix-services-hero {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .engix-services-badge {
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

        .engix-services-hero h1 {
          font-size: clamp(2.4rem, 5vw, 4.8rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
          color: #0f172a;
          margin: 0 0 18px;
        }

        .engix-services-hero p {
          margin: 0;
          max-width: 680px;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #64748b;
        }

        .engix-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1100px) {
          .engix-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .engix-services-section {
            padding: 48px 16px 28px;
          }

          .engix-services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}