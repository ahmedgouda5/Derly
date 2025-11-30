import BoxModels from '@/components/Featuers/Homepage/BoxModels'
import { ChartAreaGradient } from '@/components/Featuers/Homepage/chart'
import React from 'react'

const page = () => {
  return (
   <div className=" ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <BoxModels/>
      </div>
      <div className=" mt-4 " >
        <ChartAreaGradient/>
      </div>
      
    </div>
  )
}

export default page