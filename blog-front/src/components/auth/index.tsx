import React, { FC } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { TextMapProps } from "types/auth";
// 회원 가입 로그인폼
// 텍스트 맵
const textMap: TextMapProps = {
  login: "로그인",
  register: "register",
  type: "",
};
type Props = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
const AuthForm: FC<Props> = ({ type, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <>
      <S.AuthFormTemplateBlock>
        <S.WhiteBox>
          <div className="logo-area">
            <Link to="/">REACTERS</Link>
          </div>
          <S.AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
              <S.StyledInput
                autoComplete="username"
                name="username"
                placeholder="아이디"
                onChange={onChange}
              />
              <S.StyledInput
                autoComplete="new-password"
                name="password"
                placeholder="비밀번호"
                onChange={onChange}
                type="password"
              />
              {type === "register" && (
                <S.StyledInput
                  autoComplete="new-password"
                  name="password"
                  placeholder="비밀번호 확인"
                  onChange={onChange}
                  type="password"
                />
              )}
              <S.StyledButton>{text}</S.StyledButton>
            </form>
            <S.Footer>
              {type === "login" ? (
                <Link to="/register">회원가입</Link>
              ) : (
                <Link to="/login">회원가입</Link>
              )}
            </S.Footer>
          </S.AuthFormBlock>
        </S.WhiteBox>
      </S.AuthFormTemplateBlock>
    </>
  );
};

export default AuthForm;
