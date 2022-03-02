import styles from "./style.module.scss";
import Layout from '_components/layout';


export default function Home() {
  return (
    <>
      <Layout headTitle='Home | Learn Basic Programmation' >
        <main>
          <h1 className={'title'}>
            Vamos aprender programação!!
          </h1>
          <p>Aqui você encontrará um resumo basico de <abbr title="JavaScript">JS</abbr> e alguns desafios para treinar sua lógica e abstração</p>
          <p></p>
        </main>
      </Layout>
    </>
  );
}
