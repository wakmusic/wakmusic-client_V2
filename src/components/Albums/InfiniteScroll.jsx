import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDate } from "../Utils";
import { getSongsList } from "../../apis/songs";
import background from "../../images/album-background.png";

const InfiniteScroll = (props) => {
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [item, setItem] = useState([]);
  const [time, setTime] = useState(props.time);

  const fetchMoreData = async () => {
    setLoading(true);
    await getSongsList({
      type: props.type,
      period: props.time,
      start: start,
    }).then((response) => {
      const fetchedData = response.data;
      const mergedData = item.concat(...fetchedData);
      setItem(mergedData);
    });
    let next = start + 30;
    setStart(next);
    setLoading(false);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight + 600 >= scrollHeight && !loading) {
      fetchMoreData().then();
    }
  };

  //eslint-disable-next-line
  useEffect(() => {
    if (props.time !== time) {
      setTime(props.time);
      setItem([]);
      setStart(0);
    }
    if (!loading && start === 0) fetchMoreData().then();
    if (start - 30 > item.length) return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const getAlbums = () => {
    if (time === "201610")
      return (
        <div id="ss" className="fadein">
          저희 왁타버스 뮤직을 이용해 주셔서 감사합니다.
        </div>
      );

    let data = [];
    item.forEach((album, i) => {
      data.push(
        <Link to={`/player/${album.id}`} className="albums-item fadein" key={i}>
          <img src={background} alt="" className="albums-background" />
          <img
            src={`https://i.ytimg.com/vi/${album.id}/hqdefault.jpg`}
            alt=""
            className="albums-image"
          />
          <div className="albums-title">{album.title}</div>
          <div className="albums-artist">{album.artist}</div>
          <div className="albums-date">{getDate(album.date)}</div>
        </Link>
      );
    });
    return data;
  };

  if (!item) return <div className="loading" />;
  return getAlbums();
};

export default InfiniteScroll;
