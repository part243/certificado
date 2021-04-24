import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Curso} from '../components/models/Cerificado';
import { Observable } from 'rxjs';
import { API_URI } from '../../app/components/models/Cerificado';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  API_URI = 'http://localhost:3000';
  


  constructor( private http: HttpClient ) { }

  getCursos(){
    return this.http.get(`${API_URI}/cursos`);
  }

  getCurso(id: number){
    return this.http.get(`${API_URI}/cursos/${id}`);
  }

  saveCurso(curso: Curso){
    return this.http.post(`${API_URI}/cursos`,curso);
  }

  updateCurso(id: number, cursoUpdate: Curso): Observable<any> {
    return this.http.post(`${API_URI}/cursos/${id}`, cursoUpdate);
  }

  deleteCurso(id: number){
    return this.http.delete(`${API_URI}/cursos/${id}`);
  }
}
