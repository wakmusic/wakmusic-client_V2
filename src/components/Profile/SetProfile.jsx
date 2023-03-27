import React from "react";
import { setProfile } from "../../apis/profile";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const SetProfile = ({ link, item, userInfo }) => {
  const navigate = useNavigate();

  const setUserProfile = () => {
    setProfile({
      clientId: userInfo.id,
      image: item,
    }).then((res) => {
      navigate("/mypage", { state: { first: false } });
    });
  };

  return <S.ProfileThings onClick={setUserProfile} src={link} key={item} />;
};

export default SetProfile;
