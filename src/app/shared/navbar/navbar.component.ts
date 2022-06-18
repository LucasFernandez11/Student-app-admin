import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { filter, delay } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { selectorUsuarioActivo } from 'src/app/features/auth/state/auth.selectors';
import { Usuario } from 'src/app/core/models/usuario';
import { cerrarSesion } from 'src/app/features/auth/state/auth.actions';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  rol!: boolean;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  usuarioActivo!: Usuario;

  constructor(
    private observer: BreakpointObserver,
    public authService: AuthService,
    private router: Router,
    private store: Store
  ) {
    /*  var values = JSON.parse(localStorage.getItem('session') || 'false');
    if (values.usuario !== undefined) {
      if (values.usuario.rol === 1) {
        this.rol = true;
      } else {
        this.rol = false;
      }
    } else {
      this.rol = false;
    } */
  }

  ngOnInit(): void {
    var values = JSON.parse(localStorage.getItem('session') || 'false');
    this.store.select(selectorUsuarioActivo).subscribe((data) => {
      if (values.usuario !== undefined) {
        this.usuarioActivo = values.usuario;
      } else {
        this.usuarioActivo = data.usuarioActivo;
      }
    });
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 960px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  cerrarSesion() {
    this.authService.CerrarSesion();
    this.store.dispatch(cerrarSesion());
    this.router.navigate(['login']);
  }
}
