import { Request, Response } from "express";
import { GetAllUsersCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
    async handle(req: Request, res: Response){

        const getAllUsersCase =new GetAllUsersCase();

        const result = await getAllUsersCase.execute();

        return res.status(201).json(result);
    }
}