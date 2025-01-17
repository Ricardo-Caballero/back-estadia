import comentariosController from '../controllers/comentarios.controller.js';
import { Router } from 'express';
const router = Router();

// vamos a insertar un comentario

router.post('/insert', comentariosController.insertComentario);

export default router;