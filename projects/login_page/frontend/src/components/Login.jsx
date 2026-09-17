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
  <div className="login-page">

    <div className="login-card">

      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Login to your account</p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>


<div className="form-group">

  <label>Password</label>

  <div className="password-wrapper">

    <input
      type={showPassword ? 'text' : 'password'}
      placeholder="Enter your password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? 'Hide' : 'Show'}
    </button>

  </div>

</div>


        <button type="submit">
          Login
        </button>

      </form>


      <div className="signup-section">
        <p>
          Don't have an account?
        </p>

        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Create account
        </button>
      </div>

    </div>

  </div>
)
}

export default Login