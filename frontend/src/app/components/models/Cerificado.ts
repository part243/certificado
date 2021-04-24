export interface Curso {
    id_curso?: number;
    Nombre_curso:String;
    FInicio_curso:String;
    FFin_curso:String;
    Imagen_curso: String;
    id_tutor:number;
    descripcion_curso: String;
    requisitos_curso: String;
}

export const API_URI = 'http://localhost:3000';