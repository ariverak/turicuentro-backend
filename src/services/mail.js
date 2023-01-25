import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (receptor, subject, text, html) => {
  const message = {
    to: receptor || 'diegosebsk@gmail.com', // receptor email
    from: 'contacto@turismoelencuentro.cl', // Use the email address or domain you verified above
    subject: subject || 'Sending with Twilio SendGrid is Fun', // subject email
    text: text || 'and easy to do anywhere, even with Node.js',
    html: html || '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  try {
    await sgMail.send(message);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
};