import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  BrainCircuit,
  CloudCog,
  Code2,
  LayoutDashboard,
  Palette,
  ServerCog,
  Smartphone,
  Workflow
} from 'lucide-react';

const capabilities = [
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'Business applications, SaaS platforms, internal tools and software systems designed around real workflows.',
    tone: 'lavender'
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automation',
    description:
      'AI assistants, conversational experiences and intelligent automation that reduce repetitive work.',
    tone: 'yellow'
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Products',
    description:
      'Responsive web and mobile applications built around performance, usability and maintainability.',
    tone: 'mint'
  },
  {
    icon: Palette,
    title: 'Product & UI/UX',
    description:
      'Product discovery, user journeys, interfaces and design systems that make complex experiences clear.',
    tone: 'peach'
  },
  {
    icon: ServerCog,
    title: 'Backend & APIs',
    description:
      'Secure APIs, databases, authentication, integrations and scalable server-side architecture.',
    tone: 'lavender'
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description:
      'Deployment, CI/CD, infrastructure, monitoring and production environments designed for reliability.',
    tone: 'yellow'
  },
  {
    icon: LayoutDashboard,
    title: 'Enterprise Systems',
    description:
      'CRM, ERP, administration and operational dashboards that connect business teams and processes.',
    tone: 'mint'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Digital workflows designed to replace repetitive manual processes and disconnected business tools.',
    tone: 'peach'
  }
];

export default function ServicesPreview() {
  return (
    <>
      <section className="engix-home-services">

        <div className="engix-home-shell">

          <div className="engix-home-services-heading">

            <div>

              <span>
                OUR CAPABILITIES
              </span>

              <h2>
                One technology partner
                across the product
                lifecycle.
              </h2>

            </div>


            <div>

              <p>
                From first product decisions through design,
                engineering and production, Engix brings the
                capabilities needed to move an idea forward.
              </p>

              <Link to="/services">
                Explore all capabilities

                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>


          <div className="engix-home-services-grid">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`engix-home-service service-${item.tone}`}
                >

                  <div className="engix-home-service-top">

                    <span>
                      0{index + 1}
                    </span>

                    <div>
                      <Icon
                        size={31}
                        strokeWidth={1.5}
                      />
                    </div>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-services {
          padding: 120px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-services-heading {
          display: grid;
          grid-template-columns: 1.25fr .75fr;

          gap: 80px;

          align-items: end;

          margin-bottom: 65px;
        }

        .engix-home-services-heading > div:first-child > span {
          display: inline-block;

          margin-bottom: 19px;

          padding: 7px 11px;

          background: #e9e6ff;

          color: #35304b;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .11em;
        }

        .engix-home-services-heading h2 {
          max-width: 850px;

          margin: 0;

          color: #111318;

          font-size: clamp(3rem,5vw,5.2rem);
          font-weight: 600;

          line-height: .97;
          letter-spacing: -.06em;
        }

        .engix-home-services-heading p {
          margin: 0;

          color: #686b72;

          font-size: 15px;
          line-height: 1.75;
        }

        .engix-home-services-heading a {
          width: max-content;

          margin-top: 22px;

          display: inline-flex;
          align-items: center;

          gap: 8px;

          color: #111318;

          text-decoration: none;

          font-size: 13px;
          font-weight: 750;

          border-bottom: 1px solid #111318;

          padding-bottom: 4px;
        }

        .engix-home-services-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-service {
          min-height: 350px;

          padding: 30px;

          display: flex;
          flex-direction: column;

          border-right: 1px solid rgba(17,19,24,.11);
          border-bottom: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-service:nth-child(4n + 1) {
          padding-left: 0;
        }

        .engix-home-service:nth-child(4n) {
          border-right: 0;
        }

        .engix-home-service-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .engix-home-service-top > span {
          color: #85868c;

          font-size: 10px;
          font-weight: 700;
        }

        .engix-home-service-top > div {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          color: #111318;
        }

        .service-lavender .engix-home-service-top > div {
          background: #e9e6ff;
        }

        .service-yellow .engix-home-service-top > div {
          background: #fff14f;
        }

        .service-mint .engix-home-service-top > div {
          background: #dff5df;
        }

        .service-peach .engix-home-service-top > div {
          background: #f4dfd2;
        }

        .engix-home-service h3 {
          margin: auto 0 14px;

          color: #111318;

          font-size: 24px;

          line-height: 1.06;
          letter-spacing: -.04em;
        }

        .engix-home-service p {
          margin: 0;

          color: #6b6d73;

          font-size: 12px;
          line-height: 1.72;
        }


        @media(max-width:1000px) {

          .engix-home-services-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .engix-home-service:nth-child(4n + 1) {
            padding-left: 30px;
          }

          .engix-home-service:nth-child(2n + 1) {
            padding-left: 0;
          }

        }


        @media(max-width:750px) {

          .engix-home-services-heading {
            grid-template-columns: 1fr;

            gap: 25px;
          }

        }


        @media(max-width:600px) {

          .engix-home-services {
            padding: 85px 0;
          }

          .engix-home-services-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-service,
          .engix-home-service:nth-child(4n + 1),
          .engix-home-service:nth-child(2n + 1) {
            min-height: 290px;

            padding: 28px 0;

            border-right: 0;
          }

        }

      `}</style>
    </>
  );
}