import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import ActivationEmail from './auth/ActivationEmail';
import Login from './auth/Login';
import Register from './auth/Register';

function Body() {
  return (
    <section>
      <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route path="/register" element={<Register />} exact />
      <Route path="/activate/:activation_token" element={<ActivationEmail />} exact />

      </Routes>
    </section>
  )
}

export default Body