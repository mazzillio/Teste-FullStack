import {Request,Response}from 'express'
import { CarroController } from './CarroController'
import {readFileSync} from 'fs'
import { MotoController } from './MotoController'
export class VeiculoController{
    
    async handle(req:Request,res:Response)
    {
        const {veiculo}=req.params
       
        const file='./src/jsonData/veiculos.json'
        const arquivo=readFileSync(file,'utf8')
      
        const dados=arquivo?JSON.parse(arquivo.toString()):[]
        if(!veiculo)
            return res.json(dados)
        if(Object.keys(req.body).length===0)
            return res.status(400).json('Sem dados para cadastrar veículo')
        if(veiculo==='Carro')
        {
            //const {modelo,ano,marca}=req.body
            const carroController = new CarroController()
            const carro = await carroController.handle(req,res,file,dados)

            return carro
        }
        if(veiculo==='Moto')
        {
            const motoController = new MotoController
            const moto = await motoController.handle(req,res,file,dados)
            return moto
        }
        return res.status(400).json({message:'Tipo de veiculo inválido'})
    }
}