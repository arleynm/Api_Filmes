import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/CreateMovieRent/CreateMovieRentController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController";

const createMovieController = new CreateMovieController;
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController;
const createMovieRentController = new CreateMovieRentController;

const movieRoutes =Router();


movieRoutes.post("/",createMovieController.handle);
movieRoutes.post("/release",getMoviesByReleaseDateController.handle);
movieRoutes.post("/rent",createMovieController.handle);

export {movieRoutes};



