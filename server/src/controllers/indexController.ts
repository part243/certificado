import  {Request, Response } from 'express';

class IndexController {
   
    public index(req: Request,res: Response){
        res.json({text: 'Lo siento no estás autorizado'});
    }

}

export const indexController = new IndexController();