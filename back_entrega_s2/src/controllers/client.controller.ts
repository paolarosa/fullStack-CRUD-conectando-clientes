import { Request, Response } from "express";
import { ClientRequest, ClientUpdateRequest } from "../interfaces/clients.interfaces";
import { createClientService } from "../services/clients/createClient.service";
import { listClientService } from "../services/clients/listClient.service";
import { updateClientService } from "../services/clients/updateClient.service";
import { deleteClientService } from "../services/clients/deleteClient.service";

const createClientController = async (req:Request, res:Response) => {

    const data = req.body
    const newClient = await createClientService(data)
    return res.status(201).json(newClient)
}

const listClientController = async (req: Request, res: Response) => {
    const client = await listClientService()
    return res.json(client)
}

const updateClientController = async (req: Request, res: Response) => {
    const clientId = req.params.id
    const updatedValues: ClientUpdateRequest = req.body
    const updateClient = await updateClientService(updatedValues, clientId)
    return res.json(updateClient)
}

const deleteClientController = async (req: Request, res: Response) => {
    await deleteClientService(req.params.id)
    res.status(204).send()
}

export {createClientController, listClientController, updateClientController, deleteClientController}