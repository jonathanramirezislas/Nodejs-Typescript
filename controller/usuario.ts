import { Request, Response } from "express";

export const getUsuarios = (req: Request, resp: Response) => {
  resp.json({});
};

export const getUsuario = (req: Request, resp: Response) => {
  const { id } = req.params;
  resp.json({
    msg: "getUsuario",
    id,
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