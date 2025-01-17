import Student from '../models/students.model.js';
const studentDAO={};


studentDAO.insertStudent = async (student)=>{
    return await Student.create(student);
};

//clase de hoy
studentDAO.getStudents = async () =>{
    return await Student.find();
};
//clase de hoy
studentDAO.getStudent = async (controlnumber)=>{
    return await Student.findOne({controlnumber:controlnumber});
};
//clase de hoy
studentDAO.updateStudent = async (controlnumber,student)=>{
    return await Student.findOneAndUpdate({controlnumber:controlnumber},student);
}
//clase de hoy
studentDAO.deleteStudent = async (controlnumber)=>{
    return await Student.findOneAndDelete({controlnumber:controlnumber});
};

export default studentDAO;