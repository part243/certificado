"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const certificadosController_1 = require("../controllers/certificadosController");
class CertificadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', certificadosController_1.certificadosController.list);
        this.router.get('/:id', certificadosController_1.certificadosController.listOne);
        this.router.post('/', certificadosController_1.certificadosController.create);
        this.router.delete('/:id', certificadosController_1.certificadosController.delete);
        this.router.put('/:id', certificadosController_1.certificadosController.update);
    }
}
const certificadosRoutes = new CertificadosRoutes();
exports.default = certificadosRoutes.router;
