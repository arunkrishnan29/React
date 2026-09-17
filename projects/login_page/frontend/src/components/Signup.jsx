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
    <div className="signup-page">

      <div className="signup-card">

        <h2 className="signup-title">
          Sign Up Page
        </h2>

        <form className="signup-form" onSubmit={handleSubmit}>

          <input
            className="signup-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <div className="password-container">

            <input
              className="signup-input password-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              className="password-button"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>

          </div>

          <button
            className="signup-button"
            type="submit"
          >
            Sign Up
          </button>

        </form>

        <div
          className="login-link-section">
            <p>
              Already have an account?
            </p>

         <button className="login-link-button" type="button"
          onClick={() => navigate('/login')}
        >
         Login
        </button>
      </div>
      </div>

    </div>
  )
}

export default Signup