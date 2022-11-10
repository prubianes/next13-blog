import Image from 'next/image'
import styles from './page.module.css'
import profilePic from '../public/images/profile.jpg'

const name = 'Pablo Rubianes';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
            <Image
              priority
              src={profilePic}
              className={styles.borderCircle}
              height={144}
              width={144}
              alt={name}
              />
            <h1 className={styles.heading2Xl}>{name}</h1>
      </header>
      <section className={styles.headingMd}>
        <p>A Fullstack dev from Uruguay</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </>
  )
}
