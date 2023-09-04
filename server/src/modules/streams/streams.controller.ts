import { Request, Response, NextFunction } from "express";

import StreamsService from "./streams.service";

class StreamsController {
    getActiveStreams(req: Request, res: Response, next: NextFunction) {
        try {

            const { first } = req.query as { first: string }

            StreamsService.getStreams(first);

        } catch (e) {
            console.log(e);
        }
    }
}

export default new StreamsController();