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
exports.certificadosController = void 0;
const database_1 = __importDefault(require("../database"));
class CertificadosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('describe curscertificado;');
            const curscertificados = yield database_1.default.query('select * from curscertificado;');
            res.json(curscertificados);
            //res.json({text:'listando curscertificados'});    
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('describe curscertificado;');
            const curscertificados = yield database_1.default.query('select * from curscertificado where id_curscertificado = ?;', req.params.id);
            if (curscertificados.length > 0) {
                return res.json(curscertificados[0]);
            }
            res.status(404).json({ text: "El curscertificado no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); //cuando angular envie datos será a travez de aquí
            yield database_1.default.query('insert into curscertificado set ?', [req.body]);
            res.json({ text: 'curscertificado Almacenado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('delete from curscertificado where id_curscertificado=?', req.params.id);
            res.json({ message: ' El juego fue eliminado ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE curscertificado SET ? WHERE id_curscertificado = ? ', [req.body, req.params.id]);
            res.json({ message: "El curscertificado fué actualizado" });
            //res.json(curscertificados);
        });
    }
}
exports.certificadosController = new CertificadosController();
