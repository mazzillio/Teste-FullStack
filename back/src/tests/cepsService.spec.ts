import { CepsServices } from "../services/CepsService"

describe("Testes Ceps",()=>{
    const cep=[{
        "cep": "39404-404",
        "logradouro": "Rua B",
        "complemento": "",
        "bairro": "Santos Dumont",
        "localidade": "Montes Claros",
        "uf": "MG",
        "ibge": "3143302",
        "gia": "",
        "ddd": "38",
        "siafi": "4865"
      }]
    const cepsService= new CepsServices()

    it("Retorn de um Cep",async()=>{
        const result = await cepsService.execute(["39404404"])
        expect(result).toEqual(cep)
    })
    it("Cep nao encontrado",async ()=>{
        const result = await cepsService.execute(["394005000"])
        expect(result).toEqual(["Cep:394005000 não encontrado"])
    })
})