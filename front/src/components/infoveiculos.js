import styles from '../assets/infoveiculos.module.css'
export default function InfoVeiculos({veiculo})
{
    return (
        <ul className={styles.bloco}>
           <li>Tipo: {veiculo.tipo}</li>
           <li>Modelo: {veiculo.modelo}</li>
           <li>Marca: {veiculo.marca}</li>
           <li>Ano de fabricação:{veiculo.ano}</li>
           {
               veiculo.tipo==='Carro'?
               <li>Quantidade de portas: {veiculo.portas}</li>
               :
               <>
                <li>Quantidade de Rodas: {veiculo.rodas}</li>
                <li>Quantidade de passageiros: {veiculo.passageiros}</li>
               </>
               
           }
        </ul>
    )
}