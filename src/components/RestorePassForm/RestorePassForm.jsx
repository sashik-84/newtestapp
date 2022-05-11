import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/buttons/button/Button'
import cl from './RestorePassForm.module.css'


const RestorePassForm = ({visform}) => {

  return (
    <div>
        <form className={cl.form}>      
            <div className={cl.title}>            
                Восстановление пароля                               
            </div>  
            <p>Введите в форме ниже телефон и e-mail, к которому был привязан аккаунт. Мы отправим вам на электронный адрес новый пароль.</p>            
          <input className={cl.input} type="tel" placeholder='номер телефона'/>            
          <input className={cl.input} type="email" placeholder='E-mail'/>
          <Button style={  // Зеленая кнопка Восстановить
            {width:'100%', 
            height:'56px', 
            margin:'12px'}
            } color='green'
            onClick={()=>{visform('restore')}}>Восстановить</Button>
          <div className={cl.check}>
            <div>
                <span style={
                  {padding:'12px',
                  fontSize:'16px',
                  color:'black'}
                  }>Вспомнили пароль?
                </span>
            </div>
            <Button color='transparent'  onClick={()=>{visform('lgn')}}> Войти</Button>      
          </div>     
      </form>
    </div>
    
  )
}

export default RestorePassForm