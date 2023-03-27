import React from "react";
import useSubtitles from "react-subtitles";
import { getCheckLyrics } from "../../apis/songs";
import { moveToLyrics } from "./PlayerControls";

function Lyrics(props) {
  const [subtitle] = useSubtitles({
    subtitles: `https://static.wakmusic.xyz/static/lyrics/${props.id}.vtt`,
  });
  console.log(subtitle);
  const [loading, setLoading] = React.useState(false);
  const ran = Math.floor(Math.random() * 99 + 1);

  React.useEffect(() => {
    getCheckLyrics({ id: props.id }).then((r) => {
      if (r.data.status === 404) setLoading(true);
      else setLoading(false);
    });
  }, [props.id]);

  function convertTime(time) {
    time = time.toString();
    if (time >= 10000) {
      let hour = time.substring(0, 1);
      let min = time.substring(1, 3);
      let sec = time.substring(3);
      return parseInt(hour) * 3600 + parseInt(min) * 60 + parseFloat(sec);
    } else if (time >= 1000) {
      let min = time.substring(0, 2);
      let sec = time.substring(2);
      return parseInt(min) * 60 + parseFloat(sec);
    } else if (time >= 100) {
      let min = time.substring(0, 1);
      let sec = time.substring(1);
      return parseInt(min) * 60 + parseFloat(sec);
    } else return time;
  }

  if (loading || subtitle.length === 0)
    return (
      <div className="lyrics-not-found">
        {ran <= 5
          ? "무의식적으로 가사가 보이고 있습니다."
          : "이 노래는 가사가 제공되지 않습니다."}
      </div>
    );
  return (
    <div className="lyrics-wrap fadein">
      {subtitle.map((s) => (
        <div
          aria-label={convertTime(s.stop)}
          onClick={() => moveToLyrics(convertTime(s.start))}
          id={convertTime(s.start)}
          className="lyrics-text"
          key={s.stop}
        >
          {s.text}
        </div>
      ))}
    </div>
  );
}

export default Lyrics;
