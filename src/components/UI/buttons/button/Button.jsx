import React from "react";
import cl from './Button.module.css';

const Button = ({children, ...props})=>{  

    let rootClasses = cl.btn_white

    switch (props.color) {
        
        case 'green':
            rootClasses = cl.btn_green
            break;
        case 'gray':
            rootClasses = cl.btn_gray
            break;
        case 'transparent':
            rootClasses = cl.btn_transparent
            break;
        default: 
            break;
    }   
   
        return(
        <button {...props} className={rootClasses}>
            {children}
        </button>
    )
}

export default Button;

