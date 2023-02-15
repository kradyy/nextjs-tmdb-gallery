import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  throw new Error('This is an error')
  
  return (
    <main>
      <h1>Hello next 🔥</h1>
    </main>
  )
}
