import { Dialog, TextField, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardButton } from "../components/carousel/Card";
import { LoginValidationSchema } from "../components/form/validationSchemas";
import { CustomButton } from "../components/navbar/NavBar";
import { Title } from "../components/SectionDivider";

const LogInModal = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    handleClick();
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost/5000/users", formik.values)
      .then(navigate("/booking"));
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: handleSubmit,
  });

  const renderTextField = (name, label) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        {...formik.getFieldProps(name)}
        fullWidth
        size="small"
      />
      {formik.touched[name] && formik.errors[name] ? (
        <Typography color="error">{formik.errors[name]}</Typography>
      ) : null}
    </div>
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <Dialog
        open={open}
        onClose={handleClick}
        sx={{ justifyContent: "center" }}
      >
        <Title m="auto">Log In</Title>
        <Stack spacing={2} p="2rem" minWidth={{ xs: "15rem", sm: "30rem" }}>
          {renderTextField("email", "Email")}
          {renderTextField("password", "Password")}
          <CustomButton
            variant={"contained"}
            type="submit"
            onClick={handleSubmit}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Login
          </CustomButton>
          <CustomButton variant={"outlined"} onClick={handleClick}>
            Cancel
          </CustomButton>
          <Stack direction="row" justifyContent={"center"}>
            <Typography>Don't have an account?</Typography>
            <CardButton variant="body1" onClick={() => navigate("/register")}>
              Register
            </CardButton>
          </Stack>
        </Stack>
      </Dialog>
    </form>
  );
};

export default LogInModal;
