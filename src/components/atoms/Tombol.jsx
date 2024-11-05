import React from "react";

const Tombol = ({ children, onClick}) => (
    <button
    style={{ color: "black", backgroundColor: "red" }}
    onClick={onClick}
    >
        {children}
    </button>
);

export default Tombol;  