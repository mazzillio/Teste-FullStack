import {Request,Response} from 'express'
import { CarroService } from '../services/CarroService'


export class CarroController{

    async handle(req:Request,res:Response,file:string,objDados:[])
    {
        const{marca,ano,modelo }=req.body

        const serviceCarro = new CarroService()
        
        const carro = await serviceCarro.execute({
            Marca:marca,
            AnoFabricacao:ano,
            Modelo:modelo,
            QuantidadePortas:''},
            file,
            objDados
        )

        if(carro instanceof Error)
            return res.status(400).json(carro.message)
        
        return res.json(carro)
    }
}