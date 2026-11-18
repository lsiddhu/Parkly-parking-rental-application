
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  // Prevent SMTP operations from waiting indefinitely
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 20000,

  // Reuse SMTP connections
  pool: true,
  maxConnections: 2,
  maxMessages: 50,
});

transporter.verify()
  .then(() => {
    console.log("Gmail SMTP server is ready.");
  })
  .catch((error) => {
    console.error("Gmail SMTP connection failed:", error.message);
  });

const sendEmail = async ({ to, subject, html }) => {
  const startedAt = Date.now();

  try {
    const info = await transporter.sendMail({
      from: `"Parkly" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent successfully:", {
      messageId: info.messageId,
      duration: `${Date.now() - startedAt}ms`,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    return true;
  } catch (error) {
    console.error("Email sending failed:", {
      message: error.message,
      code: error.code,
      command: error.command,
      duration: `${Date.now() - startedAt}ms`,
    });

    return false;
  }
};

module.exports = sendEmail;
