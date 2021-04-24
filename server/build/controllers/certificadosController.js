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
            const certificados = yield database_1.default.query('select * from certificado;');
            res.json(certificados);
            //res.json({text:'listando curscertificados'});    
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('describe curscertificado;');
            const certificados = yield database_1.default.query(`select resultado, enlace_certificado,nombres_dparticipante,apellidos__dparticipante,Nombre_curso, FFin_curso from certificado c
                                                    inner join dparticipante dp
                                                    inner join curso cu
                                                    where dp.id_dparticipante = c.cedula_participante and 
                                                        c.id_curso_certificado = cu.id_curso and
                                                    dp.id_dparticipante =  ?;`, req.params.id);
            if (certificados.length > 0) {
                return res.json(certificados);
            }
            // return res.status(404).json({message: "Sin certificados"}); 
            return res.status(404).json({ message: "Sin certificados" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); //cuando angular envie datos será a travez de aquí
            yield database_1.default.query('insert into certificado set ?', [req.body]);
            res.json({ text: 'curscertificado Almacenado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('delete from curscertificado where id_certificado=?', req.params.id);
            res.json({ message: ' El juego fue eliminado ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE certificado SET ? WHERE id_certificado = ? ', [req.body, req.params.id]);
            res.json({ message: "El curscertificado fué actualizado" });
            //res.json(curscertificados);
        });
    }
}
exports.certificadosController = new CertificadosController();
