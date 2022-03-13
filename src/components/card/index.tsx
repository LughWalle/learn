import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

type TypePropsCard = {
  id: number;
  title: string;
  level: string;
  description: string;
};

export default function Card({ id, title, level, description }: TypePropsCard) {
  return (
    <Link
      href={{
        pathname: "challenges/challenge/[id]",
        query: {
          id: id,
        },
      }}
      passHref
    >
      <div className={styles.card}>
        <h2 className={styles.center_text}>{title}</h2>
        <p className={styles.center_text}>
          Nivel: <b>{level}</b>
        </p>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
