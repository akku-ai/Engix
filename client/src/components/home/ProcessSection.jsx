const process = [
  {
    number: '01',
    title: 'Understand',
    text:
      'We learn about the business, users, existing systems and the outcome the project needs to create.'
  },
  {
    number: '02',
    title: 'Define',
    text:
      'Requirements, priorities, architecture and product scope are shaped into a practical delivery plan.'
  },
  {
    number: '03',
    title: 'Design',
    text:
      'User journeys, interfaces and product interactions are designed around clarity and usability.'
  },
  {
    number: '04',
    title: 'Engineer',
    text:
      'Frontend, backend, mobile and infrastructure are built through structured development cycles.'
  },
  {
    number: '05',
    title: 'Validate',
    text:
      'Testing and reviews help confirm reliability, experience quality and technical readiness.'
  },
  {
    number: '06',
    title: 'Launch & Evolve',
    text:
      'We support deployment, improvements, maintenance and future product development.'
  }
];

export default function ProcessSection() {
  return (
    <>
      <section className="engix-home-process">

        <div className="engix-home-shell">

          <div className="engix-home-process-heading">

            <span>
              HOW WE WORK
            </span>

            <h2>
              Structured enough
              to stay clear.
              Flexible enough
              to evolve.
            </h2>

            <p>
              Product development rarely follows a perfectly straight line.
              Our process creates clear stages while allowing decisions to
              improve as more is learned.
            </p>

          </div>


          <div className="engix-home-process-grid">

            {process.map((item, index) => (

              <article
                key={item.number}
                className={`home-process-${index + 1}`}
              >

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-process {
          padding: 120px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-process-heading {
          max-width: 930px;

          margin-bottom: 65px;
        }

        .engix-home-process-heading > span {
          display: inline-block;

          padding: 7px 11px;

          margin-bottom: 18px;

          background: #e9e6ff;

          color: #35304b;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .11em;
        }

        .engix-home-process-heading h2 {
          margin: 0;

          color: #111318;

          font-size: clamp(3rem,5vw,5.2rem);
          font-weight: 600;

          line-height: .97;
          letter-spacing: -.06em;
        }

        .engix-home-process-heading p {
          max-width: 680px;

          margin: 25px 0 0;

          color: #686b72;

          font-size: 15px;
          line-height: 1.75;
        }

        .engix-home-process-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-process-grid article {
          min-height: 330px;

          padding: 30px;

          display: flex;
          flex-direction: column;

          border-right: 1px solid rgba(17,19,24,.11);
          border-bottom: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-process-grid article:nth-child(3n + 1) {
          padding-left: 0;
        }

        .engix-home-process-grid article:nth-child(3n) {
          border-right: 0;
        }

        .engix-home-process-grid article > span {
          width: max-content;

          padding: 6px 9px;

          background: #e9e6ff;

          color: #35304b;

          font-size: 10px;
          font-weight: 800;
        }

        .home-process-2 > span,
        .home-process-6 > span {
          background: #fff14f !important;
        }

        .home-process-3 > span {
          background: #dff5df !important;
        }

        .home-process-4 > span {
          background: #f4dfd2 !important;
        }

        .engix-home-process-grid h3 {
          margin: auto 0 14px;

          color: #111318;

          font-size: 28px;

          letter-spacing: -.04em;
        }

        .engix-home-process-grid p {
          margin: 0;

          color: #6b6d73;

          font-size: 13px;
          line-height: 1.72;
        }


        @media(max-width:900px) {

          .engix-home-process-grid {
            grid-template-columns: repeat(2,1fr);
          }

        }


        @media(max-width:600px) {

          .engix-home-process {
            padding: 85px 0;
          }

          .engix-home-process-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-process-grid article,
          .engix-home-process-grid article:nth-child(3n + 1) {
            min-height: 270px;

            padding: 26px 0;

            border-right: 0;
          }

        }

      `}</style>
    </>
  );
}