import { Request, Response } from "express";
import Usuario from "./../models/usuario";

export const getUsuarios = async (req: Request, resp: Response) => {
  const usuarios = await Usuario.findAll();
  resp.json({ usuarios });
};

export const getUsuario = async (req: Request, resp: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
console.log(usuario);
  if (usuario) {
    resp.json({
      msg: "getUsuario",
      usuario,
    });
  } else {
    resp.status(404).json({
      msg: "Not user found by id",
      usuario,
    });
  }
};

export const postUsuario = async (req: Request, resp: Response) => {
  const { body } = req;
  try {
    const existemail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    });
    
    if (existemail) {
      return resp.status(400).json({
        msg: "There is already a user registed with that email"+body.email,
      });
    } else {
      const usuario = new Usuario(body);
      await usuario.save();
      resp.json(usuario);
    }
  } catch (err) {
    resp.status(501).json({
      msg: "Erro form server",
    });
  }
};


export const updateUsuario = async(req: Request, resp: Response) => {
  const { body } = req;
  const { id } = req.params;


  try {
    const user =await Usuario.findByPk(id);

    if (!user) {
      return resp.status(400).json({
        msg: "with don't find your user",
      });
    } 
      await user.update(body);
      resp.json({
        msg: "ok",
      });
    
  } catch (err) {
    resp.status(501).json({
      msg: "Error form server",
    });
  }

};

export const deleteUsuario = async(req: Request, resp: Response) => {
  const { id } = req.params;
const usuario= await Usuario.findByPk(id);
try {
if (!usuario) {
  return resp.status(400).json({
    msg: "with don't find user",
  });
} 
  await usuario.destroy();
  resp.json({
    msg: "ok",
  });

}catch (err) {
resp.status(501).json({
  msg: "Error form server",
});
}


};
