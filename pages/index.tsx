import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AGI Event Horizon</title>
        <meta name="description" content="A client-side Next.js starter." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="AGI Event Horizon Logo"
          width={120}
          height={120}
          priority
        />
        <h1 className={styles.title}>Welcome to AGI Event Horizon</h1>
        <p className={styles.description}>
          This project is bootstrapped with Next.js and runs entirely on the client.
        </p>
      </main>
    </div>
  );
}
