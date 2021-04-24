import  {request, Request, Response } from 'express';

import  db  from '../database';

class CertificadosController {
    public async list(req: Request,res: Response):Promise<any>{
        //pool.query('describe curscertificado;');
        const certificados = await db.query('select * from certificado;');
        res.json(certificados);
        //res.json({text:'listando curscertificados'});    
    }   

    public async listOne(req: Request,res: Response):Promise<any>{
        //pool.query('describe curscertificado;');
        const certificados = await db.query(`select resultado, enlace_certificado,nombres_dparticipante,apellidos__dparticipante,Nombre_curso, FFin_curso from certificado c
                                                    inner join dparticipante dp
                                                    inner join curso cu
                                                    where dp.id_dparticipante = c.cedula_participante and 
                                                        c.id_curso_certificado = cu.id_curso and
                                                    dp.id_dparticipante =  ?;`, req.params.id);
        if(certificados.length > 0){
            return res.json(certificados);
        }
        // return res.status(404).json({message: "Sin certificados"}); 
        return res.status(404).json({message: "Sin certificados"}); 
    }  

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body); //cuando angular envie datos será a travez de aquí
        await db.query('insert into certificado set ?', [req.body]);
        res.json({text:'curscertificado Almacenado'});

    }

    public async delete (req: Request, res: Response):Promise<void>{
        db.query('delete from curscertificado where id_certificado=?', req.params.id)
        res.json({message: ' El juego fue eliminado '+ req.params.id})
    }

    public async update (req: Request, res: Response):Promise<void>{
          await db.query('UPDATE certificado SET ? WHERE id_certificado = ? ', [req.body, req.params.id]);
          res.json({message: "El curscertificado fué actualizado"});
        //res.json(curscertificados);
    }
}

export const certificadosController = new CertificadosController();