import { Injectable } from '@angular/core';
import { Merch } from '../../../../shared/models/merch.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MerchService {
  routeString = 'merch/';

  constructor(
    private api: ApiService 
  ) 
  { }

  createMerch(merch: Merch) {
    return this.api.post<Merch>(this.routeString + 'create-merch',merch);
  }

  getMerch() {
    return this.api.get<Merch[]>(this.routeString);
  }
}
