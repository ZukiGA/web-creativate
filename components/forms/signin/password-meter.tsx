import { Progress } from '@chakra-ui/react'
import classNames from 'classnames'
import React from 'react'
import styles from './passwordMeter.module.css'

const DIGIT_REGEX = /[0-9]/
const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/
const UPPERCASE_REGEX = /[A-Z]/
const LOWERCASE_REGEX = /[a-z]/
const goodPasswordPrinciples = [
  {
    label: 'Al menos 8 caracteres',
    predicate: (password: string) => password.length >= 8
  },
  {
    label: 'Al menos un número',
    predicate: (password: string) => password.match(DIGIT_REGEX) !== null
  },
  {
    label: 'Al menos una letra minúscula',
    predicate: (password: string) => password.match(LOWERCASE_REGEX) !== null
  },
  {
    label: 'Al menos una letra mayúscula',
    predicate: (password: string) => password.match(UPPERCASE_REGEX) !== null
  },
  {
    label: 'Al menos un caracter especial',
    predicate: (password: string) =>
      password.match(SPECIAL_CHARS_REGEX) !== null
  }
]

const satisfiedPercent = (password: string) => {
  const satisfied = goodPasswordPrinciples.filter((principle) =>
    principle.predicate(password)
  )

  return (satisfied.length / goodPasswordPrinciples.length) * 100
}

const progressColor = (percent: number) => {
  if (percent < 30) return 'red'
  if (percent < 60) return 'orange'
  if (percent < 90) return 'yellow'
  return 'green'
}
interface PasswordMeterProps {
  password: string
  reference: React.RefObject<HTMLDivElement>
}

const PasswordMeter = ({ password, reference }: PasswordMeterProps) => {
  const [progress, setProgress] = React.useState(0)
  const [color, setColor] = React.useState('#2ED477')

  React.useEffect(() => {
    const percent = satisfiedPercent(password)
    setProgress(percent)
    setColor(progressColor(percent))
  }, [password])

  return (
    <div className={styles.panel} ref={reference}>
      <div className={styles.body}>
        <div className={styles.progress}>
          <Progress
            value={progress}
            colorScheme={color}
            isAnimated
            transition="ease-in-out"
            transitionDelay="1s"
          />
        </div>
        <h5 className={styles.title}>Una buena contraseña contiene: </h5>
        <ul>
          {goodPasswordPrinciples.map(({ label, predicate }) => (
            <li
              key={label}
              className={classNames(styles.principle, {
                [styles.textSuccess]: predicate(password),
                [styles.textDanger]: !predicate(password)
              })}
            >
              <small>
                {predicate(password) ? '✓' : '✗'} {label}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PasswordMeter
