import React from 'react'
import Image from 'next/image'

const AnimeList = ({title, images, id}) => {
  return (
      <div className=''>
          <Image src={images} alt='...' width={600} height={400}/>
          <h3 className='font-bold md:text-xl text-md p-2'>{title}</h3>
      </div>
  )
}

export default AnimeList