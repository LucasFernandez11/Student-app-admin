import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from './core/models/usuario';
import { AuthService } from './core/services/auth.service';
import { selectorUsuarioActivo } from './features/auth/state/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PF-Fernandez';
  other_content: boolean = false;
  usuarioActivo!: Usuario;

  constructor(public authService: AuthService, private store: Store) {}

  ngOnInit() {
    this.store.select(selectorUsuarioActivo).subscribe((data) => {
      this.usuarioActivo = data.usuarioActivo;
    });

    
  }
}
