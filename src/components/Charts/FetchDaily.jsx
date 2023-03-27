import React, { useState, useEffect } from "react";
import { getCharts } from "../../apis/charts";
import { Link } from "react-router-dom";

const FetchDaily = () => {
  const [chartList, setChart] = useState([]);

  useEffect(() => {
    getCharts({ type: "daily", limit: 10 }).then((item) => {
      setChart(item.data);
    });
  }, []);

  const getChart = () => {
    let charts = [];
    chartList.forEach((item, i) => {
      charts.push(
        <div className="small-area" key={i}>
          <div className="small-pos">{i + 1}</div>
          <div className="small-title">{item.title}</div>
          <div className="small-artist">{item.artist}</div>
          <div className="small-views">
            {item.views.toLocaleString("ko-KR")}
          </div>
          <div className="small-play">
            <Link to={`/player/${item.id}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="white" />
                <path
                  d="M16.7632 11.1745L10.0497 6.58434C9.38598 6.13055 8.48528 6.60582 8.48528 7.40983L8.48528 16.5902C8.48528 17.3942 9.38598 17.8695 10.0497 17.4157L16.7632 12.8255C17.344 12.4284 17.344 11.5716 16.7632 11.1745Z"
                  fill="#00F3F3"
                />
              </svg>
            </Link>
          </div>
        </div>
      );
    });
    return charts;
  };

  if (!chartList) return;
  return getChart();
};

export default FetchDaily;
