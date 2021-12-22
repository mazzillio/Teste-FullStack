import { Veiculo } from "../InterFaces/Veiculo"
import { CarroService } from "../services/CarroService"

describe("Teste Carros",()=>{
    const carroService = new CarroService()
    const file='./src/jsonData/veiculos.test.json'
    const obj:Veiculo={
        AnoFabricacao:2012,
        Modelo:'Gol',
        Marca:'volks',

    }
    const resultCarro={
        "tipo": "Carro",
        "modelo": "Gol",
        "ano": 2012,
        "portas": "Entre 2 e 4",
        "marca": "volks"
      }
    it("salvar Carro",async ()=>{
        const result =await carroService.execute(obj,file,[])
        expect(result).toEqual([resultCarro])
    })

})