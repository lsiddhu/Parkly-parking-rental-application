
require("dotenv").config();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  const startedAt = Date.now();

  try {
    const { data, error } = await resend.emails.send({
      from: "Parkly <onboarding@resend.dev>",
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Email sending failed:", {
        message: error.message,
        duration: `${Date.now() - startedAt}ms`,
      });

      return false;
    }

    console.log("Email sent successfully:", {
      messageId: data.id,
      duration: `${Date.now() - startedAt}ms`,
    });

    return true;
  } catch (error) {
    console.error("Email sending failed:", {
      message: error.message,
      duration: `${Date.now() - startedAt}ms`,
    });

    return false;
  }
};

module.exports = sendEmail;
