import { Router } from "express";
import { getUsuarios,getUsuario, postUsuario,updateUsuario, deleteUsuario } from './../controller/usuario';

const router = Router();

router.get("/",     getUsuarios);
router.get("/:id",  getUsuario);
router.get("/",     postUsuario);
router.get("/:id",  updateUsuario);
router.get("/:id",  deleteUsuario);

export default router;