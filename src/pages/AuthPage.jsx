import React from 'react'
import ArrowHouse from '../components/images/ArrowHouse/ArrowHouse'
import LogoPortal from '../components/images/LogoPortal/LogoPortal'
import CloseButton from '../components/UI/buttons/closebutton/CloseButton'
import { Link } from 'react-router-dom'
import AuthForm from '../components/AuthForm'

const AuthPage = () => {
     
  return (
    <div className='App'>
        <div style={{
            display: 'flex', 
            justifyContent:'space-between',
            alignItems:'center',
            height:'72px', 
            width:'90vw',          
            position:'absolute'}}>
            <Link to=''><LogoPortal /></Link> 
            <Link to='/navigation' > <CloseButton /></Link> 
        </div> 
        <div className='page'>  
                   
            <div className='page_auth'> 
               <div   //картинка дом-стрелка
               style={{
                background:'#F4F4F4',
                   width:'100%',
                   height:'100vh',
                   display:'flex',
                   alignItems:'center'
                   }}>
                   <ArrowHouse /> 
                </div>  
                <div  //форма ввода данных
                style={ 
                    {width:'130%',
                    height:'100vh', 
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'}
                    }>
                    <AuthForm /> 
                </div>                            
            </div>         
        </div>      
    </div>
  )
}

export default AuthPage