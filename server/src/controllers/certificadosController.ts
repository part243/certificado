import  {Request, Response } from 'express';
import pool from '../database';

import  db  from '../database';

class CertificadosController {

    public index(req: Request,res: Response){
        //pool.query('describe curso;');
        res.json('games');    
    }   

}

export const certificadosController = new CertificadosController();
//export default CertificadosController;