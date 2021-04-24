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
exports.datosparticipanteController = void 0;
const database_1 = __importDefault(require("../database"));
class DatosparticipanteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('describe curso;');
            const datosparticipante = yield database_1.default.query('select * from dparticipante;');
            res.json(datosparticipante);
            //res.json({text:'listando datosparticipante'});    
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('describe curso;');
            const datosparticipante = yield database_1.default.query('select * from dparticipante where id_dparticipante = ?;', req.params.id);
            if (datosparticipante.length > 0) {
                return res.json(datosparticipante[0]);
            }
            res.status(404).json({ text: "El partcipante no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); //cuando angular envie datos será a travez de aquí
            //   `REPLACE INTO dparticipante (id_dparticipante, nombres_dparticipante, apellidos__dparticipante, telefono_dparticipante, email_dparticipante) 
            //                             VALUES ('0983467443', 'Darío', 'Rogríguez Vizuete', '0980983674', 'dario.rodriguez@utelvt.edu.ec');`
            yield database_1.default.query('REPLACE INTO dparticipante set ?', [req.body]);
            res.json({ message: 'Participante Almacenado', next: 'yes' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('delete from dparticipante where id__dparticipante=?', req.params.id);
            res.json({ message: ' El participante fue eliminado ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE dparticipante SET ? WHERE id_dparticipante = ? ', [req.body, req.params.id]);
            res.json({ message: "El participante fué actualizado" });
            //res.json(datosparticipante);
        });
    }
}
exports.datosparticipanteController = new DatosparticipanteController();
//export default datosparticipanteController;
