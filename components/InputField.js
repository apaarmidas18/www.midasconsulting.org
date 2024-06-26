import React from "react";

const InputField = ({
  label,
  value,
  type,
  placeholder,
  onChange,
  id,
  name,
  onClick,
  disabled,
  style,
  maxlength,

  errors,
  touched,
}) => {
  return (
    <>
      <div className={label === "Request Time Off" ? "col-md-2" : "col-md-3"}>
        <label className="m-2 text-dark" style={style}>
          {label}
        </label>
        <input
          type={type}
          class="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required
          onClick={onClick}
          disabled={disabled}
          style={style}
          maxlength={maxlength}
        />
      </div>
    </>
  );
};

export default InputField;
