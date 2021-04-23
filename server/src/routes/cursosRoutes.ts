import { Router } from  'express';
import  {cursosController}  from '../controllers/cursosController'

class CursosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', cursosController.list);
        this.router.get('/:id', cursosController.listOne);
        this.router.post('/', cursosController.create);
        this.router.delete('/:id', cursosController.delete);
        this.router.put('/:id', cursosController.update);
    }
}
 
const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;