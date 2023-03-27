import React from "react";
import { useNavigate } from "react-router-dom";
import { addToMyPlaylist } from "../../apis/playlist";
import ListPlus from "../../images/ListPlus.svg";
import MusicListBox from "./MusicListBox";
import * as S from "./styled";
import Button from "../Button";

const MusicSection = (props) => {
  const {
    musicList,
    playlistInfo,
    setPlaylistInfo,
    setDeleteModalBool,
    playlistCertified,
    sendAlert,
  } = props;
  const navigate = useNavigate();

  const movePlusMusicPage = () => {
    navigate("/add");
  };

  const plusPlaylist = () => {
    addToMyPlaylist(playlistInfo.key).then((res) => {
      sendAlert("내 재생목록에 추가되었습니다.");
    });
  };

  if (!musicList) return;
  return (
    <S.PlaylistLayout>
      <S.TitleBox>
        <S.PageTitle>노래목록</S.PageTitle>
        <S.ButtonLayout>
          {playlistCertified ? (
            <>
              <div id="play-btn-wrap">
                <Button data={musicList} shuffle={[...musicList]} />
              </div>
              <S.PlusPlaylistButton
                onClick={playlistCertified ? movePlusMusicPage : plusPlaylist}
              >
                <img src={ListPlus} alt="" />
                노래추가
              </S.PlusPlaylistButton>
            </>
          ) : (
            <>
              <div id="play-btn-wrap-more">
                <Button data={musicList} shuffle={[...musicList]} />
              </div>
              <S.PlusPlaylistButton2
                onClick={playlistCertified ? movePlusMusicPage : plusPlaylist}
              >
                <img src={ListPlus} alt="" />
                재생목록에 추가
              </S.PlusPlaylistButton2>
            </>
          )}
        </S.ButtonLayout>
      </S.TitleBox>
      <S.ListInfoBox>
        <S.ListPlaylistName>곡정보</S.ListPlaylistName>
        <S.ListPlaylistCreator>발매일</S.ListPlaylistCreator>
      </S.ListInfoBox>
      {musicList.length !== 0 ? (
        <div className="playlist-wrap" id="ms">
          {musicList.map((item, index) => {
            return (
              <MusicListBox
                setDeleteModalBool={setDeleteModalBool}
                playlistInfo={playlistInfo}
                setPlaylistInfo={setPlaylistInfo}
                item={item}
                key={index}
                color={
                  index % 2 === 0
                    ? "rgba(140, 149, 175, 0.1)"
                    : "rgba(255, 255, 255, 0.4)"
                }
              />
            );
          })}
        </div>
      ) : (
        <S.NoPlaylist>등록된 노래가 없습니다.</S.NoPlaylist>
      )}
    </S.PlaylistLayout>
  );
};

export default MusicSection;
