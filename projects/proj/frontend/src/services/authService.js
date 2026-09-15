export const loginUser = async (email, password) => {
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  localStorage.setItem('token', data.token)

  return data
}

export const signupUser = async (username, email, password) => {
  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}

export const getProtectedData = async () => {
  const token = localStorage.getItem('token')

  const response = await fetch('http://localhost:5000/api/protected', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

 if (response.status === 401 || response.status === 403) {
  throw new Error('Session expired. Please login again.')
}

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}

