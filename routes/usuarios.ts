import { Router } from "express";
import { getUsuarios,getUsuario, postUsuario,updateUsuario, deleteUsuario } from './../controller/usuario';

const router = Router();

router.get("/",     getUsuarios);
router.get("/:id",  getUsuario);
router.post("/",     postUsuario);
router.put("/:id",  updateUsuario);
router.delete("/:id",  deleteUsuario);

export default router;