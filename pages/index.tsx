import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { Tweet } from '../typings';
import { fetchTweets } from '../utils/fetchTweets';

interface Props{
  tweets:Tweet[]
}

const Home = ({tweets}: Props) => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <Toaster/>
      <main className='grid grid-cols-9'>
        {/* Sidebar*/}
        <Sidebar />

        {/* Feed*/}
        <Feed  tweets={tweets}/>

        {/* Widgets*/}
        <Widgets />

      </main>
    </div>
  )
}

export default Home;

export async function getStaticProps () {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    }
  }
}