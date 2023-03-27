import React from "react"
import {Link} from "react-router-dom";


const Button = (props) => {
    if (!props.data[0] || !props.shuffle[0]) return;
    props.shuffle.sort(() => Math.random() - 0.5)
    return (
        <div className="btn-wrap">
            <Link to={`/player/${props.data[0].id}`}
                  state={{current: props.data[0], prev: [], next: props.data.slice(1)}}
                  className="play-all fadein">
                <svg width="11" height="14" viewBox="0 0 11 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.38428 5.24842L3.16874 0.998732C1.84132 0.0911514 0.0399195 1.0417 0.0399197 2.64972V11.1491C0.0399195 12.7571 1.84132 13.7077 3.16873 12.8001L9.38427 8.55041C10.5459 7.75621 10.5459 6.04262 9.38428 5.24842Z"
                        fill="#202F61"/>
                </svg>
                <div id="play-all-text">전체재생</div>
            </Link>
            <Link to={`/player/${props.shuffle[0].id}`}
                  state={{current: props.shuffle[0], prev: [], next: props.shuffle.slice(1)}}
                  className="play-random fadein">
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
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0 4.00043C0 3.44814 0.447715 3.00043 1 3.00043H4.38128C5.24214 3.00043 6.00642 3.55129 6.27865 4.36797L7.8228 9.00043H10C10.5523 9.00043 11 9.44814 11 10.0004C11 10.5527 10.5523 11.0004 10 11.0004H7.8228C6.96194 11.0004 6.19766 10.4496 5.92543 9.63288L4.38128 5.00043H1C0.447715 5.00043 0 4.55271 0 4.00043Z"
                          fill="#E3E5EB"/>
                    <path
                        d="M13.72 9.78565L10.5891 7.64501C10.2573 7.41812 9.80694 7.65576 9.80694 8.05776L9.80694 12.339C9.80694 12.741 10.2573 12.9787 10.5891 12.7518L13.72 10.6111C14.0104 10.4126 14.0104 9.9842 13.72 9.78565Z"
                        fill="#E3E5EB"/>
                </svg>
                <div id="play-random-text">랜덤재생</div>
            </Link>
        </div>
    )
}

export default Button;