import React, { createContext, useContext, useState, useEffect } from 'react'
import { usersData } from '../data/users'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Simula login leyendo localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = (email, password) => {
    // Busca usuario en datos simulados
    const foundUser = usersData.find(
      (u) => u.email === email && u.password === password
    )
    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem('user', JSON.stringify(foundUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const register = (newUser) => {
    // Aquí simulamos agregando usuario (solo en memoria)
    usersData.push(newUser)
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const updateUser = (updatedFields) => {
    setUser((prev) => {
      const updatedUser = { ...prev, ...updatedFields }
      // Actualiza también en usersData simulados (por email)
      const idx = usersData.findIndex((u) => u.email === updatedUser.email)
      if (idx !== -1) usersData[idx] = updatedUser
      localStorage.setItem('user', JSON.stringify(updatedUser))
      return updatedUser
    })
  }

  const changePassword = (newPassword) => {
    setUser((prev) => {
      const updatedUser = { ...prev, password: newPassword }
      const idx = usersData.findIndex((u) => u.email === updatedUser.email)
      if (idx !== -1) usersData[idx] = updatedUser
      localStorage.setItem('user', JSON.stringify(updatedUser))
      return updatedUser
    })
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateUser, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthProvider