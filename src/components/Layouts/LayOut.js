import React from 'react'
import Header from './Header'

const LayOut = (props) => {
  return (
    <>
    <Header></Header>
    {props.children}

  </>
  )
}

export default LayOut