export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <>
      <article className="engix-service-card">
        <div className="engix-service-icon">
          <Icon size={22} strokeWidth={2} />
        </div>

        <div className="engix-service-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </article>

      <style>{`
        .engix-service-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          min-height: 100%;
        }

        .engix-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.08);
          border-color: rgba(15, 23, 42, 0.12);
        }

        .engix-service-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.06);
          color: #0f172a;
          margin-bottom: 18px;
        }

        .engix-service-content h3 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 1.28rem;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .engix-service-content p {
          margin: 0;
          color: #64748b;
          font-size: 0.97rem;
          line-height: 1.8;
        }

        @media (max-width: 640px) {
          .engix-service-card {
            border-radius: 22px;
            padding: 22px;
          }

          .engix-service-content h3 {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </>
  );
}