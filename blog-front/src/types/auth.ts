// regiser
export interface RegisterProps {
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface ChangeField {
  form: string;
  key: string;
  value: string;
}
export interface AuthState {
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    username: string;
    password: string;
  };
  changeField: ChangeField;
  authError: null;
  auth: null;
}

export interface ChangeFieldResponse {
  list: ChangeField[];
}

export interface TextMapProps {
  login: string;
  register: string;
  [type: string]: string;
}
