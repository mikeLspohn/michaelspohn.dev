import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome! It's ya boi Michael Spohn here. I'm a Software Developer from the great (I hate it) state of Kansas!
        </p>
        <p>
          I plan to start a blog diving into react, testing, performance, new browser and web apis, 
          deployment platforms, and any other new hot shit that seems worth learning about.
        </p>
        <p>
          This site is brand new and under active development! If anything looks out of place blame Next.js and Vercel for leading me astray.
        </p>
      </section>
    </Layout>
  )
}
