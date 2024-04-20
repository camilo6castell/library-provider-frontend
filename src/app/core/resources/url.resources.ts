import { environment } from '../../../environments/environment.development';

export const URL_RESOURCES = {
  user: `${environment.apiUrl}/`,
  userParams: (params: string) => `${environment.apiUrl}/${params}`,
};
