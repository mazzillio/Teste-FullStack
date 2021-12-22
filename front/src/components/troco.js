
import styles from '../assets/troco.module.css'
import { api } from '../services/api'
import { useState } from 'react/cjs/react.development'
import Container from './container'
import Header from './header'
export default function Troco()
{
    const  [valor,setValor]=useState(0.0)
    const  [pagamento,setPagamento]=useState(0.0)
    const  [resultados,setResultados]=useState([])
    const handle=(value,set)=>{
        set(value)
    }
    const getData=async()=>{
        try {
            const result = await api.get(`/notas/${pagamento}/${valor}/`)
            console.log('resultado',result)
            setResultados(result.data)
        } catch (error) {
            console.log('Error',error.message)
        }
    }
    return(
        <Container>
            <>
            <Header
                title="Troco"
                text={`Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer como troco.
                Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco. Suponha que o sistema monetário não utilize moedas.
                O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.`}
            />
           <div className={styles.divSessao}>
               <h2>Digite valores para a consulta:</h2>
               <section>
                 <label for="valor">Digite o Valor da Forma de Pagamento:</label>
                 <input type="text" placeholder='' id="valor" onChange={(e)=>handle(e.target.value,setPagamento)}/>
                
                

                 <label for="numeroFim">Digite o valor da Compra</label>
                 <input type="text" placeholder='' id="numeroFim" onChange={(e)=>handle(e.target.value,setValor)}/>
               

                 <button className={styles.btn} onClick={()=>getData()}>Verificar Pagamento</button>
               </section>
               {
                   resultados.length!==0?
                   <section style={{display:resultados.length===0?'none':''}}>  
                             
                             <h4>
                                Valor do pagamento:
                            </h4>
                            <p>R$ {resultados.DinheiroEntregue}</p>
                            <h4>
                                Valor da Compra:
                            </h4>
                            <p>R$ {resultados.ValorCompra}</p>
                            <h4>Troco:</h4>
                            <ul>
                                <li>{resultados.ValorTroco.note1} notas de 1</li>
                                <li>{resultados.ValorTroco.note10} notas de 10</li>
                                <li>{resultados.ValorTroco.note100} notas de 100</li>
                            </ul>
               </section>
               :''
               }
               
           </div>
           </>    
        </Container>
    )

}