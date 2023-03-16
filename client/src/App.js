import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchAppointments } from "./features/appointmentsSlice";
import AppointmentPage from "./screens/AppointmentPage";
import BookingPage from "./screens/BookingPage";
import HomePage from "./screens/HomePage";
import LogInModal from "./screens/LogInModal";
import PaymentModal from "./screens/PaymentModal";
import RegisterModal from "./screens/RegisterModal";
import ServicePage from "./screens/ServicePage";
import SuccessPage from "./screens/SuccessPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/login" element={<LogInModal />} />
      <Route path="/register" element={<RegisterModal />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/payment" element={<PaymentModal />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/appointments" element={<AppointmentPage />} />
    </Routes>
  );
}

export default App;
