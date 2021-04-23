import  {request, Request, Response } from 'express';
import pool from '../database';

import  db  from '../database';

class CursosController {

    public async list(req: Request,res: Response):Promise<void>{
        //pool.query('describe curso;');
        const cursos = await db.query('select * from curso;');
        res.json(cursos);
        //res.json({text:'listando cursos'});    
    }   

    public async listOne(req: Request,res: Response):Promise<any>{
        //pool.query('describe curso;');
        const cursos = await db.query('select * from curso where id_curso = ?;', req.params.id);
        if(cursos.length > 0){
            return res.json(cursos[0]);
        }
        res.status(404).json({text: "El curso no existe"}); 
    }  

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body); //cuando angular envie datos será a travez de aquí
        await db.query('insert into curso set ?', [req.body]);
        res.json({text:'Curso Almacenado'});

    }

    public async delete (req: Request, res: Response):Promise<void>{
        db.query('delete from curso where id_curso=?', req.params.id)
        res.json({message: ' El juego fue eliminado '+ req.params.id})
    }

    public async update (req: Request, res: Response):Promise<void>{
          await db.query('UPDATE curso SET ? WHERE id_curso = ? ', [req.body, req.params.id]);
          res.json({message: "El curso fué actualizado"});
        //res.json(cursos);
    }
}

export const cursosController = new CursosController();
//export default cursosController;