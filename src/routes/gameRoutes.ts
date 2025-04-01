import { Router } from "express";

const gameRouter = Router()

gameRouter.get("/jogos/lista")
gameRouter.get("/jogos/buscar");
gameRouter.post("/jogos/:id/save")
gameRouter.get("/jogos/:id/load")