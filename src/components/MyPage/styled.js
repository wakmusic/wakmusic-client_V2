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
  border-radius: 100px;
  background-color: #dadde5;
`;

export const ProfileName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: #202f61;
  margin: 5px 0 0;
`;

export const LoginPlatform = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #8c95af;
  margin: 0;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  background: #ffffff;
  border-radius: 30px;
  margin-top: 10px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 14px;
  color: #8c95af;
  font-family: Pretendard, sans-serif;
`;

export const ProfileSettingIcon = styled.img`
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
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #080f34;
  margin: 0;
`;

export const AddPlaylistButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 6px;
  width: 100px;
  background-color: #202f61;
  border: none;
  border-radius: 14px;
  position: absolute;
  gap: 2px;
  right: 20px;
  font-size: 14px;
  font-weight: 600;
  color: white;
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
  background: rgba(140, 149, 175, 0.2);
  height: 30px;
`;

export const ListPlaylistName = styled.p`
  position: absolute;
  left: 100px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #080f34;
  margin: 0;
`;

export const ListPlaylistCreator = styled.p`
  position: absolute;
  right: 130px;
  width: 80px;
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
  height: 80px;
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
  left: 100px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #080f34;
  margin: 0;
`;

export const PL_Creator = styled.p`
  position: absolute;
  right: 45px;
  width: 80px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: #202f61;
`;

export const PL_DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 30px;
  width: 50px;
  height: 38px;
  border: none;
  background: #8c95af;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  border-radius: 100px;
  font-family: Pretendard, sans-serif;
  transition: background 0.2s;
  
    &:hover {
      background: #080f34;
      transition: background 0.2s;
    }
`;

export const ModalTextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ModalTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #080f34;
  margin: 0;
`;

export const ModalText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #8c95af;
  margin: 0;
`;


export const PlaylistContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 470px;
  height: 310px;
  background: #ffffff;
  backdrop-filter: blur(50px);
  border-radius: 10px;
  gap: 10px;
  overflow: hidden;
`;

export const ButtonLayout = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
`;

export const MainButton = styled.button`
  cursor: pointer;
  width: 235px;
  height: 60px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  border: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  font-family: Pretendard, sans-serif;
`;

export const ModalBackGroud = styled.div`
  z-index: 9999;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
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
