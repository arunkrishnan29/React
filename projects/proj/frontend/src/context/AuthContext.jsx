import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  )

  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      const decodedUser = jwtDecode(token)
      setUser(decodedUser)
    }
  }, [])

  const login = (userData) => {

    setIsAuthenticated(true)

    setUser(userData)

  }

  const logout = () => {

    localStorage.removeItem('token')

    setIsAuthenticated(false)

    setUser(null)

  }

  return (

    <AuthContext.Provider

      value={{

        isAuthenticated,

        user,

        login,

        logout,

      }}

    >

      {children}

    </AuthContext.Provider>

  )

}

export const useAuth = () => {

  return useContext(AuthContext)

}