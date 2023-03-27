import React from "react";
import * as S from "./styled";

const LoginBox = ({ name, children }) => {
  const onClickLogin = () => {
    if (name) {
      window.location.href = `/api/auth/login/${name}`;
    }
  };

  return <S.LoginBox onClick={onClickLogin}>{children}</S.LoginBox>;
};

export default LoginBox;
