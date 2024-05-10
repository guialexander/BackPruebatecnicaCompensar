const { Router } = require('express');

const {loginHandler} = require ('./local.controller')

const router = Router();

// login -> POST -> /auth/local/login http://localhost:8080/auth/local/login
router.post('/login', loginHandler);


module.exports = router;
