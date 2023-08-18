import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ScoresComponent } from './pages/scores/scores.component';
import { RoutesComponent } from './pages/routes/routes.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'calificaciones',
    component: ScoresComponent
  },
  {
    path: 'rutas',
    component: RoutesComponent
  },
  {
    path: '**',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
