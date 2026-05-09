import React from 'react'

const GoldCard = (props) => {
  return (
    <div className='flex items-center justify-center mt-10 gap-5'>
      <img src={props.ImgUrl} alt={props.Des} className='w-[4.6rem]'/>
      <div className='flex flex-col'>
        <span className='text-2xl'>{props.Title}</span>
        <span className='text-xl mt-2 bg-gradient-to-r from-[#8c6115] via-[#c2a36d] to-[#8c6115] bg-clip-text text-center text-transparent'>{props.Des}</span>
      </div>
    </div>
  )
}

export default GoldCard
