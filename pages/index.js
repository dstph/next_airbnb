import Head from 'next/head';
import { SearchResults } from '../atomic/organisms'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>My AIRBNB</title>
      </Head>

      <main>
       <SearchResults />
      </main>

      


    </div>
  )
}
