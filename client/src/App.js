import { Route, Routes } from "react-router-dom";
import BookingForm from "./components/form/BookingForm";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<BookingForm />} />
    </Routes>
  );
}

export default App;
