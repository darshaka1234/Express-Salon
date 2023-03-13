import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchAppointments } from "./features/appointmentsSlice";
import AppointmentPage from "./screens/AppointmentPage";
import BookingPage from "./screens/BookingPage";
import HomePage from "./screens/HomePage";
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
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/appointments" element={<AppointmentPage />} />
    </Routes>
  );
}

export default App;
