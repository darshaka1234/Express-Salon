import { AppBar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "white",
  boxShadow: "none",
  padding: "0  2rem",
});

export const SectionLine = styled("hr")({
  border: "1px solid black",
  padding: "auto",
  margin: "0 0 2rem 0",
});
