import Head from "next/head";
import { Navbar, Text, Button, Link } from "@nextui-org/react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
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
        </div>
      </Layout>
    </div>
  );
}

