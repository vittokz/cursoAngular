import { IHero } from './../../modelos/hero-interface';
import { HeroService } from './../../services/hero.service';
import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/modelos/user-modelo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() heroes : IHero;
  listHeroes : IHero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.cargarHeroes();
  }

  cargarHeroes(){
    this.heroService.getAllSuperHeroes().subscribe(
      data=>{
         this.listHeroes = data;
      },
      error=> console.log("No hay datos")
    );
  }

}
