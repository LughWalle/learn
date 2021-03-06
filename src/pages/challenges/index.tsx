import React from 'react'
import Layout from '_components/layout';
import challenges from '_data/challenges.json';
import Card from '_components/card'
import styles from './style.module.css'

export default function Challenges() {
  return (
    <Layout headTitle='Challenges' >
      <main className={styles.main}>
        <h1 className={'title'}>
          Challenges
        </h1>
        <ul className={styles.list}>
          {
            challenges.map((challenge) => (
              <li key={challenge.id}>
                <Card {...challenge} />
              </li>
            ))
          }
        </ul>
      </main>
    </Layout>
  )
}
