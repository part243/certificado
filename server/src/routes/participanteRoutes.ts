import { Router } from  'express';
import  {participanteController}  from '../controllers/participanteController';

class CursosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', participanteController.list);
        this.router.get('/:id', participanteController.listOne);
        this.router.post('/', participanteController.create);
        this.router.delete('/:id', participanteController.delete);
        this.router.put('/:id', participanteController.update);
    }
}
 
const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;