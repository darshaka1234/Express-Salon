import { Dialog, TextField, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardButton } from "../components/carousel/Card";
import { RegisterValidationSchema } from "../components/form/validationSchemas";
import { CustomButton } from "../components/navbar/NavBar";
import { Title } from "../components/SectionDivider";
import { userRegister } from "../features/userSlice";

const RegisterModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    handleClick();
  }, []);

  const handleSubmit = () => {
    console.log(formik.values);
    dispatch(userRegister(formik.values));
    navigate("/login");
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      password: "",
      confPassword: "",
    },
    validationSchema: RegisterValidationSchema,
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
        <Title m="auto">Register</Title>
        <Stack spacing={2} p="2rem" minWidth={{ xs: "15rem", sm: "30rem" }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {renderTextField("firstName", "First Name")}
            {renderTextField("lastName", "Last Name")}
          </Stack>
          {renderTextField("email", "Email")}
          {renderTextField("telephone", "Telephone")}
          {renderTextField("password", "Password")}
          {renderTextField("confPassword", "Confirm Password")}
          <CustomButton
            variant={"contained"}
            type="submit"
            onClick={handleSubmit}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Register
          </CustomButton>
          <CustomButton variant={"outlined"} onClick={handleClick}>
            Cancel
          </CustomButton>
          <Stack direction="row" justifyContent={"center"}>
            <Typography>Already have an account?</Typography>
            <CardButton variant="body1" onClick={() => navigate("/login")}>
              Log in
            </CardButton>
          </Stack>
        </Stack>
      </Dialog>
    </form>
  );
};

export default RegisterModal;
