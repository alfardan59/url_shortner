import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {

    const [login, setLogin] = useState(true);
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      {login ? <LoginForm state={setLogin}/> : <RegisterForm /> }
    </div>
    </div>
  )
}

export default AuthPage
