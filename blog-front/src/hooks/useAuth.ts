import { useAppDispatch, useAppSelector } from "../store";
import { authSelector, authAction } from "../store/module/auth";

const useAuth = () => {
  const dispatch = useAppDispatch;
  const testList = useAppSelector(authSelector);
  const setSampleAction = () => {
    dispatch();
  };
  return { testList, setSampleAction };
};

export default useAuth;
