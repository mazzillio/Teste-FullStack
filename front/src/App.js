import BtnRedirect from "./components/btnRedirect";
import styles from './assets/app.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
          <h2>Bem vindo a página desenvolvida para a seleção da empresa KUKAC da vaga de FULL-STACK júnior 
            do candidato MATTHEUS MAZZILLIO
          </h2>
      </header>
      <main className={styles.Main}>
        <h3>Selecione o menu desejado:</h3>
        <section className={styles.SectionBtns}>
          <BtnRedirect title='Palíndromo' link='/palindromo'/>
          <BtnRedirect title='Troco' link='/troco'/>
          <BtnRedirect title='Veículos' link='/ceiculos'/>
          <BtnRedirect title='Ceps' link='/ceps'/>
        </section>
      </main>
    </div>
  );
}

export default App;
