import React from 'react'
import CateroryCard from '../components/CategoryCard'

const ShowAll = () => {
  return (
    <div className='w-3/4 mr-2 pl-6 pt-16 bg-cardBg rounded-xl text-white min-h-[calc(100vh-8rem)]'>
            <h3 className='text-3xl mb-6 font-semibold'>Charts</h3>

            {/* Cards */}
            <div
              className="-ml-2 my-2"
            >
              {Array.from({ length: 14 }).map((_, i) => (
                <CateroryCard key={i} />
              ))}
            </div>
    </div>
  )
}

export default ShowAll
