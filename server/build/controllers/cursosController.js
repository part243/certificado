"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursosController = void 0;
const database_1 = __importDefault(require("../database"));
class CursosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('describe curso;');
            const cursos = yield database_1.default.query('select * from curso;');
            res.json(cursos);
            //res.json({text:'listando cursos'});    
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('describe curso;');
            const cursos = yield database_1.default.query('select * from curso where id_curso = ?;', req.params.id);
            if (cursos.length > 0) {
                return res.json(cursos[0]);
            }
            res.status(404).json({ text: "El curso no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); //cuando angular envie datos será a travez de aquí
            yield database_1.default.query('insert into curso set ?', [req.body]);
            res.json({ text: 'Curso Almacenado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('delete from curso where id_curso=?', req.params.id);
            res.json({ message: ' El juego fue eliminado ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE curso SET ? WHERE id_curso = ? ', [req.body, req.params.id]);
            res.json({ message: "El curso fué actualizado" });
            //res.json(cursos);
        });
    }
}
exports.cursosController = new CursosController();
//export default cursosController;
