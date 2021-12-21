import axios from "axios";
import { api } from "../services/api";

const  ReqVeiculos =async(tipo,modelo,ano,marca)=>
{
    const config={
            "tipo": tipo,
            "modelo": modelo,
            "ano":ano,
            "marca": marca
    }
    try {
        const results = await api.post(`/veiculos/${tipo}`,config)
        console.log(results.data)
        return results.data
    } catch (error) {
        return error.message
    }
}

export {ReqVeiculos}