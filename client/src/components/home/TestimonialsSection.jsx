import { testimonials } from '../../data/staticData';

export default function TestimonialsSection() {
  return (
    <>
      <section className="engix-home-testimonials">
        <div className="engix-home-shell">
          <div className="engix-home-section-head">
            <span className="engix-home-section-badge">Client feedback</span>
            <h2>What clients appreciate about our work.</h2>
            <p>
              Use these as placeholders until you replace them with real verified testimonials.
            </p>
          </div>

          <div className="engix-home-testimonial-grid">
            {testimonials.map((item) => (
              <div key={item.name + item.company} className="engix-home-testimonial-card">
                <p className="engix-home-quote">“{item.quote}”</p>
                <h4>{item.name}</h4>
                <span>{item.company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .engix-home-testimonials {
          background: #f8fafc;
          padding: 12px 20px 30px;
        }

        .engix-home-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .engix-home-testimonial-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          padding: 28px;
        }

        .engix-home-quote {
          margin: 0 0 18px;
          color: #334155;
          font-size: 1.02rem;
          line-height: 1.9;
        }

        .engix-home-testimonial-card h4 {
          margin: 0 0 4px;
          color: #0f172a;
          font-size: 1rem;
        }

        .engix-home-testimonial-card span {
          color: #64748b;
          font-size: 0.94rem;
        }

        @media (max-width: 640px) {
          .engix-home-testimonials {
            padding: 8px 16px 26px;
          }

          .engix-home-testimonial-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-testimonial-card {
            border-radius: 20px;
            padding: 22px;
          }
        }
      `}</style>
    </>
  );
}