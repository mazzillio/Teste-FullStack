import { useEffect, useState } from 'react'
import styles from '../assets/palindromo.module.css'
import {api} from '../services/api'
import Header from './header'
export default function Palindromo()
{
    const [ini,setIni]=useState(0)
    const [fim,setFim]=useState(0)
    const [palindromos,setPalindromos]=useState([])
    const handle=(value,set)=>{
        set(value)
    }
    const getData=async(ini,fim)=>{
        
        try {
            const result = await api.get(`/palindromo/${ini}/${fim}/`)
            console.log(result.data.numeros)
            setPalindromos(result.data.numeros)
        } catch (error) {
            console.log(error.messge)
        }
    }
    return (
       <div className={styles.div}>
           <Header
                title="Palindromo"
                text={`Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita tem o mesmo valor. 
                Exemplo: 929, 44, 97379. `}
           />
           <div className={styles.Main}>
               <h3>Digite o intervalo para a consulta:</h3>
               <section>
                 
                    <label for="numeroIni">Primeiro número do intervalo:</label>
                    <input type="text" placeholder='' id="numeroIni" onChange={(e)=>handle(e.target.value,setIni)}/>
                   
                   

                    <label for="numeroFim">Último número do intervalo:</label>
                    <input type="text" placeholder='' id="numeroFim" onChange={(e)=>handle(e.target.value,setFim)}/>
                  

                    <button onClick={()=>getData(ini,fim)}>Procurar</button>
               </section>
               <section className={styles.sectionList}>
                   <ul className={styles.list}>
                       {
                           palindromos?palindromos.map((numero,key)=>{
                                return(<li key={key}>{numero}</li>)
                           })
                           :null
                       }
                   </ul>
               </section>
           </div>
       </div>
    )
}