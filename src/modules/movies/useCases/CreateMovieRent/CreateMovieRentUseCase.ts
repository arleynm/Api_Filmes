import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase{
    static execute(arg0: { movieId: any; userId: any; }) {
        throw new Error("Method not implemented.");
    }
    async execute({movieId, userId}: CreateMovieRentDTO): Promise<void>{
        //verificar se existe
        const moveExist = await prisma.movie.findUnique({
            where:{
                id:movieId
            }
        });

        if(!moveExist){
            throw new AppError("Filme não existe");
        }
        //verificar se o filme não esta alugado por outra pessoa
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where:{
                movieId
            }
        });

        if(moveExist){
            throw new AppError("Filme ja esta alugado");
        }

        //verificar se o usuario existe
        const userExist = await prisma.user.findUnique({
            where: {
                id:userId
            }
        })

        if(moveExist){
            throw new AppError("Usuario não existe");
        }


        //criar locação
        await prisma.movieRent.create({
            data:{
                movieId,
                userId
            }
        })
    }
}