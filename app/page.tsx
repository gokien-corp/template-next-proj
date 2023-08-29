import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return <main className='bg-red-300'>
    <h1 className='bg-blue-400 h-[300px]'>First div</h1>
    <h1 className='bg-pink-400 h-[300px]'></h1>
    <h1 className='bg-green-400 h-[300px]'></h1>
    <h1 className='bg-yellow-400 h-[300px]'></h1>
  </main>
}