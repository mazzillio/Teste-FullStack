import BtnRedirect from "./components/btnRedirect";
import styles from './assets/app.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
          <h1>Bem vindo</h1>
          <h4>Página desenvolvida para a seleção da empresa KUKAC da vaga de FULL-STACK júnior 
            do candidato MATTHEUS MAZZILLIO
          </h4>
      </header>
      <main className={styles.Main}>
        <h2>Selecione o menu desejado:</h2>
        <section className={styles.SectionBtns}>
          <BtnRedirect title='Palíndromo' link='/palindromo'/>
          <BtnRedirect title='Troco' link='/troco'/>
          <BtnRedirect title='Veículos' link='/veiculos'/>
          <BtnRedirect title='Ceps' link='/ceps'/>
        </section>
      </main>
    </div>
  );
}

export default App;
