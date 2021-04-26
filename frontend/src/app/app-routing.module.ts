import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListComponent } from './components/curso/cursos-list/cursos-list.component';
import { FindCertificadoComponent } from './components/certificado/find-certificado/find-certificado.component'
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [

  {
    path: 'cursos',
    component: CursosListComponent
  },
  {
    path: '',
    redirectTo: 'cursos',
    pathMatch: 'full'
  },
  {
    path: 'fcertificate',
    component: FindCertificadoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
