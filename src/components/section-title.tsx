import React from 'react'

type TProps = {
  title: string
  text: string
}

const SectionTitle = ({ title, text }: TProps) => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-8'>
      <h2 className='text-text-accent text-6xl font-bold max-w-2xl text-center'>
        {title}
      </h2>
      <p className='text-main-text text-center max-w-xl'>{text}</p>
    </div>
  )
}

export default SectionTitle
