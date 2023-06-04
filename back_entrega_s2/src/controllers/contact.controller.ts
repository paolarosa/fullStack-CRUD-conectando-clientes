import { Request, Response } from "express"
import { createContactService } from "../services/contacts/createContact.service"
import { listContactsService } from "../services/contacts/listContact.service"
import { ContactUpdateRequest } from "../interfaces/contacts.interfaces"
import { updateContactService } from "../services/contacts/updateContact.service"
import { deleteContactService } from "../services/contacts/deleteContact.service"

const createContactController = async (req: Request, res: Response) => {
    const clientId = res.locals.clientId
    const newContact = await createContactService(req.body, clientId)
    return res.status(201).json(newContact)
}

const listContactController = async (req: Request, res: Response) => {
    const clientId = res.locals.clientId
    const contact = await listContactsService(clientId)
    return res.json(contact)
}

const updateContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    const updatedValues: ContactUpdateRequest = req.body
    const updateContact = await updateContactService(updatedValues, contactId)
    return res.json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    await deleteContactService(contactId)
    res.status(204).send()
}

export {createContactController, listContactController,updateContactController, deleteContactController}