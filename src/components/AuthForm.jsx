import React, { useState } from 'react'
import LoginForm from './loginform/LoginForm'
import RegistrationForm from './registrationForm/RegistrationForm'
import RestorePassForm from './RestorePassForm/RestorePassForm'

const AuthForm = () => {

  let [visibleForm, setVisibleForm] = useState(<LoginForm visform={inp}/>) 
  
  function inp(visible) {
    switch (visible) {
      case 'rgstr': setVisibleForm(<RegistrationForm visform={inp}/>)        
        break;
      case 'lgn': setVisibleForm(<LoginForm visform={inp}/>)        
        break;
      case 'rstr': setVisibleForm(<RestorePassForm visform={inp}/>)        
        break;    
      default:
        break;
    }        
  }
      
   return (    
    <div>
      {visibleForm}
    </div>
  )
}

export default AuthForm