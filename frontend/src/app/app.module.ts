import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CertificadoFormComponent } from './components/certificado/certificado-form/certificado-form.component';
import { CursosListComponent } from './components/curso/cursos-list/cursos-list.component';

import { CursoService } from './services/curso.service';
import { FindCertificadoComponent } from './components/certificado/find-certificado/find-certificado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InscribeteComponent } from './components/inscribete/inscribete.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CertificadoFormComponent,
    CursosListComponent,
    FindCertificadoComponent,
    InscribeteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,   
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent],
  entryComponents: [InscribeteComponent]
})
export class AppModule { }
