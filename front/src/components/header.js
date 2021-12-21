import styles from '../assets/header.module.css'

export default function Header({title,text})
{
    return <header className={styles.header}>
            <h1>{title}</h1>
            <p>{text}</p>
        </header>
}