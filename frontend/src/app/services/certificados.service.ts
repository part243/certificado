import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Curso} from '../components/models/Cerificado';
import { Observable } from 'rxjs';
import { API_URI } from '../../app/components/models/Cerificado';

@Injectable({
  providedIn: 'root'
})

export class CertificadosService {
  constructor(private http: HttpClient) { }

  getCertificado(id: string){
    return this.http.get(`${API_URI}/certificado/${id}`);
  }

}
