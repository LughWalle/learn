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
        {
          challenges.map((challenge) => (
            <Card key={challenge.id} {...challenge} />
          ))
        }
      </main>
    </Layout>
  )
}
