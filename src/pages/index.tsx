import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";

import { CountdownProvider } from "../contexts/CountdownContext";

import Head from 'next/head';

import styles from '../styles/Pages/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move It</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
     </div>   
  )
}

export default Home;