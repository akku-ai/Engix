import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';

import api from '../../api/axios';

const initialState = {
  inquiryType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  country: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
  consent: false
};

export default function ContactForm() {
  const location = useLocation();

  const [form, setForm] = useState(initialState);

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

    if (!form.consent) {
      setStatus({
        type: 'error',
        message:
          'Please confirm that Engix may use your information to respond to this enquiry.'
      });

      return;
    }

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.company ||
      !form.country ||
      !form.inquiryType ||
      !form.message
    ) {
      setStatus({
        type: 'error',
        message:
          'Please complete all required fields before submitting your enquiry.'
      });

      return;
    }

    setLoading(true);

    try {
      const fullName =
        `${form.firstName} ${form.lastName}`.trim();

      const payload = {
        name: fullName,

        firstName: form.firstName,
        lastName: form.lastName,

        email: form.email,
        phone: form.phone,

        company: form.company,
        role: form.role,

        country: form.country,

        inquiryType: form.inquiryType,

        service:
          form.service ||
          form.inquiryType,

        budget: form.budget,

        timeline: form.timeline,

        message: form.message,

        source:
          location.pathname === '/solutions'
            ? 'Solutions Landing Page'
            : 'Contact Page',

        page: location.pathname
      };

      console.log(
        'Submitting Engix enquiry:',
        payload
      );

      console.log(
        'API Base URL:',
        api.defaults.baseURL
      );

      const response = await api.post(
        '/leads',
        payload
      );

      console.log(
        'Engix enquiry response:',
        response.data
      );

      setStatus({
        type: 'success',

        message:
          response?.data?.message ||
          'Thank you. Your enquiry has been sent successfully.'
      });

      /*
        Future Google Tag Manager / GA4
        conversion event.
      */

      if (typeof window !== 'undefined') {
        window.dataLayer =
          window.dataLayer || [];

        window.dataLayer.push({
          event: 'generate_lead',

          service:
            form.service ||
            form.inquiryType,

          lead_source:
            location.pathname === '/solutions'
              ? 'solutions_landing_page'
              : 'contact_page'
        });
      }

      setForm(initialState);

    } catch (error) {
      console.error(
        'ENGIX FORM SUBMISSION ERROR:',
        error
      );

      console.error(
        'Error message:',
        error?.message
      );

      console.error(
        'Backend status:',
        error?.response?.status
      );

      console.error(
        'Backend response:',
        error?.response?.data
      );

      console.error(
        'Request base URL:',
        error?.config?.baseURL
      );

      console.error(
        'Request path:',
        error?.config?.url
      );

      console.error(
        'Full request URL:',
        `${
          error?.config?.baseURL || ''
        }${
          error?.config?.url || ''
        }`
      );

      let errorMessage =
        'We could not send your enquiry. Please try again or contact us by email.';

      if (error?.response?.data?.message) {
        errorMessage =
          error.response.data.message;
      } else if (
        error?.code === 'ERR_NETWORK'
      ) {
        errorMessage =
          'The Engix server could not be reached. Please make sure the backend is running and try again.';
      } else if (error?.message) {
        errorMessage =
          error.message;
      }

      setStatus({
        type: 'error',
        message: errorMessage
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="engix-enterprise-form"
        onSubmit={handleSubmit}
      >

        {/* ======================================
            01 - ENQUIRY
        ======================================= */}

        <div className="engix-form-section-heading">

          <span>
            01
          </span>

          <div>

            <h3>
              Your enquiry
            </h3>

            <p>
              Tell us what you would like
              to discuss with Engix.
            </p>

          </div>

        </div>


        <div className="engix-form-field">

          <label htmlFor="inquiryType">
            Inquiry type *
          </label>

          <select
            id="inquiryType"
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            required
          >

            <option value="">
              Select an option
            </option>

            <option value="New Project">
              New project / business opportunity
            </option>

            <option value="Existing Client">
              Existing client support
            </option>

            <option value="Partnership">
              Technology partnership
            </option>

            <option value="Careers">
              Careers & opportunities
            </option>

            <option value="Vendor">
              Vendor / service provider
            </option>

            <option value="General">
              General enquiry
            </option>

          </select>

        </div>


        <div className="engix-form-field">

          <label htmlFor="service">
            Service or capability
          </label>

          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >

            <option value="">
              Select a service
            </option>

            <option value="AI Solutions & Automation">
              AI Solutions & Automation
            </option>

            <option value="Custom Software Development">
              Custom Software Development
            </option>

            <option value="Enterprise CRM & ERP">
              Enterprise CRM & ERP Solutions
            </option>

            <option value="Web Application Development">
              Web Application Development
            </option>

            <option value="Mobile App Development">
              Mobile App Development
            </option>

            <option value="Corporate Website Development">
              Corporate Website Development
            </option>

            <option value="UI/UX Design">
              UI/UX Design
            </option>

            <option value="Backend & API Development">
              Backend & API Development
            </option>

            <option value="Database Engineering">
              Database Engineering
            </option>

            <option value="API Integration">
              API Integration Services
            </option>

            <option value="Cloud & DevOps">
              Cloud & DevOps Solutions
            </option>

            <option value="Business Automation">
              Business Automation
            </option>

            <option value="Maintenance & Support">
              Application Maintenance & Support
            </option>

            <option value="Digital Transformation">
              Digital Transformation
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </div>


        {/* ======================================
            02 - ABOUT YOU
        ======================================= */}

        <div className="engix-form-section-heading engix-form-heading-gap">

          <span>
            02
          </span>

          <div>

            <h3>
              About you
            </h3>

            <p>
              Your details help us route the enquiry
              to the right person.
            </p>

          </div>

        </div>


        <div className="engix-form-two">

          <div className="engix-form-field">

            <label htmlFor="firstName">
              First name *
            </label>

            <input
              id="firstName"
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              required
            />

          </div>


          <div className="engix-form-field">

            <label htmlFor="lastName">
              Last name *
            </label>

            <input
              id="lastName"
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              required
            />

          </div>

        </div>


        <div className="engix-form-two">

          <div className="engix-form-field">

            <label htmlFor="email">
              Business email *
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="you@company.com"
              required
            />

          </div>


          <div className="engix-form-field">

            <label htmlFor="phone">
              Phone number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              autoComplete="tel"
            />

          </div>

        </div>


        <div className="engix-form-two">

          <div className="engix-form-field">

            <label htmlFor="company">
              Company / organization *
            </label>

            <input
              id="company"
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              autoComplete="organization"
              placeholder="Company name"
              required
            />

          </div>


          <div className="engix-form-field">

            <label htmlFor="role">
              Your role / function
            </label>

            <input
              id="role"
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              autoComplete="organization-title"
              placeholder="Founder, CTO, Manager..."
            />

          </div>

        </div>


        <div className="engix-form-field">

          <label htmlFor="country">
            Country / region *
          </label>

          <select
            id="country"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          >

            <option value="">
              Select country / region
            </option>

            <option value="India">
              India
            </option>

            <option value="United Kingdom">
              United Kingdom
            </option>

            <option value="United States">
              United States
            </option>

            <option value="Canada">
              Canada
            </option>

            <option value="United Arab Emirates">
              United Arab Emirates
            </option>

            <option value="Singapore">
              Singapore
            </option>

            <option value="Australia">
              Australia
            </option>

            <option value="Germany">
              Germany
            </option>

            <option value="France">
              France
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </div>


        {/* ======================================
            PROJECT DETAILS
        ======================================= */}

     

        {/* ======================================
            03 - MESSAGE
        ======================================= */}

        <div className="engix-form-section-heading engix-form-heading-gap">

          <span>
            03
          </span>

          <div>

            <h3>
              Your message
            </h3>

            <p>
              Share the challenge, requirement or
              opportunity you would like to discuss.
            </p>

          </div>

        </div>


        <div className="engix-form-field">

          <label htmlFor="message">
            How can we help you? *
          </label>

          <textarea
            id="message"
            name="message"
            rows="8"
            maxLength="5000"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project, business challenge, goals, timeline or existing technology..."
            required
          />

          <small className="engix-character-count">
            {form.message.length} / 5000
          </small>

        </div>


        {/* ======================================
            PRIVACY
        ======================================= */}

        <label className="engix-consent">

          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />

          <span className="engix-custom-checkbox">
            {form.consent && (
              <Check size={14} />
            )}
          </span>

          <p>
            I agree that Engix Tech Private Limited may
            use the information submitted in this form
            for the purpose of responding to my enquiry
            and related business communication.
          </p>

        </label>


        {/* ======================================
            STATUS
        ======================================= */}

        {status.message && (
          <div
            className={`engix-form-status ${status.type}`}
            role="status"
          >

            {status.type === 'success' ? (
              <CheckCircle2 size={20} />
            ) : (
              <AlertCircle size={20} />
            )}

            <span>
              {status.message}
            </span>

          </div>
        )}


        {/* ======================================
            SUBMIT
        ======================================= */}

        <button
          type="submit"
          className="engix-enterprise-submit"
          disabled={loading}
        >

          {loading ? (
            <>
              <Loader2
                size={19}
                className="engix-form-loader"
              />

              Sending enquiry...
            </>
          ) : (
            <>
              Submit enquiry

              <ArrowRight size={19} />
            </>
          )}

        </button>

      </form>


      <style>{`

        .engix-enterprise-form {
          width: 100%;
        }

        .engix-form-section-heading {
          display: grid;

          grid-template-columns:
            40px 1fr;

          gap: 14px;

          padding-bottom: 22px;

          border-bottom:
            1px solid rgba(17,19,24,.12);
        }

        .engix-form-heading-gap {
          margin-top: 55px;
        }

        .engix-form-section-heading > span {
          color: #625b96;

          font-size: 12px;

          font-weight: 800;
        }

        .engix-form-section-heading h3 {
          margin: 0;

          color: #111318;

          font-size: 25px;

          letter-spacing: -.035em;
        }

        .engix-form-section-heading p {
          margin: 7px 0 0;

          color: #71727a;

          font-size: 12px;

          line-height: 1.6;
        }

        .engix-form-two {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 18px;
        }

        .engix-form-field {
          position: relative;

          margin-top: 26px;
        }

        .engix-form-field label {
          display: block;

          margin-bottom: 9px;

          color: #33343a;

          font-size: 12px;

          font-weight: 700;
        }

        .engix-form-field input,
        .engix-form-field select,
        .engix-form-field textarea {
          width: 100%;

          box-sizing: border-box;

          border: 0;

          border-bottom:
            1px solid #b7b7bd;

          border-radius: 0;

          outline: 0;

          background: transparent;

          color: #111318;

          font-family: inherit;

          padding:
            12px 0 14px;

          font-size: 15px;

          line-height: 1.5;

          transition:
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .engix-form-field select {
          cursor: pointer;

          appearance: auto;
        }

        .engix-form-field textarea {
          min-height: 170px;

          resize: vertical;

          border:
            1px solid #c6c6cb;

          padding: 15px;

          margin-top: 2px;
        }

        .engix-form-field input:focus,
        .engix-form-field select:focus {
          border-bottom-color:
            #111318;
        }

        .engix-form-field textarea:focus {
          border-color:
            #111318;

          box-shadow:
            0 0 0 3px rgba(17,19,24,.04);
        }

        .engix-character-count {
          display: block;

          margin-top: 7px;

          color: #85858b;

          font-size: 10px;

          text-align: right;
        }


        /* CONSENT */

        .engix-consent {
          margin-top: 30px;

          display: grid;

          grid-template-columns:
            23px 1fr;

          gap: 12px;

          align-items: start;

          cursor: pointer;
        }

        .engix-consent > input {
          position: absolute;

          opacity: 0;

          pointer-events: none;
        }

        .engix-custom-checkbox {
          width: 21px;

          height: 21px;

          display: grid;

          place-items: center;

          border:
            1px solid #888891;

          background: white;

          color: white;
        }

        .engix-consent
        input:checked
        + .engix-custom-checkbox {
          background: #111318;

          border-color: #111318;
        }

        .engix-consent p {
          margin: 0;

          color: #6e6e75;

          font-size: 11px;

          line-height: 1.65;
        }


        /* STATUS */

        .engix-form-status {
          margin-top: 24px;

          padding: 15px 17px;

          display: flex;

          align-items: flex-start;

          gap: 9px;

          font-size: 12px;

          line-height: 1.6;
        }

        .engix-form-status svg {
          flex-shrink: 0;

          margin-top: 1px;
        }

        .engix-form-status.success {
          background: #dff5df;

          color: #234526;

          border:
            1px solid #bcdcbc;
        }

        .engix-form-status.error {
          background: #f4dfd2;

          color: #693726;

          border:
            1px solid #e3c0aa;
        }


        /* SUBMIT */

        .engix-enterprise-submit {
          min-height: 56px;

          margin-top: 32px;

          padding: 0 23px;

          border: 0;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 11px;

          background: #111318;

          color: white;

          font-family: inherit;

          font-size: 14px;

          font-weight: 750;

          cursor: pointer;

          transition:
            background .2s ease,
            transform .2s ease;
        }

        .engix-enterprise-submit:hover:not(:disabled) {
          background: #2b2b30;

          transform:
            translateY(-2px);
        }

        .engix-enterprise-submit:disabled {
          opacity: .6;

          cursor: not-allowed;
        }

        .engix-form-loader {
          animation:
            engix-form-spin .8s linear infinite;
        }

        @keyframes engix-form-spin {
          to {
            transform:
              rotate(360deg);
          }
        }


        /* MOBILE */

        @media (max-width: 650px) {

          .engix-form-two {
            grid-template-columns: 1fr;

            gap: 0;
          }

          .engix-form-heading-gap {
            margin-top: 45px;
          }

          .engix-enterprise-submit {
            width: 100%;

            justify-content: center;
          }

        }

      `}</style>
    </>
  );
}