import { IUser } from './../modelos/user-modelo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  datos = [
    {name: 'vittorio', email: 'vittorio@hotmail.com'},
    {name: 'andres', email: 'vittorio@hotmail.com'},
    {name: 'jairo', email: 'vittorio@hotmail.com'}
  ];

  constructor() { }

  getDatos(): IUser[]{
    return this.datos;
  }
}
