import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe2,
  LockKeyhole,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';

import api from '../api/axios';
import usePageTitle from '../hooks/usePageTitle';


/* =========================================================
   FORM STATE
========================================================= */

const initialForm = {
  name:'',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  consent: false
};


/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Search,
    title: 'SEO',
    description:
      'Rank on Google and get found by customers already searching for you.',
    details: [
      'Search visibility',
      'Technical SEO',
      'On-page optimization',
      'Local SEO'
    ]
  },

  {
    icon: BarChart3,
    title: 'Paid ads (Meta / Google)',
    description:
      'Drive targeted leads fast with ad campaigns that pay for themselves.',
    details: [
      'Google Search Ads',
      'Meta Ads',
      'Campaign optimization',
      'Conversion tracking'
    ]
  },

  {
    icon: Megaphone,
    title: 'Social media',
    description:
      'Consistent content, community management, and brand presence.',
    details: [
      'Content strategy',
      'Creative planning',
      'Campaign support',
      'Audience engagement'
    ]
  },

  {
    icon: Code2,
    title: 'Website Development',
    description:
      'High-converting landing pages & professional websites built to turn visitors into paying clients.',
    details: [
      'Business websites',
      'High-converting landing pages',
      'Responsive development',
      'Conversion-focused UX'
    ]
  }
];


/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: '1',
    title: 'Free audit call',
    description:
      'We review your current digital presence and find growth gaps — no cost, no obligation.'
  },

  {
    number: '2',
    title: 'Custom strategy',
    description:
      'A plan built for your business, budget, and target customers. Not a template.'
  },

  {
    number: '3',
    title: 'Launch & execute',
    description:
      'We handle everything — ads, content, SEO — so you can focus on running your business.'
  },

  {
    number: '4',
    title: 'Report & scale',
    description:
      'Weekly reports, monthly reviews, and continuous optimization to grow your results.'
  }
];


/* =========================================================
   CLIENT RESULTS
========================================================= */

const results = [
  {
    location: 'Durham, United Kingdom',
    company: 'Spinnovate Limited',
    title:
      'Professional digital platforms for an international technology business.',
    description:
      'Engix supported the development of multiple technology-focused websites and digital experiences, helping present complex scientific and technical businesses through clear, professional and modern web platforms.',
    tags: [
      'Website Development',
      'UI/UX',
      'Digital Presence'
    ]
  },

  {
    location: 'Singapore',
    company: 'International AI Engagement',
    title:
      'AI chatbot and intelligent interviewing experiences.',
    description:
      'Our team worked on conversational AI experiences and AI-supported interviewing workflows designed around practical business use cases and modern customer interaction.',
    tags: [
      'Artificial Intelligence',
      'Automation',
      'Product Engineering'
    ]
  },

  {
    location: 'India',
    company: 'Mr Maintenance',
    title:
      'A complete digital service-booking ecosystem.',
    description:
      'The platform connects customers, administrators and field technicians through booking, assignment, OTP verification, payments and customer feedback workflows.',
    tags: [
      'Mobile Application',
      'Backend',
      'Digital Platform'
    ]
  }
];


/* =========================================================
   FAQs
========================================================= */

const faqs = [
  {
    question: 'How soon will I see results?',
    answer:
      'Results depend on your existing digital presence, competition, advertising budget and selected channels. Our initial optimization approach is generally structured around a 60–90 day period so campaigns can collect meaningful data and improve systematically.'
  },

  {
    question: 'What is the minimum budget needed?',
    answer:
      'There is no single budget suitable for every business. We first understand your objectives, market and customer acquisition goals, then recommend an appropriate strategy and budget.'
  },

  {
    question: 'Do I need to sign a long contract?',
    answer:
      'Engagement terms depend on the scope of work. We explain the recommended strategy, deliverables and commercial structure clearly before an engagement begins.'
  },

  {
    question: 'What industries do you work with?',
    answer:
      'Engix can support startups, SMEs, professional service businesses, technology companies and established organizations looking to improve their digital presence and customer acquisition.'
  },

  {
    question: 'Can Engix handle both marketing and website development?',
    answer:
      'Yes. Engix combines digital marketing with website, landing-page and software development capabilities so campaigns and customer experiences can work together.'
  }
];


/* =========================================================
   REUSABLE ENQUIRY FORM
   SAME API FLOW AS CONTACT FORM
========================================================= */

function EnquiryForm({
  source = 'Solutions Landing Page',
  title = 'Enquire now for free consultation',
  description =
    'Tell us about your business, current marketing and what you would like to improve.'
}) {

  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });


  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        type === 'checkbox'
          ? checked
          : value
    }));
  };


 const handleSubmit = async (event) => {
  event.preventDefault();

  if (loading) {
    return;
  }

  setStatus({
    type: '',
    message: ''
  });


  // REQUIRED FIELD VALIDATION
  if (
    !form.name ||
    !form.company ||
    !form.email ||
    !form.phone ||
    !form.service ||
    !form.message
  ) {
    setStatus({
      type: 'error',
      message:
        'Please complete all required fields before submitting your enquiry.'
    });

    return;
  }


  // CONSENT VALIDATION
  if (!form.consent) {
    setStatus({
      type: 'error',
      message:
        'Please confirm that Engix may use your information to respond to your enquiry.'
    });

    return;
  }


  setLoading(true);


  try {

    const payload = {
      name: form.name.trim(),

      email: form.email.trim(),
      phone: form.phone.trim(),

      company: form.company.trim(),

      role: '',
      country: '',

      inquiryType:
        'New Project / Business Opportunity',

      service: form.service,

      budget: form.budget,

      timeline:
        'To be discussed',

      message: form.message.trim(),

      source,

      page:
        '/solutions'
    };


    console.log(
      'Submitting Engix Solutions enquiry:',
      payload
    );


   const response =
  await api.post(
    '/leads',
    payload
  );


console.log(
  'Engix enquiry response:',
  response.data
);


/*
  GOOGLE TAG MANAGER /
  GOOGLE ADS LEAD CONVERSION
*/

if (
  typeof window !==
  'undefined'
) {
  window.dataLayer =
    window.dataLayer || [];

  window.dataLayer.push({
    event:
      'generate_lead',

    lead_source:
      source,

    service:
      form.service
  });
}


/*
  RESET FORM AFTER SUCCESS
*/

setForm(initialForm);


/*
  REDIRECT TO THANK YOU PAGE
*/

navigate('/thank-you', {
  replace: true,
  state: {
    from: '/solutions',
    service: form.service
  }
});

  } catch (error) {

    console.error(
      'ENGIX SOLUTIONS FORM ERROR:',
      error
    );


    console.error(
      'Backend response:',
      error?.response?.data
    );


    console.error(
      'Status:',
      error?.response?.status
    );


    setStatus({
      type: 'error',

      message:
        error?.response?.data?.message ||
        'We could not send your enquiry. Please try again or contact Engix by phone, WhatsApp or email.'
    });

  } finally {

    setLoading(false);

  }
};


  return (
    <div className="engix-lead-card">

      <div className="engix-lead-heading">

        <span>
          GET STARTED
        </span>

        <h2>
          {title}
        </h2>

        <p>
          {description}
        </p>

      </div>


      <form
        className="engix-lead-form"
        onSubmit={handleSubmit}
      >

       <div className="engix-lead-field">
  <label>
    Full name *
  </label>

  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Your full name"
    autoComplete="name"
    required
  />
</div>


        <div className="engix-lead-field">

          <label>
            Business website *
          </label>

          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your business / company"
            autoComplete="organization"
            required
          />

        </div>


        <div className="engix-lead-row">

          <div className="engix-lead-field">

            <label>
              Email *
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              autoComplete="email"
              required
            />

          </div>


          <div className="engix-lead-field">

            <label>
              Contact number *
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              autoComplete="tel"
              required
            />

          </div>

        </div>


        <div className="engix-lead-field">

          <label>
            What do you need help with? *
          </label>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >

            <option value="">
              Select a service
            </option>

            <option value="SEO">
              Search Engine Optimization
            </option>

            <option value="Google Ads">
              Google Ads
            </option>

            <option value="Meta Ads">
              Meta Ads
            </option>

            <option value="Social Media Marketing">
              Social Media Marketing
            </option>

            <option value="Website Development">
              Website Development
            </option>

            <option value="Landing Page Development">
              High-Converting Landing Page
            </option>

            <option value="Complete Digital Marketing">
              Complete Digital Marketing
            </option>

          </select>

        </div>


        <div className="engix-lead-field">

          <label>
            Monthly budget
          </label>

          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
          >

            <option value="">
              Select a range
            </option>

            <option value="Under ₹25,000">
              Under ₹25,000
            </option>

            <option value="₹25,000 - ₹50,000">
              ₹25,000 – ₹50,000
            </option>

            <option value="₹50,000 - ₹1,00,000">
              ₹50,000 – ₹1,00,000
            </option>

            <option value="₹1,00,000+">
              ₹1,00,000+
            </option>

            <option value="Need Guidance">
              Need guidance
            </option>

          </select>

        </div>


        <div className="engix-lead-field">

          <label>
           Your Meassage *
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            maxLength="2000"
            placeholder="Not enough leads from Google..."
            required
          />

        </div>


        <label className="engix-lead-consent">

          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />

          <span>
            I agree that Engix Tech Private Limited
            may use the information submitted here
            to respond to my enquiry and related
            business communication.
          </span>

        </label>


        {status.message && (
          <div
            className={`engix-lead-status ${status.type}`}
          >

            {status.type ===
              'success' && (
              <CheckCircle2
                size={22}
              />
            )}

            <span>
              {status.message}
            </span>

          </div>
        )}


        <button
          type="submit"
          className="engix-lead-submit"
          disabled={loading}
        >

          {loading
            ? 'Sending enquiry...'
            : 'Enquire now for free consultation'
          }

          {!loading && (
            <ArrowRight
              size={22}
            />
          )}

        </button>


        <div className="engix-lead-private">

          <LockKeyhole
            size={18}
          />

          <span>
            We never share your information.
            No spam.
          </span>

        </div>

      </form>

    </div>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function Solutions() {
  usePageTitle(
    'Digital Marketing & Growth Solutions'
  );


  return (
    <>

      <main className="engix-ads-page">


       

        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="engix-ads-header">

          <div className="engix-ads-shell engix-ads-header-inner">

            <Link
              to="/"
              className="engix-ads-logo"
            >
            <span className="engix-navbar-logo-icon">
  <img
    src="/logo.png"
    alt="Engix logo"
    className="engix-navbar-logo-image"
  />
</span>

              <strong>
                Engix
              </strong>
            </Link>


            <nav className="engix-ads-nav">

              <a href="#services">
                Services
              </a>

              <a href="#process">
                How it works
              </a>

              <a href="#results">
                Client results
              </a>

              <a href="#faq">
                FAQ
              </a>

            </nav>


            <a
              href="#hero-form"
              className="engix-ads-header-button"
            >
              Free Consultation

              <ArrowUpRight
                size={20}
              />
            </a>

          </div>

        </header>



        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="engix-ads-hero">

          <div className="engix-ads-shell">

            <div className="engix-ads-hero-grid">


              {/* HERO LEFT */}

              <div className="engix-ads-hero-copy">

                <div className="engix-ads-audit-badge">

                  <Sparkles
                    size={21}
                  />

                  <span>
                    Free audit — limited slots
                  </span>

                </div>


                <h1>
                  Grow your business with

                  <span>
                    {' '}results-driven{' '}
                  </span>

                  digital marketing
                </h1>


                <p className="engix-ads-hero-description">
                  We help local businesses get more leads,
                  more calls, and more customers — with SEO,
                  paid ads, social media that actually converts.
                    <br />
  <span>
    From strategy to execution, we focus on measurable
    growth that turns your marketing investment into
    real business opportunities.
  </span>
                </p>


                <div className="engix-ads-hero-buttons">

                  <a
                    href="#hero-form"
                    className="engix-ads-primary-button"
                  >
                    Get a free consultation 

                    <ArrowDown
                      size={23}
                    />
                  </a>


                

                </div>


                <div className="engix-ads-hero-points">

                  <div>
                    <Check size={22} />

                    <span>
                      No long-term contracts
                    </span>
                  </div>


                  <div>
                    <Check size={22} />

                    <span>
                      Results in 60–90 days
                    </span>
                  </div>


                  <div>
                    <Check size={22} />

                    <span>
                      100% transparent reporting
                    </span>
                  </div>

                </div>


                <div className="engix-ads-direct-contact">

                  <a href="tel:+917355985134">
                    <Phone size={22} />

                    +91 7355985134
                  </a>


                  <a
                    href="https://wa.me/917355985134"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={22} />

                    WhatsApp us
                  </a>

                </div>

              </div>



              {/* HERO FORM */}

              <div
                id="hero-form"
                className="engix-hero-form-wrap"
              >

                <EnquiryForm
                  source="Solutions Hero Form"
                  title="Enquire now for free consultation"
                  description="Tell us about your business, current marketing and what you would like to improve."
                />

              </div>

            </div>

          </div>

        </section>



      

       {/* =====================================================
    CLIENT & DELIVERY PROOF
====================================================== */}

<section className="engix-ads-proof">

  <div className="engix-ads-shell">

    <div className="engix-ads-proof-grid">

      {/* EXPERIENCE */}

      <article>
        <strong>
          Since 2019
        </strong>

        <span>
          Building digital solutions
        </span>
      </article>


      {/* PROJECTS */}

      <article>
        <strong>
          300+
        </strong>

        <span>
          Projects delivered
        </span>
      </article>


      {/* DOMESTIC */}

      <article>
        <strong>
          Pan-India
        </strong>

        <span>
          Domestic project experience
        </span>
      </article>


      {/* INTERNATIONAL */}

      <article>
        <strong>
          Global
        </strong>

        <span>
          International project experience
        </span>
      </article>

    </div>

  </div>

</section>



        {/* =====================================================
            PROFESSIONAL IMAGE
        ====================================================== */}

        <section className="engix-ads-intro-image">

          <div className="engix-ads-shell">

            <div className="engix-ads-intro-image-wrap">

              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1900&q=90"
                alt="Professional business strategy meeting"
              />

              <div className="engix-ads-intro-overlay">

                <span>
                  STRATEGY + EXECUTION
                </span>

                <strong>
                  Built around your
                  business and your
                  customers.
                </strong>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section
          className="engix-ads-services"
          id="services"
        >

          <div className="engix-ads-shell">

            <div className="engix-ads-heading">

              <span>
                WHAT WE DO
              </span>

              <h2>
                Everything your brand needs
                to grow online
              </h2>

              <p>
                Pick one service or let us build
                the full stack for you.
              </p>

            </div>


            <div className="engix-ads-services-grid">

              {services.map((service) => {
                const Icon =
                  service.icon;

                return (
                  <article
                    key={service.title}
                  >

                    <div className="engix-ads-service-icon">
                      <Icon
                        size={34}
                        strokeWidth={1.8}
                      />
                    </div>


                    <h3>
                      {service.title}
                    </h3>


                    <p className="engix-service-description">
                      {service.description}
                    </p>


                    <div className="engix-ads-service-points">

                      {service.details.map(
                        (item) => (
                          <span key={item}>

                            <Check
                              size={20}
                              strokeWidth={2}
                            />

                            {item}

                          </span>
                        )
                      )}

                    </div>


                    <a href="#bottom-enquiry">
                      Enquire now

                      <ArrowUpRight
                        size={20}
                      />
                    </a>

                  </article>
                );
              })}

            </div>

          </div>

        </section>



        {/* =====================================================
            WEBSITE DEVELOPMENT
        ====================================================== */}

        <section className="engix-ads-web">

          <div className="engix-ads-shell">

            <div className="engix-ads-web-grid">

              <div className="engix-ads-web-image">

                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1900&q=90"
                  alt="Professional analytics and digital performance dashboard"
                />

              </div>


              <div className="engix-ads-web-copy">

                <span>
                  WEBSITE DEVELOPMENT
                </span>


                <h2>
                  High-converting landing pages
                  & websites
                </h2>


                <p>
                  Your advertising can only perform
                  as well as the experience customers
                  reach after clicking an ad.
                </p>


                <p>
                  Engix develops professional websites
                  and high-converting landing pages
                  designed around clear messaging,
                  mobile usability, business credibility
                  and conversion-focused customer journeys.
                </p>


                <div>

                  <span>
                    <CheckCircle2 size={23} />
                    Mobile responsive
                  </span>

                  <span>
                    <CheckCircle2 size={23} />
                    Conversion focused
                  </span>

                  <span>
                    <CheckCircle2 size={23} />
                    Professional UI/UX
                  </span>

                  <span>
                    <CheckCircle2 size={23} />
                    Analytics ready
                  </span>

                </div>


                <a href="#bottom-enquiry">
                  Discuss your website

                  <ArrowRight size={21} />
                </a>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section
          className="engix-ads-process"
          id="process"
        >

          <div className="engix-ads-shell">

            <div className="engix-ads-heading">

              <span>
                HOW IT WORKS
              </span>

              <h2>
                Start getting leads in
                4 simple steps
              </h2>

            </div>


            <div className="engix-ads-process-list">

              {process.map((step) => (
                <article
                  key={step.number}
                >

                  <span>
                    {step.number}
                  </span>


                  <div>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>



        {/* =====================================================
            CLIENT RESULTS
        ====================================================== */}

        <section
          className="engix-ads-results"
          id="results"
        >

          <div className="engix-ads-shell">

            <div className="engix-ads-heading">

              <span>
                CLIENT RESULTS
              </span>

              <h2>
                Real businesses,
                real digital work
              </h2>

              <p>
                Selected domestic and international
                technology engagements delivered
                by Engix.
              </p>

            </div>


            <div className="engix-ads-results-grid">

              {results.map((result) => (
                <article
                  key={result.title}
                >

                  <div className="engix-ads-result-location">
                    <Globe2 size={22} />

                    {result.location}
                  </div>


                  <span className="engix-ads-result-company">
                    {result.company}
                  </span>


                  <h3>
                    {result.title}
                  </h3>


                  <p>
                    {result.description}
                  </p>


                  <div className="engix-ads-result-tags">

                    {result.tags.map(
                      (tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      )
                    )}

                  </div>

                </article>
              ))}

            </div>


            <Link
              to="/portfolio"
              className="engix-ads-result-link"
            >
              Explore selected Engix work

              <ArrowUpRight size={21} />
            </Link>

          </div>

        </section>



        {/* =====================================================
            WHY ENGIX
        ====================================================== */}

        <section className="engix-ads-why">

          <div className="engix-ads-shell">

            <div className="engix-ads-why-grid">

              <div>

                <span className="engix-small-heading">
                  WHY ENGIX
                </span>

                <h2>
                  Built around trust,
                  growth and real results.
                </h2>

              </div>


              <div className="engix-ads-why-list">

                <article>

                  <TrendingUp
                    size={33}
                  />

                  <div>

                    <h3>
                      Result-Driven Approach
                    </h3>

                    <p>
                      We focus on real,
                      measurable outcomes that
                      drive consistent business
                      growth and long-term value.
                    </p>

                  </div>

                </article>


                <article>

                  <Users
                    size={33}
                  />

                  <div>

                    <h3>
                      Transparent Communication
                    </h3>

                    <p>
                      We keep communication clear,
                      honest, and frequent so you
                      always know what is happening.
                    </p>

                  </div>

                </article>


                <article>

                  <Code2
                    size={33}
                  />

                  <div>

                    <h3>
                      Marketing + Technology
                    </h3>

                    <p>
                      Advertising, websites,
                      landing pages, software and
                      tracking can work together
                      through one delivery team.
                    </p>

                  </div>

                </article>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            PROFESSIONAL PARTNERSHIP IMAGE
        ====================================================== */}

        <section className="engix-ads-partnership">

          <div className="engix-ads-shell">

            <div className="engix-ads-partnership-grid">

              <div className="engix-ads-partnership-copy">

                <span className="engix-small-heading">
                  A CONNECTED PARTNER
                </span>


                <h2>
                  Strategy, marketing and
                  technology working together.
                </h2>


                <p>
                  Engix combines marketing thinking
                  with design and technology
                  execution so businesses do not
                  have to coordinate separate teams
                  for every part of their digital
                  customer journey.
                </p>


                <a href="#bottom-enquiry">
                  Start a conversation

                  <ArrowRight size={21} />
                </a>

              </div>


              <div className="engix-ads-partnership-image">

                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1900&q=90"
                  alt="Professional technology team collaborating"
                />

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            SECOND ENQUIRY FORM
        ====================================================== */}

        <section
          className="engix-ads-bottom-enquiry"
          id="bottom-enquiry"
        >

          <div className="engix-ads-shell">

            <div className="engix-ads-bottom-grid">

              <div className="engix-ads-bottom-copy">

                <span className="engix-small-heading">
                  GET STARTED
                </span>


                <h2>
                  Claim your free website audit
                </h2>


                <p>
                  We'll review your site, ads,
                  SEO and digital customer journey
                  and help identify where you may
                  be losing opportunities.
                </p>


                <p>
                  Start with a straightforward
                  conversation about your current
                  position and what you want your
                  business to achieve.
                </p>


                <div className="engix-ads-bottom-contact">

                  <a href="tel:+917355985134">

                    <Phone size={26} />

                    <div>
                      <small>
                        CALL US
                      </small>

                      <strong>
                        +91 7355985134
                      </strong>
                    </div>

                  </a>


                  <a
                    href="https://wa.me/917355985134"
                    target="_blank"
                    rel="noreferrer"
                  >

                    <MessageCircle size={26} />

                    <div>
                      <small>
                        WHATSAPP
                      </small>

                      <strong>
                        Start a conversation
                      </strong>
                    </div>

                  </a>


                  <a href="mailto:hello@engix.world">

                    <Mail size={26} />

                    <div>
                      <small>
                        EMAIL
                      </small>

                      <strong>
                        hello@engix.world
                      </strong>
                    </div>

                  </a>

                </div>

              </div>


              <EnquiryForm
                source="Solutions Bottom Form"
                title="Enquire now for free consultation"
                description="Tell us what you want to improve and our team will help you understand the next practical step."
              />

            </div>

          </div>

        </section>



        {/* =====================================================
            FAQ
        ====================================================== */}

        <section
          className="engix-ads-faq"
          id="faq"
        >

          <div className="engix-ads-shell">

            <div className="engix-ads-faq-grid">

              <div>

                <span className="engix-small-heading">
                  COMMON QUESTIONS
                </span>

                <h2>
                  Things people usually ask
                </h2>

              </div>


              <div className="engix-ads-faq-list">

                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                  >

                    <summary>

                      <span>
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={24}
                      />

                    </summary>


                    <p>
                      {faq.answer}
                    </p>

                  </details>
                ))}

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="engix-ads-final">

          <div className="engix-ads-shell">

            <div className="engix-ads-final-inner">

              <span className="engix-small-heading">
                GET STARTED
              </span>


              <h2>
                Ready to get more customers?
              </h2>


              <p>
                Book a free 15-min call or
                drop us a WhatsApp —
                no pressure, just clarity.
              </p>


              <div>

                <a
                  href="#bottom-enquiry"
                  className="engix-ads-final-primary"
                >
                  Book a free call

                  <ArrowRight size={22} />
                </a>


                <a
                  href="https://wa.me/917355985134"
                  target="_blank"
                  rel="noreferrer"
                  className="engix-ads-final-secondary"
                >
                  <MessageCircle size={22} />

                  WhatsApp us
                </a>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            PREMIUM LANDING PAGE FOOTER
        ====================================================== */}

        <footer className="engix-ads-footer">

          <div className="engix-ads-shell">


           


            {/* =================================================
                MAIN FOOTER
            ================================================== */}

            <div className="engix-ads-footer-main">


              {/* BRAND */}

              <div className="engix-ads-footer-brand">

                <Link
                  to="/"
                  className="engix-ads-footer-logo"
                  aria-label="Engix Home"
                >

                  <span className="engix-ads-footer-logo-icon">

                    <img
                      src="/logo.png"
                      alt="Engix"
                      className="engix-ads-footer-logo-image"
                    />

                  </span>


                  <strong className="engix-ads-footer-logo-name">
                    Engix
                  </strong>

                </Link>


                <p className="engix-ads-footer-description">
                  Engix Tech Private Limited is a digital technology
                  company helping businesses strengthen their online
                  presence through performance marketing, professional
                  websites, software engineering, AI solutions and
                  scalable digital products.
                </p>


                <div className="engix-ads-footer-trust">

                  <span>
                    <MapPin
                      size={17}
                      strokeWidth={1.8}
                    />

                    India based
                  </span>


                  <span>
                    <Globe2
                      size={17}
                      strokeWidth={1.8}
                    />

                    Working globally
                  </span>


                  <span>
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.8}
                    />

                    Business-focused delivery
                  </span>

                </div>

              </div>



              {/* SERVICES */}

              <div className="engix-ads-footer-column">

                <span className="engix-ads-footer-column-title">
                  Services
                </span>


                <a href="#services">
                  Search Engine Optimization
                </a>


                <a href="#services">
                  Google Ads
                </a>


                <a href="#services">
                  Meta Ads
                </a>


                <a href="#services">
                  Social Media Marketing
                </a>


                <a href="#services">
                  Website Development
                </a>


                <Link to="/services">
                  Explore all services
                </Link>

              </div>



              {/* COMPANY */}

              <div className="engix-ads-footer-column">

                <span className="engix-ads-footer-column-title">
                  Company
                </span>


                <Link to="/about">
                  About Engix
                </Link>


                <Link to="/portfolio">
                  Selected Projects
                </Link>


                <Link to="/contact">
                  Contact
                </Link>


                <Link to="/privacy">
                  Privacy Policy
                </Link>


                <Link to="/terms">
                  Terms & Conditions
                </Link>

              </div>



              {/* CONNECT */}

              <div className="engix-ads-footer-column engix-ads-footer-contact">

                <span className="engix-ads-footer-column-title">
                  Connect
                </span>


                <a href="mailto:hello@engix.world">

                  <span className="engix-ads-footer-contact-icon">
                    <Mail
                      size={19}
                      strokeWidth={1.8}
                    />
                  </span>


                  <span className="engix-ads-footer-contact-copy">

                    <small>
                      EMAIL
                    </small>

                    <strong>
                      hello@engix.world
                    </strong>

                  </span>

                </a>


                <a href="tel:+917355985134">

                  <span className="engix-ads-footer-contact-icon">
                    <Phone
                      size={19}
                      strokeWidth={1.8}
                    />
                  </span>


                  <span className="engix-ads-footer-contact-copy">

                    <small>
                      CALL
                    </small>

                    <strong>
                      +91 7355985134
                    </strong>

                  </span>

                </a>


                <a
                  href="https://wa.me/917355985134"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span className="engix-ads-footer-contact-icon">
                    <MessageCircle
                      size={19}
                      strokeWidth={1.8}
                    />
                  </span>


                  <span className="engix-ads-footer-contact-copy">

                    <small>
                      WHATSAPP
                    </small>

                    <strong>
                      Start a conversation
                    </strong>

                  </span>

                </a>


              

              </div>

            </div>



           



            {/* =================================================
                FOOTER BOTTOM
            ================================================== */}

            <div className="engix-ads-footer-bottom">

              <p>
                © {new Date().getFullYear()} Engix Tech Private Limited.
                All rights reserved.
              </p>


              <div className="engix-ads-footer-availability">

                <span className="engix-ads-footer-status-dot" />

                <span>
                  Available for new business enquiries
                </span>

              </div>


              <div className="engix-ads-footer-bottom-links">

                <Link to="/privacy">
                  Privacy
                </Link>

                <Link to="/terms">
                  Terms
                </Link>

                <a href="mailto:hello@engix.world">
                  Email
                </a>

              </div>

            </div>


          </div>

        </footer>

      </main>



      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 76px;
        }


        body {
          margin: 0;
        }


        .engix-ads-page {
          --ink: #101214;
          --text: #292d31;
          --muted: #5d636a;
          --line: #dedfe2;

          --blue: #dcecff;
          --blue-deep: #245986;

          --light: #fafaf8;
          --green: #177837;

          background: #ffffff;
          color: var(--ink);

          overflow-x: hidden;
        }


        .engix-ads-shell {
          width:
            min(
              1240px,
              calc(100% - 56px)
            );

          margin: 0 auto;
        }

        //logo
        .engix-navbar-logo {
  width: max-content;

  display: inline-flex;
  align-items: center;

  gap: 10px;

  text-decoration: none;

  flex-shrink: 0;
}


/* LOGO CONTAINER */

.engix-navbar-logo-icon {
  width: 52px;
  height: 52px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  overflow: hidden;

  box-sizing: border-box;

  border-radius: 10px;

  background: transparent;
}


/* ACTUAL LOGO */

.engix-navbar-logo-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;
  object-position: center;

  max-width: 100%;
  max-height: 100%;
}


/* TABLET */

@media (max-width: 900px) {

  .engix-navbar-logo-icon {
    width: 48px;
    height: 48px;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .engix-navbar-logo {
    gap: 8px;
  }

  .engix-navbar-logo-icon {
    width: 44px;
    height: 44px;
  }

}


/* VERY SMALL MOBILE */

@media (max-width: 380px) {

  .engix-navbar-logo-icon {
    width: 40px;
    height: 40px;
  }

}



        /* =====================================================
           ALL SMALL SECTION LABELS
        ====================================================== */

        .engix-small-heading,
        .engix-ads-heading > span,
        .engix-lead-heading > span,
        .engix-ads-web-copy > span {

          display: inline-block;

          color: var(--blue-deep);

          font-size: 15px;

          line-height: 1.2;

          font-weight: 800;

          letter-spacing: .09em;

          text-transform: uppercase;
        }



        /* =====================================================
           HEADER
        ====================================================== */

        .engix-ads-header {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          z-index: 9999;

          background:
            rgba(255,255,255,.97);

          border-bottom:
            1px solid var(--line);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          box-shadow:
            0 5px 20px rgba(0,0,0,.025);
        }


        .engix-ads-header-inner {
          min-height: 72px;

          display: grid;

          grid-template-columns:
            1fr auto 1fr;

          align-items: center;

          gap: 32px;
        }


        .engix-ads-logo {
          width: max-content;

          display: flex;

          align-items: center;

          gap: 10px;

          color: var(--ink);

          text-decoration: none;
        }


        .engix-ads-logo span {
          font-size: 39px;
          line-height: 1;
        }


        .engix-ads-logo strong {
          font-size: 25px;

          letter-spacing: -.045em;
        }


        .engix-ads-nav {
          display: flex;

          align-items: center;

          gap: 34px;
        }


        .engix-ads-nav a {
          color: #50555b;

          text-decoration: none;

          font-size: 15px;

          font-weight: 650;
        }


        .engix-ads-header-button {
          justify-self: end;

          min-height: 47px;

          padding: 0 20px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          border-radius: 999px;

          background: var(--ink);

          color: white;

          text-decoration: none;

          font-size: 14px;

          font-weight: 750;
        }



        /* =====================================================
           HERO
           
           HEADER = 72px
           HERO TOP = 82px
           ONLY ABOUT 10px EXTRA GAP
           
           IMPORTANT:
           THIS HERO BACKGROUND IMAGE SHOULD BE
           RESERVED ONLY FOR /solutions
        ====================================================== */

        .engix-ads-hero {
          position: relative;

          padding:
            82px 0 76px;

          background:

            linear-gradient(
              90deg,
              rgba(255,255,255,.97) 0%,
              rgba(255,255,255,.94) 40%,
              rgba(255,255,255,.88) 67%,
              rgba(255,255,255,.84) 100%
            ),

            url(
              'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2200&q=92'
            );

          background-size: cover;

          background-position: center;

          background-repeat: no-repeat;

          border-bottom:
            1px solid rgba(17,20,24,.06);
        }


        .engix-ads-hero::before {
          content: '';

          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,.15),
              rgba(250,250,247,.3)
            );
        }


        .engix-ads-hero > .engix-ads-shell {
          position: relative;

          z-index: 2;
        }


        .engix-ads-hero-grid {
          display: grid;

          grid-template-columns:
            minmax(0,1.04fr)
            minmax(430px,.76fr);

          gap: 68px;

          align-items: start;
        }


        .engix-ads-hero-copy {
          max-width: 790px;

          padding-top: 7px;
        }


        .engix-ads-audit-badge {
          width: max-content;

          max-width: 100%;

          padding:
            11px 18px;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          border:
            1px solid #91bee6;

          border-radius: 999px;

          background:
            rgba(220,236,255,.96);

          color: var(--blue-deep);

          font-size: 16px;

          line-height: 1.1;

          font-weight: 700;

          box-shadow:
            0 8px 28px
            rgba(36,89,134,.08);
        }


        .engix-ads-hero h1 {
          max-width: 870px;

          margin:
            80px 0 0;

          font-size:
            clamp(
              3.7rem,
              5.65vw,
              6rem
            );

          line-height: .99;

          letter-spacing: -.058em;

          font-weight: 560;
        }


        .engix-ads-hero h1 span {
          color: var(--blue-deep);
        }


        .engix-ads-hero-description {
          max-width: 760px;

          margin:
            62px 0 0;

          color: #454b52;

          font-size:
            clamp(
              1.3rem,
              1.7vw,
              1.55rem
            );

          line-height: 1.65;

          font-weight: 400;
        }


        .engix-ads-hero-buttons {
          display: flex;

          flex-wrap: wrap;

          gap: 13px;

          margin-top: 46px;
        }


        .engix-ads-primary-button,
        .engix-ads-secondary-button {
          min-height: 58px;

          padding:
            0 23px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 16px;

          font-weight: 720;

          transition:
            transform .2s ease,
            box-shadow .2s ease;
        }


        .engix-ads-primary-button {
          background: var(--ink);

          color: white;

          box-shadow:
            0 12px 26px
            rgba(16,18,20,.15);
        }


        .engix-ads-secondary-button {
          border:
            1px solid #c7cacf;

          background:
            rgba(255,255,255,.92);

          color: var(--ink);
        }


        .engix-ads-primary-button:hover,
        .engix-ads-secondary-button:hover {
          transform:
            translateY(-2px);
        }


        .engix-ads-hero-points {
          display: flex;

          flex-wrap: wrap;

          gap:
            16px 25px;

          margin-top: 44px;
        }


        .engix-ads-hero-points > div {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #3f454b;

          font-size: 16px;

          font-weight: 500;
        }


        .engix-ads-hero-points svg {
          color: var(--green);

          flex-shrink: 0;
        }


        .engix-ads-direct-contact {
          display: flex;

          flex-wrap: wrap;

          gap:
            14px 23px;

          margin-top: 36px;
        }


        .engix-ads-direct-contact a {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: #454a51;

          text-decoration: none;

          font-size: 15px;

          font-weight: 650;
        }



        /* =====================================================
           HERO FORM
        ====================================================== */

        .engix-hero-form-wrap {
          scroll-margin-top: 95px;
        }


        .engix-lead-card {
          padding: 31px;

          border:
            1px solid rgba(199,202,207,.9);

          border-radius: 18px;

          background:
            rgba(255,255,255,.97);

          box-shadow:
            0 25px 70px
            rgba(18,24,30,.11);

          backdrop-filter:
            blur(12px);

          -webkit-backdrop-filter:
            blur(12px);
        }


        .engix-lead-heading > span {
          font-size: 14px;
        }


        .engix-lead-heading h2 {
          margin:
            10px 0 8px;

          font-size:
            clamp(
              2rem,
              2.7vw,
              2.75rem
            );

          line-height: 1.05;

          letter-spacing: -.045em;
        }


        .engix-lead-heading p {
          margin: 0;

          color: #5d6269;

          font-size: 16px;

          line-height: 1.65;
        }


        .engix-lead-row {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );

          gap: 13px;
        }


        .engix-lead-field {
          margin-top: 17px;
        }


        .engix-lead-field label {
          display: block;

          margin-bottom: 7px;

          color: #353a40;

          font-size: 14px;

          font-weight: 700;
        }


        .engix-lead-field input,
        .engix-lead-field select,
        .engix-lead-field textarea {
          width: 100%;

          box-sizing: border-box;

          border:
            1px solid #cfd2d6;

          border-radius: 8px;

          outline: 0;

          background: #ffffff;

          color: var(--ink);

          font-family: inherit;

          font-size: 15px;

          transition:
            border-color .2s ease,
            box-shadow .2s ease;
        }


        .engix-lead-field input,
        .engix-lead-field select {
          min-height: 50px;

          padding:
            0 13px;
        }


        .engix-lead-field textarea {
          min-height: 108px;

          padding: 13px;

          resize: vertical;
        }


        .engix-lead-field input:focus,
        .engix-lead-field select:focus,
        .engix-lead-field textarea:focus {
          border-color:
            #72a6d7;

          box-shadow:
            0 0 0 3px
            rgba(50,112,170,.08);
        }


        .engix-lead-consent {
          margin-top: 16px;

          display: grid;

          grid-template-columns:
            18px 1fr;

          gap: 9px;

          align-items: start;

          color: #5f646b;

          font-size: 12px;

          line-height: 1.6;
        }


        .engix-lead-consent input {
          margin-top: 2px;
        }


        .engix-lead-status {
          margin-top: 15px;

          padding:
            13px 14px;

          display: flex;

          align-items: flex-start;

          gap: 8px;

          border-radius: 7px;

          font-size: 13px;

          line-height: 1.55;
        }


        .engix-lead-status.success {
          background:
            #e6f5e9;

          color:
            #235e2c;
        }


        .engix-lead-status.error {
          background:
            #fff0e9;

          color:
            #813e29;
        }


        .engix-lead-submit {
          width: 100%;

          min-height: 56px;

          margin-top: 20px;

          padding:
            0 15px;

          border: 0;

          border-radius: 8px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          background: var(--ink);

          color: white;

          font-family: inherit;

          font-size: 15px;

          font-weight: 750;

          cursor: pointer;
        }


        .engix-lead-submit:disabled {
          opacity: .6;

          cursor: not-allowed;
        }


        .engix-lead-private {
          margin-top: 13px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          color: #686d74;

          font-size: 12px;
        }



        /* =====================================================
           PROOF
        ====================================================== */

        .engix-ads-proof {
          padding:
            0 0 75px;

          background:
            #fafaf7;
        }


        .engix-ads-proof-grid {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          border:
            1px solid var(--line);

          border-radius: 18px;

          background:
            white;

          overflow: hidden;
        }


        .engix-ads-proof-grid article {
          min-height: 155px;

          padding: 27px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          border-right:
            1px solid var(--line);
        }


        .engix-ads-proof-grid article:last-child {
          border-right: 0;
        }


        .engix-ads-proof-grid strong {
          font-size:
            clamp(
              2rem,
              3vw,
              3rem
            );

          line-height: 1;

          letter-spacing: -.04em;
        }


        .engix-ads-proof-grid span {
          margin-top: 10px;

          color: #4e545a;

          font-size: 16px;

          line-height: 1.4;
        }



        /* =====================================================
           PROFESSIONAL IMAGE
        ====================================================== */

        .engix-ads-intro-image {
          padding:
            25px 0 85px;

          background: white;
        }


        .engix-ads-intro-image-wrap {
          height: 520px;

          position: relative;

          overflow: hidden;

          border-radius: 20px;
        }


        .engix-ads-intro-image-wrap img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;
        }


        .engix-ads-intro-image-wrap::after {
          content: '';

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(10,14,18,.72),
              rgba(10,14,18,.05)
            );
        }


        .engix-ads-intro-overlay {
          position: absolute;

          z-index: 2;

          left: 45px;

          bottom: 42px;

          max-width: 530px;

          color: white;
        }


        .engix-ads-intro-overlay span {
          display: block;

          margin-bottom: 13px;

          font-size: 15px;

          font-weight: 800;

          letter-spacing: .09em;
        }


        .engix-ads-intro-overlay strong {
          display: block;

          font-size:
            clamp(
              2.8rem,
              4.3vw,
              4.7rem
            );

          line-height: .98;

          letter-spacing: -.05em;

          font-weight: 560;
        }



        /* =====================================================
           SHARED SECTION HEADINGS
        ====================================================== */

        .engix-ads-heading {
          max-width: 880px;

          margin-bottom: 50px;
        }


        .engix-ads-heading h2 {
          margin:
            12px 0 11px;

          font-size:
            clamp(
              2.8rem,
              4.6vw,
              5rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-heading p {
          max-width: 760px;

          margin: 0;

          color: #565c63;

          font-size: 19px;

          line-height: 1.65;
        }



        /* =====================================================
           SERVICES
           
           THIS IS THE TYPOGRAPHY YOU WERE
           SPECIFICALLY TALKING ABOUT.
        ====================================================== */

        .engix-ads-services {
          padding:
            105px 0;

          background:
            white;
        }


        .engix-ads-services-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 18px;
        }


        .engix-ads-services-grid article {
          min-height: 410px;

          padding: 34px;

          display: flex;

          flex-direction: column;

          border:
            1px solid var(--line);

          border-radius: 18px;

          background: white;

          transition:
            transform .22s ease,
            box-shadow .22s ease;
        }


        .engix-ads-services-grid article:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 20px 50px
            rgba(0,0,0,.05);
        }


        .engix-ads-service-icon {
          width: 59px;

          height: 59px;

          display: grid;

          place-items: center;

          border-radius: 12px;

          background:
            var(--blue);

          color:
            var(--blue-deep);
        }


        .engix-ads-services-grid h3 {
          margin:
            28px 0 14px;

          font-size:
            clamp(
              2rem,
              2.7vw,
              2.8rem
            );

          line-height: 1.05;

          letter-spacing: -.04em;
        }


        /*
          MAIN SERVICE DESCRIPTION

          EXAMPLE:
          "Rank on Google and get found by
          customers already searching for you."
        */

        .engix-service-description,
        .engix-ads-services-grid article > p {
          max-width: 590px;

          margin: 0;

          color: #50565d;

          font-size: 20px;

          line-height: 1.62;

          font-weight: 400;
        }


        /*
          SMALL SERVICE BENEFITS

          EXAMPLES:
          Search visibility
          Technical SEO
          On-page optimization
          Local SEO
        */

        .engix-ads-service-points {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap:
            13px 18px;

          margin-top: 28px;
        }


        .engix-ads-service-points span {
          display: flex;

          align-items: center;

          gap: 9px;

          color: #444a50;

          font-size: 17px;

          line-height: 1.5;

          font-weight: 500;
        }


        .engix-ads-service-points svg {
          color: var(--green);

          flex-shrink: 0;
        }


        .engix-ads-services-grid article > a {
          width: max-content;

          margin-top: auto;

          padding-top: 31px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: var(--ink);

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;
        }



        /* =====================================================
           WEBSITE DEVELOPMENT
        ====================================================== */

        .engix-ads-web {
          padding:
            20px 0 105px;

          background:
            white;
        }


        .engix-ads-web-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          border:
            1px solid var(--line);

          border-radius: 20px;

          overflow: hidden;
        }


        .engix-ads-web-image {
          min-height: 570px;
        }


        .engix-ads-web-image img {
          width: 100%;

          height: 100%;

          min-height: 570px;

          display: block;

          object-fit: cover;
        }


        .engix-ads-web-copy {
          padding:
            59px 50px;

          background:
            var(--light);
        }


        .engix-ads-web-copy > span {
          font-size: 15px;
        }


        .engix-ads-web-copy h2 {
          margin:
            15px 0 22px;

          font-size:
            clamp(
              2.7rem,
              4vw,
              4.45rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-web-copy > p {
          color: #50565c;

          font-size: 19px;

          line-height: 1.7;

          font-weight: 400;
        }


        .engix-ads-web-copy > div {
          display: grid;

          gap: 14px;

          margin-top: 27px;
        }


        .engix-ads-web-copy > div span {
          display: flex;

          align-items: center;

          gap: 10px;

          color: #444a50;

          font-size: 17px;

          line-height: 1.5;

          font-weight: 500;
        }


        .engix-ads-web-copy > div svg {
          color: var(--green);

          flex-shrink: 0;
        }


        .engix-ads-web-copy > a {
          width: max-content;

          min-height: 54px;

          margin-top: 31px;

          padding:
            0 21px;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          border-radius: 8px;

          background: var(--ink);

          color: white;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;
        }



        /* =====================================================
           PROCESS
        ====================================================== */

        .engix-ads-process {
          padding:
            105px 0;

          background:
            var(--light);
        }


        .engix-ads-process-list {
          border-top:
            1px solid var(--line);
        }


        .engix-ads-process-list article {
          padding:
            31px 0;

          display: grid;

          grid-template-columns:
            64px 1fr;

          gap: 22px;

          align-items: start;

          border-bottom:
            1px solid var(--line);
        }


        .engix-ads-process-list article > span {
          width: 47px;

          height: 47px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: var(--blue);

          color: var(--blue-deep);

          font-size: 17px;

          font-weight: 750;
        }


        .engix-ads-process-list h3 {
          margin: 0;

          font-size: 24px;

          line-height: 1.3;
        }


        .engix-ads-process-list p {
          max-width: 900px;

          margin:
            9px 0 0;

          color: #50565d;

          font-size: 19px;

          line-height: 1.65;

          font-weight: 400;
        }



        /* =====================================================
           CLIENT RESULTS
        ====================================================== */

        .engix-ads-results {
          padding:
            105px 0;

          background:
            white;
        }


        .engix-ads-results-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 18px;
        }


        .engix-ads-results-grid article {
          min-height: 430px;

          padding: 32px;

          display: flex;

          flex-direction: column;

          border:
            1px solid var(--line);

          border-radius: 18px;

          background: white;
        }


        .engix-ads-result-location {
          display: flex;

          align-items: center;

          gap: 8px;

          color: var(--blue-deep);

          font-size: 15px;

          font-weight: 700;
        }


        .engix-ads-result-company {
          margin-top: 31px;

          color: #676d73;

          font-size: 14px;

          line-height: 1.3;

          font-weight: 800;

          letter-spacing: .07em;

          text-transform: uppercase;
        }


        .engix-ads-results-grid h3 {
          margin:
            13px 0 16px;

          font-size: 29px;

          line-height: 1.08;

          letter-spacing: -.035em;
        }


        .engix-ads-results-grid p {
          margin: 0;

          color: #50565d;

          font-size: 18px;

          line-height: 1.68;

          font-weight: 400;
        }


        .engix-ads-result-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;

          margin-top: auto;

          padding-top: 31px;
        }


        .engix-ads-result-tags span {
          padding:
            8px 11px;

          background:
            #f3f4f5;

          color: #4d5359;

          font-size: 14px;
        }


        .engix-ads-result-link {
          width: max-content;

          margin-top: 30px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: var(--ink);

          text-decoration: none;

          font-size: 16px;

          font-weight: 700;
        }



        /* =====================================================
           WHY ENGIX
        ====================================================== */

        .engix-ads-why {
          padding:
            105px 0;

          background:
            var(--light);
        }


        .engix-ads-why-grid {
          display: grid;

          grid-template-columns:
            .9fr 1.1fr;

          gap: 86px;
        }


        .engix-ads-why-grid h2 {
          max-width: 610px;

          margin:
            15px 0 0;

          font-size:
            clamp(
              2.9rem,
              4.6vw,
              5rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-why-list {
          border-top:
            1px solid var(--line);
        }


        .engix-ads-why-list article {
          padding:
            29px 0;

          display: grid;

          grid-template-columns:
            54px 1fr;

          gap: 19px;

          border-bottom:
            1px solid var(--line);
        }


        .engix-ads-why-list svg {
          color:
            var(--blue-deep);
        }


        .engix-ads-why-list h3 {
          margin: 0;

          font-size: 24px;

          line-height: 1.3;
        }


        .engix-ads-why-list p {
          max-width: 650px;

          margin:
            9px 0 0;

          color: #50565d;

          font-size: 18px;

          line-height: 1.68;

          font-weight: 400;
        }



        /* =====================================================
           PARTNERSHIP
        ====================================================== */

        .engix-ads-partnership {
          padding:
            105px 0;

          background:
            white;
        }


        .engix-ads-partnership-grid {
          display: grid;

          grid-template-columns:
            .9fr 1.1fr;

          align-items: stretch;

          border:
            1px solid var(--line);

          border-radius: 20px;

          overflow: hidden;
        }


        .engix-ads-partnership-copy {
          padding:
            58px 50px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          background:
            var(--light);
        }


        .engix-ads-partnership-copy h2 {
          margin:
            15px 0 21px;

          font-size:
            clamp(
              2.7rem,
              4vw,
              4.5rem
            );

          line-height: .98;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-partnership-copy p {
          margin: 0;

          color: #50565d;

          font-size: 19px;

          line-height: 1.7;

          font-weight: 400;
        }


        .engix-ads-partnership-copy a {
          width: max-content;

          min-height: 54px;

          margin-top: 31px;

          padding:
            0 21px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          border-radius: 8px;

          background: var(--ink);

          color: white;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;
        }


        .engix-ads-partnership-image {
          min-height: 540px;
        }


        .engix-ads-partnership-image img {
          width: 100%;

          height: 100%;

          min-height: 540px;

          display: block;

          object-fit: cover;
        }



        /* =====================================================
           BOTTOM ENQUIRY
        ====================================================== */

        .engix-ads-bottom-enquiry {
          padding:
            105px 0;

          background:
            white;
        }


        .engix-ads-bottom-grid {
          display: grid;

          grid-template-columns:
            .85fr 1.15fr;

          gap: 75px;

          align-items: start;
        }


        .engix-ads-bottom-copy {
          position: sticky;

          top: 105px;
        }


        .engix-ads-bottom-copy h2 {
          max-width: 600px;

          margin:
            15px 0 21px;

          font-size:
            clamp(
              3rem,
              4.65vw,
              5rem
            );

          line-height: .97;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-ads-bottom-copy > p {
          max-width: 610px;

          margin:
            0 0 17px;

          color: #50565d;

          font-size: 19px;

          line-height: 1.7;

          font-weight: 400;
        }


        .engix-ads-bottom-contact {
          display: grid;

          gap: 0;

          margin-top: 33px;
        }


        .engix-ads-bottom-contact > a {
          padding:
            18px 0;

          display: flex;

          align-items: center;

          gap: 14px;

          border-bottom:
            1px solid var(--line);

          color: var(--ink);

          text-decoration: none;
        }


        .engix-ads-bottom-contact svg {
          color:
            var(--blue-deep);

          flex-shrink: 0;
        }


        .engix-ads-bottom-contact small,
        .engix-ads-bottom-contact strong {
          display: block;
        }


        .engix-ads-bottom-contact small {
          color: #676d73;

          font-size: 13px;

          font-weight: 800;

          letter-spacing: .06em;
        }


        .engix-ads-bottom-contact strong {
          margin-top: 5px;

          font-size: 17px;
        }



        /* =====================================================
           FAQ
        ====================================================== */

        .engix-ads-faq {
          padding:
            105px 0;

          background:
            var(--light);
        }


        .engix-ads-faq-grid {
          display: grid;

          grid-template-columns:
            .7fr 1.3fr;

          gap: 90px;
        }


        .engix-ads-faq-grid h2 {
          margin:
            15px 0 0;

          font-size:
            clamp(
              2.8rem,
              4.4vw,
              4.7rem
            );

          line-height: .98;

          letter-spacing: -.05em;

          font-weight: 560;
        }


        .engix-ads-faq-list {
          border-top:
            1px solid var(--line);
        }


        .engix-ads-faq-list details {
          border-bottom:
            1px solid var(--line);
        }


        .engix-ads-faq-list summary {
          min-height: 82px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 20px;

          cursor: pointer;

          list-style: none;

          font-size: 20px;

          font-weight: 700;
        }


        .engix-ads-faq-list summary::-webkit-details-marker {
          display: none;
        }


        .engix-ads-faq-list details p {
          max-width: 760px;

          margin:
            0 0 29px;

          color: #50565d;

          font-size: 18px;

          line-height: 1.72;

          font-weight: 400;
        }


        .engix-ads-faq-list details[open] svg {
          transform:
            rotate(180deg);
        }



        /* =====================================================
           FINAL CTA
        ====================================================== */

        .engix-ads-final {
          padding:
            88px 0;

          background:
            white;
        }


        .engix-ads-final-inner {
          text-align: center;
        }


        .engix-ads-final h2 {
          max-width: 820px;

          margin:
            14px auto;

          font-size:
            clamp(
              3rem,
              4.5vw,
              5rem
            );

          line-height: .98;

          letter-spacing: -.05em;

          font-weight: 560;
        }


        .engix-ads-final p {
          max-width: 720px;

          margin: 0 auto;

          color: #50565d;

          font-size: 19px;

          line-height: 1.65;
        }


        .engix-ads-final-inner > div {
          margin-top: 29px;

          display: flex;

          justify-content: center;

          flex-wrap: wrap;

          gap: 11px;
        }


        .engix-ads-final-primary,
        .engix-ads-final-secondary {
          min-height: 55px;

          padding:
            0 22px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          border-radius: 8px;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;
        }


        .engix-ads-final-primary {
          background: var(--ink);

          color: white;
        }


        .engix-ads-final-secondary {
          border:
            1px solid var(--line);

          color:
            var(--ink);
        }



        /* =====================================================
           PREMIUM LANDING PAGE FOOTER
        ====================================================== */

        .engix-ads-footer {
          position: relative;

          overflow: hidden;

          padding:
            34px 0 28px;

          background:
            #050505;

          color:
            #ffffff;

          border-top:
            1px solid
            rgba(255,255,255,.08);
        }


        .engix-ads-footer::before {
          content: '';

          position: absolute;

          top: -320px;
          right: -180px;

          width: 560px;
          height: 560px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(250,199,31,.12),
              rgba(250,199,31,.025) 48%,
              transparent 70%
            );

          pointer-events: none;
        }


        .engix-ads-footer::after {
          content: '';

          position: absolute;

          bottom: -360px;
          left: -200px;

          width: 520px;
          height: 520px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.045),
              transparent 67%
            );

          pointer-events: none;
        }


        .engix-ads-footer > .engix-ads-shell {
          position: relative;

          z-index: 2;
        }



        /* =====================================================
           FOOTER CTA
        ====================================================== */

        .engix-ads-footer-cta {
          padding:
            48px;

          display: grid;

          grid-template-columns:
            minmax(0,1fr)
            auto;

          align-items: center;

          gap: 55px;

          border:
            1px solid
            rgba(255,255,255,.11);

          border-radius:
            22px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.075),
              rgba(255,255,255,.022)
            );

          box-shadow:
            inset
            0 1px 0
            rgba(255,255,255,.06);
        }


        .engix-ads-footer-cta-copy {
          max-width:
            800px;
        }


        .engix-ads-footer-eyebrow {
          display: block;

          margin-bottom:
            15px;

          color:
            #f5ca2d;

          font-size:
            13px;

          line-height:
            1.2;

          font-weight:
            800;

          letter-spacing:
            .11em;
        }


        .engix-ads-footer-cta h2 {
          margin: 0;

          max-width:
            790px;

          color:
            #ffffff;

          font-size:
            clamp(
              2.6rem,
              4.2vw,
              4.75rem
            );

          line-height:
            .98;

          letter-spacing:
            -.055em;

          font-weight:
            560;
        }


        .engix-ads-footer-cta p {
          max-width:
            680px;

          margin:
            20px 0 0;

          color:
            rgba(255,255,255,.64);

          font-size:
            17px;

          line-height:
            1.72;
        }


        .engix-ads-footer-cta-actions {
          min-width:
            240px;

          display: flex;

          flex-direction:
            column;

          gap:
            11px;
        }


        .engix-ads-footer-primary,
        .engix-ads-footer-secondary {
          min-height:
            56px;

          padding:
            0 21px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            9px;

          border-radius:
            9px;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            750;

          transition:
            transform .2s ease,
            background .2s ease,
            border-color .2s ease,
            box-shadow .2s ease;
        }


        .engix-ads-footer-primary {
          background:
            #f5ca2d;

          color:
            #090a0c;
        }


        .engix-ads-footer-primary:hover {
          transform:
            translateY(-2px);

          background:
            #ffd840;

          box-shadow:
            0 13px 30px
            rgba(245,202,45,.15);
        }


        .engix-ads-footer-secondary {
          border:
            1px solid
            rgba(255,255,255,.18);

          background:
            rgba(255,255,255,.035);

          color:
            #ffffff;
        }


        .engix-ads-footer-secondary:hover {
          transform:
            translateY(-2px);

          border-color:
            rgba(255,255,255,.34);

          background:
            rgba(255,255,255,.07);
        }



        /* =====================================================
           MAIN FOOTER GRID
        ====================================================== */

        .engix-ads-footer-main {
          display: grid;

          grid-template-columns:
            1.45fr
            .72fr
            .72fr
            1.12fr;

          gap:
            50px;

          padding:
            72px 0 60px;
        }



        /* =====================================================
           BRAND
        ====================================================== */

        .engix-ads-footer-brand {
          max-width:
            440px;
        }


        .engix-ads-footer-logo {
          width:
            max-content;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            11px;

          color:
            #ffffff;

          text-decoration:
            none;

          flex-shrink:
            0;

          white-space:
            nowrap;
        }


        .engix-ads-footer-logo-icon {
          width:
            54px;

          height:
            54px;

          min-width:
            54px;

          min-height:
            54px;

          max-width:
            54px;

          max-height:
            54px;

          flex:
            0 0 54px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          overflow:
            hidden;

          margin: 0;

          padding: 0;

          background:
            #050505;

          border:
            none;

          border-radius:
            0;

          box-shadow:
            none;
        }


        .engix-ads-footer-logo-image {
          width:
            100%;

          height:
            100%;

          max-width:
            54px;

          max-height:
            54px;

          display:
            block;

          object-fit:
            contain;

          object-position:
            center;

          margin: 0;

          padding: 0;

          border: 0;

          background:
            #050505;
        }


        .engix-ads-footer-logo-name {
          margin: 0;

          color:
            #ffffff;

          font-size:
            29px;

          line-height:
            1;

          font-weight:
            760;

          letter-spacing:
            -.045em;
        }


        .engix-ads-footer-description {
          max-width:
            420px;

          margin:
            27px 0 0;

          color:
            rgba(255,255,255,.62);

          font-size:
            16px;

          line-height:
            1.75;
        }



        /* =====================================================
           TRUST
        ====================================================== */

        .engix-ads-footer-trust {
          display: flex;

          flex-wrap:
            wrap;

          gap:
            11px 17px;

          margin-top:
            26px;
        }


        .engix-ads-footer-trust span {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          color:
            rgba(255,255,255,.7);

          font-size:
            13px;

          line-height:
            1.45;
        }


        .engix-ads-footer-trust svg {
          color:
            #f5ca2d;

          flex-shrink:
            0;
        }



        /* =====================================================
           FOOTER COLUMNS
        ====================================================== */

        .engix-ads-footer-column {
          display: flex;

          flex-direction:
            column;

          align-items:
            flex-start;

          gap:
            13px;
        }


        .engix-ads-footer-column-title {
          margin-bottom:
            10px;

          color:
            #ffffff;

          font-size:
            13px;

          line-height:
            1.2;

          font-weight:
            800;

          letter-spacing:
            .1em;

          text-transform:
            uppercase;
        }


        .engix-ads-footer-column > a {
          color:
            rgba(255,255,255,.61);

          text-decoration:
            none;

          font-size:
            15px;

          line-height:
            1.52;

          transition:
            color .2s ease,
            transform .2s ease;
        }


        .engix-ads-footer-column > a:hover {
          color:
            #ffffff;

          transform:
            translateX(3px);
        }



        /* =====================================================
           CONTACT
        ====================================================== */

        .engix-ads-footer-contact {
          gap:
            7px;
        }


        .engix-ads-footer-contact > a,
        .engix-ads-footer-location {
          width:
            100%;

          box-sizing:
            border-box;

          display:
            grid;

          grid-template-columns:
            39px
            minmax(0,1fr);

          align-items:
            center;

          gap:
            12px;

          padding:
            8px 0;

          color:
            rgba(255,255,255,.7);

          text-decoration:
            none;
        }


        .engix-ads-footer-contact > a:hover {
          color:
            #ffffff;

          transform:
            none;
        }


        .engix-ads-footer-contact-icon {
          width:
            37px;

          height:
            37px;

          display:
            grid;

          place-items:
            center;

          border:
            1px solid
            rgba(245,202,45,.2);

          border-radius:
            10px;

          background:
            rgba(245,202,45,.07);

          color:
            #f5ca2d;
        }


        .engix-ads-footer-contact-copy {
          display:
            flex;

          min-width:
            0;

          flex-direction:
            column;

          gap:
            3px;
        }


        .engix-ads-footer-contact-copy small {
          color:
            rgba(255,255,255,.38);

          font-size:
            10px;

          line-height:
            1.2;

          font-weight:
            800;

          letter-spacing:
            .09em;
        }


        .engix-ads-footer-contact-copy strong {
          color:
            rgba(255,255,255,.75);

          font-size:
            14px;

          line-height:
            1.45;

          font-weight:
            550;

          overflow-wrap:
            anywhere;
        }


        .engix-ads-footer-contact > a:hover
        .engix-ads-footer-contact-copy strong {
          color:
            #ffffff;
        }



        /* =====================================================
           CREDIBILITY STRIP
        ====================================================== */

        .engix-ads-footer-proof {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          border-top:
            1px solid
            rgba(255,255,255,.1);

          border-bottom:
            1px solid
            rgba(255,255,255,.1);
        }


        .engix-ads-footer-proof > div {
          min-height:
            112px;

          padding:
            21px;

          box-sizing:
            border-box;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          text-align:
            center;

          border-right:
            1px solid
            rgba(255,255,255,.1);
        }


        .engix-ads-footer-proof > div:last-child {
          border-right: 0;
        }


        .engix-ads-footer-proof strong {
          color:
            #ffffff;

          font-size:
            21px;

          line-height:
            1.25;

          font-weight:
            720;
        }


        .engix-ads-footer-proof span {
          margin-top:
            6px;

          color:
            rgba(255,255,255,.45);

          font-size:
            13px;

          line-height:
            1.4;
        }



        /* =====================================================
           BOTTOM
        ====================================================== */

        .engix-ads-footer-bottom {
          min-height:
            78px;

          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr;

          align-items:
            center;

          gap:
            24px;
        }


        .engix-ads-footer-bottom p {
          margin: 0;

          color:
            rgba(255,255,255,.4);

          font-size:
            12px;

          line-height:
            1.5;
        }


        .engix-ads-footer-availability {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            9px;

          color:
            rgba(255,255,255,.52);

          font-size:
            12px;
        }


        .engix-ads-footer-status-dot {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            #55c66d;

          box-shadow:
            0 0 0 4px
            rgba(85,198,109,.09);
        }


        .engix-ads-footer-bottom-links {
          justify-self:
            end;

          display: flex;

          align-items:
            center;

          gap:
            19px;
        }


        .engix-ads-footer-bottom-links a {
          color:
            rgba(255,255,255,.48);

          text-decoration:
            none;

          font-size:
            12px;

          transition:
            color .2s ease;
        }


        .engix-ads-footer-bottom-links a:hover {
          color:
            #f5ca2d;
        }



        /* =====================================================
           FOOTER TABLET
        ====================================================== */

        @media (max-width: 1050px) {

          .engix-ads-footer-cta {
            grid-template-columns:
              1fr;

            gap:
              31px;
          }


          .engix-ads-footer-cta-actions {
            min-width:
              0;

            width:
              max-content;

            flex-direction:
              row;
          }


          .engix-ads-footer-main {
            grid-template-columns:
              repeat(2,1fr);

            gap:
              50px 42px;
          }


          .engix-ads-footer-brand {
            grid-column:
              1 / -1;

            max-width:
              650px;
          }


          .engix-ads-footer-proof {
            grid-template-columns:
              repeat(2,1fr);
          }


          .engix-ads-footer-proof > div:nth-child(2) {
            border-right:
              0;
          }


          .engix-ads-footer-proof > div:nth-child(-n+2) {
            border-bottom:
              1px solid
              rgba(255,255,255,.1);
          }


          .engix-ads-footer-bottom {
            grid-template-columns:
              1fr auto;
          }


          .engix-ads-footer-availability {
            display:
              none;
          }

        }



        /* =====================================================
           FOOTER MOBILE
        ====================================================== */

        @media (max-width: 650px) {

          .engix-ads-footer {
            padding:
              20px 0 23px;
          }


          .engix-ads-footer-cta {
            padding:
              31px 22px;

            gap:
              27px;

            border-radius:
              17px;
          }


          .engix-ads-footer-cta h2 {
            font-size:
              clamp(
                2.35rem,
                11vw,
                3.35rem
              );
          }


          .engix-ads-footer-cta p {
            font-size:
              16px;
          }


          .engix-ads-footer-cta-actions {
            width:
              100%;

            flex-direction:
              column;
          }


          .engix-ads-footer-primary,
          .engix-ads-footer-secondary {
            width:
              100%;

            box-sizing:
              border-box;
          }


          .engix-ads-footer-main {
            grid-template-columns:
              1fr;

            gap:
              41px;

            padding:
              55px 0 46px;
          }


          .engix-ads-footer-brand {
            grid-column:
              auto;

            max-width:
              100%;
          }


          .engix-ads-footer-logo {
            gap:
              8px;
          }


          .engix-ads-footer-logo-icon {
            width:
              45px;

            height:
              45px;

            min-width:
              45px;

            min-height:
              45px;

            max-width:
              45px;

            max-height:
              45px;

            flex-basis:
              45px;
          }


          .engix-ads-footer-logo-image {
            max-width:
              45px;

            max-height:
              45px;
          }


          .engix-ads-footer-logo-name {
            font-size:
              24px;
          }


          .engix-ads-footer-description {
            font-size:
              15px;
          }


          .engix-ads-footer-proof {
            grid-template-columns:
              1fr;
          }


          .engix-ads-footer-proof > div {
            min-height:
              94px;

            border-right:
              0;

            border-bottom:
              1px solid
              rgba(255,255,255,.1);
          }


          .engix-ads-footer-proof > div:nth-child(2) {
            border-bottom:
              1px solid
              rgba(255,255,255,.1);
          }


          .engix-ads-footer-proof > div:last-child {
            border-bottom:
              0;
          }


          .engix-ads-footer-bottom {
            min-height:
              auto;

            padding-top:
              28px;

            grid-template-columns:
              1fr;

            gap:
              15px;
          }


          .engix-ads-footer-bottom-links {
            justify-self:
              start;

            flex-wrap:
              wrap;
          }

        }



        /* =====================================================
           FOOTER VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 390px) {

          .engix-ads-footer-logo-icon {
            width:
              40px;

            height:
              40px;

            min-width:
              40px;

            min-height:
              40px;

            max-width:
              40px;

            max-height:
              40px;

            flex-basis:
              40px;
          }


          .engix-ads-footer-logo-image {
            max-width:
              40px;

            max-height:
              40px;
          }


          .engix-ads-footer-logo-name {
            font-size:
              22px;
          }


          .engix-ads-footer-contact > a,
          .engix-ads-footer-location {
            grid-template-columns:
              37px
              minmax(0,1fr);
          }

        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1050px) {

          .engix-ads-hero-grid {
            grid-template-columns:
              1fr;

            gap: 48px;
          }


          .engix-ads-hero-copy {
            max-width: 920px;
          }


          .engix-hero-form-wrap {
            max-width: 780px;
          }


          .engix-ads-proof-grid {
            grid-template-columns:
              repeat(2,1fr);
          }


          .engix-ads-proof-grid article:nth-child(2) {
            border-right: 0;
          }


          .engix-ads-proof-grid article:nth-child(-n+2) {
            border-bottom:
              1px solid var(--line);
          }


          .engix-ads-results-grid {
            grid-template-columns:
              1fr;
          }


          .engix-ads-results-grid article {
            min-height: auto;
          }


          .engix-ads-web-grid,
          .engix-ads-why-grid,
          .engix-ads-partnership-grid,
          .engix-ads-bottom-grid,
          .engix-ads-faq-grid {
            grid-template-columns:
              1fr;

            gap: 48px;
          }


          .engix-ads-bottom-copy {
            position: static;
          }


          .engix-ads-footer-main {
            grid-template-columns:
              1fr 1fr;
          }


          .engix-ads-footer-main > div:first-child {
            grid-column:
              1 / -1;
          }

        }



        /* =====================================================
           MOBILE HEADER
        ====================================================== */

        @media (max-width: 760px) {

          .engix-ads-shell {
            width:
              calc(100% - 32px);
          }


          .engix-ads-header-inner {
            min-height: 66px;

            grid-template-columns:
              1fr auto;
          }


          .engix-ads-nav {
            display: none;
          }


          .engix-ads-header-button {
            min-height: 42px;

            padding:
              0 12px;

            font-size: 11px;
          }


          .engix-ads-header-button svg {
            width: 16px;
          }


          .engix-small-heading,
          .engix-ads-heading > span,
          .engix-lead-heading > span,
          .engix-ads-web-copy > span {
            font-size: 13px;
          }

        }



        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 650px) {

          /*
            HEADER IS ABOUT 66PX.
            HERO STARTS AT 76PX.
            ONLY ABOUT 10PX EXTRA GAP.
          */

          .engix-ads-hero {
            padding:
              76px 0 58px;

            background:

              linear-gradient(
                180deg,
                rgba(255,255,255,.96),
                rgba(255,255,255,.91)
              ),

              url(
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=90'
              );

            background-size: cover;

            background-position: center;
          }


          .engix-ads-hero-copy {
            padding-top: 4px;
          }


          .engix-ads-audit-badge {
            padding:
              10px 14px;

            font-size: 13px;
          }


          .engix-ads-hero h1 {
            margin-top: 22px;

            font-size:
              clamp(
                3rem,
                13vw,
                4.6rem
              );
          }


          .engix-ads-hero-description {
            font-size: 18px;

            line-height: 1.65;
          }


          .engix-ads-hero-buttons {
            flex-direction:
              column;
          }


          .engix-ads-primary-button,
          .engix-ads-secondary-button {
            width: 100%;

            box-sizing:
              border-box;
          }


          .engix-ads-hero-points {
            flex-direction:
              column;

            gap: 13px;
          }


          .engix-ads-hero-points > div {
            font-size: 15px;
          }


          .engix-ads-direct-contact {
            flex-direction:
              column;
          }


          .engix-lead-card {
            padding:
              24px 18px;
          }


          .engix-lead-row {
            grid-template-columns:
              1fr;

            gap: 0;
          }


          .engix-lead-heading p {
            font-size: 15px;
          }


          .engix-ads-proof {
            padding-bottom:
              60px;
          }


          .engix-ads-proof-grid {
            grid-template-columns:
              1fr;
          }


          .engix-ads-proof-grid article {
            min-height: 125px;

            border-right: 0;

            border-bottom:
              1px solid var(--line);
          }


          .engix-ads-proof-grid article:last-child {
            border-bottom: 0;
          }


          .engix-ads-intro-image {
            padding:
              10px 0 70px;
          }


          .engix-ads-intro-image-wrap {
            height: 430px;
          }


          .engix-ads-intro-overlay {
            left: 24px;

            right: 24px;

            bottom: 28px;
          }


          .engix-ads-services,
          .engix-ads-process,
          .engix-ads-results,
          .engix-ads-why,
          .engix-ads-partnership,
          .engix-ads-bottom-enquiry,
          .engix-ads-faq {
            padding:
              78px 0;
          }


          .engix-ads-heading p {
            font-size: 17px;
          }


          .engix-ads-services-grid {
            grid-template-columns:
              1fr;
          }


          .engix-ads-services-grid article {
            min-height: auto;

            padding: 27px 22px;
          }


          /*
            KEEP THESE TEXTS LARGE
            EVEN ON MOBILE.
          */

          .engix-service-description,
          .engix-ads-services-grid article > p {
            font-size: 18px;

            line-height: 1.62;
          }


          .engix-ads-service-points {
            grid-template-columns:
              1fr;

            gap: 12px;
          }


          .engix-ads-service-points span {
            font-size: 16px;
          }


          .engix-ads-web {
            padding:
              0 0 78px;
          }


          .engix-ads-web-image,
          .engix-ads-web-image img {
            min-height: 340px;
          }


          .engix-ads-web-copy {
            padding:
              36px 22px;
          }


          .engix-ads-web-copy > p {
            font-size: 17px;
          }


          .engix-ads-web-copy > div span {
            font-size: 16px;
          }


          .engix-ads-process-list article {
            grid-template-columns:
              50px 1fr;

            gap: 14px;
          }


          .engix-ads-process-list h3 {
            font-size: 21px;
          }


          .engix-ads-process-list p {
            font-size: 17px;
          }


          .engix-ads-results-grid p {
            font-size: 17px;
          }


          .engix-ads-why-list h3 {
            font-size: 21px;
          }


          .engix-ads-why-list p {
            font-size: 17px;
          }


          .engix-ads-partnership-copy {
            padding:
              36px 22px;
          }


          .engix-ads-partnership-copy p {
            font-size: 17px;
          }


          .engix-ads-partnership-image,
          .engix-ads-partnership-image img {
            min-height: 350px;
          }


          .engix-ads-bottom-copy > p {
            font-size: 17px;
          }


          .engix-ads-faq-list summary {
            font-size: 17px;

            min-height: 76px;
          }


          .engix-ads-faq-list details p {
            font-size: 16px;
          }


          .engix-ads-final p {
            font-size: 17px;
          }


          .engix-ads-final-inner > div {
            flex-direction:
              column;
          }


          .engix-ads-final-primary,
          .engix-ads-final-secondary {
            width: 100%;

            box-sizing:
              border-box;
          }


          .engix-ads-footer-main {
            grid-template-columns:
              1fr;

            gap: 36px;
          }


          .engix-ads-footer-main > div:first-child {
            grid-column:
              auto;
          }


          .engix-ads-footer-bottom {
            flex-direction:
              column;

            align-items:
              flex-start;
          }

        }



        /* =====================================================
           VERY SMALL PHONES
        ====================================================== */

        @media (max-width: 400px) {

          .engix-ads-logo span {
            font-size: 31px;
          }


          .engix-ads-logo strong {
            font-size: 20px;
          }


          .engix-ads-header-button {
            padding:
              0 9px;
          }


          .engix-ads-header-button svg {
            display: none;
          }


          .engix-ads-audit-badge {
            font-size: 12px;
          }


          .engix-lead-submit {
            font-size: 13px;
          }

        }

      `}</style>

    </>
  );
}