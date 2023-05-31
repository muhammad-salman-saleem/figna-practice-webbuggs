import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderPart from '@/components/Homepage/HeaderPart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <main >
      <HeaderPart/>
    </main>
    </>
  )
}
