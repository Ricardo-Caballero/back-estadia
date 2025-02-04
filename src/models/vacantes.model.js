import { Schema, model } from "mongoose";
const vacantesSchema = new Schema({
    controlNumber: {
        type: String,
        required: true,
        unique: true,
    }, name: String,
    puestos: Number,
    requisitos: String
}, {
    versionKey: false,
    timestamps: true
});

export default model('Vacante', vacantesSchema);