import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import { textData } from "../data/rowData";

const ServicePage = () => {
  return (
    <Box justifyContent={"center"} m="1.5rem">
      <NavBar />
      <img
        src="./assets/1.jpg"
        alt=""
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          maxWidth: "100%",
          maxHeight: "80%",
        }}
      />
      <Typography variant="h5">Woman Hair Cut</Typography>
      <hr />
      <Typography>{textData}</Typography>
    </Box>
  );
};

export default ServicePage;
