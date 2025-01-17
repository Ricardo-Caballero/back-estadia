import studentController from "../controllers/students.controller.js";
import { Router } from 'express';
const router = Router();
router.post('/insert', studentController.insertStudent);
//clase de hoy
router.get('/getAll',studentController.getStudents);
//nueva ruta para la función creada en students.controller.js
router.get("/getOne/:controlnumber",studentController.getStudent);
//clase de hoy
//nueva ruta para la función de actualizar students.controller.js
router.put('/updateOne/:controlnumber',studentController.updateStudent);
//crear el controller studentController
router.delete('/delete/:controlnumber',studentController.deleteStudent);
export default router;