import  {request, Request, Response } from 'express';

import  db  from '../database';

class CertificadosController {
    public async list(req: Request,res: Response):Promise<void>{
        //pool.query('describe curscertificado;');
        const curscertificados = await db.query('select * from curscertificado;');
        res.json(curscertificados);
        //res.json({text:'listando curscertificados'});    
    }   

    public async listOne(req: Request,res: Response):Promise<any>{
        //pool.query('describe curscertificado;');
        const curscertificados = await db.query('select * from curscertificado where id_curscertificado = ?;', req.params.id);
        if(curscertificados.length > 0){
            return res.json(curscertificados[0]);
        }
        res.status(404).json({text: "El curscertificado no existe"}); 
    }  

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body); //cuando angular envie datos será a travez de aquí
        await db.query('insert into curscertificado set ?', [req.body]);
        res.json({text:'curscertificado Almacenado'});

    }

    public async delete (req: Request, res: Response):Promise<void>{
        db.query('delete from curscertificado where id_curscertificado=?', req.params.id)
        res.json({message: ' El juego fue eliminado '+ req.params.id})
    }

    public async update (req: Request, res: Response):Promise<void>{
          await db.query('UPDATE curscertificado SET ? WHERE id_curscertificado = ? ', [req.body, req.params.id]);
          res.json({message: "El curscertificado fué actualizado"});
        //res.json(curscertificados);
    }
}

export const certificadosController = new CertificadosController();