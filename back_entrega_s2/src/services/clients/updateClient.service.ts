import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { ClientRequest, ClientUpdateRequest } from "../../interfaces/clients.interfaces";
import { Client } from "../../entities/client.entitie";
import { clientSchema } from "../../schemas/clients.schema";

const updateClientService = async (data: ClientUpdateRequest, clientId: string): Promise<ClientRequest> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const oldClient: Client | null = await clientRepository.findOneBy({id: clientId})

    if (!oldClient) {
        throw new AppError("Client not found", 404)
    }

    const newClientData = clientRepository.create({
        ...oldClient,
        ...data
    })

    await clientRepository.save(newClientData)


    return clientSchema.parse(newClientData)

}

export { updateClientService }