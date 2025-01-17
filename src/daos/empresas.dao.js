import Empresa from '../models/empresas.model.js';
const empresaDAO = {};



//insertar empresa

empresaDAO.insertEmpresa = async (empresa) => {
    return await Empresa.create(empresa);
}

//actualizar empresa

//obtener empresas
empresaDAO.getEmpresas = async () =>{
    return await Empresa.find();
}

export default empresaDAO;