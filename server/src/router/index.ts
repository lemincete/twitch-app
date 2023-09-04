import { Router } from "express";

const router = Router();

import auth from '../modules/auth/auth.routes';
import users from '../modules/users/users.routes';
import streams from '../modules/streams/streams.routes';


router.use('/auth', auth);
router.use('/users', users);
router.use('/streams', streams);

export default router;