import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './passwordRecovery.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'

const PasswordRecovery =() =>{
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const validate = () => {
    const errs = {}

    if (!email) {
      errs.email = 'El correo es obligatorio.'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        errs.email = 'Por favor ingresa un correo válido.'
      }
    }

    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    setMessage('')

    if (Object.keys(validationErrors).length === 0) {
      setMessage(
        `Si el correo ${email} está registrado, se enviaron instrucciones para recuperar tu contraseña.`
      )
      setEmail('')
    }
  }

  return (
    <>
    <Header />
    <Navbar />
    <div className="password-recovery-container">
      <h1>Olvidé mi contraseña</h1>
      <p className="instruction-text">
        Por favor introduzca su dirección de correo electrónico para recibir un enlace de restablecimiento de contraseña.
      </p>
      <form onSubmit={handleSubmit} className="password-recovery-form" noValidate>
        <label htmlFor="email">Correo electrónico *</label>
        <input
          type="email"
          id="email"
          placeholder="usuario@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        {errors.email && <p className="password-recovery-error">{errors.email}</p>}
        {message && <p className="password-recovery-message">{message}</p>}

        <button type="submit" className="password-recovery-button">
          Restablecer mi contraseña
        </button>
      </form>

      <div className="password-recovery-links">
        <Link to="/login">Volver al inicio de sesión</Link>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default PasswordRecovery
