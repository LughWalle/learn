import styles from "./style.module.scss";
import Layout from '_components/layout';


export default function Home() {
  return (
    <>
      <Layout headTitle='Home | Learn Basic Programmation' >
        <main>
          <h1 className={'title'}>
            Let&apos;s Learn Programming
          </h1>
        </main>
      </Layout>
    </>
  );
}
