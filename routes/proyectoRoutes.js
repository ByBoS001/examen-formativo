const express = require('express');
const router = express.Router();
const multer = require('multer');
const proyectoController = require('../controllers/proyectoController');

// Configurar multer para la subida de archivos
const upload = multer({ dest: 'uploads/' });


router.get('/proyectos', proyectoController.getAllProyectos);
router.post('/proyecto_new/', proyectoController.create);
router.get('/proyecto/:id', proyectoController.getProyectoById);
router.put('/proyecto_update/:id', proyectoController.updateProyecto);
router.delete('/proyecto_delate/:id', proyectoController.deleteProyecto);

// File upload route
router.post('/subir', upload.single('archivo'), (req, res) => {
        if (!req.file) {
            return res.status(400).json({ message: 'Archivo no subido' });
        }
        res.status(200).json({ message: 'Archivo subido', file: req.file });
    });
    
    module.exports = router;

module.exports = router;
