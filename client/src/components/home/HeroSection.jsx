import { Action, HomeImage, Points } from './HomeUI';

export default function HeroSection() {
  return (
    <section
      className="eh-hero"
      aria-labelledby="engix-home-title"
    >
      <div className="eh-shell eh-split">
        <div className="eh-hero-copy">
          <span className="eh-eyebrow">
            SOFTWARE · AI · DIGITAL MARKETING
          </span>

          <h1 id="engix-home-title">
            Build smarter.
            <br />
            Grow <span>with purpose.</span>
          </h1>

          <p className="eh-lead">
            Custom software. Practical AI. Digital marketing that
            connects your business with the right people.
          </p>

          <p>
            Engix Tech Private Limited brings strategy, design,
            engineering and marketing together to help you launch
            products, simplify operations and grow your digital presence.
          </p>

          <div className="eh-actions">
            <Action>Discuss your project</Action>

            <Action to="/portfolio" secondary>
              Explore our work
            </Action>
          </div>

          <Points
            items={[
              'From discovery to launch and beyond',
              'Technology and marketing, working together',
            ]}
          />
        </div>

        <div className="eh-hero-art">
          <HomeImage
            name="product"
            alt="Illustration of connected product interfaces, software architecture and growth planning"
            eager
          />

          <div className="eh-art-caption">
            <span className="eh-dot" />
            One partner. A connected digital approach.
          </div>
        </div>
      </div>
    </section>
  );
}