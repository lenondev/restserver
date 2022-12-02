const response = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async (req, res = response) => {

    const {email, password} = req.body;

    try {

        /*---> Validaciones <---*/

        // Si el email existe
        const usuario = await Usuario.findOne({email})
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Contraseña no son correctos - correo'
            });
        }

        // Si el usuario está activo.
        if (!usuario.isActive) {
            return res.status(400).json({
                msg: 'Usuario / Contraseña no son correctos - isActive: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Contraseña no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id);


        res.json({
            usuario,
            token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Algo salió mal, hable con el administrador.',
        })
    }
}


module.exports = {
    login,
}