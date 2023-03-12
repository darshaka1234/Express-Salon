import Button from "@mui/material/Button";

const CustomeButton = ({ text, variant, handleClick = () => {} }) => {
  const buttonStyles = {
    "&.MuiButton-root": {
      fontFamily: "Poppins",
      fontSize: "1rem",
      height: "3rem",
      textTransform: "none",
    },
    "&.MuiButton-contained": {
      backgroundColor: "black",
    },
    "&.MuiButton-outlined": {
      color: "black",
      border: "1px black solid",
    },
  };

  return (
    <Button variant={variant} sx={buttonStyles} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default CustomeButton;
