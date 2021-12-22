import { INotes } from "../InterFaces/Notas"
import { NotasService } from "../services/NotasService"

describe("Teste de notas",()=>{
    let notasService
    beforeAll(()=>{
        notasService = new NotasService()
    })

    it("sem troco",()=>{
        const result =notasService.execute({money:100,value:100})
        const soma = result.note1+result.note10+result.note100
        expect(soma).toBe(0)
    })
    
    it("Correto troco",()=>{
        const result = notasService.execute({money:200,value:53})
        const notas:INotes={
            note1:7,
            note10:4,
            note100:1
        }
        expect(result).toEqual(notas)
    })



})