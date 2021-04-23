"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'Lo siento no estás autorizado' });
    }
}
exports.indexController = new IndexController();
