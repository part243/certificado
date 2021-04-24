import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListComponent } from './components/curso/cursos-list/cursos-list.component';
import { FindCertificadoComponent } from './components/certificado/find-certificado/find-certificado.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/cursos',
    pathMatch: 'full'
  },
  {
    path: 'cursos',
    component: CursosListComponent
  },
  {
    path: 'fcertificate',
    component: FindCertificadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
