import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className="text-sm">Toshinori Yagi, more commonly known as All Might, is the overarching protagonist of the My Hero Academia franchise, and also the overarching protagonist of its spin-off My Hero Academia: Vigilantes. The former No. 1 Hero and the eighth user of the One For All Quirk, he teaches Foundational Hero Studies at U.A. After fighting against All For One where he used up the leftover embers of One For All completely to defeat All For One, All Might retired from crime fighting, and thus, ending his era. He was replaced by his rival, Endeavor as his successor as the No. 1 Hero. In Japanese, he is voiced by Kenta Miyake, who is known for voicing Muhammad Avdol in JoJo's Bizarre Adventure: Stardust Crusaders, and by legendary voice actor Christopher R. Sabat in the English dub, who also voiced Vegeta and Piccolo in the Dragon Ball franchise, and Roronoa Zoro in the One Piece franchise.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}