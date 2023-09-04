import { Router } from "express";

import controller from './auth.controller';

const router = Router();

router.post('/registration', controller.registration);
router.post('/login', controller.login);


export default router;