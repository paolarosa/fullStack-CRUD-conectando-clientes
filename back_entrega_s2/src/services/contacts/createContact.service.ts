import { DeepPartial, Repository } from "typeorm";
import { ContactRequest, ContactResponse } from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities/contact.entitie";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { AppError } from "../../errors/AppError";
import { contactSchema } from "../../schemas/contacts.schema";

const createContactService = async (data: ContactRequest, clientId: string): Promise<ContactRequest> => {
    const contactRepository : Repository<Contact> = AppDataSource.getRepository(Contact)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOneBy({
        id: clientId
    })

    if(!client){
        throw new AppError("Client not found", 404)
    }

    const contactData: DeepPartial<Contact> = {
        ...data,
        client
    }
    const contact : Contact = contactRepository.create(contactData)
    await contactRepository.save(contact)
    return contactSchema.parse(contact)
 }

 export { createContactService}