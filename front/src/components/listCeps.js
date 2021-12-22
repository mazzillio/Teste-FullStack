import styles from '../assets/listCeps.module.css'



export default function ListCeps({ceps})
{
    return(
    <div className={styles.div}>
        <ul className={styles.list}>
        {
            ceps.map((cep,key)=>{
                return(cep.logradouro!==''?
                    <ul key={key}>
                        <li>CEP:{cep.cep?cep.cep:' CEP não encontrado'}</li>
                        <li>Logradouro:{cep.logradouro}</li>
                        <li>Complemento:{cep.complemento}</li>
                        <li>Bairro:{cep.bairro}</li>
                        <li>Localidade:{cep.localidade}</li>
                        <li>Uf:{cep.uf}</li>
                        <li>Ibge:{cep.ibge}</li>
                        <li>Gia:{cep.gia}</li>
                        <li>DDD:{cep.ddd}</li>
                        <li>Siafi:{cep.siafi}</li>
                    </ul>:null
                )
            })
        }
    </ul>
    </div>
    )
}


