const { Router } = require('express');
const { hasRoles } = require('../middleware/role.middleware');
const { createEvento, getEventos, getEventoById, updateEvento } = require('../controllers/evento.controller');
const auth = require('../middleware/auth.middleware');

const router = Router();

router.route('/')
    .post(auth, hasRoles("Administrador", "Superadministrador"), createEvento)
    .get(getEventos);

router.route('/:id')
    .put(auth, hasRoles("Administrador", "Superadministrador"), updateEvento)
    .get(getEventoById);

module.exports = router;