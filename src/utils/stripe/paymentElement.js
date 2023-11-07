import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm.js";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import Auth0Context from "../auth0/auth0Context.js";

export default function PaymentElement() {
  const { userProfile } = useContext(Auth0Context);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.get(".netlify/functions/getStripeConfig").then(async (response) => {
      const { publishableKey } = response.data;
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    userProfile &&
      axios
        .post(".netlify/functions/createPaymentIntent", userProfile)
        .then(async (response) => {
          const { client_secret } = response.data;
          setClientSecret(client_secret);
        });
  }, [userProfile]);

  return (
    <>
      {userProfile && clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </>
  );
}
