const { Router } = require('express');
const { userLogin, verifyToken } = require('../controllers/auth.controller');

const router = Router();

router.post('/login', userLogin);
router.get('/verify-token', verifyToken);

module.exports = router;