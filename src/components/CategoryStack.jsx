import React, { useRef } from 'react'
import '../assets/styles/HiddenVisuals.css'
import Button from './Button'
import CategoryCard from './CategoryCard'

const CategoryStack = () => {

  const containerRef = useRef(null)

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <div className='relative'>
      <div className='flex justify-between items-center my-2'>
        <h3 className='text-2xl font-semibold cursor-pointer text-white hover:underline'>Charts</h3>
        <span className='mr-10 text-xs hover:underline cursor-pointer'>Show all</span>
      </div>

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="scrollBarNone flex -ml-2 my-2 overflow-x-auto whitespace-nowrap scroll-smooth"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <CategoryCard key={i} />
        ))}
      </div>

      <Button
        children='<'
        bgColor='bg-primary'
        textColor='text-secondary'
        className='scroll-button font-serif rounded-full hover:text-white hover:bg-primaryHover text-2xl w-10 h-10 flex items-center justify-center font-extralight absolute -left-4 top-[50%] transform -translate-y-1/2'
        onClick={scrollLeft}
      />

      <Button
        children='>'
        bgColor='bg-primary'
        textColor='text-secondary'
        className='scroll-button font-serif rounded-full hover:text-white hover:bg-primaryHover text-2xl w-10 h-10 flex items-center justify-center font-extralight absolute right-4 top-[50%] transform -translate-y-1/2'
        onClick={scrollRight}
      />

    </div>
  )
}

export default CategoryStack
