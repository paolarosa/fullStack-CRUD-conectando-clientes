import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { /* ClientRequest, */ ClientResponse } from "../../interfaces/clients.interfaces";
import { hash } from "bcryptjs";
import { clientSchema, clientSchemaResponse } from "../../schemas/clients.schema";
import { AppError } from "../../errors/AppError";


const createClientService = async (data: Client): Promise<ClientResponse> => {
   
   const {email, name, password, phone, createdAt} = data
    const clientRepository = AppDataSource.getRepository(Client)
    const findClient = await clientRepository.findOne({
        where:{
            email
        }
    })
    if(findClient){
        throw new AppError("Client already exists", 409)
    }
    const hashedPassword = await hash(password, 10)
    const client = clientRepository.create({
        name,
        email,
        password: hashedPassword,
        phone,
        createdAt
    })
    await clientRepository.save(client)
    return clientSchemaResponse.parse(client)
    
}
export {createClientService}