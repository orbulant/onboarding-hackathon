import Head from "next/head";
import styles from "../styles/Home.module.css"
import Layout from "../../components/Layout";
import ReferralButton from "../../components/ReferralButton";

const referral = () => {
  return (
    <div>
    <Head>
      <title>Join our referral program to earn more exciting rewards!</title>
      <meta name="description" content="Onboarding Hackathon by buddies!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <ReferralButton/>
    </Layout>
  </div>
  );
};

export default referral;
