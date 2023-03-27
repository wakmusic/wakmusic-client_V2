import React, {useEffect} from "react"
import Footer from "../Footer";
import logo from "../../images/enter.png";

const Timer = () => {
    const setTime = () => {
        const start = new Date("2021, 8, 26").getTime();
        const now = new Date().getTime();
        let result = Math.abs(now - start);
        let days = parseInt(result / (1000 * 60 * 60 * 24));
        let hours = parseInt(result % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = parseInt(result % (1000 * 60 * 60) / (1000 * 60));
        let seconds = parseInt(result % (1000 * 60) / 1000);
        document.getElementById('bb').innerText = `+${days}일`;
        document.getElementById('bd').innerText =
            `${hours}시간 ${minutes < 10 ? '0' + minutes : minutes}분 ${seconds < 10 ? '0' + seconds : seconds}초`;
    }

    useEffect(() => {
        const int = setInterval(setTime, 500);
        return () => {
            clearInterval(int);
        }
    })

    return (
        <div id="timer-wrap" className="fadein">
            <img src={logo} alt=""/>
            <div>이세계아이돌 결성일로부터</div>
            <div id="bb"/>
            <div id="bd"/>
            <Footer/>
        </div>
    )
}

export default Timer;