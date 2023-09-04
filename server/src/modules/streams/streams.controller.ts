import { Request, Response, NextFunction } from "express";

import StreamsService from "./streams.service";

class StreamsController {
    async getActiveStreams(req: Request, res: Response, next: NextFunction) {
        try {

            const { first } = req.query as { first: string }

            const streams = await StreamsService.getStreams(first);

            return res.json(streams);

        } catch (e) {
            console.log(e);
        }
    }
}

export default new StreamsController();