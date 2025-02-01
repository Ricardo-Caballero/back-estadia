import { model, Schema } from 'mongoose';

const AsesorEmpresarial = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    empresa: { type: Schema.Types.ObjectId, ref: 'Empresa', required: true }
}, {
    versionKey: false,
    timestamps: true
});

export default model('AsesorEmpresarial', AsesorEmpresarial);