import {Veiculo} from '../InterFaces/Veiculo'
import {readFileSync, writeFileSync} from 'fs'
export class CarroService implements Veiculo{
    
    Modelo: string
    AnoFabricacao: number
    QuantidadePortas: string
    Marca: string
    
    set(carroObj:Veiculo){
        this.Modelo=carroObj.Modelo
        this.AnoFabricacao=carroObj.AnoFabricacao
        this.Marca=carroObj.Marca
        this.QuantidadePortas="Entre 2 e 4"
    }
    async execute(carroObj:Veiculo,file:string,dados:[] ){        
        this.set(carroObj)
        let veiculos=[]
        const json={
            tipo:'Carro',
            modelo:this.Modelo,
            ano:this.AnoFabricacao,
            portas:this.QuantidadePortas,
            marca:this.Marca
        }
        writeFileSync(file,JSON.stringify([...dados,json]),{encoding:'utf8'})
        veiculos=JSON.parse(readFileSync(file,'utf8'))
        //console.log('resultado',veiculos)
        if(!veiculos)
            return new Error('Erro em salvar os dados!')
        
        return veiculos
    }
}