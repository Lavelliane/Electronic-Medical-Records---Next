import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn } from 'next-auth/react'
import Landing from '../landing/Home'

const Home: NextPage = () => {
  return (
    <Landing />
  )
}

export default Home
