import React from 'react'
import Navbar from './Navbar'
import PageOneContent from './PageOneContent'

const PageOne = (props) => {
  return (
    <div className='h-screen w-full '>
        <Navbar />
        <PageOneContent users = { props.users } />
    </div>
  )
}

export default PageOne