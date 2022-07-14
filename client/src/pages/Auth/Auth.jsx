import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import stack from '../../utils/stack.png'
import AboutAuth from './AboutAuth'
import './Auth.css'
import { signup ,login } from '../../actions/auth'

const Auth = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isSignup , setIsSIgnup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSwitch = () =>{
    setIsSIgnup(!isSignup)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!email && !password ){
      alert('Enter email and password')
    }
    if(isSignup){
      if(!name){
        alert("Enter a name to continue")
      }
      dispatch(signup({name, email, password},navigate))
    }else{
      dispatch(login({email, password},navigate))
    }
    //console.log({name,email,password});
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className='auth-container-2'>
        { !isSignup && <img src={stack} alt='stack overflow' className='login-logo' width={40} justifyContent='center'/>}
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type='text' id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
              </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="password">
            <div style={{display:'flex' , justifyContent:'space-between'}} >
              <h4>Password</h4>
              {!isSignup && <p style={{color: '#007ac6',fontSize:'13px'}}>Forgot Password ?</p>}
            </div>
            <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            {isSignup && <p style={{color: '#666767' ,fontSize:'13px'}}>Password must contain atleast eigth characters,<br/>
              including at least 1 letter and 1 number.</p>
            }
          </label>
          {
            isSignup && (
              <label htmlFor='check'>
                <input type='checkbox' id='check'/>
                <p style={{fontSize:'13px'}}>Opt-in to receive occasional product<br/>
                 updates, user research invitations, company<br/> 
                 announcements, and digests.</p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'login'}</button>
          {
            isSignup && (
              <p style={{color: '#666767' ,fontSize:'13px'}}>
                By clicking “Sign up”, you agree to our 
                <span style={{color: '#007ac6'}}> terms of<br/>service, privacy policy</span> and 
                <span style={{color: '#007ac6'}}> cookie policy</span>
              </p>
            )
          }
        </form>
        <p>
          {isSignup ? 'Already have an account ?' : "Don't have an account ?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
            {isSignup ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </section>
    
  )
}

export default Auth