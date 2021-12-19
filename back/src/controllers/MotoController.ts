import {Request,Response} from 'express'
import { MotoService } from '../services/MotoService'


export class MotoController{

    async handle(req:Request,res:Response,file:string,objDados:[])
    {
        const{marca,ano,modelo }=req.body

        const serviceMoto = new MotoService()
        
        const moto = await serviceMoto.execute({
            Marca:marca,
            AnoFabricacao:ano,
            Modelo:modelo,
            QuantidadePortas:''},
            file,
            objDados
        )

        if(moto instanceof Error)
            return res.status(400).json(moto.message)
        
        return res.json(moto)
    }
}