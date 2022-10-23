import { useAppDispatch } from "store/index";
import React, { useEffect } from "react";
import AuthForm from "../../../components/auth";
import { authAction } from "store/module/auth";
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const onChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(
      authAction.editChangeField({
        form: "login",
        key: name,
        value,
      })
    );
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(
      authAction.initialLizeForm({
        form: "login",
        key: "",
        value: "",
      })
    );
  }, [dispatch]);
  return (
    <>
      <AuthForm type="login" onChange={onChage} onSubmit={onSubmit}></AuthForm>
    </>
  );
};

export default LoginPage;
