import React from "react";
import { useField } from "formik";

const CustomCheckbox = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={props.className}>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span style={{ color: "#999" }}>
          I agree to the Terms and Privacy Policy.
        </span>
      </div>
      {meta.touched && meta.error && (
        <div className="errorCheckbox">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomCheckbox;
