export interface LoginFormProps {
  image: string
  homeRoute: string
  user: string
  forgotPasswordRoute: string
}

export type LoginData = {
  email: string
  password: string
}

export const loginDefaultValues: LoginData = {
  email: '',
  password: ''
}
