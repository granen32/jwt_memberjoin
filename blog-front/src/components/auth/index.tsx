import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
// 회원 가입 로그인폼
const AuthForm = () => {
  return (
    <>
      <S.AuthFormTemplateBlock>
        <S.WhiteBox>
          <div className="logo-area">
            <Link to="/">REACTERS</Link>
          </div>
          <S.AuthFormBlock>
            <h3>로그인</h3>
            <form>
              <S.StyledInput
                autoComplete="username"
                name="username"
                placeholder="아이디"
              />
              <S.StyledInput
                autoComplete="new-password"
                name="password"
                placeholder="비밀번호"
              />
              <S.StyledButton>버튼</S.StyledButton>
            </form>
            <S.Footer>
              <Link to="register">회원가입</Link>
            </S.Footer>
          </S.AuthFormBlock>
        </S.WhiteBox>
      </S.AuthFormTemplateBlock>
    </>
  );
};

export default AuthForm;
