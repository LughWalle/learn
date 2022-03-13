import { useRouter } from "next/router";
import React from "react";
import Layout from "_components/layout";
import challenges from "_data/challenges.json";
import { CodeBlock } from "@atlaskit/code";

import styles from "./style.module.scss";

export default function Challenge() {
  const { query } = useRouter();
  console.log(query.id);

  return (
    <Layout headTitle="test">
      {challenges.map((challenge) => challenge.id.toString() === query.id ? (
          <main key={challenge.id} className={styles.challenge}>
            <h1 className={"title"}>{challenge.title}</h1>
            <p className={styles.level}>Nivel: {challenge.level}</p>
            <p className={styles.description}>{challenge.description}</p>
            <div className={styles.codeBlock}>
              <p>Entrada: {challenge.example.input}</p>
              <p>Saida: {challenge.example.output}</p>
            </div>
          </main>
        ) : false
      )}
    </Layout>
  );
}
