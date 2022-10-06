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
  changeField: ChangeFieldResponse | null;
}

export interface ChangeFieldResponse {
  list: ChangeField[];
}

export interface TextMapProps {
  login: string;
  register: string;
}
