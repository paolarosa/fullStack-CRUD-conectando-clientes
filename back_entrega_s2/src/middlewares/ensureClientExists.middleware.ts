import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Client } from '../entities/client.entitie'
import { AppError } from '../errors/AppError'


const ensureClientExistsMiddleware = async (req:Request, res: Response, next: NextFunction): Promise<void> =>{

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientId: string = req.params.id
    const findClient = await clientRepository.findOne({
        where:{
            id: clientId
        }
    })
    if(!findClient){
        throw new AppError('Client not found', 404)
    }
    return next()
}

export { ensureClientExistsMiddleware  }