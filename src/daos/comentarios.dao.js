import Comentarios from '../models/comentarios.model.js';
const comentariosDAO = {};

comentariosDAO.insertComentario = async (comentario) => {
    return await Comentarios.create(comentario);
};


export default comentariosDAO; 