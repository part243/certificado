"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datosparticipanteController_1 = require("../controllers/datosparticipanteController");
class DatosparticipanteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', datosparticipanteController_1.datosparticipanteController.list);
        this.router.get('/:id', datosparticipanteController_1.datosparticipanteController.listOne);
        this.router.post('/', datosparticipanteController_1.datosparticipanteController.create);
        this.router.delete('/:id', datosparticipanteController_1.datosparticipanteController.delete);
        this.router.put('/:id', datosparticipanteController_1.datosparticipanteController.update);
    }
}
const datosparticipanteRoutes = new DatosparticipanteRoutes();
exports.default = datosparticipanteRoutes.router;
