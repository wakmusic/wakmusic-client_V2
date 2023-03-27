import React from "react";
import textLogo from "../images/logo-text.png";


function Footer() {
    return (
        <div id="footer">
            <div id="footer-logo"><img src={textLogo} alt=""/></div>
            <div id="footer-text">WAKTAVERSE Music · 인천광역시 송도 왁엔터로 7-24길(왁엔터테인먼트 사옥 19층 왁타버스뮤직 웹사이트 개발부서) · 대표이사
                우왁굳
            </div>
        </div>
    )
}

export default Footer;