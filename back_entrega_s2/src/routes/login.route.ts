import { Router } from "express";
import { createClientController } from "../controllers/client.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchemaRequest } from "../schemas/clients.schema";
import { createTokenController } from "../controllers/login.controller";

const loginRoutes = Router()

loginRoutes.post("",createTokenController)

export {loginRoutes}