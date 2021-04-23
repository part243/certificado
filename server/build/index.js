"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const cursosRoutes_1 = __importDefault(require("./routes/cursosRoutes"));
const participanteRoutes_1 = __importDefault(require("./routes/participanteRoutes"));
const certificadosRoutes_1 = __importDefault(require("./routes/certificadosRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //ver peticiones de los clientes
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/cursos', cursosRoutes_1.default);
        this.app.use('/participante', participanteRoutes_1.default);
        this.app.use('/certificado', certificadosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en puerto ', this.app.get('port'));
        });
    }
}
const server = new Server(); //guardar configuracion de server
server.start(); //inicializar app
