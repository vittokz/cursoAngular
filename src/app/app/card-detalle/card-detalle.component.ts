import { IHero } from './../../modelos/hero-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.scss']
})
export class CardDetalleComponent implements OnInit {
  detalleHeroe: IHero;
  constructor() { }

  ngOnInit(): void {
  }

}
