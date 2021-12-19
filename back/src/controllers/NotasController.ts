import {Request,Response} from 'express'
import { NotasService } from '../services/NotasService'


export class NotasController{

    handle(req:Request,res:Response){
        const{money,value}=req.params
        const numberMoney=parseInt(money)
        const numberValue=parseInt(value)

        const notasService = new NotasService()

        const result=notasService.execute({money:numberMoney,value:numberValue})

        if(result.note1===0 && result.note10===0 && result.note100===0)
            return res.json('Para esse valor da compra não tem Troco')
        
        return res.json({
            DinheiroEntregue:money,
            ValorCompra:value,
            ValorTroco:result
        })
    }

}