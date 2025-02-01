import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
import cors from 'cors';

import bodyParser from 'body-parser';
import multer from 'multer';
import fs from 'fs'; // Este módulo no se utiliza en el código, pero se puede dejar si es necesario
import path from 'path';

import Student from './models/students.model.js';
import Profesor from './models/profesor.model.js';
import './database.js';

import Empresa from './models/empresas.model.js';
import routerStudent from './routes/students.routes.js';
import routerProfesor from './routes/profesor.routes.js';
import routerComentarios from './routes/comentarios.routes.js';



const app = express();


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
//app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads')); // Para servir archivos estáticos


// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
    const { controlnumber, password } = req.body;

    try {
        // Buscar al estudiante por el número de control
        const student = await Student.findOne({ controlnumber });
        if (!student) {
            return res.status(400).json({ message: 'Número de control o contraseña incorrectos' });
        }

        // Comparar la contraseña (sin encriptar)
        if (student.password !== password) {
            return res.status(400).json({ message: 'Número de control o contraseña incorrectos' });
        }

        // Generar un token JWT
        const token = jwt.sign({ id: student._id }, 'tu_secreto', { expiresIn: '1h' });

        // Devolver el token y los datos del estudiante
        res.json({ token, student: { controlnumber: student.controlnumber, name: student.name } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});


// Ruta de inicio de sesión para el administrador
app.post('/admin/login', async (req, res) => {
    const { controlnumber, password } = req.body;

    try {
        // Buscar al profesor por el número de control
        const profesor = await Profesor.findOne({ controlnumber });
        if (!profesor) {
            return res.status(400).json({ message: 'Número de control o contraseña incorrectos' });
        }

        // Comparar la contraseña (sin encriptar)
        if (profesor.password !== password) {
            return res.status(400).json({ message: 'Número de control o contraseña incorrectos' });
        }

        // Generar un token JWT
        const token = jwt.sign({ id: profesor._id }, 'tu_secreto', { expiresIn: '1h' });

        // Devolver el token y los datos del profesor
        res.json({ token, profesor: { controlnumber: profesor.controlnumber, name: profesor.name } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});





// Routes
app.use('/api/students', routerStudent);
app.use('/api/profesores', routerProfesor);
app.use('/api/comentarios', routerComentarios);
//app.use('/api/empresas',routerEmpresas);

// Insertar una empresa
app.post("/insertEmpresa", (req, res) => {
    // Validar el cuerpo de la solicitud
    const { controlNumber, nombre } = req.body;

    // Asegurarse de que los campos requeridos estén presentes
    if (!controlNumber || !nombre) {
        return res.status(400).json({
            message: "Faltan campos requeridos: controlNumber, nombre y correo son obligatorios."
        });
    }

    Empresa.create(req.body)
        .then(() => {
            res.status(201).json({ // Cambiar el código de estado a 201 para creación exitosa
                message: "Empresa insertada exitosamente"
            });
        })
        .catch((error) => {
            console.error(error); // Log del error en el servidor
            res.status(500).json({
                message: "Error al insertar la empresa",
                error: error.message
            });
        });
});

// Actualizar una empresa
app.put('/updateEmpresa/:controlNumber', async (req, res) => {
    try {
        const { nombre, logo, descripcion, requisitos, vacantes } = req.body;

        const empresa = await Empresa.findOneAndUpdate(
            { controlNumber: req.params.controlNumber },
            { $set: { nombre, logo, descripcion, requisitos, vacantes } },
            { new: true }//para obtener el documento actualizado
        );

        if (empresa) {
            res.json({
                message: 'Empresa actualizada correctamente',
                empresa: empresa
            });
        } else {
            res.status(404).json({
                message: 'Empresa no encontrada'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al actualizar la empresa'
        });
    }
});

// Eliminar una empresa

app.delete('/deleteOne/:controlNumber', async (req, res) => {
    try {
        const empresa = await Empresa.findOneAndDelete({ controlNumber: req.params.controlNumber });
        if (empresa) {
            res.json({
                message: 'Empresa eliminada correctamente',
                empresa: empresa
            });
        } else {
            res.status(404).json({
                message: 'Empresa no encontrada'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error eliminada correctamente'
        });
    }
});

//Obtener todos las empresas

app.get('/getAllEmpresas', async (req, res) => {
    try {
        const empresas = await Empresa.find({});
        let datos = [];

        if (empresas != null && empresas && empresas.length > 0) {
            datos = empresas.map(dato => ({
                id: dato._id,
                nombre: dato.nombre,
                descripcion: dato.descripcion
            }));

        }
        res.json(datos);
        console.log(datos);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener las empresas'
        });
    }
});


export default app;