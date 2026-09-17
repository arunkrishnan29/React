import { useAuth } from '../context/AuthContext'
import dashboardBg from '../assets/clouds.jpeg'

function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="dashboard-page"
    style={{ backgroundImage: `url(${dashboardBg})`}}>

      <div className="dashboard-card">

        <h1 className="dashboard-title">
          Dashboard
        </h1>

        <p className="dashboard-text">
          You are logged in as <strong className="dashboard-username">
            {user?.username}
          </strong>
        </p>

        <button
          className="logout-button"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Dashboard