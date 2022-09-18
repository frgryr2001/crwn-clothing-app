import React from "react";
import "./Form-input.styles.scss";
const FormInput = ({ label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" {...props} required />

      {label && (
        <label
          htmlFor="name"
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
