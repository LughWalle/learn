import { type } from "os";
import React from "react";
import Layout from '_components/layout';
import styles from "./style.module.scss"

export default function About() {
  return (
    <Layout headTitle='About us' >
      <h1 className={'title'}>
          About us
      </h1>
    </Layout>
  );
}
