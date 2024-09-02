import React from 'react'
import { FaCheck } from 'react-icons/fa6'

type TProps = {
  plan: {
    title: string
    subtitle: string
    price: number
    url: string
    price_description: string
    features: {
      name: string
      active: boolean
    }[]
  }
  grayedBtn?: boolean
}

const PlanCard = ({ plan, grayedBtn }: TProps) => {
  return (
    <div className='text-text-accent flex flex-col gap-20'>
      <div className='flex flex-col justify-center items-center border-b-2 border-main-gray/50 pb-10'>
        <h2 className='font-semibold text-3xl'>{plan.title}</h2>
        <p className='text-main-text'>{plan.subtitle}</p>
      </div>

      <div className='space-y-8 flex flex-col justify-center items-center border-b-2 border-main-gray/50 pb-10'>
        <h1 className='font-bold text-6xl'>
          {plan.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </h1>
        <p className='text-main-text text-sm'>{plan.price_description}</p>
      </div>

      <ul className='space-y-8 flex flex-col border-b-2 border-main-gray/50 pb-10 items-center'>
        {plan.features.map((feature) => {
          return (
            <li
              key={Math.random()}
              className='flex space-x-6 w-full max-w-[20rem] justify-center'
            >
              <div className='w-4/5 flex items-center justify-between'>
                <div className='w-1/6'>
                  {feature.active ? (
                    <FaCheck className='text-green-600' />
                  ) : (
                    <FaCheck className='text-main-text' />
                  )}
                </div>
                <p className='w-5/6 text-start'>{feature.name}</p>
              </div>
            </li>
          )
        })}

        <div className='w-full flex justify-center items-center pt-12'>
          <button
            className={`${
              grayedBtn ? 'secondary-button' : 'regular-button'
            } capitalize`}
          >
            Join this plan
          </button>
        </div>
      </ul>
    </div>
  )
}

export default PlanCard
