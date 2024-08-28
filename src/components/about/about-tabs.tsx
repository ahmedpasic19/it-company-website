'use client'

import React, { useState } from 'react'
import AboutTabsNavigation from './about-tabs-navigation'
import AboutTabCard from './about-tab-card'

const AboutTabs = () => {
  const [selected, setSelected] = useState(0)

  const tabs = [
    {
      title: 'About us',
      subtitle: 'DB, Auth, Stripe, Sanity, and More',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.

Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.

Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.`,
      image:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fabout%2Fimage-2.jpg&w=3840&q=75',
      image_2:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fabout%2Fimage-1.jpg&w=3840&q=75',
    },
    {
      title: 'Our mission',
      subtitle: 'Built-with Latest Tools and Technologies',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.

Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.

Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.`,
      image:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fabout%2Fimage-2.jpg&w=3840&q=75',
      image_2:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fabout%2Fimage-1.jpg&w=3840&q=75',
    },
    {
      title: 'Our Vision',
      subtitle: 'High-quality Premium Design with Everything You Need',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.

Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.

Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.`,
      image:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fabout%2Fimage-2.jpg&w=3840&q=75',
      image_2:
        'https://go.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fabout%2Fimage-1.jpg&w=3840&q=75',
    },
  ]

  return (
    <div className='w-4/5'>
      <AboutTabsNavigation
        tabsArray={tabs}
        setSelected={setSelected}
        selected={selected}
      />

      <AboutTabCard tab={tabs[selected]} selected={selected} />
    </div>
  )
}

export default AboutTabs
