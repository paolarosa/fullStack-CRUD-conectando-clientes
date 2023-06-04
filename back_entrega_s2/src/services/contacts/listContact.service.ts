import { Repository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { ContactResponse } from "../../interfaces/contacts.interfaces";
import { Client } from "../../entities/client.entitie";
import { Contact } from "../../entities/contact.entitie";
import { contactSchemaResponse, contactsSchemaResponse } from "../../schemas/contacts.schema";
import { ContactsResponse } from "../../interfaces/contacts.interfaces";



const listContactsService = async (clientId: string): Promise<ContactsResponse> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const client: Client | null = await clientRepository.findOneBy({
        id: clientId
    })

    if(!client){
        throw new AppError("Client not found", 404)
    }

    const contact: Contact[] = await contactRepository.find({
        where: {
            client: client
        }
    })

    return contactsSchemaResponse.parse(contact)

}

export { listContactsService }