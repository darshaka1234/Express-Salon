import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/form/Cart";
import { fetchUsers } from "./features/allUsersSlice";
import { fetchServices } from "./features/serviceSlice";
import AppointmentPage from "./screens/AppointmentPage";
import BookingPage from "./screens/BookingPage";
import HomePage from "./screens/HomePage";
import LogInModal from "./screens/LogInModal";
import RegisterModal from "./screens/RegisterModal";
import ServicePage from "./screens/ServicePage";
import SuccessPage from "./screens/SuccessPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/login" element={<LogInModal />} />
      <Route path="/register" element={<RegisterModal />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/appointments" element={<AppointmentPage />} />
    </Routes>
  );
}

export default App;
