export interface Inputs {
  name: string;
  email: string;
  tel: string;
  message: string;
  selectServises: Array<string> | undefined;
  [key: string]: Array<string> | string | boolean | undefined;
}
