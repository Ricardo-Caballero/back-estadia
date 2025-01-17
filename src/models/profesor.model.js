import { model,Schema, version } from "mongoose";
const ProfesorSchema = new Schema({
    controlnumber: {
        type: String, 
        required: true, 
        unique: true
    },name:String,
        correo: String,
        password: String
    },{
        versionKey: false,
        timestamps: true
    });

    export default model('Profesor', ProfesorSchema);