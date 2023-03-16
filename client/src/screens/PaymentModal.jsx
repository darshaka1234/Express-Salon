import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaymentModal = ({ email = "dars@gmail.com", amount = 100 }) => {
  const navigate = useNavigate();
  const publishableKey =
    "pk_test_51MllbxFrCWngvYq5E8ntlbXdLLgBR58maBbLppk88qE2ciWkJ6xUxxP2uPG4C7gHeC1Oh1dK66GsCc6cK5rLDC8Y00mxtYGSay";
  const handleToken = async (token) => {
    try {
      const response = await axios.post("http://localhost:5000/api/payment", {
        amount: amount,
        token: token,
      });
      console.log(response.data);
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Payment"
      panelLabel="Pay now"
      stripeKey={publishableKey}
      token={handleToken}
      amount={amount * 100}
      currency="USD"
      billingAddress={false}
      email={email}
    />
  );
};
export default PaymentModal;
