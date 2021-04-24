import  {request, Request, Response } from 'express';
import  db  from '../database';

class DatosparticipanteController {

    public async list(req: Request,res: Response):Promise<void>{
        //pool.query('describe curso;');
        const datosparticipante = await db.query('select * from dparticipante;');
        res.json(datosparticipante);
        //res.json({text:'listando datosparticipante'});    
    }   

    public async listOne(req: Request,res: Response):Promise<any>{
        //pool.query('describe curso;');
        const datosparticipante = await db.query('select * from dparticipante where id_dparticipante = ?;', req.params.id);
        if(datosparticipante.length > 0){
            return res.json(datosparticipante[0]);
        }
        res.status(404).json({text: "El partcipante no existe"}); 
    }  

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body); //cuando angular envie datos será a travez de aquí

     //   `REPLACE INTO dparticipante (id_dparticipante, nombres_dparticipante, apellidos__dparticipante, telefono_dparticipante, email_dparticipante) 
       //                             VALUES ('0983467443', 'Darío', 'Rogríguez Vizuete', '0980983674', 'dario.rodriguez@utelvt.edu.ec');`
        await db.query('REPLACE INTO dparticipante set ?', [req.body]);
        res.json({message:'Participante Almacenado',next:'yes'});

    }

    public async delete (req: Request, res: Response):Promise<void>{
        db.query('delete from dparticipante where id__dparticipante=?', req.params.id)
        res.json({message: ' El participante fue eliminado '+ req.params.id})
    }

    public async update (req: Request, res: Response):Promise<void>{
          await db.query('UPDATE dparticipante SET ? WHERE id_dparticipante = ? ', [req.body, req.params.id]);
          res.json({message: "El participante fué actualizado"});
        //res.json(datosparticipante);
    }
}

export const datosparticipanteController = new DatosparticipanteController();
//export default datosparticipanteController;