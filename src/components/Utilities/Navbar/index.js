import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='bg-indigo-500'>
        <div className='flex md:flex-row flex-col justify-between p-4 gap-2'>
            <Link href='/' className='font-bold text-2xl'>YourAnimeList</Link>
            <input placeholder='Cari Anime' className='text-black'/>
        </div>
    </header>
  )
}

export default Navbar