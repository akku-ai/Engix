import { Section } from './HomeUI';

const faqs = [
  [
    'What services does Engix provide?',
    'Engix provides custom software development, AI and automation, web and mobile applications, UI/UX design, backend engineering, cloud and DevOps, and digital marketing including SEO, paid ads, social media, content, email marketing and analytics.',
  ],
  [
    'Can you help with both development and digital marketing?',
    'Yes. We can connect your website or application work with search visibility, content, campaigns and measurement. The scope is planned around your business priorities.',
  ],
  [
    'Can you improve an existing website or application?',
    'We can review your existing code, user experience and technical requirements, then define the improvements, integrations or modernization work needed.',
  ],
  [
    'How do I get a project estimate?',
    'Share your goals, required features or services, existing systems and desired timeline through our contact page. We will discuss the requirements to define an appropriate scope.',
  ],
  [
    'How long does a project take?',
    'Timelines depend on the scope, complexity, integrations and review process. A delivery plan is agreed after the requirements are understood.',
  ],
  [
    'Do you guarantee rankings or marketing results?',
    'No. Search rankings, AI visibility and campaign outcomes depend on many factors. We focus on clear strategy, sound implementation, measurement and continued improvement.',
  ],
];

export default function FAQSection() {
  return (
    <Section
      id="home-faq"
      eyebrow="COMMON QUESTIONS"
      title="A little clarity before we begin."
    >
      <div className="eh-faq">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>

            <p>{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}