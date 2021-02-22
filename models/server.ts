import express, { Application } from "express";
import userRoutes from "../routes/usuarios";

class Server {
  private app: Application;
  private port: String;
  private apiPath = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.routes();
  }

  routes() {
    this.app.use(this.apiPath.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Running PORT:", this.port);
    });
  }
}

export default Server;
