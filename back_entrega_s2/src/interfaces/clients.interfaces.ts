import {z} from "zod"
import { DeepPartial} from "typeorm"
import { clientSchema, clientSchemaRequest, clientSchemaResponse, clientsSchemaResponse } from "../schemas/clients.schema"

type ClientRequest = z.infer<typeof clientSchemaRequest>
type Client = z.infer<typeof clientSchema>
type ClientResponse = z.infer<typeof clientSchemaResponse>
type ClientsResponse = z.infer<typeof clientsSchemaResponse>
type ClientUpdateRequest = DeepPartial<ClientRequest>

export { Client, ClientRequest, ClientResponse, ClientsResponse, ClientUpdateRequest}