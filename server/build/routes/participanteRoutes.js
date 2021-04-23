"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const participanteController_1 = require("../controllers/participanteController");
class CursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', participanteController_1.participanteController.list);
        this.router.get('/:id', participanteController_1.participanteController.listOne);
        this.router.post('/', participanteController_1.participanteController.create);
        this.router.delete('/:id', participanteController_1.participanteController.delete);
        this.router.put('/:id', participanteController_1.participanteController.update);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
