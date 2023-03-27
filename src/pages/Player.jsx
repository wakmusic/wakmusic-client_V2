import React, { useEffect, useState } from "react";
import { getSearchSongs } from "../apis/songs";
import Footer from "../components/Footer";
import YouTube from "react-youtube";
import PlayerInfo from "../components/Player/PlayerInfo";
import Lyrics from "../components/Player/Lyrics";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FetchTracks from "../components/Player/FetchTracks";

function Player() {
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState(useParams().id);
  const [data, setData] = useState({});
  const [duration, setDuration] = useState(0);
  const prev = location.state?.prev ? location.state.prev : [];
  const next = location.state?.next ? location.state.next : [];

  useEffect(() => {
    if (location.state) {
      setData(location.state.current);
      setId(location.state.current.id);
    } else {
      getSearchSongs({ type: "ids", sort: "new", keyword: id }).then((item) => {
        setData(item.data[0]);
      });
    }
  }, [id, location.state]);

  const movePrev = () => {
    if (prev.length > 0) {
      const current = prev[prev.length - 1];
      prev.pop();
      next.unshift(data);
      navigate("/player/" + current.id, {
        state: {
          current: current,
          prev: prev,
          next: next,
        },
      });
    }
  };

  const moveNext = () => {
    if (next.length > 0) {
      const current = next[0];
      next.shift();
      prev.push(data);
      navigate("/player/" + current.id, {
        state: {
          current: current,
          prev: prev,
          next: next,
        },
      });
    }
  };

  const time = (secs) => {
    let hour = parseInt(secs / 3600);
    let min = parseInt((secs % 3600) / 60);
    let sec = secs % 60;
    sec = sec < 10 ? "0" + parseInt(sec) : parseInt(sec);

    return hour === 0
      ? `${min}:${sec}`
      : `${hour}:${min < 10 ? "0" + min : min}:${sec}`;
  };

  const onPlayerReady = (event) => {
    const target = event.target;
    target.playVideo();
    target.unMute();
    const duration = target.getDuration();
    setDuration(Math.ceil(duration) + 1);

    document.getElementById("player-duration").innerHTML = time(
      Math.ceil(duration)
    );
    document.getElementById("player-time").innerHTML = time(0);
    const progress = document.getElementById("player-progress");
    progress.value = 0;
    progress.style.background = "#ffffff66";
    document
      .getElementsByClassName("lyrics-wrap")[0]
      ?.scrollTo({ top: 0, behavior: "smooth" });

    if (
      target.getPlayerState() % 2 === 0 ||
      target.getPlayerState() === 3 ||
      target.getPlayerState() === -1
    ) {
      document.getElementById("player-pause").style.display = "none";
      document.getElementById("player-resume").style.display = "inline";
    } else {
      document.getElementById("player-pause").style.display = "inline";
      document.getElementById("player-resume").style.display = "none";
    }
  };

  const sleep = async (ms) => {
    return new Promise((r) => setTimeout(r, ms));
  };

  const onPlay = async (event) => {
    const target = event.target;
    const progress = document.getElementById("player-progress");

    let lyricsEnd = 0;
    let lyricsStart = 0;
    while (true) {
      if (target.getPlayerState() === 0 && next.length === 0) {
        document.getElementById("player-pause").style.display = "none";
        document.getElementById("player-resume").style.display = "none";
        document.getElementById("player-replay").style.display = "inline";
      } else if (target.getPlayerState() % 2 === 1) {
        document.getElementById("player-pause").style.display = "inline";
        document.getElementById("player-resume").style.display = "none";
        document.getElementById("player-replay").style.display = "none";
      } else {
        document.getElementById("player-pause").style.display = "none";
        document.getElementById("player-resume").style.display = "inline";
        document.getElementById("player-replay").style.display = "none";
      }

      target.setVolume(document.getElementById("volume-progress").value);
      let current = target.getCurrentTime();
      document.getElementById("player-time").innerHTML = time(
        Math.ceil(current)
      );

      progress.value = (current / duration) * 100;
      progress.style.background =
        "linear-gradient(to right, #202F61 0%, #202F61 " +
        progress.value +
        "%, #ffffff66 " +
        progress.value +
        "%, #ffffff66 100%)";

      const lyrics = document.getElementsByClassName("lyrics-wrap")[0];
      if (
        lyrics &&
        (lyricsEnd - 0.7 <= current || lyricsStart - 0.7 >= current)
      ) {
        // eslint-disable-next-line no-loop-func
        Array.from(lyrics.children).forEach((item) => {
          item.className = "lyrics-text";
          if (
            parseFloat(item.id) - 0.7 <= current &&
            parseFloat(item.ariaLabel) - 0.7 >= current
          ) {
            item.className = "lyrics-text lyrics-selected";
            lyrics.scrollTo({ top: item.offsetTop - 50, behavior: "smooth" });
            lyricsEnd = parseFloat(item.ariaLabel);
            lyricsStart = parseFloat(item.id);
          }
        });
      }

      if (
        time(Math.ceil(current)) === time(duration) ||
        target.getPlayerState() === 0
      ) {
        moveNext();
      }

      await sleep(300);
    }
  };

  if (!data) return navigate("/");
  return (
    <div className="container fadein" id="dark-container">
      <div id="player-area">
        <YouTube
          videoId={id}
          id="player"
          opts={{
            playerVars: {
              autoplay: 1,
              rel: 0,
            },
          }}
          onReady={(e) => onPlayerReady(e)}
          onPlay={(e) => onPlay(e)}
        />
        <div id="player-section">
          <PlayerInfo
            data={data}
            duration={duration}
            movePrev={movePrev}
            moveNext={moveNext}
          />
        </div>
        <div id="playlist-section">
          <div id="playlist-title">다음 곡</div>
          {/*<div className="play-add">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <line x1="8.25" y1="2.75" x2="8.25" y2="13.25" stroke="#202F61" strokeWidth="2"
                                  strokeLinecap="round"/>
                            <line x1="13.25" y1="8.25" x2="2.75" y2="8.25" stroke="#202F61" strokeWidth="2"
                                  strokeLinecap="round"/>
                        </svg>
                        <div id="play-all-text">노래추가</div>
                    </div>
                    <div className="play-random">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0 10.0004C0 10.5527 0.447715 11.0004 1 11.0004H4.38128C5.24214 11.0004 6.00642 10.4496 6.27865 9.63288L7.8228 5.00043H10C10.5523 5.00043 11 4.55271 11 4.00043C11 3.44814 10.5523 3.00043 10 3.00043H7.8228C6.96194 3.00043 6.19766 3.55129 5.92543 4.36797L4.38128 9.00043H1C0.447715 9.00043 0 9.44814 0 10.0004Z"
                                  fill="#E3E5EB"/>
                            <path
                                d="M13.72 4.21521L10.5891 6.35584C10.2573 6.58274 9.80694 6.3451 9.80694 5.94309L9.80694 1.66183C9.80694 1.25982 10.2573 1.02218 10.5891 1.24908L13.72 3.38971C14.0104 3.58826 14.0104 4.01666 13.72 4.21521Z"
                                fill="#E3E5EB"/>
                            <path d="M6 3.00043L7.5 7.50043" stroke="#202F61" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M5 7.00043L6.5 11.5004" stroke="#202F61" strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0 4.00043C0 3.44814 0.447715 3.00043 1 3.00043H4.38128C5.24214 3.00043 6.00642 3.55129 6.27865 4.36797L7.8228 9.00043H10C10.5523 9.00043 11 9.44814 11 10.0004C11 10.5527 10.5523 11.0004 10 11.0004H7.8228C6.96194 11.0004 6.19766 10.4496 5.92543 9.63288L4.38128 5.00043H1C0.447715 5.00043 0 4.55271 0 4.00043Z"
                                  fill="#E3E5EB"/>
                            <path
                                d="M13.72 9.78565L10.5891 7.64501C10.2573 7.41812 9.80694 7.65576 9.80694 8.05776L9.80694 12.339C9.80694 12.741 10.2573 12.9787 10.5891 12.7518L13.72 10.6111C14.0104 10.4126 14.0104 9.9842 13.72 9.78565Z"
                                fill="#E3E5EB"/>
                        </svg>

                        <div id="play-random-text">랜덤재생</div>
                    </div>*/}
          <div className="albums-label">
            <div id="albums-info">곡정보</div>
            <div id="albums-date">발매일</div>
          </div>
          <div className="artist-albums-body">
            <FetchTracks current={data} prev={prev} next={next} />
          </div>
        </div>
        <div id="lyrics-section">
          <Lyrics id={id} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Player;
