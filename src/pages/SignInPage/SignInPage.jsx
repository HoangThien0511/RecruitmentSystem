import React, { useEffect } from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { Checkbox } from 'antd';

import { useLocation, useNavigate } from 'react-router-dom'


const SignInPage = () => {
  
 

  const navigate = useNavigate()

 
  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }

 

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', height: '100vh' }}>
      <div style={{ width: '465px', height: '573px', borderRadius: '6px', background: '#D9D9D9', display: 'flex' }}>
        <WrapperContainerLeft>
          <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', color:'#822bf6', fontSize:'20px'}}>
              <h1 >Sign in to ERP</h1>
          </div>
          
          <InputForm style={{ marginBottom: '10px', marginTop:'30px'}} placeholder="Enter your account"   />
          <div style={{ position: 'relative' }}>
            <span
              
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
               
              }
            </span>
            <InputForm
              placeholder="Enter your password"
              style={{marginBottom: '20px'}}
              
              
            />
              <div style={{display:'flex', flexDirection:'row', alignItems: 'center',justifyContent:'space-between'}}>
                  <Checkbox>Remember me</Checkbox>
                  <a href="!#" style={{color: '#373737', fontSize:'14px'}}>Forgot password?</a>

              </div>

          </div>
          

            <ButtonComponent
              disabled
              onClick
              size={40}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px'
              }}
              textbutton={'Sign In'}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
         
         
         <div style={{display: 'flex', justifyContent: 'center'}}>
    <div>
        <p style={{fontSize: '17px'}}>Don’t have an account? <WrapperTextLight onClick={handleNavigateSignUp}>Register</WrapperTextLight></p>
    </div>
</div>

        </WrapperContainerLeft>
      
      </div>
    </div >
  )
}

export default SignInPage