import React from "react";

const Arrow = ({ArrowPower}) => {
    return ArrowPower ? (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.75737 7.24263L9 11.4853L13.2426 7.24263"
                stroke="#080F34"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ) : (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.75737 10.7574L9 6.51473L13.2426 10.7574"
                stroke="#080F34"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Arrow;
