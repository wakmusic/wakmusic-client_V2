import React, {useEffect} from "react"
import {Link} from "react-router-dom";
import {getDate} from "../Utils";


const FetchTracks = (props) => {
    const current = props.current;
    const prev = props.prev;
    const next = props.next;

    const determ = (item) => {
        if (item.id === current.id) return {current: item, prev: prev, next: next};
        if (prev.includes(item)) {
            return {
                current: item,
                prev: prev.slice(0, prev.indexOf(item)),
                next: [].concat(prev.slice(prev.indexOf(item) + 1), current, next)
            };
        } else if (next.includes(item)) {
            return {
                current: item,
                prev: [].concat(prev, current, next.slice(0, next.indexOf(item))),
                next: next.slice(next.indexOf(item) + 1)
            };
        }
    }

    useEffect(() => {
        const titles = document.getElementsByClassName("artist-albums-title");
        for (let i = 0; i < titles.length; i++) {
            if (titles[i].scrollWidth > titles[i].clientWidth) titles[i].className += " marquee-text"
            else titles[i].className = "artist-albums-title";
        }

        const artists = document.getElementsByClassName("artist-albums-artist");
        for (let i = 0; i < artists.length; i++) {
            if (artists[i].scrollWidth > artists[i].clientWidth) artists[i].className += " marquee-text"
            else artists[i].className = "artist-albums-artist";
        }
    });

    const getAlbums = (data, start) => {
        if (!data) return;
        let albums = [];
        data.forEach((i, index) => {
            albums.push(
                <div className={(start + index) % 2 === 0 ? "artist-albums bg-dark fadein" : "artist-albums fadein"}
                     key={index}>
                    <div className="artist-albums-wrap"><img src={`https://i.ytimg.com/vi/${i.id}/hqdefault.jpg`} alt=""
                                                             className="artist-albums-image"/></div>
                    <div className="artist-albums-svg">
                        <svg width="54" height="54" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22" cy="22" r="22" fill="black"/>
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
                        <Link to={`/player/${i.id}`} state={determ(i)}>
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
        return albums;
    }

    return (
        <>
            {getAlbums(props.prev, 0)}
            {getAlbums([props.current], (props.prev ? props.prev.length : 0))}
            {getAlbums(props.next, (props.prev ? props.prev.length + 1 : 1))}
        </>
    )
}

export default FetchTracks;