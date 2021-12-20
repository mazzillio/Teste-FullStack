import { Link } from 'react-router-dom'
import styles from '../assets/btnRedirects.module.css'

export default function BtnRedirect({link,title}){

    return(
        <Link className={styles.link} to={link}>
            <button className={styles.btn}>
                    {title}
            </button>
        </Link>
    )

}