import React from "react";
import DefaultProfile from "../../images/DefaultProfile.svg";
import * as S from "./styled";
import {getDate} from "../Utils";


const MusicListBox = (props) => {
    const {item, setDeleteModalBool} = props;
    const imageLink = `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;

    const changeDeleteBool = () => {
        setDeleteModalBool(true);
        localStorage.setItem("musicId", item.id);
    };

    return (
        <S.PL_Layout background={props.color}>
            <S.PL_InfoSection>
                <div className="playlist-tracks">
                    <img src={imageLink || DefaultProfile} alt=""
                         className="artist-albums-image"/>
                </div>
                <div className="playlist-svg">
                    <svg width="54" height="54" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22" cy="22" r="22" fill="black"/>
                    </svg>
                </div>
                <S.PL_Name>{item.title}</S.PL_Name>
                <S.PL_Artist>{item.artist}</S.PL_Artist>
                <S.PL_Creator>{getDate(item.date)}</S.PL_Creator>
            </S.PL_InfoSection>
            <S.PL_DeleteButton onClick={changeDeleteBool}>삭제</S.PL_DeleteButton>
        </S.PL_Layout>
    );
};

export default MusicListBox;
