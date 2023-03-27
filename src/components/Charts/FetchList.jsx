import React, {useEffect} from "react"
import {Link} from "react-router-dom";
import UpdateTime from "./UpdateTime";
import ChartTypeList from "./ChartTypeList";
import Dropdown from "../Dropdown";
import Button from "../Button";
import {getDate} from "../Utils";


const FetchList = (props) => {
    const typeList = {
        "total": "지난주",
        "hourly": "1시간전",
        "daily": "하루전",
        "weekly": "지난주",
        "monthly": "지난달"
    }

    const determ = (item, current) => {
        if (item.last === 0) return <div className="chart-fluctuate new">NEW</div>;
        else if (item.last === current)
            return (
                <div className="chart-fluctuate none">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="5" width="10" height="2" rx="1" fill="#202F61"/>
                    </svg>
                </div>
            )
        else if (item.last > current)
            return (
                <div className="chart-fluctuate up">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.1745 2.06522L1.32682 7.69279C0.873029 8.3565 1.3483 9.2572 2.15231 9.2572L9.84768 9.2572C10.6517 9.2572 11.127 8.3565 10.6732 7.69279L6.82549 2.06522C6.4284 1.48443 5.5716 1.48443 5.1745 2.06522Z"
                            fill="#FA3168"/>
                    </svg>
                    <span className="chart-fluctuate-text">{item.last - current}</span>
                </div>
            )
        else if (item.last < current)
            return (
                <div className="chart-fluctuate down">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.1745 9.79269L1.32682 4.16512C0.873029 3.50141 1.3483 2.60071 2.15231 2.60071L9.84768 2.60071C10.6517 2.60071 11.127 3.50141 10.6732 4.16512L6.82549 9.79269C6.4284 10.3735 5.5716 10.3735 5.1745 9.79269Z"
                            fill="#00A3FF"/>
                    </svg>
                    <span className="chart-fluctuate-text">{current - item.last}</span>
                </div>
            )
    }

    const getChart = () => {
        let charts = [];
        props.data.forEach((item, i) => {
            charts.push(
                <div className={i % 2 === 0 ? "chart-item bg-dark fadein" : "chart-item fadein"} key={i}>
                    <div className="chart-rank">{i + 1}</div>
                    {determ(item, i + 1)}
                    <div className="chart-image-wrap">
                        <div className="chart-image-box">
                            <img src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`} alt=""
                                 className="chart-image"/>
                        </div>
                        <div className="chart-background">
                            <svg width="54" height="54" viewBox="0 0 44 44" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22" cy="22" r="22" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div className="chart-title-wrap">
                        <div className="chart-title">{item.title}</div>
                    </div>
                    <div className="chart-artist-wrap">
                        <div className="chart-artist">{item.artist}</div>
                    </div>
                    <div className="chart-last">{item.last === 0 ? "-" : item.last}위</div>
                    <div className="chart-date">{getDate(item.date)}</div>
                    <div className="chart-views">{item.views.toLocaleString('ko-KR')}회</div>
                    <div className="chart-play">
                        <Link to={`/player/${item.id}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="white"/>
                                <path
                                    d="M16.7632 11.1745L10.0497 6.58434C9.38598 6.13055 8.48528 6.60582 8.48528 7.40983L8.48528 16.5902C8.48528 17.3942 9.38598 17.8695 10.0497 17.4157L16.7632 12.8255C17.344 12.4284 17.344 11.5716 16.7632 11.1745Z"
                                    fill="#00F3F3"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            )
        })
        return charts;
    }

    useEffect(() => {
        const titles = document.getElementsByClassName("chart-title");
        for (let i = 0; i < titles.length; i++) {
            if (titles[i].scrollWidth > titles[i].clientWidth) {
                titles[i].className += " marquee-text"
            }
        }

        const artists = document.getElementsByClassName("chart-artist");
        for (let i = 0; i < artists.length; i++) {
            if (artists[i].scrollWidth > artists[i].clientWidth) {
                artists[i].className += " marquee-text"
            }
        }
    });

    return (
        <div className="charts-body">
            <Dropdown setType={props.setType} setData={props.setData} elements={ChartTypeList}/>
            <UpdateTime type={props.type}/>
            <Button data={props.data} shuffle={[...props.data]}/>
            <div className="charts-label">
                <div id="charts-rank">순위</div>
                <div id="charts-info">곡정보</div>
                <div id="charts-before">{typeList[props.type]}</div>
                <div id="charts-date">발매일</div>
                <div id="charts-views">{props.type === "total" ? "조회수" : "증가량"}</div>
            </div>

            <div className="charts-wrap fadein">
                {getChart()}
            </div>
        </div>
    )
}

export default FetchList;