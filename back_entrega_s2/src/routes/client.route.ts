import { Router } from "express";
import { createClientController, deleteClientController, listClientController, updateClientController } from "../controllers/client.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchemaRequest, clientSchemaUpdate } from "../schemas/clients.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { ensureClientExistsMiddleware } from "../middlewares/ensureClientExists.middleware";

const clientRoutes = Router()

clientRoutes.post("",ensureDataIsValidMiddleware(clientSchemaRequest), createClientController)
clientRoutes.get("", listClientController)
clientRoutes.patch("/:id", ensureAuthMiddleware, ensureDataIsValidMiddleware(clientSchemaUpdate), updateClientController)
clientRoutes.delete("/:id", ensureClientExistsMiddleware, deleteClientController)

export {clientRoutes}