const express = require('express');
const cors = require('cors');

class ServerClass {
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.usersRoutePath = '/api/users'

        this.middlewares();
        this.routes();
    };

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body (Cualquier información convierte a json)
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'));
    }

    routes() {
        // Configurando un path padre 
        this.app.use(this.usersRoutePath, require('../routes/user.routes'));
    };

    listenPort() {
        this.app.listen(this.PORT, () => {
            console.log(`Servidor corriendo en puerto: ${this.PORT}`)
        });
    };
}

module.exports = ServerClass;