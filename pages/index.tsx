import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn } from 'next-auth/react'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => {
        signIn()
      }}>Login</button>
    </div>
  )
}

export default Home
