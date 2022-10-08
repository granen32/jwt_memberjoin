import { useAppDispatch } from "store/index";
import React from "react";
import AuthForm from "../../../components/auth/";
import { authAction } from "store/module/auth";
import useAuth from "../../../hooks/useAuth";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { setEditChange, setRegister } = useAuth();
  const form = "dkssud";
  const onChage = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    dispatch(
      authAction.register({
        username: "",
        password: "",
        passwordConfirm: "",
      })
    );
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
