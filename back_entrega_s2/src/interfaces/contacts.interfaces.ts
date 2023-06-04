import {z} from "zod"
import { DeepPartial} from "typeorm"
import { contactSchema, contactSchemaRequest, contactSchemaResponse, contactSchemaUpdate, contactsSchemaResponse } from "../schemas/contacts.schema"


type ContactRequest = z.infer<typeof contactSchemaRequest>
type Contact = z.infer<typeof contactSchema>
type ContactResponse = z.infer<typeof contactSchemaResponse>
type ContactsResponse = z.infer<typeof contactsSchemaResponse>
type ContactUpdateRequest = DeepPartial<ContactRequest>

export { Contact, ContactRequest, ContactResponse,ContactsResponse,ContactUpdateRequest}