import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() {
  }

  set(key: string, value: string): void;
  set(key: string, value: string, expires: Date): void;
  set(key: string, value: string, expires?: Date): void {
    let cookieValue = `${key}=${value}`;
    if (expires) cookieValue += `;expires='${expires.toUTCString()}'`
    document.cookie = cookieValue;
  }

  setWithExpiryInYears(key: string, value: string, expires: number) {
    this.setWithExpiryInDays(key, value, expires * 365);
  }

  setWithExpiryInDays(key: string, value: string, expires: number) {
    this.setWithExpiryInHours(key, value, expires * 24);
  }

  setWithExpiryInHours(key: string, value: string, expires: number) {
    this.setWithExpiryInMinutes(key, value, expires * 60);
  }

  setWithExpiryInMinutes(key: string, value: string, expires: number) {
    this.setWithExpiryInSeconds(key, value, expires * 60);
  }

  setWithExpiryInSeconds(key: string, value: string, expires: number) {
    this.setWithExpiryInMiliseconds(key, value, expires * 1000);
  }

  setWithExpiryInMiliseconds(key: string, value: string, expires: number) {
    var expireDate = new Date();
    var time = expireDate.getTime() + expires;
    expireDate.setTime(time);

    this.set(key, value, expireDate);
  }

  get(key: string): string {
    const decodedCookie: string = decodeURIComponent(document.cookie);
    const pairs: string[] = decodedCookie.split(/;\s*/);

    const prefix = `${key}=`;
    for (const pair of pairs) {
      if (pair.indexOf(prefix) === 0) {
        return pair.substring(prefix.length);
      }
    }
    return '';
  }

  delete_cookie ( cookie_name )
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toUTCString();
}
}
