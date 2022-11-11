import Header from '../components/header/header';

const name = 'Pablo Rubianes';

export default function Home() {
  return (
    <>
      <Header home />
      <section className={'headingMd'}>
        <p>A Fullstack dev from Uruguay</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </>
  )
}
