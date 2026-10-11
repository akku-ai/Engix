import { Points } from './HomeUI';

export default function GlobalDeliverySection() {
  return (
    <section
      id="global-delivery"
      className="eh-section eh-dark"
      aria-labelledby="global-delivery-title"
    >
      <div className="eh-shell eh-split">
        <div>
          <span className="eh-eyebrow">
            CONNECTED COLLABORATION
          </span>

          <h2 id="global-delivery-title">
            Built in India.
            <br />
            Working beyond borders.
          </h2>

          <p>
            Engix collaborates with domestic and international
            businesses through clear requirements, documented
            decisions and regular progress reviews.
          </p>
        </div>

        <div>
          <h3>Good collaboration starts with clarity.</h3>

          <Points
            items={[
              'Defined scope and delivery responsibilities',
              'Documented requirements and key decisions',
              'Regular communication and progress reviews',
              'Continued support aligned with the engagement',
            ]}
          />
        </div>
      </div>
    </section>
  );
}