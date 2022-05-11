import React from 'react'
import Button from '../UI/buttons/button/Button'
import cl from './RegistrationForm.module.css'


const RegistrationForm = ({visform}) => {

  return (
    <div>
       <form className={cl.form}>      
           <div className={cl.title}>            
              Регистрация                               
           </div> 
           <div className={cl.check}>
          <div>
              <span style={
                {padding:'12px',
                fontSize:'16px',
                color:'black'}
                }>Уже есть аккаунт?
              </span>
          </div>
          <Button color='transparent'  onClick={()=>{visform('login')}}> Войти</Button>      
        </div>             
        <input className={cl.input} type="text" placeholder='ФИО'/>            
        <input className={cl.input} type="tel" placeholder='номер телефона'/>            
        <input className={cl.input} type="email" placeholder='E-mail'/>            
        <select className={cl.input} type="email" placeholder='Филиал'/>            
        <input className={cl.input} type="password" placeholder='пароль'/>
         
        <Button style={  // Зеленая кнопка Регистрация
          {width:'100%', 
          height:'56px', 
          margin:'12px'}
          } color='green'>Зарегистрироваться</Button>
          
    </form>
    </div>
   
  )
}

export default RegistrationForm