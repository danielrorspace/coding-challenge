import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectProps,
  FormControlProps,
} from "@mui/material";
import { FormikProps } from "formik";
import { Option } from "../types";

interface CustomSelectFieldProps {
  id: string;
  name: string;
  label: string;
  formik: FormikProps<any>;
  options: Option[];
  size?: "small" | "medium";
  loading?: boolean;
}

const CustomSelectField: React.FC<CustomSelectFieldProps> = ({
  id,
  name,
  label,
  formik,
  options,
  size = "medium",
  loading = false,
}) => {
  const errorText = formik.touched[name] ? formik.errors[name] : "";
  return (
    <FormControl
      fullWidth
      error={formik.touched[name] && Boolean(formik.errors[name])}
      sx={{ minHeight: "80px" }}
      size={size}
      disabled={loading}
    >
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        name={name}
        value={formik.values[name] || ""}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {typeof errorText === "string" ? errorText : ""}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomSelectField;
