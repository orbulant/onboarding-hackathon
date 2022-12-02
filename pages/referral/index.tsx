import Head from "next/head";
import styles from "../styles/Home.module.css"
import Layout from "../../components/Layout";
import ReferralLinks from "../../components/ReferralLinks";

const referral = () => {
  return (
    <div>
    <Head>
      <title>Referral Program</title>
      <meta name="description" content="Referral program for bitwewe trading bot!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
        <p>Join our referral program to earn more exciting rewards!</p>
      <ReferralLinks/>
    </Layout>
  </div>
  );
};

export default referral;
