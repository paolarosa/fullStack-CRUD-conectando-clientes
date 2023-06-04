import "reflect-metadata"
import "express-async-errors"
import express from "express"
import cors from 'cors'
import { clientRoutes } from "./routes/client.route"
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware"
import { loginRoutes } from "./routes/login.route"
import { contactRoutes } from "./routes/contact.route"


const app = express()
app.use(cors())
app.use(express.json())
app.use("/clients", clientRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactRoutes)

app.use(handleAppErrorMiddleware)
export default app