import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Ig news | Início</title>
      </Head>
      <main>
        <section>
          <span>👋 Hello, welcome</span>
          <h1>New about <span>React</span> world.</h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>
        <img src='/images/avatar.svg' alt='Girl coding' />
      </main>
    </>
  )
}
