import { environment } from '../../../environments/environment.development';

export const URL_RESOURCES = {
  userSignUp: `${environment.apiUrl}:${environment.apiPort}/${environment.apiVer}/register`,
  userLogIn: `${environment.apiUrl}:${environment.apiPort}/${environment.apiVer}/authenticate`,
  // userParams: (params: string) => `${environment.apiUrl}/${params}`,
};
