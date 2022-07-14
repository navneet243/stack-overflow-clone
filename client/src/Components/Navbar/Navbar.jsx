import React ,{useEffect}from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'

import { setCurrentUser } from '../../actions/currentUser'
import logo from '../../utils/logo.png'
import search from '../../utils/search.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  var User = useSelector((state) => state.currentUserReducer)
  //console.log(User.token );

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }
  
  useEffect(()=>{
    const token = User?.token
    //console.log({token});
    if(token){
      const decodedToken = decode(token)
      //console.log(decodedToken);
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch,User?.token])

  

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' width={150}/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type='text' placeholder='Search...'/>
                <img src={search} alt='search' width={15} className='search-icon'/>
            </form>
            {User == null ? 
              <Link to='/Auth' className='nav-item nav-links'>Log In</Link> :
              <>
                <Avatar backgroundColor='#009dff' px='12px' py='7px' borderRadius='50%'
                ><Link to={`/Users/${User?.result?._id}`} style={{color:'white', textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                <button className='nav-links' onClick={handleLogout}>Log Out</button>
              </>
            }
        </div>
    </nav>
  )
}

export default Navbar