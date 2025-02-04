import { Schema, model } from "mongoose";
const vacantesSchema = new Schema({
    controlnumber: {
        type: String;
        required: true,
        unique: true,
    }, name: String,
    puestos: Number,
    descripcion: String
}, {
    versionKey: false,
    timestamps: true
});

export default model('Vacante', vacantesSchema);