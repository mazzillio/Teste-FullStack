import Container from "./container";
import Header from "./header";
import styles from '../assets/ceps.module.css'
import { useState } from "react/cjs/react.development";
import { api } from "../services/api";
import ListCeps from "./listCeps";


export default function Ceps()
{     
    const [cepDigitado,setCepsDigitado]=useState('')
    const [cepsVector,setCepsVector]=useState([])
    const [infosCeps,setInfosCeps]=useState([])
    const handleCep=(value)=>{
       setCepsDigitado(value)
    }
    console.log(cepsVector)
    const click=()=>{
        setCepsVector(prev=>([...prev,cepDigitado]))
        setCepsDigitado('')
    }
    const buscaCeps=async()=>{
        try {
            const cepsResults=await api.post('/ceps',{"dados":cepsVector})
             setInfosCeps(cepsResults.data)
            console.log(cepsResults)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <Container>
            <>
            <Header
                title='Ceps'
                text={`Deve ser informado pelo usuário 5 CEP’s.
                Os Ceps informados serão obtido através do site (https://viacep.com.br/) . 
                Os dados após o processamento devem ser exibidos na tela.
                `}
            />
            <div style={{marginTop:'7%'}}>
                <p>Digite 5 CEPS</p>
                <label for="Cep">Digite o CEP a ser pesquisado:</label>
                <input name="Cep" value={cepDigitado} onChange={(e)=>handleCep(e.target.value)}/>
                <i class="fas fa-plus-circle" onClick={click}></i>
                <ul>
                {
                    cepsVector.lenght!==0?cepsVector.map((cep,key)=>{
                        return<li key={key}>{cep}</li>
                    }):null
                }
                </ul>
                <div className={styles.divPesquisa}>
                <p className={styles.pesquisaCeps}>Pesquisar CEPS</p>
                <i class="fas fa-search-plus" onClick={buscaCeps} 
                    style={{fontSize:'35px'}}
                ></i>
                </div>
               { 
                infosCeps?<>
                
                <ListCeps ceps={infosCeps}/>
                </>:null  
                }     
            </div>
            </>
       </Container>
    )
       
    


}