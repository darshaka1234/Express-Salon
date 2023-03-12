import { Route, Routes } from "react-router-dom";
import BookingForm from "./components/form/BookingForm";
import BookingPage from "./screens/BookingPage";
import HomePage from "./screens/HomePage";
import ServicePage from "./screens/ServicePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/test" element={<BookingForm />} />
    </Routes>
  );
}

export default App;
