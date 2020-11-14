import React, { useState } from 'react'
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

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = (event) => {
    //this func is getting called when we are typing/changing the input
    const { value, name } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="email"
          name="email"
          type="email"
          value={email}
          required
        />

        <FormInput
          handleChange={handleChange}
          label="password"
          name="password"
          type="password"
          value={password}
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

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })),
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
