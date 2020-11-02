import { IHero } from './../../modelos/hero-interface';
import { IUser } from './../../modelos/user-modelo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heroes : IHero;
 

  
  constructor() { }

  ngOnInit(): void {
    console.log(this.heroes);
  }

}
