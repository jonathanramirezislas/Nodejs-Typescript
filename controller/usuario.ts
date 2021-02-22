import { Request, Response } from "express";
import Usuario from './../models/usuario';

export const getUsuarios = async(req: Request, resp: Response) => {
 const usuarios = await Usuario.findAll();
  resp.json({usuarios});
};

export const getUsuario = async(req: Request, resp: Response) => {
  const { id } = req.params;
  const usuarios = await Usuario.findByPk(id);
  resp.json({
    msg: "getUsuario",
    usuarios,
  });
};

export const postUsuario = (req: Request, resp: Response) => {
  const { body } = req;

  resp.json({
    msg: "postUsuario",
    body
  });
};

export const updateUsuario = (req: Request, resp: Response) => {
    const { body } = req;
    const { id } = req.params;
    
    resp.json({
      msg: "postUsuario",
      body,
      id
    });
  };
  
  
export const deleteUsuario = (req: Request, resp: Response) => {
    const { id } = req.params;
  
    resp.json({
      msg: "postUsuario",
      id
    });
  };