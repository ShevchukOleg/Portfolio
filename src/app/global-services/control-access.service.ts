import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlAccessService {

  constructor() { }

  get getAccessInfo() {
    return localStorage.getItem('доступ');
  }

  public keeper() {
     const access = (this.getAccessInfo === 'дозволено' ? true : false);
     return access;
  }
}
