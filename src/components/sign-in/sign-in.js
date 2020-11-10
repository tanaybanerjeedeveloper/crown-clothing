import React from 'react'
import './sign-in.styles.scss'
//importing components
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
//importing actions
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user-actions'
//connecting to store
import { connect } from 'react-redux'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { emailSignInStart } = this.props
    const { email, password } = this.state

    emailSignInStart(email, password)
  }

  handleChange = (event) => {
    //this func is getting called when we are typing/changing the input
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              handleclick={googleSignInStart}
              isGoogleSignIn={true}
            >
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })),
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
