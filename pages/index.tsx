import Head from "next/head";
import { Navbar, Text, Button, Link } from "@nextui-org/react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import LoginButton from "../components/LoginButton"

export default function Home() {
  //console.log(window.localStorage)

  return (
    <div>
      <Head>
        <title>Onboarding Hackathon</title>
        <meta name="description" content="Onboarding Hackathon by buddies!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.grid}>
          <p>Sample Home Page</p>
          <LoginButton />

        </div>
      </Layout>
    </div>
  );
}

