export const PERSONAL_DATA = 'PERSONAL_DATA'
export const CHILDREN = 'CHILDREN'
export const CONFIRMATION = 'CONFIRMATION'

export interface Step {
  title: string
}

export interface Steps {
  [key: string]: Step
}

export interface ComponentStepProps {
  nextStep: () => void
}

export interface PersonalDataProps {
  nextStep: (data: PersonalData) => void
}

export interface PersonalData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  phone: string
}
