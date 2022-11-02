const express = require("express");
const cors = require("cors");

// EXPRESS SERVER
class Server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.usuariosPath = '/api/usuarios' ;

    //Middllewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json())

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App running on port http/localhost:${this.port}/`);
    });
  }
}

module.exports = Server;
