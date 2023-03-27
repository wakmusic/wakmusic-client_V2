import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #e3e5eb;
  animation: fadein 0.5s;
`;

export const MainFindInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 520px;
  height: 44px;
  background: #ffffff;
  border-radius: 6px;
  margin-top: -140px;
`;

export const FindInputFilter = styled.div`
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 44px;
  gap: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #080f34;
  overflow: unset;
`;


export const FilterMenu = styled.div`
  position: absolute;
  top: 50px;
  width: 80px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2));
  margin-left: -20px;
  transition: 0.2s;
`;

export const Menu = styled.button`
  transition: all 0.2s;
  cursor: pointer;
  width: 80px;
  height: 34px;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #080f34;
  background-color: #ffffff;
  border: none;
  animation: fadein 0.3s;
  &:hover {
    background-color: #e3e5eb;
  }
`;

export const FindInput = styled.input`
  width: 100%;
  height: 34px;
  text-align: center;
  outline: none;
  border: none;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #202f61;
`;

export const FindIcon = styled.img`
  margin-right: 15px;
`;

export const appendMusicLayout = styled.div`
  align-items: center;
  border-radius: 20px;
  margin-top: 30px;
  padding-bottom: 5px;
  margin-bottom: 80px;
  backdrop-filter: blur(50px);
  background: rgba(255, 255, 255, 0.4);
  position: relative;
  z-index: 1;
`;

export const MusicFilterLayout = styled.div`
  display: flex;
  align-items: center;
  width: 920px;
  height: 70px;
  gap: 30px;
  padding-left: 30px;
`;

export const UpdateText = styled.div`
  font-weight: 400;
  font-size: 17px;
  line-height: 14px;
  color: #8c95af;
  margin-left: -950px;
  width: 100%;
`;

export const MusicInfoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  background: rgba(140, 149, 175, 0.2);
`;

export const MusicInfoName = styled.p`
  position: absolute;
  left: 125px;
  width: auto;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 12px;
  color: #080f34;
`;

export const MusicInfoText = styled.p`
  position: absolute;
  right: ${(props) => props.right};
  width: 130px;
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 12px;
  color: ${(props) => props.color};
`;

export const MusicBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.color};
  animation: fadein 0.3s;
`;

export const MusicImageBack = styled.div`
  position: absolute;
  left: 62px;
  width: 38px;
  height: 38px;
  border-radius: 100px;
  background: #242424;
`;

export const MusicTextLayout = styled.div`
  position: absolute;
  left: 125px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const MusicName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 17px;
  color: #080f34;
  margin: 0;
  width: 440px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MusicArtist = styled.p`
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
  color: #8c95af;
  margin: 0;
`;

export const MusicPlusButton = styled.div`
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background-color: #ffffff;
  border: none;

  &:hover {
    background-color: #989898;
  }
`;

export const DropdownLayout = styled.div`
  position: relative;
  width: 100%;
  margin-top: -90px;
  margin-left: -35px;
`;
