"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = require("../controllers/cursosController");
class CursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cursosController_1.cursosController.list);
        this.router.get('/:id', cursosController_1.cursosController.listOne);
        this.router.post('/', cursosController_1.cursosController.create);
        this.router.delete('/:id', cursosController_1.cursosController.delete);
        this.router.put('/:id', cursosController_1.cursosController.update);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
