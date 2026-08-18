import {
  MessageSquareText,
  Scale,
  ShieldCheck,
  Target
} from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Business before technology',
    description:
      'We understand the business problem before deciding what should be designed or engineered.',
    tone: 'lavender'
  },
  {
    icon: MessageSquareText,
    title: 'Clear communication',
    description:
      'Requirements, decisions and progress remain visible throughout the engagement.',
    tone: 'yellow'
  },
  {
    icon: Scale,
    title: 'Practical engineering',
    description:
      'Architecture and technology choices are made around product requirements rather than unnecessary complexity.',
    tone: 'mint'
  },
  {
    icon: ShieldCheck,
    title: 'Built for the long term',
    description:
      'Maintainability, reliability, security and future expansion are considered from the beginning.',
    tone: 'peach'
  }
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="engix-home-why">

        <div className="engix-home-shell">

          <div className="engix-home-why-grid">

            <div className="engix-home-why-copy">

              <span className="engix-home-label">
                WHY ENGIX
              </span>

              <h2>
                Engineering is only
                useful when it moves
                the business forward.
              </h2>

              <p>
                Our role extends beyond implementing specifications.
                We help businesses understand what should be built,
                why it matters and how the product can remain useful
                as requirements evolve.
              </p>


              <div className="engix-home-why-list">

                {reasons.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article key={item.title}>

                      <div className={`why-icon why-${item.tone}`}>

                        <Icon
                          size={25}
                          strokeWidth={1.6}
                        />

                      </div>

                      <div>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.description}
                        </p>

                      </div>

                    </article>
                  );
                })}

              </div>

            </div>


            <div className="engix-home-why-image">

              {/* HOME-ONLY IMAGE #3 */}
              <img
                src="https://images.unsplash.com/photo-1497366753995-0e9f602e2435?auto=format&fit=crop&w=1800&q=90"
                alt="Professional modern business office environment"
              />

              <div>

                <span>
                  THOUGHTFUL DELIVERY
                </span>

                <strong>
                  Good products require
                  more than good code.
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-why {
          padding: 120px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-why-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;

          gap: 85px;

          align-items: center;
        }

        .engix-home-why-copy h2 {
          max-width: 720px;

          margin: 20px 0 0;

          color: #111318;

          font-size: clamp(3rem,4.8vw,5rem);
          font-weight: 600;

          line-height: .97;
          letter-spacing: -.06em;
        }

        .engix-home-why-copy > p {
          max-width: 680px;

          margin: 27px 0 40px;

          color: #686b72;

          font-size: 15px;
          line-height: 1.75;
        }

        .engix-home-why-list article {
          padding: 22px 0;

          display: grid;
          grid-template-columns: 58px 1fr;

          gap: 15px;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .why-icon {
          width: 46px;
          height: 46px;

          display: grid;
          place-items: center;

          color: #111318;
        }

        .why-lavender {
          background: #e9e6ff;
        }

        .why-yellow {
          background: #fff14f;
        }

        .why-mint {
          background: #dff5df;
        }

        .why-peach {
          background: #f4dfd2;
        }

        .engix-home-why-list h3 {
          margin: 0 0 7px;

          color: #111318;

          font-size: 19px;
        }

        .engix-home-why-list p {
          margin: 0;

          color: #6a6c72;

          font-size: 13px;
          line-height: 1.7;
        }

        .engix-home-why-image {
          height: 690px;

          position: relative;

          overflow: hidden;
        }

        .engix-home-why-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .engix-home-why-image::after {
          content: '';

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(5,5,5,.7)
            );
        }

        .engix-home-why-image > div {
          position: absolute;

          z-index: 2;

          left: 30px;
          bottom: 30px;

          color: white;
        }

        .engix-home-why-image span {
          display: inline-block;

          margin-bottom: 10px;
          padding: 5px 8px;

          background: #fff14f;
          color: #050505;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-home-why-image strong {
          display: block;

          max-width: 450px;

          font-size: clamp(2rem,3vw,3rem);

          line-height: 1.03;
          letter-spacing: -.045em;
        }


        @media(max-width:950px) {

          .engix-home-why-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-why-image {
            height: 520px;
          }

        }


        @media(max-width:650px) {

          .engix-home-why {
            padding: 85px 0;
          }

          .engix-home-why-image {
            height: 410px;
          }

        }

      `}</style>
    </>
  );
}