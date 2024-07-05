const mongoose = require('mongoose');

const schemaProyecto = new mongoose.Schema({
  nombre: { type: String },
  descripcion: { type: String },
  fechaInicio: { type: Date },
  fechaFin: { type: Date },
  estado: { type: String }
});

var proyecto = mongoose.model('Proyecto', schemaProyecto);
module.exports = proyecto;