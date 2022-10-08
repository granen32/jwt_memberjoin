import { useAppDispatch } from "store/index";
import React, { useState } from "react";
import AuthForm from "../../../components/auth";
import { authAction } from "store/module/auth";
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const form = "";
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
  return (
    <>
      <AuthForm
        type="login"
        onChange={onChage}
        form={form}
        onSubmit={onSubmit}
      ></AuthForm>
    </>
  );
};

export default LoginPage;
