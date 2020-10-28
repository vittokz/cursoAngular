import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero } from '../modelos/hero-interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url: string = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
  constructor(private http: HttpClient) { }

  getAllSuperHeroes(): Observable<IHero[]>{
     return this.http.get<IHero[]>(this.url);
  }
}
