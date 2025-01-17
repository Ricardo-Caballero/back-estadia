import profesorDAO from "../daos/profesor.dao.js";
const profesorController = {};

// get one profesor
profesorController.getProfesor = async (req,res) =>{
    profesorDAO.getProfesor(req.params.controlnumber)
    .then((profesor) =>{
        res.json({
            message: profesor
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error
        })
    })
}

// insert a new profile

profesorController.insertProfesor = async (req,res) => {
    profesorDAO.insertProfesor(req.body)
    .then((profesor) => {
        res.json({
            message: "Profesor creado correctamente",
            data: profesor
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error
        })
    })
}

// update a profesor
profesorController.updateProfesor = async (req,res) => {
    profesorDAO.updateProfesor(req.params.controlnumber, req.body)
    .then((profesor) => {
        res.json({
            message: "Profesor actualizado correctamente",
            data: profesor
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error
        })
    })
}

// delete a profesor
profesorController.eliminarProfe = async (req,res) =>{
    profesorDAO.eliminarProfe(req.params.controlnumber,req.body)
    .then((profesor) => {
        res.json({
            message: "Profesor deleted successfully"
        })
    })
    .catch((error) =>{
        res.status(500).json({
            message: error
        })
    })
}

//get all
profesorController.getAllProfesors = async (req, res) => {
    profesorDAO.getAllProfesors()
    .then((profesores) => {
        res.json({
            message: profesores
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error
        })
    })
}
export default profesorController;