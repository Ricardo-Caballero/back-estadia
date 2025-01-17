import { Schema, model } from "mongoose";

const comentariosSchema = new Schema({
    alumno_controlNumber: {
        type: String,
        required: true,
    },
    empresa_controlNumber: {
        type: String,
        required: true,
    },
    contenido: {
        type: String,
        required: true,
    },
    calificacion: {
        type: Number,
        min: 1,
        max: 5, // Suponiendo que la calificación es de 1 a 5
    }
}, {
    versionKey: false,
    timestamps: true, // Cambié 'timeseries' a 'timestamps' para registrar fechas de creación y actualización
});

export default model('Comentarios', comentariosSchema);