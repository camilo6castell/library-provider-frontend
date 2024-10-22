import { Injectable } from '@angular/core';
import { HttpService } from '../generals/http/http.service';
import { ApiToUserMApper } from '../../mappers/api-to-user.mapper';
import { Observable } from 'rxjs';
import { ISignupModel } from '../../models/signup.model';
import { URL_RESOURCES } from '../../resources/url.resources';
import { ILoginModel } from '../../models/login.model';
import { ISaveAndQuoteTexModel } from '../../models/save-and-quote-text.model';
import { IGetStockTextsModel } from '../../models/get-stock-texts.model';
import { IItemTextBatchModel } from '../../models/item-text-batch.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // public isAuthenticated = false;
  constructor(
    private readonly httpService: HttpService,
    private apiToUserMapper: ApiToUserMApper
  ) {}
  // getUser(): Observable<IUserModel> {
  //   const url = URL_RESOURCES.user;
  //   return this.httpService
  //     .get<IUserModel>(url)
  //     .pipe(map((result) => this.apiToUserMapper.map(result)));
  // }
  registerUserService(body: ISignupModel): Observable<any> {
    const url = URL_RESOURCES.userSignUp;
    return this.httpService.postServiceCreateNewUser(url, body);
  }
  loginUserService(body: ILoginModel): Observable<any> {
    const url = URL_RESOURCES.userLogIn;
    return this.httpService.postServiceLoginUser(url, body);
  }
  saveAndQuoteTextService(body: ISaveAndQuoteTexModel): Observable<any> {
    const url = URL_RESOURCES.saveAndQuoteText;
    return this.httpService.post(url, body);
  }
  getStockTextsService(body: IGetStockTextsModel): Observable<any> {
    const url = URL_RESOURCES.getStockTexts;
    return this.httpService.post(url, body);
  }
  wholeSaleTextsService(body: {
    bookIndicesAndQuantity: IItemTextBatchModel[];
    novelIndicesAndQuantity: IItemTextBatchModel[];
    token: string;
  }): Observable<any> {
    const url = URL_RESOURCES.wholeSaleTexts;
    return this.httpService.post(url, {
      bookIndicesAndQuantity: body.bookIndicesAndQuantity,
      novelIndicesAndQuantity: body.novelIndicesAndQuantity,
      token: body.token,
    });
  }
  budgetSaleService(body: any): Observable<any> {
    const url = URL_RESOURCES.budgetSaleTexts;
    console.log(body);
    return this.httpService.post(url, body);
  }
}
