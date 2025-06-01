import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import './editProfile.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'

const EditProfile =() => {
  const { user, updateUser } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(user?.name || '')
  const [lastName, setLastName] = useState(user?.lastName || '')
  const [dni] = useState(user?.dni || '') // DNI solo lectura
  const [phone, setPhone] = useState(user?.phone || '')
  const [email, setEmail] = useState(user?.email || '')
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const validate = () => {
    const errs = {}

    if (!name.trim()) {
      errs.name = 'El nombre es obligatorio.'
    }
    if (!lastName.trim()) {
      errs.lastName = 'El apellido es obligatorio.'
    }
    if (!phone.trim()) {
      errs.phone = 'El número de teléfono es obligatorio.'
    } else if (!/^\+?\d{7,15}$/.test(phone)) {
      errs.phone = 'Número de teléfono no válido.'
    }
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
      updateUser({ name, lastName, phone, email })
      setMessage('Datos actualizados correctamente.')
    }
  }

  return (
    <>
    <Header />
    <Navbar />
    <div className="profile-container">
      <h1>Editar Perfil</h1>
      <form onSubmit={handleSubmit} className="profile-form" noValidate>
        <div>
          <label htmlFor="lastName">Apellido*</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoFocus
          />
          {errors.lastName && <p className="profile-error">{errors.lastName}</p>}
        </div>

        <div>
          <label htmlFor="name">Nombre*</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="profile-error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="dni">DNI*</label>
          <input
            type="text"
            id="dni"
            value={dni}
            disabled
            readOnly
          />
        </div>

        <div>
          <label htmlFor="phone">Número de teléfono*</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="profile-error">{errors.phone}</p>}
        </div>

        <div className="full-width">
          <label htmlFor="email">Correo electrónico*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="profile-error">{errors.email}</p>}
        </div>

        {message && <p className="profile-message">{message}</p>}

        <p
          className="change-password-link"
          onClick={() => navigate('/profile/change-password')}
        >
          Cambiar contraseña
        </p>
        
        <button type="submit" className="profile-button">
          Guardar Cambios
        </button>
        
      </form>
    </div>
    <Footer />
    </>
  )
}

export default EditProfile
