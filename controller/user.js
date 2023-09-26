const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre, apikey } = req.query;

  res.json({
    msg: "get api controller",
    q,
    nombre,
    apikey,
  });
};
const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.json({
    msg: "put api controller",
    id,
  });
};
const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "post api controller",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete api controller",
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msg: "patch api",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
