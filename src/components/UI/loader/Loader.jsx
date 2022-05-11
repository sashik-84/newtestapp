import React from 'react'
import cl from './Loader.module.css'

const Loader = () => {
  return (
    <div className={cl.loader}>
        <div className={cl.ball1}></div>
        <div className={cl.ball1}></div>
        <div className={cl.ball1}></div>
    </div>
  )
}

export default Loader