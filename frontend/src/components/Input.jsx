import PropTypes from "prop-types";
import React from "react";

const Input = ({
  type = "text",
  placeholder,
  name,
  className,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`border border-black px-5 py-3 ${className}`}
        {...props}
      />
      {error && (
        <span className="text-red-600 text-[14px] error-message">{error}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
