import { compare } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entitie"
import { AppError } from "../../errors/AppError"
import { LoginRequest } from "../../interfaces/login.interfaces"
import jwt from "jsonwebtoken"

const createTokenService = async ({ email, password }: LoginRequest): Promise<{}> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOne({
        where: {
            email
        }
    })

    if (!client) {
        throw new AppError("Invalid credentials", 403)
    }
    const passwordMatch = await compare(password, client.password)
    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 403)
    }
    const token = jwt.sign(
        { clientId: client.id, clientName: client.name, clientEmail: client.email },
        process.env.SECRET_KEY!,
        {
            expiresIn: "1h",
            subject: client.id
        }
    )
    return { token, id: client.id, name: client.name, email: client.email, phone: client.phone }
}

export { createTokenService }