import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Curso} from '../components/models/Cerificado';
import { Observable } from 'rxjs';
import { API_URI } from '../../app/components/models/Cerificado';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  constructor(private http: HttpClient) { }


  saveInscripcion(datos: any){
    return this.http.post(`${API_URI}/datosparticipante`,{
      id_dparticipante: datos.id_dparticipante,
      nombres_dparticipante: datos.nombres_dparticipante,
      apellidos__dparticipante: datos.apellidos__dparticipante,
      telefono_dparticipante: datos.telefono_dparticipante,
      email_dparticipante: datos.email_dparticipante
    });
  }

  saveIncripcionCurso(datos: any){
    return this.http.post(`${API_URI}/participante`,datos);
  }

  saveInscripcionPArticipante(datos:any){
    return this.http.post(`${API_URI}/participante`,datos);
  }

}
