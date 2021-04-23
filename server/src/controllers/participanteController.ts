import  {request, Request, Response } from 'express';

import  db  from '../database';

class ParticipanteController {

    public async list(req: Request,res: Response):Promise<any>{
        const participantes = await db.query('select * from participante;');
        if (participantes.length > 0){
            return res.json(participantes);
        }
        res.status(404).json({message:'No hay participantes'});
        //res.json({text:'listando cursos'});    
    }   

    //lista participante por numero de cédula
    public async listOne(req: Request,res: Response):Promise<any>{
        const participante = await db.query('select * from participante where cedula_participante = ?;', req.params.id);
        if(participante.length > 0){
            return res.json(participante);
        }
        res.status(404).json({text: "El participante ingresado no existe."}); 
    }  


    public async create (req: Request, res: Response): Promise<any> {
        console.log(req.body); //cuando angular envie datos será a travez de aquí
        const query = await db.query('insert into participante set ?', [req.body]);
        return res.json(query);

    }

    public async delete (req: Request, res: Response):Promise<any>{
        const query = await db.query('delete from participante where id_participante=?', req.params.id)
        return res.json(query);
    }

    public async update (req: Request, res: Response):Promise<any>{
          const query = await db.query('UPDATE participante SET ? WHERE id_participante = ? ', [req.body, req.params.id]);
          return res.json(query);
        //res.json(cursos);
    }
}

export const participanteController = new ParticipanteController();
//export default cursosController;