const stats = [
  {
    number: '01',
    value: 'International',
    title: 'Client experience',
    description:
      'Technology delivery experience with businesses operating outside India.',
    tone: 'lavender'
  },
  {
    number: '02',
    value: 'Domestic',
    title: 'Business partnerships',
    description:
      'Working with Indian businesses on software, digital products and technology modernization.',
    tone: 'yellow'
  },
  {
    number: '03',
    value: 'End-to-end',
    title: 'Product engineering',
    description:
      'Strategy, UX, frontend, backend, mobile, cloud and deployment through one workflow.',
    tone: 'mint'
  },
  {
    number: '04',
    value: 'Long-term',
    title: 'Technology thinking',
    description:
      'Systems designed for continued improvement rather than only the first release.',
    tone: 'peach'
  }
];

export default function StatsSection() {
  return (
    <>
      <section className="engix-stats">

        <div className="engix-home-shell">

          <div className="engix-stats-grid">

            {stats.map((item) => (
              <article
                key={item.number}
                className={`engix-stat stat-${item.tone}`}
              >

                <span className="engix-stat-number">
                  {item.number}
                </span>

                <strong>
                  {item.value}
                </strong>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      <style>{`

        .engix-stats {
          padding: 95px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
          border-bottom: 1px solid rgba(17,19,24,.11);
        }

        .engix-stats-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
        }

        .engix-stat {
          min-height: 290px;

          padding: 15px 34px;

          display: flex;
          flex-direction: column;

          border-right: 1px solid rgba(17,19,24,.11);
        }

        .engix-stat:first-child {
          padding-left: 0;
        }

        .engix-stat:last-child {
          border-right: 0;
        }

        .engix-stat-number {
          width: max-content;

          padding: 6px 9px;

          color: #35304b;

          font-size: 10px;
          font-weight: 800;
        }

        .stat-lavender .engix-stat-number {
          background: #e9e6ff;
        }

        .stat-yellow .engix-stat-number {
          background: #fff14f;
        }

        .stat-mint .engix-stat-number {
          background: #dff5df;
        }

        .stat-peach .engix-stat-number {
          background: #f4dfd2;
        }

        .engix-stat strong {
          margin-top: auto;

          color: #111318;

          font-size: clamp(2.1rem,3.4vw,3.6rem);

          line-height: 1;
          letter-spacing: -.055em;
        }

        .engix-stat h3 {
          margin: 13px 0 8px;

          color: #111318;

          font-size: 17px;
        }

        .engix-stat p {
          max-width: 240px;

          margin: 0;

          color: #73757b;

          font-size: 12px;
          line-height: 1.7;
        }


        @media(max-width:900px) {

          .engix-stats-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .engix-stat {
            border-bottom: 1px solid rgba(17,19,24,.11);
          }

        }


        @media(max-width:580px) {

          .engix-stats {
            padding: 55px 0;
          }

          .engix-stats-grid {
            grid-template-columns: 1fr;
          }

          .engix-stat,
          .engix-stat:first-child {
            min-height: 230px;

            padding: 28px 0;

            border-right: 0;
          }

        }

      `}</style>
    </>
  );
}