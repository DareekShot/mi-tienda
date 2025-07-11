import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import './AdminLogin.css' 
import Header from '../../../components/Header/Header.jsx'
import Footer from '../../../components/Footer/Footer.jsx'
import Navbar from '../../../components/NavBar/Navbar.jsx'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [generalError, setGeneralError] = useState('')
  const navigate = useNavigate()

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
    if (!password) {
      errs.password = 'La contraseña es obligatoria.'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setGeneralError('')
    const validationErrors = validate()
    setFieldErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      const validEmail = 'admin@admin.com'
      const validPassword = 'admin1234'

      if (email.trim() === validEmail && password === validPassword) {
        navigate('/admin/Dashboard')
      } else {
        setGeneralError('Email o contraseña incorrectos.')
      }
    }
  }

  const canSubmit = email && password && Object.keys(fieldErrors).length === 0

  return (
    <>
      <Header />
      <Navbar />
      <div className="admin-login-container">
        <h1>Admin Panel</h1>
        <form onSubmit={handleSubmit} className="admin-login-form" noValidate>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            placeholder="admin@admin.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          {fieldErrors.email && <p className="admin-login-error">{fieldErrors.email}</p>}

          <label htmlFor="password">Contraseña *</label>
          <div className="admin-password-input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="admin-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          {fieldErrors.password && (
            <p className="admin-login-error">{fieldErrors.password}</p>
          )}

          <button
            type="submit"
            className={`admin-login-button ${canSubmit ? 'enabled' : ''}`}
            disabled={!canSubmit}
          >
            Ingresar como Admin
          </button>

          {generalError && <p className="admin-login-error">{generalError}</p>}
        </form>
      </div>
      <Footer />
    </>
  )
}

export default AdminLogin
