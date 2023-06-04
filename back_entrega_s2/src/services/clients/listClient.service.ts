import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { clientsSchemaResponse } from "../../schemas/clients.schema";


const listClientService = async () => {

  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

  const findClient: Array<Client> = await clientRepository.find({
    withDeleted: true
  })
 const clients = clientsSchemaResponse.parse(findClient) 

  return clients
}

export { listClientService } 