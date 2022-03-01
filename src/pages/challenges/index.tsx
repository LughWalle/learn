import React from 'react'
import Layout from '_components/layout';
import challenges from '_data/challenges.json';

export default function Challenges() {
  return (
    <Layout headTitle='Challenge' >
      <h1 className={'title'}>
          Challenges
      </h1>
      {
        challenges.map(({ id, title, level, description, example, tip = false }) => (
          <div className='card'>
            <h2>Desafio {id}: {title}</h2>
            <p>{level}</p>
            <p>{description}</p>
            <div>
              <p>{example.input}</p>
              <p>{example.output}</p>
            </div>
            {!tip ? (<p>sem dicas</p>) : (<p>Dica: {tip}</p>)}
          </div>
        ))
      }
    </Layout>
  )
}
