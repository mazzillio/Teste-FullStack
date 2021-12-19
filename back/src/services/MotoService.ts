
import {Veiculo} from '../InterFaces/Veiculo'
import {readFileSync, writeFileSync} from 'fs'

export class MotoService implements Veiculo{
    Modelo: string
    Marca: string
    AnoFabricacao: number
    QuantidadePortas: string
    Rodas:number
    Passageiros:string


    set(motoObj:Veiculo){
        this.Modelo=motoObj.Modelo
        this.Marca=motoObj.Marca
        this.AnoFabricacao=motoObj.AnoFabricacao
        this.QuantidadePortas=motoObj.QuantidadePortas
        this.Rodas=2
        this.Passageiros="entre 1 e 2"
    }
    async execute(motoObj:Veiculo,file:string,dados:[]){
        this.set(motoObj)
        let veiculos=[]
        const json={
            tipo:'Moto',
            modelo:this.Modelo,
            ano:this.AnoFabricacao,
            marca:this.Marca,
            rodas:this.Rodas,
            passageiros:this.Passageiros
        }
        writeFileSync(file,JSON.stringify([...dados,json]),{encoding:'utf8'})
        veiculos=JSON.parse(readFileSync(file,'utf8'))
        if(!veiculos)
            return new Error('Erro em salvar os dados!')
        
        return veiculos
    }
}