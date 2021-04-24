import { Router } from  'express';
import  {datosparticipanteController}  from '../controllers/datosparticipanteController';

class DatosparticipanteRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', datosparticipanteController.list);
        this.router.get('/:id', datosparticipanteController.listOne);
        this.router.post('/', datosparticipanteController.create);
        this.router.delete('/:id', datosparticipanteController.delete);
        this.router.put('/:id', datosparticipanteController.update);
    }
}
 
const datosparticipanteRoutes = new DatosparticipanteRoutes();
export default datosparticipanteRoutes.router;