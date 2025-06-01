import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import './changePassword.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'

const ChangePassword = () => {
  const { user, changePassword, logout } = useAuth()
  const navigate = useNavigate()
  const [currentPassword, setCurrentPassword] = useState('')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const validate = () => {
    const errs = {}

    if (!currentPassword) {
      errs.currentPassword = 'La contraseña actual es obligatoria.'
    } else if (currentPassword !== user.password) {
      errs.currentPassword = 'La contraseña actual es incorrecta.'
    }

    if (!newPassword) {
      errs.newPassword = 'La nueva contraseña es obligatoria.'
    }

    if (!confirmPassword) {
      errs.confirmPassword = 'Por favor confirma la nueva contraseña.'
    } else if (newPassword !== confirmPassword) {
      errs.confirmPassword = 'Las nuevas contraseñas no coinciden.'
    }

    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    setMessage('')

    if (Object.keys(validationErrors).length === 0) {
      changePassword(newPassword)
      setMessage('Contraseña actualizada correctamente.')
      logout()
      navigate('/login')
    }
  }

  const canSubmit = currentPassword && newPassword && confirmPassword

  return (
    <>
    <Header />
    <Navbar />
    <div className="change-password-container">
      <h1>Cambiar Contraseña</h1>
      <form onSubmit={handleSubmit} className="change-password-form" noValidate>
        <label htmlFor="currentPassword">Contraseña Actual *</label>
        <div className="password-input-wrapper">
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoFocus
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            aria-label={showCurrentPassword ? 'Ocultar contraseña actual' : 'Mostrar contraseña actual'}
          >
            {showCurrentPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        {errors.currentPassword && (
          <p className="change-password-error">{errors.currentPassword}</p>
        )}

        <label htmlFor="newPassword">Nueva Contraseña *</label>
        <div className="password-input-wrapper">
          <input
            type={showNewPassword ? 'text' : 'password'}
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowNewPassword(!showNewPassword)}
            aria-label={showNewPassword ? 'Ocultar nueva contraseña' : 'Mostrar nueva contraseña'}
          >
            {showNewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        {errors.newPassword && (
          <p className="change-password-error">{errors.newPassword}</p>
        )}

        <label htmlFor="confirmPassword">Confirmar Nueva Contraseña *</label>
        <div className="password-input-wrapper">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={showConfirmPassword ? 'Ocultar confirmación de contraseña' : 'Mostrar confirmación de contraseña'}
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="change-password-error">{errors.confirmPassword}</p>
        )}

        {message && <p className="change-password-message">{message}</p>}

        <button
          type="submit"
          className={`change-password-button ${canSubmit ? 'enabled' : ''}`}
          disabled={!canSubmit}
        >
          Actualizar contraseña
        </button>
      </form>
    </div>
    <Footer />
    </>
  )
}
export default ChangePassword