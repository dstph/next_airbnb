import Head from 'next/head';
import { observer } from 'mobx-react';
import { Header, SearchForm } from '../atomic/organisms';


const Home = () => {

  return (
    <div className="container">
      <Head>
        <title>My AIRBNB</title>
      </Head>

      <main>
        <Header />
        <SearchForm />
        <div className='motivation'>
          <h3>Explore</h3>
          <h3>Travel</h3>
          <h3>Enjoy</h3>
        </div>
      </main>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
        .motivation {
          margin-top: 10%;
        }
        h3 {
          margin-left: 10%;
          font-family: 'Roboto', sans-serif;
          font-size: 72px;
          line-height: 0;
          
          color: white;
        }
        main {
          height: 100vh;
          background: url(https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg) no-repeat center center fixed;
          background-size: cover;
          overflow: hidden;
        }
        body{
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      


    </div>
  )
}

export default Home;