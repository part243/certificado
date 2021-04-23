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
        this.router.get('/', certificadosController_1.certificadosController.index);
    }
}
const certificadosRoutes = new CertificadosRoutes();
exports.default = certificadosRoutes.router;
