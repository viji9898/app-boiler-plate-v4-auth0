const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

exports.handler = async (event) => {
  const endpointSecret =
    "whsec_50370bb020c1cfd94181ff9b922c11839376c29d1dbfe898698f825b6195b94b";

  const sig = event.headers["stripe-signature"];

  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      endpointSecret
    );

    // Handle the event
    switch (stripeEvent.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = stripeEvent.data.object;
        const { userRef } = paymentIntentSucceeded.metadata;
        console.log(userRef);
        await fetch(
          `${process.env.REACT_APP_API_SERVER_URL}/.netlify/functions/updateProfile`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ userRef }),
          }
        );
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${stripeEvent.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Event received" }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Webhook Error: ${err.message}` }),
    };
  }
};
