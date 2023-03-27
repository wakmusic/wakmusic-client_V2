import React, {useState, useEffect} from "react"
import InfiniteScroll from "./InfiniteScroll";


const FetchAlbums = () => {
    const [type, setType] = useState("month");
    const [time, setTime] = useState("");

    const getCurrentTime = () => {
        let now = new Date();
        let month = now.getMonth() + 1
        let time = now.getFullYear() + "" + (month < 10 ? "0" + month : month);
        let result;
        if (type === "month") result = time.slice(0, 4) + "." + time.slice(4);
        else result = time.slice(0, 4);
        return result;
    }

    useEffect(() => {
        setTime(getCurrentTime());
    }, [type])

    const changeType = (type) => {
        let rev;
        if (type === "month") rev = "year";
        else rev = "month";
        setType(type);
        setTime(getCurrentTime());

        const el = document.getElementById(type);
        const revEl = document.getElementById(rev);
        el.className = "type-selected";
        revEl.className = "";

        document.getElementById('arrow-left-albums').className = "arrow-active";
        document.getElementById('arrow-right-albums').className = "arrow-inactive";
    }

    const prevTime = () => {
        const timeObj = document.getElementById('albums-category').innerText;
        if (type === "month") {
            if (time === "2015.01") {
                return;
            }

            let year = timeObj.split(".")[0];
            let month = timeObj.split(".")[1];
            if (month === "01") {
                year -= 1;
                month = "12";
            } else {
                month--;
            }
            setTime(year + "." + (month < 10 ? "0" + month : month));

            if (time === "2015.02") document.getElementById('arrow-left-albums').className = "arrow-inactive";

        } else {
            if (time === "2015") {
                return;
            }

            let year = timeObj;
            year -= 1;
            setTime("" + year);

            if (time === "2016") document.getElementById('arrow-left-albums').className = "arrow-inactive";
        }

        if (time - 1 !== getCurrentTime()) {
            document.getElementById('arrow-right-albums').className = "arrow-active";
        }
    }

    const nextTime = () => {
        const timeObj = document.getElementById('albums-category').innerText;
        if (type === "month") {
            if (time === getCurrentTime()) {
                return;
            }

            let year = timeObj.split(".")[0];
            let month = timeObj.split(".")[1];
            if (month === "12") {
                year++;
                month = "1";
            } else {
                month++;
            }
            setTime(year + "." + (month < 10 ? "0" + month : month));
            if (year + "." + month === getCurrentTime()) document.getElementById('arrow-right-albums').className = "arrow-inactive";

        } else {
            if (time === getCurrentTime().slice(0, 4)) {
                return;
            }

            let year = timeObj;
            year++;
            setTime("" + year);

            if (year + "" === getCurrentTime().slice(0, 4)) document.getElementById('arrow-right-albums').className = "arrow-inactive";
        }

        if (time === "2015.01" || time === "2015") {
            document.getElementById('arrow-left-albums').className = "arrow-active";
        }
    }

    if (!time) return <div className="loading"/>;
    return (
        <>
            <div id="select-type">
                <div id="month" className="type-selected" onClick={() => changeType("month")}>월별</div>
                <div id="year" onClick={() => changeType("year")}>연도별</div>
            </div>
            <div className="select-bar-arrow arrow-albums">
                <div className="arrow-inactive" id="arrow-right-albums" onClick={() => nextTime()}>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.12403 1.45753L1.58156 9L9.12403 16.5425" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="arrow-active" id="arrow-left-albums" onClick={() => prevTime()}>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.12403 1.45753L1.58156 9L9.12403 16.5425" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="albums-category-title" id="albums-category">{time}</div>
            <div className="albums-body fadein">
                <InfiniteScroll type={type} time={time.replace(".", "")}/>
            </div>
        </>
    )
}

export default FetchAlbums;