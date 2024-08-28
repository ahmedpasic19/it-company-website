import React from 'react'

type TProps = {
  tabsArray: { title: string }[]
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

const PortofolioTabsNavigation = ({
  tabsArray,
  setSelected,
  selected,
}: TProps) => {
  return (
    <ul className='flex justify-center gap-8 items-center'>
      {tabsArray.map((item, index) => {
        return (
          <li
            key={Math.random()}
            className={`text-lg text-text-accent capitalize text-center select-none cursor-pointer py-4 ${
              selected === index ? 'border-b-2 border-text-accent' : ''
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

export default PortofolioTabsNavigation
