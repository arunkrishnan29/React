import { useState } from 'react'
import { loginUser} from '../services/authService'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try 
    {
      const data = await loginUser(email, password)

      login(data.user)

      console.log('Login successful')

      navigate('/dashboard')
    } 
    catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>

        {/* BUTTON */}
        <br />

        <button type="submit">
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </form>

    </div>
  )
}

export default Login