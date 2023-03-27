import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: #E3E5EB;
  animation: fadein 0.5s;
`;

export const InfoLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: -100px;
`;

export const ProfileBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 300px;
  height: 260px;
  background: #eeeff3;
  backdrop-filter: blur(50px);
  border-radius: 10px;
  animation: fadein 0.5s;
`;

export const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  border-radius: 5px;
  background-color: #dadde5;
`;

export const NameLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const ModifyButton = styled.img`
  cursor: pointer;
`;

export const ProfileName = styled.p`
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: #202f61;
  margin: 0;
  animation: fadein 0.5s;
`;

export const LoginPlatform = styled.p`
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #8c95af;
  margin: 0;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  width: 110px;
  height: 40px;
  background: #ffffff;
  border-radius: 30px;
  margin-top: 10px;
  border: none;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 14px;
  color: #8c95af;
`;

export const ProfileSettingIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
`;

export const PlaylistLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  height: 743px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(50px);
  margin-bottom: 80px;
  z-index: 3;
  animation: fadein 0.5s;
  width: 603px;
`;

export const TitleBox = styled.div`
  position: relative;
  width: 600px;
  height: 60px;
  background-color: #eeeff3;
  display: flex;
  align-items: center;
`;

export const PageTitle = styled.p`
  position: absolute;
  left: 30px;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #080f34;
  margin: 0;
`;

export const ButtonLayout = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PlusPlaylistButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 5px 8px 3px;
  width: 77px;
  background-color: #202f61;
  border: none;
  border-radius: 14px;
  position: absolute;
  gap: 1px;
  right: 0;
  font-size: 13px;
  font-weight: 700;
  color: white;
  margin-left: 15px;
  user-select: none;
  animation: fadein 0.5s;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.1s;
  }
`;

export const PlusPlaylistButton2 = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 5px 8px 3px;
  width: 110px;
  background-color: #202f61;
  border: none;
  border-radius: 14px;
  position: absolute;
  gap: 1px;
  right: 0;
  font-size: 13px;
  font-weight: 700;
  color: white;
  margin-left: 15px;
  user-select: none;
  animation: fadein 0.5s;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.1s;
  }
`;

export const ListInfoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: #dadde5;
`;

export const ListPlaylistName = styled.p`
  position: absolute;
  left: 130px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #080f34;
  margin: 0;
`;

export const ListPlaylistCreator = styled.p`
  position: absolute;
  right: 135px;
  width: 80px;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: #080f34;
`;

export const PL_Layout = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: 600px;
  height: 90px;
  background-color: ${(props) => props.background};
  animation: fadein 0.5s;
`;

export const PL_InfoSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 520px;
  height: 80px;
`;

export const PL_Image = styled.img`
  position: absolute;
  left: 30px;
  width: 50px;
  height: 50px;
  background-color: #080f34;
  border-radius: 5px;
`;

export const PL_Name = styled.p`
  position: absolute;
  left: 130px;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #080F34;
  margin: -20px 0 0;
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PL_Creator = styled.p`
  position: absolute;
  right: 50px;
  width: 80px;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  text-align: center;
  color: #202F61;
  font-weight: 600;
  font-size: 14px;
`;

export const PL_Artist = styled.p`
  position: absolute;
  left: 130px;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #8C95AF;
  margin: 25px 0 0;
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PL_DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 30px;
  width: 50px;
  height: 38px;
  border: none;
  background-color: #8c95af;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  border-radius: 100px;
`;

export const ModalTitle = styled.p`
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #080f34;
  margin: 0;
`;

export const ModalText = styled.p`
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #8c95af;
  margin-top: 10px;
`;

export const PlaylistLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  width: 335px;
  height: 44px;
  padding-left: 15px;
  background: #f4f5f7;
  border-radius: 10px;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #202f61;
  margin-top: 40px;
  border: none;
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const NameInput = styled.input`
  width: 348px;
  height: 40px;
  left: 786px;
  top: 402px;
  background-color: #f4f5f7;
  border-radius: 5px;
  border: none;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #202f61;
  padding-left: 15px;

  ::placeholder {
    font-family: Pretendard, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #b6b6b6;
  }
`;

export const IntroduceText = styled.p`
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8c95af;
  margin: 10px 0 35px;
`;

export const NoPlaylist = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #080f34;
  margin: 80px 0 35px;
`;
