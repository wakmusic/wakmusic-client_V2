import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getArtistAlbums, getArtistList } from "../../apis/artist";
import Dropdown from "../Dropdown";
import SortTypeList from "./SortTypeList";
import Button from "../Button";
import ArtistDetail from "./ArtistDetail";
import { getDate } from "../Utils";

const FetchArtists = (props) => {
  const [artists, setArtists] = useState([]);
  const [index, setIndex] = useState(0);
  const [preIndex, setPreIndex] = useState(0);
  const [type, setType] = useState("popular");
  const [preType, setPreType] = useState("popular");
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [items, setItem] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const fetchMoreData = async () => {
    setLoading(true);
    await getArtistAlbums({
      id: artists[index].id,
      start: start,
      sort: type,
    }).then((response) => {
      const fetchedData = response.data;
      const mergedData = items.concat(...fetchedData);
      setItem(mergedData);
    });
    let next = start + 30;
    setStart(next);
    setLoading(false);
  };

  useEffect(() => {
    getArtistList().then((i) => {
      setArtists(i.data);
    });
  }, []);

  const getAlbums = () => {
    let albums = [];
    items.forEach((i, count) => {
      albums.push(
        <div
          className={
            count % 2 === 0
              ? "artist-albums bg-dark fadein"
              : "artist-albums fadein"
          }
          key={count}
        >
          <div className="artist-albums-wrap">
            <img
              src={`https://i.ytimg.com/vi/${i.id}/hqdefault.jpg`}
              alt=""
              className="artist-albums-image"
            />
          </div>
          <div className="artist-albums-svg">
            <svg
              width="54"
              height="54"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="black" />
            </svg>
          </div>
          <div className="artist-title-wrap">
            <div className="artist-albums-title">{i.title}</div>
          </div>
          <div className="artist-wrap">
            <div className="artist-albums-artist">{i.artist}</div>
          </div>
          <div className="artist-albums-date">{getDate(i.date)}</div>
          <div className="artist-albums-play">
            <Link to={`/player/${i.id}`}>
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
    return albums;
  };

  const selectArtist = (e) => {
    if (!artists) return;

    if (typeof e !== "number") setIndex(parseInt(e.target.id));

    for (let i = 0; i < artists.length; i++) {
      if (i === (typeof e === "number" ? e : parseInt(e.target.id))) {
        const wrap = document.getElementById("select-bar");
        const el = document.getElementsByClassName("select-bar-item")[i];
        el.className = "select-bar-item bar-selected";
        wrap.scrollTo({
          left: el.offsetLeft - wrap.clientWidth,
          behavior: "smooth",
        });

        const old = document.getElementById("old");
        old.className = "sort-unselected";
        old.style.top = `59px`;
        const _new = document.getElementById("new");
        _new.className = "sort-unselected";
        _new.style.top = `90px`;
        document.getElementById("popular").className = "sort-selected";
      } else {
        document.getElementsByClassName("select-bar-item")[i].className =
          "select-bar-item";
      }
    }
    return true;
  };

  const getArtists = () => {
    let items = [];
    artists.forEach((i, count) => {
      items.push(
        <div
          key={count}
          id={String(count)}
          onClick={(e) => selectArtist(e)}
          className={
            count === 0
              ? "select-bar-item bar-selected fadein"
              : "select-bar-item fadein"
          }
        >
          <div className="image-rounded-wrap" id={String(count)}>
            <img
              src={`https://static.wakmusic.xyz/static/artist/card/${i.id}.png`}
              alt=""
              className="image-rounded"
              id={String(count)}
            />
          </div>
          <div className="image-name" id={String(count)}>
            {i.short}
          </div>
        </div>
      );
      if (
        artists[count + 1] &&
        artists[count + 1].group !== artists[count].group
      )
        items.push(
          <div
            className="group-image-div fadein"
            key={(count + 1) * 100}
            id={artists[count + 1].group}
          >
            <img
              src={`https://static.wakmusic.xyz/static/artist/group/${
                artists[count + 1].group
              }.png`}
              alt=""
              className="group-image"
              onClick={clickEvent}
            />
          </div>
        );
    });
    return items;
  };

  const clickEvent = () => {
    setCount(count + 1);
    if (count === 9) navigate("/artist/isedol");
  };

  useEffect(() => {
    const titles = document.getElementsByClassName("artist-albums-title");
    for (let i = 0; i < titles.length; i++) {
      if (titles[i].scrollWidth > titles[i].clientWidth) {
        titles[i].className += " marquee-text";
      }
    }

    const artists = document.getElementsByClassName("artist-albums-artist");
    for (let i = 0; i < artists.length; i++) {
      if (artists[i].scrollWidth > artists[i].clientWidth) {
        artists[i].className += " marquee-text";
      }
    }
  });

  const handleScroll = () => {
    const element = document.getElementsByClassName("artist-albums-body")[0];
    const scrollHeight = element.scrollHeight;
    const scrollTop = element.scrollTop;
    const clientHeight = element.clientHeight;
    if (scrollTop + clientHeight + 600 >= scrollHeight && !loading) {
      element.scrollTo({ top: scrollTop + clientHeight });
      fetchMoreData();
    }
  };

  useEffect(() => {
    if (preType !== type) {
      setPreType(type);
      setItem([]);
      setStart(0);
    }

    if (preIndex !== index) {
      setPreIndex(index);
      setItem([]);
      setStart(0);
    }

    if (!loading && start === 0 && artists[index]) {
      fetchMoreData();
    }
    if (start - 30 > items.length) return;
    const element = document.getElementsByClassName("artist-albums-body")[0];
    if (!element) return;
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preType, type, preIndex, index, loading, start, artists, items.length]);

  if (!artists || !artists[index]) return <div className="loading" />;
  return (
    <>
      <div id="select-section" className="fadein">
        <div className="select-bar-arrow">
          <div
            className="arrow-active"
            id="arrow-right"
            onClick={() => props.scroll("right")}
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.12403 1.45753L1.58156 9L9.12403 16.5425"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="arrow-inactive"
            id="arrow-left"
            onClick={() => props.scroll("left")}
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.12403 1.45753L1.58156 9L9.12403 16.5425"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div id="select-bar" onScroll={props.callbackFunc}>
          {getArtists()}
        </div>
      </div>
      <div id="artist-section" className="fadein">
        <ArtistDetail
          artists={artists}
          setType={setType}
          setIndex={setIndex}
          index={index}
          selectArtist={selectArtist}
        />
        <div id="albums-body">
          <Dropdown
            setType={setType}
            setData={setItem}
            elements={SortTypeList}
          />
          <Button data={items} shuffle={[...items]} />
          <div className="albums-label">
            <div id="albums-info">곡정보</div>
            <div id="albums-date">발매일</div>
          </div>
          <div className="artist-albums-body">{getAlbums()}</div>
        </div>
      </div>
    </>
  );
};

export default FetchArtists;
