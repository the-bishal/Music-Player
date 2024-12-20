import React, { useState } from 'react'
import Button from '../components/Button'
import CategoryCard from '../components/CategoryStack'
import Container from '../components/Container'
import LibrarySection from '../components/LibrarySection'


const Homepage = () => {

    const [isLogin, setIsLogin] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

  return (
    <div className='flex gap-2'>
      <LibrarySection/>
      <Container>
        <div className='w-full pl-10 pt-3 mr-2 flex flex-col bg-cardBg rounded-xl gap-4 text-white min-h-[calc(100vh-8rem)]'>
            <div className='flex items-center gap-2'>
                <Button children={'All'} bgColor='bg-primary' className='rounded-full text-sm'/>
                <Button children={'Music'} bgColor='bg-primary' className='rounded-full text-sm'/>
                <Button children={'Podcasts'} bgColor='bg-primary' className='rounded-full text-sm'/>
            </div>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
      </Container>
    </div>
  )
}

export default Homepage
