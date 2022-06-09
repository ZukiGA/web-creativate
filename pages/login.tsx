import LoginForm from '@components/forms/login/login'
import randomChoose from '@helpers/choose-image'

export default function Login() {
  return (
    <LoginForm
      user="user"
      image={randomChoose()}
      forgotPasswordRoute="/forgot-password"
      homeRoute="/home"
    />
  )
}
