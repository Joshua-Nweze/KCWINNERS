import express from 'express';

import { signUp, login } from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/login', login);
// router.post('/activate', activateAccount);

export default router