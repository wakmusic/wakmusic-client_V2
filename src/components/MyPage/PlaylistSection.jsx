import React from "react";
import FetchPlaylist from "./FetchPlaylist";
import ListPlus from "../../images/ListPlus.svg";
import * as S from "./styled";

const PlaylistSection = ({playlistBundle, setPlusModalBool, setDeleteModalBool}) => {
    const changeModal = () => {
        setPlusModalBool(true);
    };

    return (
        <S.PlaylistLayout>
            <S.TitleBox>
                <S.PageTitle>재생목록</S.PageTitle>
                <S.AddPlaylistButton onClick={changeModal}>
                    <img src={ListPlus} alt=""/>재생목록 추가
                </S.AddPlaylistButton>
            </S.TitleBox>
            <S.ListInfoBox>
                <S.ListPlaylistName>재생목록 이름</S.ListPlaylistName>
                <S.ListPlaylistCreator>곡수</S.ListPlaylistCreator>
            </S.ListInfoBox>
            {playlistBundle.length !== 0 ? <div className="playlist-wrap" id="pl">
                {playlistBundle.map((item, index) => {
                    return (
                        <FetchPlaylist
                            setDeleteModalBool={setDeleteModalBool}
                            item={item}
                            background={index % 2 === 0 ? "rgba(140, 149, 175, 0.1)" : "rgba(255, 255, 255, 0.4)"}
                            key={index}
                        />
                    );
                })}
            </div> : <S.NoPlaylist>등록된 플레이리스트가 없습니다.</S.NoPlaylist>}
        </S.PlaylistLayout>
    );
};

export default PlaylistSection;
