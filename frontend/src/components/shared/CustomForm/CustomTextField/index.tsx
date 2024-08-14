import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";

interface CustomTextFieldProps {
  id: string;
  name: string;
  label: string;
  formik: FormikProps<any>;
  size?: "small" | "medium";
  loading?: boolean;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  id,
  name,
  label,
  formik,
  size = "medium",
  loading = false,
}) => {
  return (
    <TextField
      size={size}
      fullWidth
      id={id}
      name={name}
      label={label}
      value={formik.values[name] || ""}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] ? formik.errors[name] as string : ""}
      sx={{ minHeight: "90px" }}
      disabled={loading}
    />
  );
};

export default CustomTextField;
