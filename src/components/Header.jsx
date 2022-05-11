import React, {useState} from 'react'
import Heart from './images/icons/heart/Heart'
import MapMarker from './images/icons/mapmarker/MapMarker'
import Button from './UI/buttons/button/Button'
import LogoPortal from '../components/images/LogoPortal/LogoPortal'
import LogIn from './images/icons/logIn/LogIn'
import { Link } from 'react-router-dom'

const Header = () => {
  // const [navi, setNavi] = useState(true)

  // let nav = ()=>{
  //   if(navi){
  //   return(<nav className='navbar' >
  //       <ul>
  //           <li><Link to='/#' >Купить</Link></li>
  //           <li><Link to='/#' >Снять</Link></li>
  //           <li><Link to='/#' >Риэлторы</Link></li>
  //           <li><Link to='/#' >Услуги</Link></li>
  //           <li><Link to='/#' >Коворкинг</Link></li>
  //           <li><Link to='/#' >Франшиза</Link></li>
  //           <li><Link to='/#' >Контакты</Link></li>
  //       </ul>
  //   </nav>)
  //   }}

  return (
    <div className='head'>      
        <div className='header'>
          <div className='header_content'>
          <LogoPortal />
         <Button 
         color='gray' 
         style={
           {marginRight:'12px',
           marginLeft:'32px'
          }
           }><MapMarker /> Город </Button>
         <Button color='gray' ><Heart /> Избранное </Button>
          </div>
          <div className='header_content'>
            <Button 
            color='green'
            style={{marginRight:'12px'}}> Стать риэлтором </Button>
            <Button 
            color='white'
            style={{marginLeft:'12px'}}><LogIn /> Войти</Button>
          </div>
         
        </div>
        
      </div>     
        

  )
}

export default Header