import React from "react";
import youtube from "../../images/youtube.png";
import twitch from "../../images/twitch.png";
import instagram from "../../images/instagram.png";
import { useNavigate } from "react-router-dom";
import oldImage from "../../images/mangnyangnyang.png";

const ArtistDetail = (props) => {
  const navigate = useNavigate();
  const moveArtist = (t) => {
    if (t === "prev") {
      if (props.index === 0) {
        props.setIndex(props.artists.length - 1);
        props.selectArtist(props.artists.length - 1);
      } else {
        props.setIndex(props.index - 1);
        props.selectArtist(props.index - 1);
      }
    } else {
      if (props.index === props.artists.length - 1) {
        props.setIndex(0);
        props.selectArtist(0);
      } else {
        props.setIndex(props.index + 1);
        props.selectArtist(props.index + 1);
      }
    }
  };

  const go = (e) => {
    if (e.target.value === "700") navigate("/artist/lilpaaaaaa");
  };

  const getArtistDetail = () => {
    let item = props.artists[props.index];
    if (!item) return;
    return (
      <div id="artist-body" className="fadein">
        <div className="artist-line-wrap">
          <div id="line-wrap-left">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 9C7.77614 9 8 8.77614 8 8.5C8 8.22386 7.77614 8 7.5 8C6.11929 8 5 9.11929 5 10.5V13.5C5 15.1569 6.34315 16.5 8 16.5C9.65685 16.5 11 15.1569 11 13.5C11 11.8431 9.65685 10.5 8 10.5C7.23165 10.5 6.53076 10.7889 6 11.2639V10.5C6 9.67157 6.67157 9 7.5 9Z"
                fill="#080F34"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C13.1193 8 12 9.11929 12 10.5V13.5C12 15.1569 13.3431 16.5 15 16.5C16.6569 16.5 18 15.1569 18 13.5C18 11.8431 16.6569 10.5 15 10.5C14.2316 10.5 13.5308 10.7889 13 11.2639V10.5C13 9.67157 13.6716 9 14.5 9Z"
                fill="#080F34"
              />
            </svg>
          </div>
          <div id="line-wrap-right">
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 1C10.2239 1 10 0.776142 10 0.5C10 0.223858 10.2239 0 10.5 0C11.8807 0 13 1.11929 13 2.5V5.5C13 7.15685 11.6569 8.5 10 8.5C8.34315 8.5 7 7.15685 7 5.5C7 3.84315 8.34315 2.5 10 2.5C10.7684 2.5 11.4692 2.78885 12 3.26389V2.5C12 1.67157 11.3284 1 10.5 1Z"
                fill="#080F34"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 1C3.22386 1 3 0.776142 3 0.5C3 0.223858 3.22386 0 3.5 0C4.88071 0 6 1.11929 6 2.5V5.5C6 7.15685 4.65685 8.5 3 8.5C1.34315 8.5 -4.76837e-07 7.15685 -4.76837e-07 5.5C-4.76837e-07 3.84315 1.34315 2.5 3 2.5C3.76835 2.5 4.46924 2.78885 5 3.26389V2.5C5 1.67157 4.32843 1 3.5 1Z"
                fill="#080F34"
              />
            </svg>
          </div>
        </div>
        <div className="artist-line" id={`artist-${item.id}`}>
          {item.title}
        </div>
        <div className="artist-image-wrap">
          {item.id === "viichan" && (
            <img src={oldImage} alt="" id="old-viichan" />
          )}
          <img
            src={`https://static.wakmusic.xyz/static/artist/full/${item.id}.png`}
            alt=""
            className="artist-image"
          />
        </div>
        <div className="artist-arrow">
          <div
            className="arrow-active"
            id="artist-prev"
            onClick={() => moveArtist("prev")}
          >
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.34315 1.34315L1.68629 7L7.34315 12.6569"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="arrow-active"
            id="artist-next"
            onClick={() => moveArtist("next")}
          >
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.65685 1.34315L7.31371 7L1.65685 12.6569"
                stroke="#8C95AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="artist-name-background">{item.id.toUpperCase()}</div>
        <div className="artist-name">{item.name}</div>
        <div className="intro-wrap">
          <div className="artist-introduction">{item.description}</div>
        </div>
        <div className="artist-divider" />
        <div className="artist-account">
          {item.youtube ? (
            <a href={item.youtube} target="_blank" rel="noreferrer">
              <img src={youtube} alt="" className="artist-sns" />
            </a>
          ) : null}
          {item.twitch ? (
            <a href={item.twitch} target="_blank" rel="noreferrer">
              <img src={twitch} alt="" className="artist-sns" />
            </a>
          ) : null}
          {item.instagram ? (
            <a href={item.instagram} target="_blank" rel="noreferrer">
              <img src={instagram} alt="" className="artist-sns" />
            </a>
          ) : null}
        </div>
        {item.id === "lilpa" && (
          <div id="ee">
            <input type="text" onChange={go} />
          </div>
        )}
      </div>
    );
  };

  return getArtistDetail();
};

export default ArtistDetail;
