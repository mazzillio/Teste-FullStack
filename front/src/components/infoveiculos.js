import styles from '../assets/infoveiculos.module.css'
export default function InfoVeiculos({veiculo})
{
    return (
        <ul className={styles.bloco}>
           <li>Tipo:{veiculo.tipo}</li>
           <li>Modelo:{veiculo.modelo}</li>
           <li>Marca:{veiculo.marca}</li>
           <li>Ano de Fabricação:{veiculo.ano}</li>
           {
               veiculo.tipo==='Carro'?
               <li>Quantidade de Portas:{veiculo.portas}</li>
               :
               <>
                <li>Quantidade de Rodas:{veiculo.rodas}</li>
                <li>Quantidade de Passageiros:{veiculo.passageiros}</li>
               </>
               
           }
        </ul>
    )
}