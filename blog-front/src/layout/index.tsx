import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
const LayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    location.pathname === "/" && navigate("/login");
  }, [navigate, location]);
  return (
    <>
      <S.LayoutPageContainer>
        <S.LayoutPageContent>
          <Outlet />
        </S.LayoutPageContent>
      </S.LayoutPageContainer>
    </>
  );
};

export default LayoutPage;
