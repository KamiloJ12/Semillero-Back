const { Router } = require('express');
const { createUser, getUsers, updateUser, getUserById, activateUser, desactivateUser, getAvatar } = require('../controllers/usuario.controllers');
const auth = require('../middleware/auth.middleware');
const { hasRoles } = require('../middleware/role.middleware');

const router = Router();

// Crear un usuario
router.route('/')
    .post(auth, hasRoles("Superadministrador"), createUser)
    .get(getUsers);
    //.get(auth, hasRoles("Administrador", "Superadministrador"), getUsers);

// Obtener un usuario por su id
router.route('/:id')
    .get(auth, hasRoles("Superadministrador"), getUserById)
    .put(auth, hasRoles("Superadministrador"), updateUser)

router.put('/:id/desactivate', auth, hasRoles("Superadministrador"), desactivateUser);
router.put('/:id/activate', auth, hasRoles("Superadministrador"), activateUser);
router.get('/avatar/:avatar', getAvatar);

module.exports = router;