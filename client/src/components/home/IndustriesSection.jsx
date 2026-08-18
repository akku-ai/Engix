import {
  Building2,
  Factory,
  HeartHandshake,
  Landmark,
  ShoppingBag,
  Wrench
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Technology & SaaS',
    text:
      'Digital products, internal platforms and scalable technology foundations.'
  },
  {
    icon: Wrench,
    title: 'Service Businesses',
    text:
      'Booking, operations, workforce management and customer service systems.'
  },
  {
    icon: Factory,
    title: 'Operations & Enterprise',
    text:
      'Workflow automation, dashboards and custom internal software.'
  },
  {
    icon: HeartHandshake,
    title: 'Professional Services',
    text:
      'Client portals, digital experiences and operational platforms.'
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Digital Products',
    text:
      'Mobile and web experiences built around customer interaction.'
  },
  {
    icon: Landmark,
    title: 'Growing Businesses',
    text:
      'Technology modernization for organizations moving beyond manual systems.'
  }
];

export default function IndustriesSection() {
  return (
    <>
      <section className="engix-home-industries">

        <div className="engix-home-shell">

          <div className="engix-home-industries-heading">

            <span>
              WHERE WE CREATE VALUE
            </span>

            <h2>
              Technology for businesses
              with real operational
              challenges.
            </h2>

            <p>
              We are industry-flexible but problem-focused. Our capabilities
              work best where software can improve how a company serves
              customers, manages operations or creates new digital value.
            </p>

          </div>


          <div className="engix-home-industries-grid">

            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <article key={item.title}>

                  <div className={`industry-icon industry-${index + 1}`}>
                    <Icon size={29} strokeWidth={1.5} />
                  </div>

                  <span>
                    0{index + 1}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-industries {
          padding: 120px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-industries-heading {
          max-width: 950px;

          margin-bottom: 65px;
        }

        .engix-home-industries-heading > span {
          display: inline-block;

          padding: 7px 11px;
          margin-bottom: 18px;

          background: #e9e6ff;

          color: #35304b;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .11em;
        }

        .engix-home-industries-heading h2 {
          margin: 0;

          color: #111318;

          font-size: clamp(3rem,5vw,5.2rem);
          font-weight: 600;

          line-height: .97;
          letter-spacing: -.06em;
        }

        .engix-home-industries-heading p {
          max-width: 720px;

          margin: 24px 0 0;

          color: #686b72;

          font-size: 15px;
          line-height: 1.75;
        }

        .engix-home-industries-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-industries-grid article {
          min-height: 330px;

          padding: 30px;

          display: flex;
          flex-direction: column;

          border-right: 1px solid rgba(17,19,24,.11);
          border-bottom: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-industries-grid article:nth-child(3n + 1) {
          padding-left: 0;
        }

        .engix-home-industries-grid article:nth-child(3n) {
          border-right: 0;
        }

        .industry-icon {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          margin-bottom: 22px;

          color: #111318;
        }

        .industry-1,
        .industry-5 {
          background: #e9e6ff;
        }

        .industry-2,
        .industry-6 {
          background: #fff14f;
        }

        .industry-3 {
          background: #dff5df;
        }

        .industry-4 {
          background: #f4dfd2;
        }

        .engix-home-industries-grid article > span {
          color: #898a90;

          font-size: 10px;
        }

        .engix-home-industries-grid h3 {
          margin: auto 0 13px;

          color: #111318;

          font-size: 23px;

          letter-spacing: -.035em;
        }

        .engix-home-industries-grid p {
          margin: 0;

          color: #6c6e74;

          font-size: 13px;
          line-height: 1.72;
        }


        @media(max-width:900px) {

          .engix-home-industries-grid {
            grid-template-columns: repeat(2,1fr);
          }

        }


        @media(max-width:600px) {

          .engix-home-industries {
            padding: 85px 0;
          }

          .engix-home-industries-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-industries-grid article,
          .engix-home-industries-grid article:nth-child(3n + 1) {
            min-height: 290px;

            padding: 28px 0;

            border-right: 0;
          }

        }

      `}</style>
    </>
  );
}