import React, { useEffect, useState } from "react";
import { useFormik, Field, FormikProvider, FormikHelpers } from "formik";
import * as yup from "yup";
import { Box, Button, FormHelperText } from "@mui/material";
import PhoneNumberInput from "./PhoneNumberInput";
import CustomTextField from "./CustomTextField";
import CustomSelectField from "./CustomeSelectField";
import { useNavigate, useParams } from "react-router-dom";
import { FormValues, CustomFormProps, Option } from "./types";

const CustomForm: React.FC<CustomFormProps> = ({ action = "add" }) => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .matches(
        /^[A-Za-z\s]+$/,
        "First name can only contain letters and spaces"
      )
      .min(2, "First name must be at least 2 characters long")
      .max(50, "First name can't be longer than 50 characters")
      .required("First name is required"),
    lastName: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, "Last name can only contain letters and spaces")
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name can't be longer than 50 characters")
      .required("Last name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    age: yup
      .number()
      .required("Age is required")
      .min(1, "Age must be at least 1")
      .max(100, "Age can't be more than 100"),
    phoneNumber: yup.string().required("Phone number is required"),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const raw = JSON.stringify(values);
      const requestOption = {
        method: action === "edit" ? "PUT" : "POST",
        body: raw,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url =
        action === "edit"
          ? `${process.env.REACT_APP_BASE_URL}/contact/${id}`
          : `${process.env.REACT_APP_BASE_URL}/contact`;
      const response = await fetch(url, requestOption);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      await response.json();
      navigate("/");
    } catch (error) {
      console.log("Error creating contact:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const ageOptions: Option[] = Array.from({ length: 100 }, (_, i) => ({
    value: i + 1,
    label: (i + 1).toString(),
  }));

  useEffect(() => {
    const fetchContacts = async () => {
      if (action === "edit" && id) {
        if (id) {
          try {
            setLoading(true);
            const response = await fetch(
              `${process.env.REACT_APP_BASE_URL}/contact/${id}`
            );
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            if (data?.status === 200 && data?.data?._id) {
              const { firstName, lastName, email, phoneNumber, age } =
                data.data;
              formik.setValues({
                firstName,
                lastName,
                email,
                phoneNumber,
                age,
              });
            }
          } catch (error) {
            console.log("Error fetching contact:", error);
          } finally {
            setLoading(false);
          }
        } else {
          navigate("/");
        }
      }
    };

    fetchContacts();
  }, [action, id, navigate]);

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <CustomTextField
          id="firstName"
          name="firstName"
          label="First Name"
          formik={formik}
          size="small"
          loading={loading}
        />
        <CustomTextField
          id="lastName"
          name="lastName"
          label="Last Name"
          formik={formik}
          size="small"
          loading={loading}
        />
        <CustomTextField
          id="email"
          name="email"
          label="Email"
          formik={formik}
          size="small"
          loading={loading}
        />
        <CustomSelectField
          id="age"
          name="age"
          label="Age"
          formik={formik}
          options={ageOptions}
          size="small"
          loading={loading}
        />
        <Field
          name="phoneNumber"
          component={PhoneNumberInput}
          disabled={loading}
        />
        <Box minHeight="30px">
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <FormHelperText error>{formik.errors.phoneNumber}</FormHelperText>
          )}
        </Box>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting || loading}
        >
          Submit
        </Button>
      </form>
    </FormikProvider>
  );
};

export default CustomForm;
