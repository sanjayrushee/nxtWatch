import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {
    username: '',
    password: '',
    ErrorMessage: '',
    ErrorStatus: '',
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const UserDetails = {username, password}
    const apiLink = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(apiLink, option)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFail(data.error_msg)
    }
  }

  onSubmitSuccess = jswToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jswToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFail = erroMsg => {
    this.setState({ErrorStatus: true, ErrorMessage: erroMsg})
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="Username"> Username</label>
        <input
          id="Username"
          type="input"
          className="inputAndPassword"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="Password"> Password</label>
        <input
          id="Password"
          type="Password"
          className="inputAndPassword"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {ErrorStatus, ErrorMessage} = this.state
    return (
      <form onSubmit={this.onSubmitForm}>
        {this.renderUsername()}
        {this.renderPassword()}
        {ErrorStatus ? <p>{ErrorMessage}</p> : ''}
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default Login
