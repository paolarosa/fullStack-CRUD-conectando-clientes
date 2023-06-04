import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { ContactRequest, ContactResponse, ContactUpdateRequest } from "../../interfaces/contacts.interfaces";
import { Client } from "../../entities/client.entitie";
import { Contact } from "../../entities/contact.entitie";
import { contactSchema } from "../../schemas/contacts.schema";


const updateContactService = async (data: ContactUpdateRequest, contactId: string): Promise<ContactRequest> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const oldContact: Contact | null = await contactRepository.findOneBy({id: contactId})

    if (!oldContact) {
        throw new AppError("Contact not found", 404)
    }

    const newContactData = contactRepository.create({
        ...oldContact,
        ...data
    })

    await contactRepository.save(newContactData)


    return contactSchema.parse(newContactData)

}

export { updateContactService }