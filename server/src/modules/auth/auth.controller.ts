import AuthService from "./auth.service";

import { Request, Response, NextFunction } from "express";

class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            console.log(e);
        }
    }

    async registration() {

    }
}


export default new AuthController();