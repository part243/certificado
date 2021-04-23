import { Router } from  'express';
import  {certificadosController}  from '../controllers/certificadosController'

class CertificadosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', certificadosController.index);
    }
}

const certificadosRoutes = new CertificadosRoutes();
export default certificadosRoutes.router;