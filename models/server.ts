import express,{Application} from 'express';

class Server {
    private app : Application;
    private port : String;    
    
    constructor(){
        this.app=express();
        this.port= process.env.PORT || '8000';
    }
    listen(){
        this.app.listen(this.port,() =>{
            console.log('Servidor Running PORT:',this.port)
        })
    }
}

export default Server;