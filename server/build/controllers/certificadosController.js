"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursosController = void 0;
class cursosController {
    list(req, res) {
        //pool.query('describe curso;');
        res.json({ text: 'listando cursos' });
    }
    listOne(req, res) {
        //pool.query('describe curso;');
        res.json({ text: 'este es el certificado ' + req.params.id });
    }
    create(req, res) {
        console.log(req.body); //cuando angular envie datos será a travez de aquí
        res.json({ text: 'agregar certificado' });
    }
    delete(req, res) {
        res.json({ text: ' eliminando ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: ' actualizado' });
    }
}
exports.cursosController = new cursosController();
//export default cursosController;
