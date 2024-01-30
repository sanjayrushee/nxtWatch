import {Component} from 'react'
import Header from '../Header'
import './index.css'
import SideBar from '../SideBar'

class Home extends Component {
  renderCardPremium = () => (
    <div className="CardBackground">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
        <h1>Buy Nxt Watch Premium prepaid plane with UPI</h1>
      </div>
    </div>
  )

  render() {
    return (
      <>
        <Header />
        <div className="homeOne">
          <SideBar />

          <div className="home2">
            <p>hello home</p>
          </div>
        </div>
      </>
    )
  }
}
export default Home
