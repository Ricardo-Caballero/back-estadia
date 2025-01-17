import empresaDAO from "../daos/empresas.dao.js";
const empresaController = {};


//Insertar empresa

empresaController.insertEmpresa = async (req, res) => {
    empresaDAO.insertEmpresa(req.body)
   .then((empresa) => {
        res.json({
            message: "EMPRESA CREATED OK"
        })
    })
   .catch((error)=>{
        res.status(500).json({
            message: error
        })
    })
};


empresaController.getEmpresas = async (req, res) =>{
    empresaDAO.getEmpresas()
    .then((empresas)=>{
        res.json(empresas);
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    })
}

export default empresaController