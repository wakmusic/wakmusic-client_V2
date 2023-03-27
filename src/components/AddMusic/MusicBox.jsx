import React from "react";
import { editPlaylist } from "../../apis/playlist";
import MusicPlus from "../../images/MusicPlus.svg";
import * as S from "./styled";
import { getDate } from "../Utils";
import DefaultProfile from "../../images/DefaultProfile.svg";

const MusicBox = ({
  item,
  color,
  playlistInfo,
  setPlaylistInfo,
  sendAlert,
}) => {
  const imageLink = `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;

  const appendMusic = () => {
    let copySonglist = [...playlistInfo.songlist];
    copySonglist.push(item.id);
    setPlaylistInfo({ ...playlistInfo, songlist: copySonglist });
    editPlaylist(playlistInfo.key, {
      title: playlistInfo.title,
      image: playlistInfo.image,
      songlist: copySonglist,
      public: playlistInfo.public,
      clientId: playlistInfo.clientId,
    }).then((res) => {
      sendAlert("재생목록에 추가되었습니다.");
    });
  };

  return (
    <S.MusicBox color={color}>
      <S.MusicImageBack />
      <div className="playlist-tracks">
        <img
          src={imageLink || DefaultProfile}
          alt=""
          className="artist-albums-image"
        />
      </div>
      <div className="playlist-svg">
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
      <S.MusicTextLayout>
        <S.MusicName>{item.title}</S.MusicName>
        <S.MusicArtist>{item.artist}</S.MusicArtist>
      </S.MusicTextLayout>
      <S.MusicInfoText color="#202F61" right="200px">
        {getDate(item.date)}
      </S.MusicInfoText>
      <S.MusicInfoText color="#202F61" right="90px">
        {item.views.toLocaleString("ko-KR")}회
      </S.MusicInfoText>
      <S.MusicPlusButton onClick={appendMusic}>
        <img src={MusicPlus} alt="" />
      </S.MusicPlusButton>
    </S.MusicBox>
  );
};

export default MusicBox;
