const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

exports.handler = async (event) => {
  try {
    const product = await stripe.products.retrieve("prod_Owxj2MP6rfW9Qc");

    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
