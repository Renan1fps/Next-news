import style from '../styles/pagesStyle/home.module.scss'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src='/images/avatar.svg' alt='Girl coding' width='250px' />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KDnlWBeu0CCKros9ZBW0p0O', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format((price.unit_amount / 100)),
  }
  return {
    props: {
      product,
    }
  }
}
