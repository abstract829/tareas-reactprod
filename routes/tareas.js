const { Router } = require('express')
const { getAllTareas, asignarTarea, getTareaByUserId, editarTarea, completarTarea, crearTarea, eliminarTarea } = require('../controllers/tareas')
const router = Router()

router.get('/', getAllTareas)
router.post('/asignar', asignarTarea)
router.get('/:iduser', getTareaByUserId)
router.post('/editar', editarTarea)
router.post('/completar', completarTarea)
router.post('/crear', crearTarea)
router.delete('/eliminar/:id', eliminarTarea)
module.exports = router