import style from '../styles/home.module.scss'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Ig news | Início</title>
      </Head>
      <div className={style.container}>
        <h1 >Base project</h1>
      </div>
    </>
  )
}
