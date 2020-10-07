import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  @Input() titulo: string;
  @Input() fotos: string[];
  controleGaleria: number = 0;

  firstImg() {
    this.controleGaleria = 0;
  }
  prevImg() {
    if (this.controleGaleria > 0) {
      this.controleGaleria -= 1;
    }
  }
  nextImg() {
    if (this.controleGaleria < this.fotos.length - 1) {
      this.controleGaleria += 1;
    }
  }
  lastImg() {
    this.controleGaleria = this.fotos.length - 1;
  }
}
