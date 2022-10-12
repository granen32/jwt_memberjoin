import { useAppDispatch, useAppSelector } from "store/index";
import React from "react";
import AuthForm from "../../../components/auth/";
import { authAction } from "store/module/auth";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const form = 3;
  const onChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    dispatch(
      authAction.editChangeField({
        form: "register",
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
        type="register"
        onChange={onChage}
        form={form}
        onSubmit={onSubmit}
      ></AuthForm>
    </>
  );
};

export default RegisterPage;
