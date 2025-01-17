import { model, Schema } from 'mongoose';

const EmpresaSchema = new Schema({
    controlNumber: {  // Cambiado a camelCase
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,  // Podrías considerar hacerlo requerido
    },
    descripcion: String,
    prestaciones: String,
    requisitos: String,
    vacantes: {
        type: Number,
        min: 0,  // Puedes agregar una validación para que no sea negativo
    },
    celular: String,
    correo: {
        type: String,
        required: true,  // Podrías considerar hacerlo requerido
        match: /.+\@.+\..+/  // Validación básica para correos electrónicos
    },
    logo: String
}, {
    versionKey: false,
    timestamps: true
});

export default model('Empresa', EmpresaSchema);  // Cambiado a 'Empresa' para seguir la convención