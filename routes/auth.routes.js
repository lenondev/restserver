const {Router} = require ('express');
const { check } = require('express-validator');


const { login } = require('../controllers/vice');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post("/login", [
    check('email', 'Debe introducir un email válido.').isEmail(),
    check('password', 'La contraseña es obligatoria.').notEmpty(),
    validarCampos
] ,login);

module.exports = router;