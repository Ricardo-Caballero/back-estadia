import profesorController from '../controllers/profesor.controller.js';
import { Router } from 'express';
const router = Router();

router.get('/getOne/:controlnumber',profesorController.getProfesor);

router.post('/insert',profesorController.insertProfesor);

router.put('/updateProfesor/:controlnumber',profesorController.updateProfesor);

router.delete('/delete/:controlnumber',profesorController.eliminarProfe);

router.get('/getAllProfesor/',profesorController.getAllProfesors)
export default router;


