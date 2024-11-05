import React from "react";

const InputFild = ({ label, type, value, onChange}) => {
    return (
        <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        />
    )
};
