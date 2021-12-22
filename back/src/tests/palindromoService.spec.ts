import { PalindromoService } from "../services/PalindromoService"

describe("Testes Palindromos",()=>{
    const palindromoService=new PalindromoService()

    it("Sem palindrimos",()=>{
        const result =palindromoService.execute({init:'100',end:'100'})
        expect(result).toEqual([])
    })
    it("palindromos",()=>{
        const results =palindromoService.execute({init:'50',end:'100'})
        expect(results).toEqual([55,66,77,88,99])
    })
})