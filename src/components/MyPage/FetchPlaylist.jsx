import React from "react";
import DefaultPlaylist from "../../images/DefaultPlaylist.png";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const FetchPlaylist = ({ item, background, setDeleteModalBool }) => {
  let navigate = useNavigate();

  //플레이리스트 상세보기 함수
  const movePlaylistdetail = () => {
    localStorage.setItem("playlistKey", item.key);
    navigate(`/playlist/${item.key}`);
  };

  const changeDeleteBool = () => {
    setDeleteModalBool(true);
    localStorage.setItem("playlistKey", item.key);
  };

  return (
    <S.PL_Layout background={background}>
      <S.PL_InfoSection onClick={movePlaylistdetail}>
        <S.PL_Image
          src={
            `https://static.wakmusic.xyz/static/playlist/${item.image}.png` ||
            DefaultPlaylist
          }
        />
        <S.PL_Name>{item.title}</S.PL_Name>
        <S.PL_Creator>{item.count}곡</S.PL_Creator>
      </S.PL_InfoSection>
      <S.PL_DeleteButton onClick={changeDeleteBool}>삭제</S.PL_DeleteButton>
    </S.PL_Layout>
  );
};

export default FetchPlaylist;
