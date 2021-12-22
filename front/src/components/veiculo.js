import Header from "./header";
import styles from '../assets/veiculos.module.css'
import {api} from '../services/api'
import { useEffect, useState } from "react";
import InfoVeiculos from "./infoveiculos";
import { ReqVeiculos } from "../functions/ReqVeiculos";


export default function Veiculos(){
    const [veiculos,setVeiculos]=useState([])
    const [newVeiculos,setNewVeiculos]=useState([])
    const [tipoVeiculo,setTipoVeiculo]=useState('Carro')
    const [modeloVeiculo,setModeloVeiculo]=useState('')
    const [anoVeiculo,setAnoVeiculo]=useState(0)
    const [marcaVeiculo,setMarcaVeiculo]=useState('')

    const handle=(value,set)=>{
        set(value)
    }
    const click=async()=>{
        console.log('Tippo',tipoVeiculo)
        const r=await ReqVeiculos(tipoVeiculo,modeloVeiculo,anoVeiculo,marcaVeiculo)
        setNewVeiculos(r)
    }
    const getDataIni=async()=>{
            
            try{
                const results = await api.post('/veiculos')
               setVeiculos(results.data)
            }catch (error) {
                
            }
    }
    useEffect(()=>{
        getDataIni()
    },[veiculos,newVeiculos])
    
    return (
        <div className={styles.div}>
            <Header
                title='Veiculos'
                text={`Precisamos controlar melhor os dados de alguns veículos que ficam na nossa garagem.
                Deve ser solicitado ao usuário que preencha as informações sobre o seu veículo, os dados devem ser salvos em um arquivo JSON (para não precisar trabalhar com banco de dados, até porquê já vai ser bem próximo de um banco NoSQL);  
                `}
            />
            <div className={styles.Main}>
                <h2>Cadastre os Veiculos</h2>
                <section className={styles.infos}>
                    <label for="Veiculo">Seleciona o tipo do veiculo:</label>
                    <select name="Tipo do Veiculo" id="Veiculo" onChange={(e)=>handle(e.target.value,setTipoVeiculo)}>
                        <option>Carro</option>
                        <option>Moto</option>
                    </select>
                    <label for="modelo">Digite o modelo:</label>
                    <input type="text" id="modelo" onChange={(e)=>handle(e.target.value,setModeloVeiculo)}/>

                    <label for="Ano">Digite o ano de fabricação:</label>
                    <input type="number" id="Ano" onChange={(e)=>handle(e.target.value,setAnoVeiculo)}/>

                    <label for="marca">Digite a marca:</label>
                    <input type="text" id="marca" onChange={(e)=>handle(e.target.value,setMarcaVeiculo)}/>
                    
                    <button onClick={click}>Cadastrar Veículo</button>
                </section>
                <ul className={styles.veiculos}>
                {
                    veiculos?veiculos.map((veiculo,key)=>{
                        return (
                                <InfoVeiculos key={key} veiculo={veiculo}/>
                                
                                )
                            })
                            :null
                        }
                </ul>
            </div>
        </div>
    )
}