import studentDAO from "../daos/students.dao.js";
const studentController = {};

//1.-  crea la función llamada insertStudent y la guarda en el objeto studentController = {}
//1.2- The async keyword indicates that the function might use asynchronous operations (like database interactions).
//1.3- The async keyword indicates that the function might use asynchronous operactions (like database interactions).
//1.4- "req" and "res" are parameters represnting the request and response objects, respectively, typically provided by the web framework.
//2.- studentDAO.insertStudent(req.body):
    //This line calls the insertStudent method of the "studentDAO object", passing the "req.body" object as an argument
    //2.1- req.body contains the data sent in the request body, typically in JSON format, representing the new student information.

    /**
     * The studentDAO object is likely responsible for interacting with the database (e.g., using a database library like Mongoose or Sequelize).
.then((student) => {:

This part handles the successful execution of the insertStudent method.
The student variable will contain the newly created student object, as returned by the insertStudent method.
res.json({ message: "Student created successfully" }):

This line sends a JSON response to the client, indicating that the student was created successfully.
The response includes a message for informational purposes.
.catch((error) => {:

This part handles any errors that might occur during the database insertion.
The error variable will contain the error object if an error happens.
res.status(500).json({ message: error }):

This line sends a JSON response with a status code of 500 (Internal Server Error) and the error message as the response body.
This indicates that there was a problem on the server side during the insertion process.
     * 
     */

studentController.insertStudent = async (req, res) => {
    studentDAO.insertStudent(req.body)
    .then((student) => {
        res.json({
            message: "Student created successfully"
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error 
        })
    });
};
//clase de hoy
studentController.getStudents = async (req,res) =>{
    studentDAO.getStudents()
    .then((students)=>{
        res.json(students);
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    });
};

//clase de hoy Obtener un elemento

studentController.getStudent = async (req,res) =>{
    console.log("entre a la base")
    studentDAO.getStudent(req.params.controlnumber)
    .then((student)=>{
        res.json({
            message: student
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    });
};

//ahora voy a programar el controller para actualizar
studentController.updateStudent = async (req,res) =>{
    studentDAO.updateStudent(req.params.controlnumber, req.body)
    .then((student)=>{
        res.json({
            message: "Student updated successfully what's up man"
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    });
};

//ahora voy a programar el controller para eliminar
studentController.deleteStudent = async (req,res) =>{
    studentDAO.deleteStudent(req.params.controlnumber, req.body)
        .then((student)=>{
            res.json({
                message: "Student deleted successfully"
            })
        })
        .catch((error)=>{
            res.status(500).json({
                message: error
            })
        })
}
export default studentController;











































