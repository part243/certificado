import { Router } from  'express';
import  {certificadosController}  from '../controllers/certificadosController';

class CertificadosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', certificadosController.list);
        this.router.get('/:id', certificadosController.listOne);
        this.router.post('/', certificadosController.create);
        this.router.delete('/:id', certificadosController.delete);
        this.router.put('/:id', certificadosController.update);
    }
}
 
const certificadosRoutes = new CertificadosRoutes();
export default certificadosRoutes.router;