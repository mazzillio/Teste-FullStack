import {Request,Response} from 'express'
import { CepsServices } from '../services/CepsService'


export class CepsController{

    async handle(req:Request,res:Response)
    {
        const {dados}=req.body
        const cepsService = new CepsServices()
        const ceps = await cepsService.execute(dados)

        return res.json(ceps)
    }
}