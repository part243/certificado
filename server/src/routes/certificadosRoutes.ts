import { Router } from  'express';

class CertificadosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', (req, res) => res.send('Certificados'));
    }
}

const certificadosRoutes = new CertificadosRoutes();
export default certificadosRoutes.router;