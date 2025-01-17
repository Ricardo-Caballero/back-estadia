import { Schema, model } from "mongoose";

const empresaSchema = new Schema({
    controlNumber: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: String,
    logo: String,
    descripcion: String,
    requisitos: String,
    ofertas: String
}, {
    versionKey: false,
    timestamps: true
});

export default model('Empresa', empresaSchema);