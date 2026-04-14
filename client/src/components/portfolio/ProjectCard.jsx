export default function ProjectCard({ project }) {
  return (
    <>
      <article className="engix-project-card">
        <div className="engix-project-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="engix-project-image"
          />
        </div>

        <div className="engix-project-content">
          <span className="engix-project-category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </article>

      <style>{`
        .engix-project-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .engix-project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.08);
        }

        .engix-project-image-wrap {
          position: relative;
          overflow: hidden;
          background: #e2e8f0;
        }

        .engix-project-image {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .engix-project-card:hover .engix-project-image {
          transform: scale(1.03);
        }

        .engix-project-content {
          padding: 24px 24px 26px;
        }

        .engix-project-category {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: #f8fafc;
          color: #475569;
          font-size: 0.82rem;
          font-weight: 600;
          border: 1px solid rgba(15, 23, 42, 0.06);
          margin-bottom: 14px;
        }

        .engix-project-content h3 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 1.35rem;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .engix-project-content p {
          margin: 0;
          color: #64748b;
          font-size: 0.97rem;
          line-height: 1.8;
        }

        @media (max-width: 640px) {
          .engix-project-card {
            border-radius: 22px;
          }

          .engix-project-image {
            height: 220px;
          }

          .engix-project-content {
            padding: 20px;
          }

          .engix-project-content h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}