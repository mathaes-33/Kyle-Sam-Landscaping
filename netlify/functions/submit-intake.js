const webhook = process.env.INTAKE_WEBHOOK_URL;
const secret = process.env.MY_SECRET_API_KEY;

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const key = event.headers['x-api-key'];
  if (key !== secret) {
    return { statusCode: 403, body: 'Forbidden' };
  }

  const intakeData = JSON.parse(event.body || '{}');
  if (!intakeData.name || !intakeData.experience || !intakeData.preferences) {
    return { statusCode: 400, body: 'Incomplete intake data' };
  }

  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(intakeData),
  });

  return {
    statusCode: response.ok ? 200 : 500,
    body: JSON.stringify({ submitted: response.ok }),
  };
};