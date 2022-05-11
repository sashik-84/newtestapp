import React from 'react'
import cl from './Heart.module.css'

const Heart = () => {
  return (
    <div className={cl.icon}>      
        <svg  height="18" viewBox="2 -2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M7.0026 4.375C4.68522 4.375 2.71094 6.10775 2.71094 8.35816C2.71094 9.91062 3.43789 11.2177 4.40135 12.3004C5.36149 13.3793 6.60022 14.285 7.72008 15.043L9.65226 16.3509C9.86386 16.4941 10.1413 16.4941 10.3529 16.3509L12.2851 15.043C13.405 14.285 14.6437 13.3793 15.6039 12.3004C16.5673 11.2177 17.2943 9.91062 17.2943 8.35816C17.2943 6.10775 15.32 4.375 13.0026 4.375C11.808 4.375 10.7569 4.93512 10.0026 5.65986C9.24831 4.93512 8.19716 4.375 7.0026 4.375Z" fill="#7A7A7A"/>
        </svg>
    </div>
  )
}

export default Heart