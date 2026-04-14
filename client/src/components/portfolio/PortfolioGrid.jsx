import { portfolioItems } from '../../data/staticData';
import ProjectCard from './ProjectCard';

export default function PortfolioGrid() {
  return (
    <>
      <section className="engix-portfolio-section">
        <div className="engix-portfolio-shell">
          <div className="engix-portfolio-hero">
            <span className="engix-portfolio-badge">Portfolio</span>
            <h1>
              Selected work and
              <br />
              solution types.
            </h1>
            <p>
              Explore the kind of digital products Engix can design and build.
              Replace these placeholders with your real client projects, case studies,
              and success stories when ready.
            </p>
          </div>

          <div className="engix-portfolio-grid">
            {portfolioItems.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .engix-portfolio-section {
          background: #f8fafc;
          min-height: 100vh;
          padding: 72px 20px 40px;
        }

        .engix-portfolio-shell {
          max-width: 1180px;
          margin: 0 auto;
        }

        .engix-portfolio-hero {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .engix-portfolio-badge {
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

        .engix-portfolio-hero h1 {
          font-size: clamp(2.4rem, 5vw, 4.8rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
          color: #0f172a;
          margin: 0 0 18px;
        }

        .engix-portfolio-hero p {
          margin: 0;
          max-width: 680px;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #64748b;
        }

        .engix-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1100px) {
          .engix-portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .engix-portfolio-section {
            padding: 48px 16px 28px;
          }

          .engix-portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}