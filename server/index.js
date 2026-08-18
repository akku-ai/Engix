const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
  cors({
    origin: (origin, callback) => {
      // Allows curl/Postman/server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      // Allow any localhost Vite port
      if (
        /^http:\/\/localhost:\d+$/.test(origin) ||
        /^http:\/\/127\.0\.0\.1:\d+$/.test(origin)
      ) {
        return callback(null, true);
      }

      // Production Engix website
      const allowedOrigins = [
        'https://engix.world',
        'https://www.engix.world'
      ];

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log('Blocked by CORS:', origin);

      return callback(
        new Error(`CORS blocked origin: ${origin}`)
      );
    },

    methods: [
      'GET',
      'POST',
      'OPTIONS'
    ],

    allowedHeaders: [
      'Content-Type',
      'Authorization'
    ]
  })
);
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);


/* =========================================================
   MAIL TRANSPORTER
========================================================= */

const transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD
  }
});


/* =========================================================
   ROOT
========================================================= */

app.get('/', (req, res) => {
  res.send('Engix Backend Running');
});


/* =========================================================
   HEALTH CHECK
========================================================= */

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Engix API is running'
  });
});


/* =========================================================
   LEAD ROUTE
========================================================= */

app.post('/api/leads', async (req, res) => {
  try {
    const {
      name,
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      message,
      source,
      page
    } = req.body;

    /* -------------------------------------------------------
       BASIC VALIDATION
    ------------------------------------------------------- */

    const fullName =
      name ||
      `${firstName || ''} ${lastName || ''}`.trim();

    if (!fullName) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.'
      });
    }

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.'
      });
    }

    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Project details are required.'
      });
    }


    /* -------------------------------------------------------
       SAFE VALUES
    ------------------------------------------------------- */

    const lead = {
      name: fullName,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      service: service || 'Not specified',
      budget: budget || 'Not specified',
      timeline: timeline || 'Not specified',
      message,
      source: source || 'Website',
      page: page || 'Unknown'
    };


    /* -------------------------------------------------------
       INTERNAL EMAIL
    ------------------------------------------------------- */

    const internalMailOptions = {
      from: `"Engix Website Leads" <${process.env.MAIL_USER}>`,

      to: [
        process.env.LEAD_EMAIL_1,
        process.env.LEAD_EMAIL_2
      ].filter(Boolean),

      replyTo: lead.email,

      subject:
        `New Engix Lead — ${lead.service} — ${lead.name}`,

      text: `
New Engix Business Enquiry

Name:
${lead.name}

Email:
${lead.email}

Phone:
${lead.phone}

Company:
${lead.company}

Service:
${lead.service}

Estimated Budget:
${lead.budget}

Timeline:
${lead.timeline}

Source:
${lead.source}

Page:
${lead.page}

Project Details:
${lead.message}
      `,

      html: `
        <!DOCTYPE html>

        <html>
          <head>
            <meta charset="UTF-8" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f5f5f5;
              font-family: Arial, Helvetica, sans-serif;
              color: #111318;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 30px auto;
                background: #ffffff;
                border: 1px solid #e8e8e8;
              "
            >

              <!-- HEADER -->

              <div
                style="
                  padding: 28px 32px;
                  border-bottom: 1px solid #eeeeee;
                "
              >

                <div
                  style="
                    font-size: 25px;
                    font-weight: 700;
                    letter-spacing: -1px;
                  "
                >
                  ✣ Engix
                </div>

                <div
                  style="
                    margin-top: 8px;
                    color: #777777;
                    font-size: 12px;
                    letter-spacing: 1px;
                  "
                >
                  NEW BUSINESS ENQUIRY
                </div>

              </div>


              <!-- INTRO -->

              <div
                style="
                  padding: 30px 32px 10px;
                "
              >

                <h1
                  style="
                    margin: 0;
                    font-size: 28px;
                    line-height: 1.2;
                  "
                >
                  New lead received.
                </h1>

                <p
                  style="
                    color: #666666;
                    line-height: 1.7;
                    font-size: 14px;
                  "
                >
                  A new business enquiry has been submitted through
                  the Engix website.
                </p>

              </div>


              <!-- DETAILS -->

              <div
                style="
                  padding: 15px 32px 32px;
                "
              >

                ${createEmailRow('Name', lead.name)}

                ${createEmailRow('Email', lead.email)}

                ${createEmailRow('Phone', lead.phone)}

                ${createEmailRow('Company', lead.company)}

                ${createEmailRow('Service', lead.service)}

                ${createEmailRow('Budget', lead.budget)}

                ${createEmailRow('Timeline', lead.timeline)}

                ${createEmailRow('Source', lead.source)}

                ${createEmailRow('Page', lead.page)}


                <div
                  style="
                    margin-top: 28px;
                  "
                >

                  <div
                    style="
                      margin-bottom: 8px;
                      color: #888888;
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: .8px;
                      text-transform: uppercase;
                    "
                  >
                    Project Details
                  </div>

                  <div
                    style="
                      padding: 18px;
                      background: #f8f8f8;
                      color: #333333;
                      font-size: 14px;
                      line-height: 1.7;
                      white-space: pre-line;
                    "
                  >
                    ${escapeHtml(lead.message)}
                  </div>

                </div>


                <!-- REPLY -->

                <div
                  style="
                    margin-top: 28px;
                  "
                >

                  <a
                    href="mailto:${encodeURIComponent(lead.email)}"
                    style="
                      display: inline-block;
                      padding: 14px 20px;
                      background: #050505;
                      color: #ffffff;
                      text-decoration: none;
                      font-size: 13px;
                      font-weight: 700;
                    "
                  >
                    Reply to ${escapeHtml(lead.name)}
                  </a>

                </div>

              </div>


              <!-- FOOTER -->

              <div
                style="
                  padding: 20px 32px;
                  border-top: 1px solid #eeeeee;
                  color: #999999;
                  font-size: 11px;
                  line-height: 1.6;
                "
              >
                Engix Tech Private Limited
                <br />
                Website Lead Notification
              </div>

            </div>
          </body>
        </html>
      `
    };


    /* -------------------------------------------------------
       SEND INTERNAL NOTIFICATION
    ------------------------------------------------------- */

    await transporter.sendMail(
      internalMailOptions
    );


    /* -------------------------------------------------------
       OPTIONAL CUSTOMER CONFIRMATION
    ------------------------------------------------------- */

    const confirmationMailOptions = {
      from:
        `"Engix Tech Private Limited" <${process.env.MAIL_USER}>`,

      to:
        lead.email,

      subject:
        'We received your enquiry — Engix',

      html: `
        <!DOCTYPE html>

        <html>
          <body
            style="
              margin: 0;
              padding: 0;
              background: #f5f5f5;
              font-family: Arial, Helvetica, sans-serif;
              color: #111318;
            "
          >

            <div
              style="
                max-width: 650px;
                margin: 30px auto;
                background: #ffffff;
                border: 1px solid #e8e8e8;
              "
            >

              <div
                style="
                  padding: 28px 32px;
                  border-bottom: 1px solid #eeeeee;
                "
              >
                <strong
                  style="
                    font-size: 24px;
                  "
                >
                  ✣ Engix
                </strong>
              </div>


              <div
                style="
                  padding: 35px 32px;
                "
              >

                <h1
                  style="
                    margin: 0 0 18px;
                    font-size: 28px;
                  "
                >
                  Thank you for contacting Engix.
                </h1>

                <p
                  style="
                    margin: 0;
                    color: #666666;
                    font-size: 14px;
                    line-height: 1.8;
                  "
                >
                  Hi ${escapeHtml(lead.name)},
                </p>

                <p
                  style="
                    color: #666666;
                    font-size: 14px;
                    line-height: 1.8;
                  "
                >
                  We have received your enquiry regarding
                  <strong>
                    ${escapeHtml(lead.service)}
                  </strong>.
                </p>

                <p
                  style="
                    color: #666666;
                    font-size: 14px;
                    line-height: 1.8;
                  "
                >
                  Our team will review the information you provided
                  and get in touch with you to discuss the most
                  appropriate next step.
                </p>


                <div
                  style="
                    margin-top: 28px;
                    padding: 20px;
                    background: #f8f8f8;
                  "
                >

                  <strong
                    style="
                      display: block;
                      margin-bottom: 8px;
                    "
                  >
                    Need to contact us directly?
                  </strong>

                  <div
                    style="
                      color: #666666;
                      font-size: 13px;
                      line-height: 1.8;
                    "
                  >
                    Email: hello@engix.world
                    <br />

                    Phone: +91 7355985134
                  </div>

                </div>

              </div>


              <div
                style="
                  padding: 20px 32px;
                  border-top: 1px solid #eeeeee;
                  color: #999999;
                  font-size: 11px;
                "
              >
                Engix Tech Private Limited
              </div>

            </div>

          </body>
        </html>
      `
    };

    await transporter.sendMail(
      confirmationMailOptions
    );


    /* -------------------------------------------------------
       SUCCESS
    ------------------------------------------------------- */

    return res.status(201).json({
      success: true,

      message:
        'Thank you. Your enquiry has been received successfully.'
    });

  } catch (error) {
    console.error(
      'Lead submission error:',
      error
    );

    return res.status(500).json({
      success: false,

      message:
        'Unable to submit your enquiry right now. Please try again.'
    });
  }
});


/* =========================================================
   EMAIL HELPERS
========================================================= */

function createEmailRow(label, value) {
  return `
    <div
      style="
        display: table;
        width: 100%;
        padding: 12px 0;
        border-bottom: 1px solid #eeeeee;
      "
    >

      <div
        style="
          display: table-cell;
          width: 145px;
          color: #888888;
          font-size: 12px;
          vertical-align: top;
        "
      >
        ${escapeHtml(label)}
      </div>

      <div
        style="
          display: table-cell;
          color: #222222;
          font-size: 13px;
          font-weight: 600;
          vertical-align: top;
        "
      >
        ${escapeHtml(value)}
      </div>

    </div>
  `;
}


function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}


/* =========================================================
   START SERVER
========================================================= */

app.listen(
  PORT,
  '0.0.0.0',
  () => {
    console.log(
      `Engix server running on port ${PORT}`
    );
  }
);