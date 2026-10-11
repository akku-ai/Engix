import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import '../styles/engix-home.css';

const assetRoot = `${import.meta.env.BASE_URL}images/home/`;
const photos = {
  hero: ['hero.jpg', 'photo-1563461660947-507ef49e9c47', 'People collaborating with laptops at a shared table'],
  marketing: ['marketing.jpg', 'photo-1758691737124-05c5bffe46f0', 'A diverse professional team collaborating around a laptop'],
  collaboration: ['collaboration.jpg', 'photo-1519389950473-47ba0277781c', 'People working together around a table with laptops'],
  development: ['development.jpg', 'photo-1498050108023-c5249f4df085', 'A coding workspace with a laptop displaying source code'],
  seo: ['seo.jpg', 'photo-1709281847802-9aef10b6d4bf', 'A digital marketing workspace with a laptop and SEO lettering'],
  planning: ['planning-team.jpg', 'photo-1552664730-d307ca884978', 'Professionals discussing a project around a meeting table'],
  review: ['engineering-work.jpg', 'photo-1516321318423-f06f85e504b3', 'People reviewing digital work together'],
  strategy: ['marketing-team.jpg', 'photo-1553877522-43269d4ea984', 'A team discussing business strategy'],
  team: ['hero-team.jpg', 'photo-1522071820081-009f0129c71c', 'Professionals collaborating in a shared workspace'],
};

function Photo({ name, background = false, eager = false }) {
  const [stage, setStage] = useState(0);
  const [file, remote, alt] = photos[name];
  const className = `eg-photo ${background ? 'eg-background-photo' : ''}`;
  if (stage === 2) return <div className={`${className} eg-photo-fallback`} role="img" aria-label="Engix branded image placeholder"><strong>ENGIX</strong><span>Technology. People. Progress.</span></div>;
  const src = stage === 0 ? `${assetRoot}${file}` : `https://images.unsplash.com/${remote}?auto=format&fit=crop&w=1800&q=85`;
  return <div className={className}><img key={`${name}-${stage}`} src={src} alt={`Illustrative stock photograph: ${alt}`} width="1800" height="1200" loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" onError={() => setStage(current => Math.min(current + 1, 2))} /></div>;
}

function Brand() {
  const [stage, setStage] = useState(0);
  return <div className="eg-brand">
    {stage < 2 && <img key={stage} src={stage === 0 ? `${assetRoot}engix-logo.png` : `${import.meta.env.BASE_URL}logo.png`} alt="" width="48" height="48" onError={() => setStage(current => current + 1)} />}
    <div><strong>Engix</strong><span>TECH PRIVATE LIMITED</span></div>
  </div>;
}

function Button({ children, to = '/contact', variant = 'dark' }) {
  return <Link to={to} className={`eg-button eg-button-${variant}`}>{children}<span aria-hidden="true">→</span></Link>;
}

function Points({ items }) {
  return <ul className="eg-points">{items.map(item => <li key={item}><span>{item}</span></li>)}</ul>;
}

function Heading({ id, eyebrow, title, text }) {
  return <header className="eg-heading"><span className="eg-eyebrow">{eyebrow}</span><h2 id={id}>{title}</h2>{text && <p>{text}</p>}</header>;
}

function Section({ id, eyebrow, title, text, tone = '', children }) {
  return <section id={id} className={`eg-section ${tone}`} aria-labelledby={`${id}-title`}><div className="eg-container"><Heading id={`${id}-title`} eyebrow={eyebrow} title={title} text={text} />{children}</div></section>;
}

function Cards({ items }) {
  return <div className="eg-card-grid">{items.map(([photo, title, text]) => <article className="eg-card" key={title}><Photo name={photo} /><h3>{title}</h3><p>{text}</p></article>)}</div>;
}

function PhotoBanner({ id, photo, eyebrow, title, text, children }) {
  return <section id={id} className="eg-photo-banner" aria-labelledby={`${id}-title`}><Photo name={photo} background /><div className="eg-photo-shade" /><div className="eg-container eg-banner-content"><span className="eg-eyebrow">{eyebrow}</span><h2 id={`${id}-title`}>{title}</h2><p>{text}</p>{children}</div></section>;
}

const technology = [
  ['development', 'Custom Software Development', 'SaaS products, custom applications and internal tools built around your business processes.'],
  ['review', 'AI & Intelligent Automation', 'AI assistants, conversational products and intelligent workflows connected with your systems.'],
  ['development', 'Web & Mobile Applications', 'Customer websites, web platforms and mobile experiences designed for usability and performance.'],
  ['planning', 'Product Strategy & UI/UX', 'Discovery, requirements, user journeys and interfaces that clarify the product before development.'],
  ['development', 'Backend & API Engineering', 'APIs, databases, authentication and integrations that connect your applications and information.'],
  ['review', 'Cloud & DevOps', 'Deployment workflows, infrastructure, monitoring and environment management for ongoing operations.'],
  ['collaboration', 'Enterprise Applications', 'CRM tools, administration portals, dashboards and operational software tailored to your teams.'],
  ['review', 'Workflow Integrations', 'Connected tools and automated handoffs that reduce repetitive manual steps.'],
  ['development', 'Legacy Modernization', 'Review existing applications, reduce technical debt and plan phased upgrades that support business continuity.'],
  ['review', 'Quality Assurance & Testing', 'Functional, integration and regression testing aligned with your critical user journeys and release requirements.'],
  ['collaboration', 'Ecommerce Development', 'Storefronts, product catalogues, checkout journeys and payment or inventory integrations around your operating model.'],
  ['team', 'Maintenance & Support', 'Agreed maintenance, issue investigation and iterative enhancements for applications that need continued attention.'],
];
const marketing = [
  ['seo', 'SEO & Organic Visibility', 'Technical, on-page, local and ecommerce SEO to strengthen search discoverability.'],
  ['strategy', 'Paid Ads & PPC', 'Google Ads, Meta and LinkedIn campaigns aligned with your audience, goals and budget.'],
  ['marketing', 'Social Media Marketing', 'Channel strategy, content planning, creative production and community management.'],
  ['planning', 'Content & Brand Strategy', 'Website copy, articles, landing pages and messaging that communicate your value clearly.'],
  ['marketing', 'Email & Lead Generation', 'Audience research, segmentation, email journeys and campaigns with clear next steps.'],
  ['strategy', 'Analytics & Conversion', 'GA4, event tracking, reporting and landing page improvements to inform decisions.'],
  ['review', 'Reputation & Digital PR', 'Reputation monitoring, review strategies, outreach and public-facing brand communication.'],
  ['seo', 'AI Search & App Visibility', 'AEO, GEO and app store optimization supported by useful content and technical foundations.'],
  ['marketing', 'Creative & Video Content', 'Campaign concepts, social creatives, short-form video planning and visual content suited to each channel.'],
  ['strategy', 'Ecommerce Marketing', 'Product campaigns, shopping feeds, remarketing and customer journeys connected with your store experience.'],
  ['planning', 'B2B Demand Generation', 'Audience definition, LinkedIn content, campaign landing pages and lead nurturing for considered purchases.'],
  ['review', 'Marketing Automation', 'Connect lead capture, CRM handoffs, audience segmentation and reporting into a more consistent process.'],
];
const reasons = [
  ['planning', 'Business-first thinking', 'Understand the problem, the users and the outcome before choosing the solution.'],
  ['team', 'Clear ownership', 'Keep responsibilities, priorities, decisions and progress visible throughout the engagement.'],
  ['collaboration', 'Connected expertise', 'Bring product, design, engineering and marketing toward shared business priorities.'],
  ['review', 'Built to evolve', 'Consider testing, security, performance and maintainability as the product develops.'],
];
const steps = [
  ['Discover', 'Understand your business, users, existing systems and desired outcomes.'],
  ['Define', 'Clarify scope, requirements, priorities and delivery responsibilities.'],
  ['Design', 'Shape user journeys, interfaces, content and campaign direction.'],
  ['Build', 'Develop in clear stages, sharing progress and reviewing decisions.'],
  ['Validate', 'Check functionality, experience, integrations and measurement.'],
  ['Launch & Improve', 'Deploy and plan the maintenance or enhancements agreed in the engagement.'],
];
const industries = [
  ['Technology & SaaS', 'Products, customer portals, integrations and digital demand generation.'],
  ['Service Businesses', 'Booking journeys, operational tools, local search and customer communication.'],
  ['Ecommerce & Consumer Brands', 'Shopping experiences, ecommerce SEO and campaign conversion journeys.'],
  ['Professional Services', 'Client portals, brand content and lead generation workflows.'],
  ['Enterprise & Operations', 'Internal applications, dashboards and business process automation.'],
  ['Startups & Growing Teams', 'Product discovery, MVP development and technology modernization.'],
];
const faqs = [
  ['What services does Engix provide?', 'Engix provides software development, AI and automation, web and mobile applications, UI/UX, backend engineering, cloud and DevOps, and digital marketing including SEO, ads, social media, content, email and analytics.'],
  ['Can you handle development and marketing together?', 'Yes. Website and application work can be planned alongside search visibility, content, campaign landing pages and measurement.'],
  ['Can you improve an existing website or application?', 'We can review your code, experience, integrations and requirements, then define a practical improvement plan.'],
  ['How do I get an estimate?', 'Share your goals, required features or services, existing systems and desired timeline through our contact page. We will discuss the scope and next steps.'],
  ['How long does a project take?', 'Timelines depend on scope, complexity, integrations, content readiness and review cycles. A delivery plan is agreed after the requirements are understood.'],
  ['Do you work with international businesses?', 'Engix collaborates with domestic and international businesses through clear requirements, documented decisions and regular progress reviews.'],
  ['Do you guarantee rankings or marketing results?', 'No. Rankings, AI visibility and campaign outcomes depend on many factors. We focus on strategy, implementation, measurement and improvement.'],
];

export default function Home() {
  usePageTitle('Software, AI & Digital Marketing');
  useEffect(() => {
    const existing = document.querySelector('meta[name="description"]');
    const meta = existing || document.createElement('meta');
    const previous = existing?.getAttribute('content');
    if (!existing) { meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Engix Tech Private Limited builds custom software, AI solutions, web and mobile applications, and digital marketing strategies. Discuss your project.';
    return () => { if (!existing) meta.remove(); else if (previous === null) meta.removeAttribute('content'); else meta.setAttribute('content', previous); };
  }, []);
  return <div className="engix-photo-home">
    <section className="eg-hero" aria-labelledby="eg-home-title">
      <Photo name="hero" background eager /><div className="eg-photo-shade" />
      <div className="eg-container eg-hero-content"><Brand /><span className="eg-eyebrow">SOFTWARE · AI · DIGITAL MARKETING</span><h1 id="eg-home-title">Build smarter.<br /><span>Grow with confidence.</span></h1><p className="eg-hero-lead">Digital products that support your business.<br />Digital marketing that connects you with your audience.</p><p className="eg-hero-text">Engix connects strategy, design and engineering to help you launch useful products, simplify operations and strengthen your digital presence.</p><div className="eg-actions"><Button variant="yellow">Discuss your project</Button><Button to="/portfolio" variant="glass">Explore our work</Button></div><div className="eg-hero-check">From idea to launch and beyond.</div></div>
    </section>
    <section className="eg-value-strip" aria-label="Our capabilities"><div className="eg-container eg-value-grid">{[['development','Product engineering','From product definition to deployment.'],['review','Practical AI','Intelligent tools for real workflows.'],['strategy','Digital growth','Search, content and campaigns.'],['team','Connected delivery','Clear communication across locations.']].map(([photo,title,text],i)=><article key={title}><Photo name={photo} /><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></section>
    <section id="about-engix" className="eg-section" aria-labelledby="about-engix-title"><div className="eg-container eg-split"><div><Photo name="collaboration" /><div className="eg-caption"><strong>Shared priorities. Better decisions.</strong><span>Collaboration gives the work a clearer direction.</span></div></div><div className="eg-copy"><Heading id="about-engix-title" eyebrow="ABOUT ENGIX" title="Your business is growing. Your technology should keep up." /><p>Disconnected systems, manual processes and an unclear digital presence can slow down a growing business. We help identify what needs to change and build practical solutions around your priorities.</p><p>From your first product launch to connected business platforms and marketing campaigns, we bring product thinking, engineering and digital growth into the same conversation.</p><Points items={['Define the right product and experience','Connect tools, data and business workflows','Build a clearer path from visibility to enquiry','Improve your platform as requirements evolve']} /><div className="eg-actions"><Button to="/about" variant="outline">Learn about Engix</Button></div></div></div></section>
    <PhotoBanner id="technology-intro" photo="development" eyebrow="TECHNOLOGY & PRODUCT ENGINEERING" title="Build the systems your business depends on." text="From customer applications to internal platforms, we connect thoughtful design with practical engineering and a foundation for continued development."><div className="eg-banner-tags"><span>Custom software</span><span>Web & mobile</span><span>AI & automation</span><span>Cloud & APIs</span></div></PhotoBanner>
    <Section id="technology-services" eyebrow="OUR TECHNOLOGY CAPABILITIES" title="One connected approach across the product lifecycle." text="Plan, build, integrate and improve your digital products with capabilities shaped around your users and operating context." tone="eg-soft"><Cards items={technology} /><div className="eg-actions"><Button to="/services" variant="outline">Explore all services</Button></div></Section>
    <PhotoBanner id="marketing-intro" photo="marketing" eyebrow="DIGITAL MARKETING" title="Be discovered. Build trust. Create demand." text="Bring search, paid media, social, content and analytics together to help the right people understand your business and take the next step."><div className="eg-actions"><Button variant="yellow">Discuss your marketing goals</Button></div></PhotoBanner>
    <Section id="marketing-services" eyebrow="MARKETING CAPABILITIES" title="Connect your digital presence with your business goals." text="The website experience, campaign message and measurement should support the same customer journey." tone="eg-yellow-soft"><Cards items={marketing} /></Section>
    <section id="search-growth" className="eg-section" aria-labelledby="search-growth-title"><div className="eg-container eg-split"><div className="eg-copy"><Heading id="search-growth-title" eyebrow="VISIBILITY & MEASUREMENT" title="A useful website needs a clear route to its audience." /><p>We connect the technical foundations of your site with useful content, relevant campaigns and measurement that helps you understand what happens after a visit.</p><Points items={['Search-friendly structure and relevant content','Campaign landing pages with clear calls to action','Event tracking and reporting aligned with your goals','Continued improvements informed by available data']} /><div className="eg-actions"><Button variant="outline">Plan your digital growth</Button></div></div><Photo name="seo" /></div></section>
    <Section id="applied-ai" eyebrow="APPLIED AI & AUTOMATION" title="Make AI useful to your everyday workflows." text="The right use case matters more than adding another tool. We explore intelligent applications around your data, systems and business requirements." tone="eg-green-soft"><div className="eg-three-grid">{[['review','AI assistants','Conversational interfaces that help people find information and complete defined tasks.'],['planning','Information processing','Document workflows, summarization and structured information handling.'],['review','Connected automation','AI-enabled steps integrated with your existing applications and processes.']].map(([photo,title,text],i)=><article className="eg-card" key={title}><Photo name={photo} /><h3>{title}</h3><p>{text}</p></article>)}</div><p className="eg-section-note">AI solutions need use-case-specific testing, appropriate data handling and human oversight.</p><div className="eg-actions"><Button variant="outline">Discuss an AI project</Button></div></Section>
    <section id="engineering-quality" className="eg-section" aria-labelledby="engineering-quality-title"><div className="eg-container eg-split"><Photo name="review" /><div className="eg-copy"><Heading id="engineering-quality-title" eyebrow="RELEASE WITH A PLAN" title="Good engineering continues beyond the interface." /><p>Useful software needs dependable behaviour behind the scenes. We consider architecture, integrations, data handling and performance alongside the visible experience.</p><Points items={['Requirements and acceptance criteria before implementation','Authentication and permissions suited to the application','Testing around critical workflows and integration points','Deployment, documentation and agreed maintenance planning']} /><div className="eg-actions"><Button variant="outline">Discuss your platform</Button></div></div></div></section>
    <section id="marketing-strategy" className="eg-section eg-yellow-soft" aria-labelledby="marketing-strategy-title"><div className="eg-container eg-split"><div className="eg-copy"><Heading id="marketing-strategy-title" eyebrow="STRATEGY THROUGH EXECUTION" title="Turn separate channels into a connected customer journey." /><p>Your audience may discover you through search, compare you on social media and return through an email. Each touchpoint should communicate a consistent message and offer a clear next step.</p><Points items={['Audit your website, audience and current channels','Define positioning, content themes and campaign priorities','Align creative, landing pages and lead capture','Review enquiries and conversion signals to guide improvements']} /><div className="eg-actions"><Button variant="outline">Discuss a marketing plan</Button></div></div><Photo name="strategy" /></div></section>
    <Section id="business-solutions" eyebrow="PRACTICAL DIGITAL SOLUTIONS" title="Connect customer experiences with daily operations." text="Projects work best when they address a specific need. These are examples of the kinds of solutions we can scope around your requirements." tone="eg-soft"><Cards items={[
      ['collaboration','Customer & Client Portals','Give customers a clear place to access information, submit requests and follow progress, with access controls suited to your service.'],
      ['planning','Booking & Service Platforms','Connect service information, availability, bookings and operational handoffs into a more organized experience.'],
      ['review','Business Dashboards','Bring relevant operational information into understandable views that help teams review activity and identify next steps.'],
      ['marketing','Lead Capture & CRM Journeys','Connect campaign enquiries with qualification, follow-up and reporting so teams can manage the customer journey consistently.'],
    ]} /></Section>
    <Section id="why-engix" eyebrow="WHY ENGIX" title="A partner who sees the bigger picture." text="Clear communication, practical execution and continued improvement help make the work useful beyond the first release."><Cards items={reasons} /></Section>
    <Section id="how-we-work" eyebrow="OUR PROCESS" title="Clear stages. Visible progress. Room to improve." text="A structured process keeps the project organized while leaving room to learn and refine decisions." tone="eg-soft"><ol className="eg-process">{steps.map(([title,text],i)=><li key={title}><Photo name={['planning','collaboration','strategy','development','review','team'][i]} /><span className={`eg-step eg-tone-${i%4}`}>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></Section>
    <Section id="industries" eyebrow="WHO WE HELP" title="Different businesses. Solutions shaped around their needs." text="We start with your workflows, users and goals across industries and stages of growth." tone="eg-green-soft"><div className="eg-three-grid">{industries.map(([title,text],i)=><article className="eg-industry" key={title}><Photo name={['development','team','marketing','planning','review','collaboration'][i]} /><h3>{title}</h3><p>{text}</p></article>)}</div></Section>
    <Section id="engagement-options" eyebrow="WAYS TO WORK TOGETHER" title="Start where your business needs support." text="The scope can be shaped around your existing systems, requirements and level of ongoing support."><div className="eg-three-grid">{[['Discovery & MVP','Define the idea, prioritize features and plan a useful first release.',['Requirements and product scope','User journeys and prototypes','First-release priorities']],['End-to-End Delivery','Coordinate design, engineering, validation and launch.',['Interface and product design','Frontend, backend and integrations','Testing and deployment planning']],['Ongoing Improvement','Improve an existing platform or strengthen your digital marketing.',['Platform enhancements','Content and campaign improvements','Reporting and next-step planning']]].map(([title,text,items],i)=><article className="eg-engagement" key={title}><Photo name={['planning','development','strategy'][i]} /><span className={`eg-step eg-tone-${i}`}>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p><Points items={items} /><div className="eg-actions"><Button variant="outline">Discuss this approach</Button></div></article>)}</div></Section>
    <Section id="home-faq" eyebrow="COMMON QUESTIONS" title="A little clarity before we begin." tone="eg-soft"><div className="eg-faq">{faqs.map(([question,answer])=><details key={question}><summary><span>{question}</span><span className="eg-faq-symbol" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></Section>
    <section id="start-a-project" className="eg-section eg-contact" aria-labelledby="start-a-project-title"><div className="eg-container eg-contact-grid"><div className="eg-copy"><Heading id="start-a-project-title" eyebrow="LET'S BUILD WHAT'S NEXT" title="Have a challenge? Let's move it forward." /><p>Tell us what you want to build, improve, automate or promote. We'll discuss your requirements and a practical way to get started.</p><div className="eg-actions"><Button>Discuss your project</Button><Button to="/services" variant="outline">Review our services</Button></div></div><div className="eg-contact-card"><h3>Connect with Engix</h3><a href="mailto:hello@engix.world"><span><small>Email us</small><strong>hello@engix.world</strong></span></a><a href="tel:+917355985134"><span><small>Call us</small><strong>+91 7355985134</strong></span></a><p>Software engineering, AI and digital marketing, connected around your business.</p></div></div></section>
  </div>;
}
