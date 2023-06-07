import React from "react";

const InputField = ({
  label,
  value,
  type,
  placeholder,
  onChange,
  id,
  name,
}) => {
  return (
    <div className="col-md-3">
      <label className="m-2 text-dark">{label}</label>
      <input
        type={type}
        class="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required
      />
    </div>
  );
};

export default InputField;
