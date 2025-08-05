exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body || '{}');
  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Missing required fields' };
  }

  // TODO: Add logic to send an email (via SendGrid, Mailgun, Resend, etc.)
  console.log("Contact form submission:", { name, email, message });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: 'Message received!' }),
  };
};