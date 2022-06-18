import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css'],
})
export class NopagefoundComponent {
  sesionActiva: boolean;
  constructor(private ruta: Router) {
    this.sesionActiva = localStorage.getItem('session') ? true : false;
  }

  iraLogin() {
    this.ruta.navigate(['login']);
  }
}
