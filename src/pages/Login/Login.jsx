import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import './Login.css' 
import '../../components/Header/Header.jsx'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [generalError, setGeneralError] = useState('')
  const { login, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

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
      const success = login(email.trim(), password)
      if (success) {
        navigate('/dashboard')
      } else {
        setGeneralError('Email o contraseña incorrectos.')
      }
    }
  }

  const canSubmit = email && password && Object.keys(fieldErrors).length === 0

  return (
  <>
    <Header />
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="login-form" noValidate>
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          placeholder="usuario@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        {fieldErrors.email && <p className="login-error">{fieldErrors.email}</p>}

        <label htmlFor="password">Contraseña *</label>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        {fieldErrors.password && (
          <p className="login-error">{fieldErrors.password}</p>
        )}

        <div className="forgot-password">
          <Link to="/password-recovery">¿Olvidaste la contraseña?</Link>
        </div>

        <button
          type="submit"
          className={`login-button ${canSubmit ? 'enabled' : ''}`}
          disabled={!canSubmit}
        >
          Ingresar
        </button>

        {generalError && <p className="login-error">{generalError}</p>}
      </form>

      <div className="register-text">
        ¿Todavía no tenés cuenta?{' '}
        <Link to="/register">
          <strong>Registrate</strong>
        </Link>
      </div>
    </div>
    <Footer />
  </>
)
}

export default Login
