const {response} = require('express');


const usuariosGet = (req, res = response) => {

    const {q,id, text = 'No text'} = req.query;

    res.status(200).json({
      msg: "get API --- Service",
      q,
      id,
      text
    });
}

const usuariosPut = (req, res = response) => {
    
    const {id} = req.params;
    
    res.status(400).json({
    msg: "put API --- Service",
    id
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, apellido} = req.body;
    res.status(201).json({
      msg: `${nombre} ${apellido}`,
    });
}

const usuariosDelete = (req, res = response) => {
    res.status(500).json({
      msg: "delete API --- Service",
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}