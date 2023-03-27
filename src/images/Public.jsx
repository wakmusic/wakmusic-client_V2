import React from "react";

const Public = ({on_off}) => {
    return on_off ? (
        <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="12" r="12" fill="white"/>
            <path
                d="M9 10V8C9 6.34315 10.3431 5 12 5H12.5C13.8807 5 15 6.11929 15 7.5V7.5"
                stroke="#8C95AF"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <rect
                x="6.75"
                y="10.75"
                width="10.5"
                height="7.5"
                rx="1.25"
                fill="#8C95AF"
                stroke="#8C95AF"
                strokeWidth="1.5"
            />
            <path
                d="M12 15V13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    ) : (
        <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="12" r="12" fill="white"/>
            <path
                d="M9 10V8C9 6.34315 10.3431 5 12 5V5C13.6569 5 15 6.34315 15 8V10"
                stroke="#202F61"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <rect
                x="6.75"
                y="10.75"
                width="10.5"
                height="7.5"
                rx="1.25"
                fill="#202F61"
                stroke="#202F61"
                strokeWidth="1.5"
            />
            <path
                d="M12 15V13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default Public;
