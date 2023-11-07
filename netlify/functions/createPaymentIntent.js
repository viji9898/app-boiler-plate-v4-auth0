const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const userProfile = body.profileData;
  const { userEmail, programs, userRef, userId } = userProfile;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
      currency: "gbp",
      automatic_payment_methods: {
        enabled: true,
      },
      receipt_email: userEmail,
      metadata: {
        userRef,
        userId,
        programId: "345678907890",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(paymentIntent),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
