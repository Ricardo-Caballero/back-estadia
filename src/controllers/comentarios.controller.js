import comentariosDAO from '../daos/comentarios.dao.js';
const comentariosController = {};

//1.-  crea la función llamada insertComentario y la guarda en el objeto comentariosController = {}
comentariosController.insertComentario = async (req, res) =>{
    comentariosDAO.insertComentario(req.body)
    .then((comentario) =>{
        res.json({
            message: "COMENTARIO INSERTADO EXITOSAMENTE"
        })
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({
            message: "Error al insertar el comentario",
            error: error.message
        });
    });
 //2.-  crea la función llamada getComentarios y la guarda en el objeto comentariosController = {}
}


export default comentariosController;