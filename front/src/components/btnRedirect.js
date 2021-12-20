import styles from '../assets/btnRedirects.module.css'

export default function BtnRedirect({link,title}){

    return(
        <button className={styles.btn}
        onClick={()=>window.open(link,'_blank')}>
            {title}
        </button>
    )

}