import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({name, email} : CreateUserDTO): Promise<User>{
        //verificar se o usuario ja existe 
        const userAlreadyExist = await prisma.user.findUnique({
            where:{
                email,
            }
        });

        if(userAlreadyExist){
            throw new AppError("Usuario ja existente!");
        }

        //Criar usuario
        const user =await prisma.user.create({
                data: {
                    name,
                    email
                }
        })

        return user;
    }
}