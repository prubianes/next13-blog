export default function Head() {
  return (
    <>
      <title>Next.js 13 Sample Website</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          'Next.js 13 Sample Website',
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content='Next.js 13 Sample Website' />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
