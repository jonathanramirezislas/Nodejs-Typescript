import express, { Application } from "express";
import userRoutes from "../routes/usuarios";
import cors from 'cors'

class Server {
  private app: Application;
  private port: String;
  private apiPath = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.middleware();
    this.routes();
  }

  //TODO: base de datos

  middleware(){
  //cors
    this.app.use(cors());
  
  //Read body from request
  this.app.use(express.json());
  //index for app
  this.app.use(express.static('public'));

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
