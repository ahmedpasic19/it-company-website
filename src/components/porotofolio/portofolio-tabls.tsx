'use client'

import React, { useState } from 'react'
import PortofolioTabsNavigation from './portofolio-tabs-navigation'
import PortofolioGrid from './portofolio-grid'
import { ProjectModel } from '@/models/Project'

const PortofolioTabs = () => {
  const [selected, setSelected] = useState(0)
  const tabsArray = [
    { title: 'All', type: 1 },
    { title: 'Brand', type: 2 },
    { title: 'Ecommerce', type: 3 },
  ]

  return (
    <div className='w-5/6'>
      <PortofolioTabsNavigation
        tabsArray={tabsArray}
        setSelected={setSelected}
        selected={selected}
      />

      <div className='pt-4'>
        <PortofolioGrid />
      </div>
    </div>
  )
}

export default PortofolioTabs
