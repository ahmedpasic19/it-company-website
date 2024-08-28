import { AboutModel } from '@/models/AboutTab'
import React from 'react'

type TProps = {
  tabsArray: AboutModel[]
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

const AboutTabsNavigation = ({ tabsArray, selected, setSelected }: TProps) => {
  return (
    <ul className='flex w-full justify-evenly items-center'>
      {tabsArray.map((item, index) => {
        return (
          <li
            key={Math.random()}
            className={`text-lg text-text-accent capitalize hover:border-b-2 hover:border-main-blue w-full text-center select-none cursor-pointer py-4 ${
              selected === index
                ? 'border-b-2 border-main-blue'
                : 'border-b-2 border-main-gray'
            }`}
            onClick={() => setSelected(index)}
          >
            <h5>{item.title}</h5>
          </li>
        )
      })}
    </ul>
  )
}

export default AboutTabsNavigation
