import React from 'react'

type TPops = {
  icon: React.ReactNode
  text: string
  title: string
}

const FeatureCard = ({ title, icon, text }: TPops) => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <div className='p-6 rounded-full hover:bg-main-blue bg-main-gray w-fit flex justify-center items-center'>
        {icon}
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-3'>
        <h4 className='text-text-accent text-2xl font-semibold'>{title}</h4>
        <p className='text-main-text text-center max-w-sm'>{text}</p>
      </div>
    </div>
  )
}

export default FeatureCard
