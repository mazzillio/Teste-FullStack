import axios from 'axios'

const APIURL='https://viacep.com.br/ws/'

const apiCeps= axios.create({
    baseURL:APIURL
})
export class CepsServices{

    Ceps:string[]
    
    async execute(Ceps:string[]){
        this.Ceps=Ceps
        let results=[]
       for (const cep of Ceps) {
        try {
                const consulta = await apiCeps.get(`${cep}/json/`)
                results.push(consulta.data)
            } catch (error) {
                console.log(error.message)
                results.push(`Cep:${cep} não encontrado`)
            }
       }
        return results
    }
}