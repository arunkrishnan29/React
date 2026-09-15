import { useAuth } from '../context/AuthContext'

function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        You are logged in as <strong>{user?.username}</strong>
      </p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard