import React, { useState, useEffect } from "react";
import { fetchNews } from "../../apis/news";

const FetchNews = () => {
  const [newsList, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then((item) => {
      setNews(item.data);
    });
  }, []);

  const getNews = () => {
    let news = [];
    let categoryStr = {
      focus: "이세돌 포커스",
      wakmusic: "주간 왁뮤차트",
      etc: "기타",
    };
    let displayTitle = {
      etc: false,
      wakmusic: false,
      focus: false,
    };

    newsList.forEach((item, i) => {
      let category;
      switch (item.time % 10) {
        case 0:
          category = "focus";
          break;
        case 1:
          category = "wakmusic";
          break;
        default:
          category = "etc";
      }

      news.push(
        <div className="news-area" key={i}>
          <a
            href={`https://cafe.naver.com/steamindiegame/${item.id}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`https://static.wakmusic.xyz/static/news/${item.time}.png`}
              alt=""
              className="news-image"
            />
            <div className="trapezoid-wrap">
              <div className="news-trapezoid" id={category} />
            </div>
            <div
              className={`news-category ${category === "focus" ? "" : "black"}`}
            >
              {categoryStr[category]}
            </div>
          </a>
        </div>
      );

      if (
        (category === "focus" && !displayTitle.focus) ||
        (category === "wakmusic" && !displayTitle.wakmusic) ||
        (category === "etc" && !displayTitle.etc)
      ) {
        news.push(
          <div className="news-area" key={i + 30}>
            <a
              href={`https://cafe.naver.com/steamindiegame/${item.id}`}
              target="_blank"
              rel="noreferrer"
              className="marquee-title"
            >
              {item.title}
            </a>
          </div>
        );
        displayTitle[category] = true;
      }
    });
    return news;
  };

  if (!newsList) return;
  return getNews();
};

export default FetchNews;
