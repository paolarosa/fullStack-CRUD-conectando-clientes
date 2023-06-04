import { z } from "zod"

const clientSchema = z.object({
    id: z.string(),
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(4).max(20),
    phone: z.string()

})

const clientSchemaRequest = clientSchema.omit({
    id: true
})

const clientSchemaResponse = clientSchema.extend({
    createdAt: z.string()
}).omit({password: true})

const clientsSchemaResponse = z.array(clientSchemaResponse)

const clientSchemaUpdate = clientSchema.omit({
    id: true
}).partial()


/* const clientSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(4).max(20),
    phone: z.string(),
})


const clientSchemaResponse = clientSchema.extend({
    id: z.string(),
    createdAt: z.string(),
}).omit({password: true})
 */
export { clientSchema, clientSchemaResponse, clientSchemaRequest, clientsSchemaResponse, clientSchemaUpdate }