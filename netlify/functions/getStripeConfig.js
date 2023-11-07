exports.handler = async (event, context) => {
  try {
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publishableKey: process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY,
      }),
    };
    return response;
  } catch (error) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
      }),
    };
    return response;
  }
};
