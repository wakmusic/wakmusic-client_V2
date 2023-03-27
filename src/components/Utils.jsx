import React from "react";

export const getDate = (date) => {
    date = String(date);
    let year = date.slice(0, 2);
    let month = date.slice(2, 4);
    let day = date.slice(4, 6);
    return `20${year}.${month}.${day}`;
}

export const Ellipse = () => {
    return (
        <div id="chart-ellipse">
            <svg width="698" height="629" viewBox="0 0 698 629" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="349" cy="349" r="349" fill="url(#paint0_linear_471_1199)"/>
                <circle cx="349" cy="349" r="349" fill="url(#paint1_linear_471_1199)"/>
                <circle cx="349" cy="349" r="349" fill="url(#paint2_linear_471_1199)" fillOpacity="0.2"/>
                <defs>
                    <linearGradient id="paint0_linear_471_1199" x1="141.049" y1="60.5104" x2="481.1"
                                    y2="372.437" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38E6FF" stopOpacity="0"/>
                        <stop offset="1" stopColor="#00C8D2"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_471_1199" x1="349" y1="-201" x2="468.5" y2="299"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F4FF81"/>
                        <stop offset="1" stopColor="#F4FF81" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_471_1199" x1="604.5" y1="625" x2="395.5" y2="349"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#202F61"/>
                        <stop offset="0.204344" stopOpacity="0.989583"/>
                        <stop offset="1" stopColor="#202F61" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export const setMetaTags = ({title, description}) => {
    document.querySelector('meta[name="title"]')
        ?.setAttribute("content", `${title}`);
    document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", description);
};