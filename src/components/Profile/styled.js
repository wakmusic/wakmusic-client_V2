import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #e3e5eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadein 0.5s;
`;

export const ProfileLayout = styled.div`
  width: 950px;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  gap: 40px;
  margin-top: -60px;
  margin-bottom: 120px;
`;

export const ProfileThings = styled.img`
  transition: all 0.3s;
  cursor: pointer;
  width: 200px;
  height: 200px;
  background-color: #202f61;
  border-radius: 10px;

  &:hover {
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
    margin-top: -5px;
  }
`;
