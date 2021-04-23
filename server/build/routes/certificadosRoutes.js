"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CertificadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Certificados'));
    }
}
const certificadosRoutes = new CertificadosRoutes();
exports.default = certificadosRoutes.router;
