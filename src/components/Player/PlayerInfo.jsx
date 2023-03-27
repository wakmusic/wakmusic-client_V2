import React, {useEffect} from "react"
import callback from "../../images/callback.png";
import {resume, pause, moveTo, changeVolume} from "./PlayerControls";


const PlayerInfo = (props) => {
    useEffect(() => {
        const title = document.getElementsByClassName("player-title")[0];
        if (title.scrollWidth > title.clientWidth) {
            title.className += " marquee-text"
        } else title.className = "player-title"

        const artist = document.getElementsByClassName("player-artist")[0];
        if (artist.scrollWidth > artist.clientWidth) {
            artist.className += " marquee-text"
        } else artist.className = "player-artist"

        const progress = document.getElementById("volume-progress");
        progress.style.background = 'linear-gradient(to right, #202F61 0%, #202F61 ' + progress.value + '%, #ffffff66 '
            + progress.value + '%, #ffffff66 100%)';
    })

    return (
        <>
            <div className="player-image-wrap">
                <div className="player-image-box">
                    <img src={props.data.id ? `https://i.ytimg.com/vi/${props.data.id}/hqdefault.jpg` : callback}
                         alt="" className="player-image"/>
                </div>
            </div>
            <div className="player-title-wrap">
                <div className="player-title">{props.data.title ? props.data.title : "벽돌 나르는 중..."}</div>
            </div>
            <div className="player-artist-wrap">
                <div className="player-artist">{props.data.artist ? props.data.artist : "벽돌 나르는 중..."}</div>
            </div>
            <div id="player-controls">
                <div id="player-previous" onClick={props.movePrev}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 3L4 13" stroke="#080F34" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M6.20752 8.8255L11.7506 12.6154C12.4143 13.0692 13.315 12.5939 13.315 11.7899L13.315 4.2101C13.315 3.40609 12.4143 2.93081 11.7506 3.3846L6.20752 7.1745C5.62673 7.5716 5.62673 8.4284 6.20752 8.8255Z"
                            fill="#080F34"/>
                    </svg>
                </div>
                <div id="player-pause" onClick={pause}>
                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L2 16" stroke="#080F34" strokeWidth="4" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M10 2L10 16" stroke="#080F34" strokeWidth="4" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <div id="player-resume" onClick={resume}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.7437 9.17451L1.70671 0.260815C1.043 -0.192975 0.142301 0.2823 0.1423 1.08631L0.142301 18.9137C0.142301 19.7177 1.043 20.193 1.70671 19.7392L14.7437 10.8255C15.3245 10.4284 15.3245 9.5716 14.7437 9.17451Z"
                            fill="#00F3F3"/>
                    </svg>
                </div>
                <div id="player-replay" onClick={resume}>
                    <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 17C2 21.4183 5.58172 25 10 25C14.4183 25 18 21.4183 18 17C18 12.5817 14.4183 9 10 9" stroke="#080F34" strokeWidth="3.5" strokeLinecap="round"/>
                        <path d="M3.04931 9.28189L9.47451 14.1588C10.133 14.6586 11.0791 14.1889 11.0791 13.3622L11.0791 3.60846C11.0791 2.78176 10.133 2.31211 9.47451 2.81192L3.04931 7.68882C2.5221 8.08898 2.5221 8.88172 3.04931 9.28189Z" fill="#080F34"/>
                    </svg>
                </div>
                <div id="player-next" onClick={props.moveNext}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L12 13" stroke="#080F34" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M9.79248 7.07392L4.24942 3.28402C3.58572 2.83023 2.68502 3.3055 2.68502 4.10951L2.68502 11.6893C2.68502 12.4933 3.58572 12.9686 4.24943 12.5148L9.79248 8.72491C10.3733 8.32781 10.3733 7.47101 9.79248 7.07392Z"
                            fill="#080F34"/>
                    </svg>

                </div>
            </div>
            <div className="progress-wrap">
                <input type="range" id="player-progress" min="0" defaultValue="0" max="100"
                       onChange={() => moveTo(props.duration)}/>
                <div id="player-time">0:00</div>
                <div id="player-duration">-:--</div>
            </div>
            <div className="volume-wrap">
                <div id="mute-btn">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.69629 6.42857C1.69629 6.22147 1.86418 6.05357 2.07129 6.05357H3.29194C3.66093 6.05357 4.01893 5.92799 4.30707 5.69748L6.69417 3.7878C6.93971 3.59137 7.30343 3.76619 7.30343 4.08062V11.9194C7.30343 12.2338 6.93971 12.4086 6.69417 12.2122L4.30707 10.3025C4.01893 10.072 3.66093 9.94643 3.29194 9.94643H2.07129C1.86418 9.94643 1.69629 9.77853 1.69629 9.57143V6.42857Z"
                            fill="#080F34" stroke="#080F34" strokeWidth="1.25"/>
                        <path id="volume-small"
                              d="M9.19141 8.85714C9.56513 8.85714 9.8681 8.47338 9.8681 8C9.8681 7.52661 9.56513 7.14285 9.19141 7.14285"
                              stroke="#202F61" strokeLinecap="round"/>
                        <path id="volume-medium"
                              d="M10.5449 10.5714C11.2924 10.5714 11.8983 9.42016 11.8983 8C11.8983 6.57984 11.2924 5.42857 10.5449 5.42857"
                              stroke="#202F61" strokeLinecap="round"/>
                        <path id="volume-big"
                              d="M11.8984 12.2857C13.0196 12.2857 13.9285 10.3669 13.9285 7.99999C13.9285 5.63306 13.0196 3.71428 11.8984 3.71428"
                              stroke="#202F61" strokeLinecap="round"/>
                    </svg>
                </div>
                <input type="range" id="volume-progress" min="0" defaultValue={props.volume} max="100"
                       onChange={changeVolume}/>
            </div>
        </>
    )
}

export default PlayerInfo;