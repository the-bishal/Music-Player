import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-3/4 min-h-[calc(100vh-8rem)] pl-10 pt-3 mr-2 bg-cardBg rounded-xl'>
      {children}
    </div>
  )
}

export default Container

