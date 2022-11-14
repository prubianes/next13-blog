import Header from '../components/header/header'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

const name = 'Pablo Rubianes';

export default async function Home() {
  const allPostsData = await getSortedPostsData();
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
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={'headingMd padding1px'}>
        <h2 className={'headingLg'}>Blog</h2>
        <ul className={'list'}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={'listItem'} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={'lightText'}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}