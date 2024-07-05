const Proyecto = require('../models/proyecto');

//crear
exports.create = (req, res) => {
    const { nombre, descripcion, fechaInicio, fechaFin, estado } = req.body;
    Proyecto.create({
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        estado
    })
    .then(() => res.status(201).json({ message: 'Proyecto creado con éxito' }))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error al crear proyecto' });
    });
};

//obtener
exports.getAllProyectos = (req, res) => {
    Proyecto.find()
    .then(proyectos => res.json(proyectos))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener proyectos' });
    });
};

//obtener por id

exports.getProyectoById = (req, res) => {
    const id = req.params.id;
    Proyecto.findById(id)
    .then(proyecto => {
        if (!proyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json(proyecto);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener proyecto' });
    });
};
//actualizar

exports.updateProyecto = (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion, fechaInicio, fechaFin, estado } = req.body;
    Proyecto.findByIdAndUpdate(id, {
        $set: {
            nombre,
            descripcion,
            fechaInicio,
            fechaFin,
            estado
        }
    }, { new: true })
    .then(proyecto => {
        if (!proyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json(proyecto);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar proyecto' });
    });
};

//eliminar

exports.deleteProyecto = (req, res) => {
    const id = req.params.id;
    Proyecto.findByIdAndDelete(id)
        .then((proyecto) => {
            if (!proyecto) {
                return res.status(404).json({ message: 'Proyecto no encontrado' });
            }
            res.status(200).json({ message: 'Proyecto eliminado con éxito' });
        })
        .catch((err) => {
            console.error(`Error al eliminar proyecto con id ${id}:`, err);
            res.status(500).json({ message: 'Error al eliminar proyecto', error: err.message });
        });
};