import React from 'react'
import Header from './Header'
const Layout = ({childern}) => {
  return (
    <>
    <Header />
      <div>
        {childern}
      </div>

    
    </>
  )
}

export default Layout