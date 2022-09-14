import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";


const createUserController = new CreateUserController;
const getAllUsersController = new GetAllUsersController
const userRoutes =Router();


userRoutes.post("/",createUserController.handle)
userRoutes.post("/",getAllUsersController.handle)

export {userRoutes};



