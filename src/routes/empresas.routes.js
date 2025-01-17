import empresaController from "../controllers/empresas.controller.js";
import { Router } from 'express';
const router = Router();

router.post('/insert', empresaController.insertEmpresa);


//Vamos a optener todos las empresas
router.get('/getAll',empresaController.getEmpresas);

export default router;