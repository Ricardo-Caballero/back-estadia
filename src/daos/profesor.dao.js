import Profesor from '../models/profesor.model.js';
const profesorDAO = {};

profesorDAO.getProfesor = async (controlnumber) =>{
    return await Profesor.findOne({ controlnumber: controlnumber });
}

profesorDAO.getAllProfesors = async () =>{
    return await Profesor.find();
}

profesorDAO.insertProfesor = async (profesor) => {
    return await Profesor.create(profesor);
}

profesorDAO.updateProfesor = async (controlnumber, profesor) =>{
    return await Profesor.findOneAndUpdate({controlnumber: controlnumber},profesor);
}

profesorDAO.eliminarProfe = async (controlnumber) => {
    return await Profesor.findOneAndDelete({controlnumber:controlnumber});
}

export default profesorDAO;