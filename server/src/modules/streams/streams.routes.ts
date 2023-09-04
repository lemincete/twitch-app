import { Router } from "express";

import controller from './streams.controller';

const router = Router();


router.get('/', controller.getActiveStreams);

export default router;