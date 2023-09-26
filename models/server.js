const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPaht = "/api/usuarios";

    // middlewares
    this.middlewares();

    // rutas
    this.route();
  }

  middlewares() {
    // cors
    this.app.use(cors());

    // parseo y lectura del body
    this.app.use(express.json());

    // directorio publico
    this.app.use(express.static("public"));
  }

  route() {
    this.app.use(this.usuariosPaht, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor eschuchando en  el puerto`, this.port);
    });
  }
}

module.exports = Server;
