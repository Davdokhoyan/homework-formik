import React from "react";

import { Formik, useFormik } from "formik";
import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  actions.resetForm();
};

function BasicForm() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      FirstName: "",
      lastName: "",
      TeamName_name: "",
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">First Name</label>
        <CustomInput
          id="name"
          name="FirstName"
          type="text"
          placeholder="First Name"
          vakues={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}

        <label htmlFor="name">Last Name</label>
        <CustomInput
          id="name"
          name="Last Name"
          type="text"
          placeholder="Last Name"
          values={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}

        <label htmlFor="name">Team Name/Number</label>
        <CustomInput
          id="name"
          name="Team Name"
          type="text"
          placeholder="Team Name/Number"
          values={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email Address</label>
        <CustomInput
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          values={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="password">Password</label>
        <CustomInput
          id="password"
          name="password"
          type="password"
          placeholder="Create a password"
          values={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched && (
          <p className="error">{errors.password}</p>

        )}

        <div>
          <CustomCheckbox/>
          <button className="sign_btn" disabled={isSubmitting} type="submit">
            Sign Up
          </button>
          <span>Or</span>
          <button className="google_btn" disabled={isSubmitting} type="submit">
          Continue with Google
          </button>
        </div>
      </form>
  );
}

export default BasicForm;
