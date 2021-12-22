import {Request,Response} from 'express'
import { PalindromoService } from '../services/PalindromoService'


export class PalindromeController{
    handle(req:Request,res:Response){
        const {init,end}=req.params
       
        const palinService = new PalindromoService()
        const palindromesResults =palinService.execute({init,end})

        if(palindromesResults.length ===0)
            res.json(`Nenhum palindrome encontrado no intervalo:${init}---${end}`)
        return res.json({numeros:palindromesResults})
    }
}