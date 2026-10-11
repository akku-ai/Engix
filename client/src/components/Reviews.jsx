import { ArrowUpRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

import '../styles/engix-reviews.css';

// Fictional examples for preview.
// Replace with genuine, client-approved feedback before publishing
// as real testimonials.
const reviews = [
  {
    name: 'Ethan Brooks',
    service: 'Website Development',
    text:
      'The project felt organized from the first conversation. Our priorities were translated into a clear website structure, and feedback was handled thoughtfully throughout the process.',
    tone: 'lavender',
    demo: true,
  },
  {
    name: 'Olivia Bennett',
    service: 'Digital Marketing',
    text:
      'We appreciated the clear campaign plan and understandable reporting. The discussions helped us connect our messaging, landing pages and marketing goals.',
    tone: 'green',
    demo: true,
  },
  {
    name: 'Lucas Morgan',
    service: 'Custom Software',
    text:
      'Our daily workflow was understood before development began. Regular reviews made it easier to explain what the team needed and refine the application together.',
    tone: 'yellow',
    demo: true,
  },
  {
    name: 'Amelia Parker',
    service: 'SEO & Content',
    text:
      'The recommendations were practical and clearly explained. We had a useful plan for improving site structure, updating content and reviewing search performance.',
    tone: 'peach',
    demo: true,
  },
  {
    name: 'Noah Mitchell',
    service: 'Ecommerce Development',
    text:
      'The attention given to product pages and the shopping journey stood out. Each review gave us a clear view of progress and the decisions still needed.',
    tone: 'green',
    demo: true,
  },
  {
    name: 'Sophie Collins',
    service: 'UI/UX Design',
    text:
      'The design discussions focused on the people using our platform. The prototypes helped us compare options and agree on a direction before implementation.',
    tone: 'lavender',
    demo: true,
  },
  {
    name: 'Daniel Reed',
    service: 'AI & Automation',
    text:
      'The proposed automation was tied to a specific business task. We valued the discussion of limitations, testing and where a person should remain involved.',
    tone: 'peach',
    demo: true,
  },
  {
    name: 'Grace Turner',
    service: 'Maintenance & Support',
    text:
      'Our questions were handled with clear explanations and sensible next steps. It helped us understand the maintenance priorities for our existing application.',
    tone: 'yellow',
    demo: true,
  },
  {
    name: 'Benjamin Scott',
    service: 'Cloud & DevOps',
    text:
      'The deployment plan made responsibilities and dependencies easy to follow. Documentation gave our team a clearer understanding of the release process.',
    tone: 'lavender',
    demo: true,
  },
];

export default function Reviews() {
  const hasSamples = reviews.some(review => review.demo);

  return (
    <section
      id="client-reviews"
      className="eg-section eg-reviews"
      aria-labelledby="eg-reviews-title"
    >
      <div className="eg-container">
        <header className="eg-reviews-heading">
          <div>
            <span className="eg-eyebrow">
              {hasSamples
                ? 'TESTIMONIAL LAYOUT PREVIEW'
                : 'CLIENT FEEDBACK'}
            </span>

            <h2 id="eg-reviews-title">
              {hasSamples
                ? 'A space for your clients’ stories.'
                : 'What our clients say about working with Engix.'}
            </h2>
          </div>

          <p>
            {hasSamples
              ? 'Demo content: all names and quotes below are fictional examples, not verified Engix client reviews.'
              : 'Feedback shared by clients about their experience with our technology and digital marketing services.'}
          </p>
        </header>

        <div className="eg-reviews-grid">
          {reviews.map(review => (
            <article
              className="eg-review-card"
              key={review.name}
            >
              <div className="eg-review-top">
                <span
                  className={`eg-review-service eg-review-${review.tone}`}
                >
                  {review.service}
                </span>

                <Quote
                  size={25}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <blockquote>
                <p>{review.text}</p>
              </blockquote>

              <footer className="eg-review-person">
                <div
                  className={`eg-review-avatar eg-review-${review.tone}`}
                  aria-hidden="true"
                >
                  {review.name
                    .split(' ')
                    .map(part => part[0])
                    .join('')}
                </div>

                <div>
                  <h3>{review.name}</h3>

                
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="eg-reviews-bottom">
          <p>
            Have a project in mind?
            Tell us what you want to achieve.
          </p>

          <Link
            className="eg-button eg-button-dark"
            to="/contact"
          >
            Discuss your project
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}