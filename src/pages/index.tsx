import style from '../styles/pagesStyle/home.module.scss'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
export default function Home(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Ig news | Início</title>
      </Head>
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👋 Hello, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src='/images/avatar.svg' alt='Girl coding' width='250px' />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      name: 'Renan',
      age: '22'
    }
  }
}
