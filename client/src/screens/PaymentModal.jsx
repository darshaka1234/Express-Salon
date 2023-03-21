import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { userBooking } from "../features/userSlice";
import { removeaAllAppointment } from "../features/currentAppointmentSlice";

const PaymentModal = ({ amount }) => {
  const dispatch = useDispatch();
  const { _id, email } = useSelector((state) => state.user.user);
  const appointments = useSelector(
    (state) => state.currentAppointment.appointments
  );

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
      dispatch(userBooking({ _id, appointments }));
      dispatch(removeaAllAppointment());
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
    >
      <CustomButton variant="contained">Checkout</CustomButton>
    </StripeCheckout>
  );
};
export default PaymentModal;
