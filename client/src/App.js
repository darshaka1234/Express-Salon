import { Route, Routes } from "react-router-dom";
import Drawer from "./components/navbar/Drawer";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<Drawer />} />
    </Routes>
  );
}

export default App;
