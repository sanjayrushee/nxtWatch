import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const logoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <nav className="navbar-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="LogoImage"
          />
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            className="profileImage"
          />

          <button type="submit" onClick={logoutBtn}>
            Logout
          </button>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
