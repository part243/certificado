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
exports.participanteController = void 0;
const database_1 = __importDefault(require("../database"));
class ParticipanteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const participantes = yield database_1.default.query('select * from participante;');
            if (participantes.length > 0) {
                return res.json(participantes);
            }
            res.status(404).json({ message: 'No hay participantes' });
            //res.json({text:'listando cursos'});    
        });
    }
    //lista participante por numero de cédula
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const participante = yield database_1.default.query('select * from participante where cedula_participante = ?;', req.params.id);
            if (participante.length > 0) {
                return res.json(participante);
            }
            res.status(404).json({ text: "El participante ingresado no existe." });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); //cuando angular envie datos será a travez de aquí
            const query = yield database_1.default.query('insert into participante set ?', [req.body]);
            return res.json(query);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('delete from participante where id_participante=?', req.params.id);
            return res.json(query);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query('UPDATE participante SET ? WHERE id_participante = ? ', [req.body, req.params.id]);
            return res.json(query);
            //res.json(cursos);
        });
    }
}
exports.participanteController = new ParticipanteController();
//export default cursosController;
