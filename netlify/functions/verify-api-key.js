const secret = process.env.MY_SECRET_API_KEY;

exports.handler = async function (event) {
  const key = event.headers['x-api-key'];

  if (key !== secret) {
    return {
      statusCode: 403,
      body: JSON.stringify({ authorized: false }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ authorized: true }),
  };
};