import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Footer />
    </div>
  );
};

export default HomePage;
