import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './register.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'
import api from '../../api/usersApi.js'

const Register = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dni, setDni] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errors, setErrors] = useState({})
  const { register, user } = useAuth()
  const navigate = useNavigate()

  if (user) {
    navigate('/dashboard')
  }

  const validate = () => {
    const errs = {}

    if (!name.trim()) {
      errs.name = 'El nombre es obligatorio.'
    }
    if (!lastName.trim()) {
      errs.lastName = 'El apellido es obligatorio.'
    }
    if (!dni.trim()) {
      errs.dni = 'El DNI es obligatorio.'
    } else if (!/^\d{7,8}$/.test(dni)) {
      errs.dni = 'El DNI debe tener 7 u 8 dígitos numéricos.'
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
    if (!password) {
      errs.password = 'La contraseña es obligatoria.'
    }
    if (!passwordConfirm) {
      errs.passwordConfirm = 'Por favor confirma la contraseña.'
    } else if (password !== passwordConfirm) {
      errs.passwordConfirm = 'Las contraseñas no coinciden.'
    }

    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newUser = {
        name: name.trim(),
        lastname: lastName.trim(),
        dni: dni.trim(),
        phone: phone.trim(),
        email,
        password,
        role: 'user'
      };

      try {
        await api.create(newUser);
        alert('Registro exitoso'); 
        navigate('/login');
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        setErrors({ general: 'Error al registrar usuario. Revisa la consola.' });
      }
    }
  };



  return (
    <>
      <Header />
      <Navbar />
      <div className="register-container">
        <h1>Crear Cuenta Nueva</h1>
        <form onSubmit={handleSubmit} className="register-form" noValidate>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          {errors.name && <p className="register-error">{errors.name}</p>}

          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            placeholder=""
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="register-error">{errors.lastName}</p>}

          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            id="dni"
            placeholder=""
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <p className="dni-note">* El DNI no podrá modificarse posteriormente.</p>
          {errors.dni && <p className="register-error">{errors.dni}</p>}

          <label htmlFor="phone">Número de teléfono</label>
          <input
            type="tel"
            id="phone"
            placeholder=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="register-error">{errors.phone}</p>}

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="register-error">{errors.email}</p>}

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="register-error">{errors.password}</p>}

          <label htmlFor="passwordConfirm">Confirmar Contraseña</label>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="********"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {errors.passwordConfirm && (
            <p className="register-error">{errors.passwordConfirm}</p>
          )}

          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>

        <div className="register-links">
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register