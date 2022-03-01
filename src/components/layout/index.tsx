import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "_components/header";
import Footer from "_components/footer";


interface TypeLayout {
    headTitle: string
    children?: ReactNode;
}

export default function Layout({ headTitle, children }: TypeLayout) {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Header />
        {children}
      <Footer />
    </>
  );
}
