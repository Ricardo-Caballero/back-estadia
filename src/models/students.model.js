import {Schema,model} from 'mongoose';
const studentSchema = new Schema({
    controlnumber:{
        type:String,
        required:true,
        unique:true,
    },name:String,
    lastname:String,
    carrera:String,
    grupo:String
},{
    versionKey:false,
    timestamps:true
});
export default model('Student', studentSchema);
