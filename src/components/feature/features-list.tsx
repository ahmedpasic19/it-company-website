import React from 'react'
import { AiFillLayout } from 'react-icons/ai'
import { FaRegWindowMaximize } from 'react-icons/fa'
import { GiStack } from 'react-icons/gi'
import { IoBarChartSharp, IoSpeedometer } from 'react-icons/io5'
import { RiRefreshLine } from 'react-icons/ri'
import FeatureCard from './feature-card'

const FeaturesList = () => {
  const iconStyles = 'h-12 w-12 text-text-accent'

  const features = [
    {
      icon: <IoBarChartSharp className={iconStyles} />,
      title: 'Crafted for SaaS Business',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <GiStack className={iconStyles} />,
      title: 'High-quality Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <FaRegWindowMaximize className={iconStyles} />,
      title: 'UI Components and Pages',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <IoSpeedometer className={iconStyles} />,
      title: 'All Essential Integrations',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <AiFillLayout className={iconStyles} />,
      title: 'Fully Customizable',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <RiRefreshLine className={iconStyles} />,
      title: 'Regular Updates',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
  ]
  return (
    <ul className='w-full grid grid-cols-3 gap-12'>
      {features.map((feature) => (
        <FeatureCard
          key={Math.random()}
          icon={feature.icon}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </ul>
  )
}

export default FeaturesList
