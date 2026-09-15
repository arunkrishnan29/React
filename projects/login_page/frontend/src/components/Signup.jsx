import { useState } from 'react'
import { signupUser } from '../services/authService'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (event) => {
  event.preventDefault()

  try {
    const data = await signupUser(username, email, password)

    console.log(data)

    navigate('/login')
  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <div>
      <h2>Sign Up Page</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />

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
        <br/>
        <button type="submit">
          Sign Up
        </button>
      </form>

      <button
        type="button"
        onClick={() => navigate('/login')}
      >
        Already have an account? Login
      </button>
    </div>
  )
}

export default Signup