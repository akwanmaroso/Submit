import React, { Component } from 'react';
import './Login.css'
const Login = () => {
  return (
    <>
      <div class="box-login">
        <h1>Helo</h1>
        <input type="email" name="email" id="email" />
        <input type="password" name="pass" id="pass" />
        <button>Login</button>
      </div>
    </>
  )
}

export default Login;