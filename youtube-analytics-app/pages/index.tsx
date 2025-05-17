import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { fetchChannelStats } from '../utils/youtube';

export default function Home() {
  const [channelId, setChannelId] = useState('');
  const [stats, setStats] = useState<any | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!channelId) return;
    const data = await fetchChannelStats(channelId);
    setStats(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube Analytics App</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>YouTube Analytics</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={channelId}
            onChange={(e) => setChannelId(e.target.value)}
            placeholder="Enter Channel ID"
          />
          <button type="submit">Fetch Stats</button>
        </form>
        {stats && (
          <pre className={styles.output}>{JSON.stringify(stats, null, 2)}</pre>
        )}
      </main>
    </div>
  );
}
