import React from 'react'
import styles from './style.module.css'

type TypePropsCard = {
    id: number
    title: string
    level: string
    description: string
    example: {
        input: string
        output: string
    }
    tip: string
}

export default function index({ id, title, level, description, example, tip }: TypePropsCard) {
  return (
    <div className={styles.card}>
            <h2 className={styles.center_text}>Desafio {id}: {title}</h2>
            <p className={styles.center_text}>Nivel: {level}</p>
            <p>{description}</p>
            <div>
              <p>Entrada: {example.input}</p>
              <p>Saida: {example.output}</p>
            </div>
            {!tip ? (<p>sem dicas</p>) : (<p>Dica: {tip}</p>)}
          </div>
  )
}
