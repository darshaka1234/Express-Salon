import { Dialog, TextField, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "../components/form/validationSchemas";
import { userLogin } from "../features/userSlice";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { CardButton, Title } from "../styles/typos";
import { CustomButton } from "../styles/buttons";

const LogInModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const location = useLocation();
  const values = queryString.parse(location.search);
  const destination =
    values.data === "/appointments" ? values.data : "/booking";

  useEffect(() => {
    handleClick();
  }, []);

  const handleSubmit = () => {
    dispatch(userLogin(formik.values));
    navigate(destination);
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
