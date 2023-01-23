import { Injectable } from '@angular/core';

declare let CryptoJS: any;

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  constructor() { }

  getSHA256(value: string) {
    return CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex);
  }

}
