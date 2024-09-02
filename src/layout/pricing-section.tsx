import SectionTitle from '@/components/misc/section-title'
import PlanCard from '@/components/pricing/plan-card'
import React from 'react'

const PricingSection = () => {
  const pricing = [
    {
      title: 'Starter',
      subtitle: 'For individuals',
      price: 100,
      url: '#',
      price_description:
        'Lorem ipsum dolor sit ametion consectetur adipisc elit.',
      features: [
        {
          name: '100GB Storage',
          active: true,
        },
        {
          name: '1 TB Photos and Videos',
          active: true,
        },
        {
          name: 'Exclusive Support',
          active: true,
        },
        {
          name: 'Free SEO Tools',
          active: false,
        },
        {
          name: 'Custom Branding Strategy',
          active: false,
        },
      ],
      grayed: true,
    },
    {
      title: 'Professional',
      subtitle: 'For startups',
      price: 200,
      url: '#',
      price_description:
        'Lorem ipsum dolor sit ametion consectetur adipisc elit.',
      features: [
        {
          name: '500GB Storage',
          active: true,
        },
        {
          name: '5 TB Photos and Videos',
          active: true,
        },
        {
          name: 'Exclusive Support',
          active: true,
        },
        {
          name: 'Free SEO Tools',
          active: true,
        },
        {
          name: 'Custom Branding Strategy',
          active: false,
        },
      ],
    },
    {
      title: 'Business',
      subtitle: 'For teams',
      price: 300,
      url: '#',
      price_description:
        'Lorem ipsum dolor sit ametion consectetur adipisc elit.',
      features: [
        {
          name: '500GB Storage',
          active: true,
        },
        {
          name: '5 TB Photos and Videos',
          active: true,
        },
        {
          name: 'Exclusive Support',
          active: true,
        },
        {
          name: 'Free SEO Tools',
          active: true,
        },
        {
          name: 'Custom Branding Strategy',
          active: true,
        },
      ],
      grayed: true,
    },
  ]
  return (
    <section className='w-full flex flex-col gap-10 justify-center items-center'>
      <SectionTitle
        title='Affordable Pricing With Simple Plans'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
      />

      <ul className='w-4/5 grid grid-cols-3'>
        {pricing.map((plan) => {
          return (
            <div
              key={Math.random()}
              className='flex justify-center items-center'
            >
              <PlanCard plan={plan} grayedBtn={plan.grayed} />
            </div>
          )
        })}
      </ul>
    </section>
  )
}

export default PricingSection
