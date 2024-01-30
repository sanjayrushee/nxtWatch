import {IoMdHome} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './index.css'

const SideBar = () => (
  <div className="sidebar-container">
    <h1>side bar</h1>
    <ul>
      <li>
        <Link to="/">
          <IoMdHome />
          <h1>Home</h1>
        </Link>
      </li>
      <li>
        <Link to="/treading">
          <IoMdHome />
          <h1>Treading</h1>
        </Link>
      </li>
      <li>
        <Link to="/gaming">
          <IoMdHome />
          <h1>Gaming</h1>
        </Link>
      </li>
      <li>
        <Link to="/saved-videos">
          <IoMdHome />
          <h1>Saved Videos</h1>
        </Link>
      </li>
    </ul>

    <div>
      <h1>CONTACT US</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="Linked in logo"
        />
      </div>
      <p>Enjoy! Now to see your channel and recommendation!</p>
    </div>
  </div>
)

export default SideBar
