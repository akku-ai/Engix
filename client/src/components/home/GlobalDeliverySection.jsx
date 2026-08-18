import {
  CheckCircle2,
  Globe2
} from 'lucide-react';

export default function GlobalDeliverySection() {
  return (
    <>
      <section className="engix-home-global">

        <div className="engix-home-shell">

          <div className="engix-home-global-grid">

            <div className="engix-home-global-image">

              {/* HOME-ONLY IMAGE #4 */}
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
                alt="International modern business district"
              />

              <div>

                <span>
                  GLOBAL DELIVERY
                </span>

                <strong>
                  Built in India.
                  <br />
                  Working beyond borders.
                </strong>

              </div>

            </div>


            <div className="engix-home-global-copy">

              <span className="engix-home-label">
                INTERNATIONAL COLLABORATION
              </span>

              <h2>
                Technology delivery
                doesn’t need geographic
                boundaries.
              </h2>

              <p>
                Engix works with domestic and international businesses
                using a structured remote delivery model built around
                clear priorities, documentation and regular communication.
              </p>

              <p>
                This allows product, design and engineering collaboration
                to remain organized even when client and development teams
                operate across different locations.
              </p>


              <div className="engix-home-global-points">

                <div>
                  <CheckCircle2 size={20} />
                  <span>International client experience</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Structured remote collaboration</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Clear delivery ownership</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Continued technical support</span>
                </div>

              </div>


              <div className="engix-home-global-icon">
                <Globe2 size={31} strokeWidth={1.5} />
              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-global {
          padding: 120px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-global-grid {
          display: grid;
          grid-template-columns: .95fr 1.05fr;

          gap: 85px;

          align-items: center;
        }

        .engix-home-global-image {
          height: 650px;

          position: relative;

          overflow: hidden;
        }

        .engix-home-global-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .engix-home-global-image::after {
          content: '';

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 48%,
              rgba(5,5,5,.7)
            );
        }

        .engix-home-global-image > div {
          position: absolute;

          z-index: 2;

          left: 30px;
          bottom: 30px;

          color: #ffffff;
        }

        .engix-home-global-image span {
          display: inline-block;

          margin-bottom: 10px;

          padding: 5px 8px;

          background: #fff14f;

          color: #050505;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-home-global-image strong {
          display: block;

          font-size: clamp(2rem,3vw,3rem);

          line-height: 1.03;
          letter-spacing: -.045em;
        }

        .engix-home-global-copy h2 {
          max-width: 700px;

          margin: 20px 0 0;

          color: #111318;

          font-size: clamp(3rem,4.8vw,5rem);
          font-weight: 600;

          line-height: .97;
          letter-spacing: -.06em;
        }

        .engix-home-global-copy > p {
          max-width: 680px;

          margin: 25px 0 0;

          color: #686b72;

          font-size: 15px;
          line-height: 1.78;
        }

        .engix-home-global-points {
          margin-top: 35px;
        }

        .engix-home-global-points > div {
          padding: 15px 0;

          display: flex;
          align-items: center;

          gap: 10px;

          border-top: 1px solid rgba(17,19,24,.11);

          color: #4d4f55;

          font-size: 13px;
        }

        .engix-home-global-icon {
          width: 58px;
          height: 58px;

          margin-top: 35px;

          display: grid;
          place-items: center;

          background: #e9e6ff;

          color: #111318;
        }


        @media(max-width:950px) {

          .engix-home-global-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-global-image {
            height: 520px;
          }

        }


        @media(max-width:650px) {

          .engix-home-global {
            padding: 85px 0;
          }

          .engix-home-global-image {
            height: 400px;
          }

        }

      `}</style>
    </>
  );
}