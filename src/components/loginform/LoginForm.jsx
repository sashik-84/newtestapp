import React from 'react'
import Button from '../UI/buttons/button/Button'
import cl from './LoginForm.module.css'


const LoginForm = ({visform}) => {

  return (
    <div >
      <form className={cl.form}>      
           <div className={cl.title}>            
              Вход в кабинет                               
           </div>              
        <input className={cl.input} type="tel" placeholder='номер телефона'/>            
        <input className={cl.input} type="password" placeholder='пароль'/>
        <div className={cl.check}>
          <div><input type="checkbox" />
              <span style={
                {padding:'12px',
                fontSize:'16px',
                color:'black'}
                }>Запомнить меня
              </span>
          </div>
          <Button color='transparent'  onClick={()=>{visform('rstr')}}> Забыли пароль?</Button>      
        </div> 
        <Button style={  // Белая кнопка Войти
          {width:'100%', 
          height:'56px', 
          margin:'12px'}
          }>Войти</Button>
        <Button style={  // Зеленая кнопка Регистрация
          {width:'100%', 
          height:'56px', 
          margin:'12px'}
          } color='green' onClick={()=>{visform('rgstr')}}>Зарегистрироваться</Button>
          
    </form>
    </div>
    
  )
}

export default LoginForm