import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      localStorage.setItem('token', data.token)

      console.log('Login successful')
    } else {
      console.log(data.message)
    }
  }

  // ADD THIS FUNCTION HERE
  const getProtectedData = async () => {
    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:5000/api/protected', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    console.log(data)
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
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">
          Login
        </button>
      </form>

      {/* ADD THIS BUTTON HERE */}
      <button type="button" onClick={getProtectedData}>
        Get Protected Data
      </button>
    </div>
  )
}

export default Login