import { useAppDispatch } from "store/index";
import React, { useEffect } from "react";
import AuthForm from "../../../components/auth/";
import { authAction } from "store/module/auth";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
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
      <AuthForm
        type="register"
        onChange={onChage}
        onSubmit={onSubmit}
      ></AuthForm>
    </>
  );
};

export default RegisterPage;
