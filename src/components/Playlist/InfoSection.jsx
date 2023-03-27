import React from "react";
import Public from "../../images/Public";
import Sharing from "../../images/Sharing.svg";
import DefaultPlaylist from "../../images/DefaultPlaylist.png";
import { editPlaylist } from "../../apis/playlist";
import ModifyIcon from "../../images/ModifyIcon.svg";
import * as S from "./styled";

const InfoSection = (props) => {
  const {
    playlistInfo,
    setCopyModalBool,
    setModifyModalBool,
    setPlaylistInfo,
    playlistCertified,
    sendAlert,
  } = props;

  const changePublic = () => {
    setPlaylistInfo({
      ...playlistInfo,
      public: !playlistInfo.public,
    });
    editPlaylist(playlistInfo.key, {
      title: playlistInfo.title,
      image: playlistInfo.image,
      songlist: playlistInfo.songlist,
      public: !playlistInfo.public,
      clientId: playlistInfo.clientId,
    }).then();
  };

  const checkPublic = () => {
    if (playlistInfo.public) setCopyModalBool(true);
    else sendAlert("비공개 재생목록은 공유할 수 없습니다.");
  };

  return (
    <S.ProfileBox>
      {playlistCertified && (
        <S.ProfileSettingIcon onClick={changePublic}>
          <Public on_off={playlistInfo.public} />
        </S.ProfileSettingIcon>
      )}
      <S.ProfileImg
        src={
          `https://static.wakmusic.xyz/static/playlist/${playlistInfo.image}.png` ||
          DefaultPlaylist
        }
      />
      <S.NameLayout>
        <S.ProfileName>{playlistInfo.title}</S.ProfileName>
        {playlistCertified && (
          <S.ModifyButton
            src={ModifyIcon}
            onClick={() => setModifyModalBool(true)}
          />
        )}
      </S.NameLayout>
      <S.LoginPlatform>{playlistInfo.creator}</S.LoginPlatform>
      <S.LogoutButton onClick={() => checkPublic()}>
        <img src={Sharing} alt="" />
        공유하기
      </S.LogoutButton>
    </S.ProfileBox>
  );
};

export default InfoSection;
