import { Button } from '@chakra-ui/react'
import { selectLoading, selectRegisterData } from '@redux/create-user'
import { PersonalData, PersonalDataProps } from 'interfaces/steps'
import { useForm } from 'react-hook-form'
import { useAppSelector } from 'store/hook'
import TextInput from '../input'
import Password from './password'
import styles from './personal-data.module.css'

const PersonalDataForm = ({ nextStep }: PersonalDataProps) => {
  const isLoading = useAppSelector(selectLoading)
  const defaultValues = useAppSelector(selectRegisterData)
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<PersonalData>({
    defaultValues: defaultValues
  })
  const onSubmit = handleSubmit((data) => nextStep(data))

  return (
    <form className={styles.registerForm} onSubmit={onSubmit}>
      <div className={styles.input}>
        <TextInput
          name="name"
          placeholder="Nombre completo"
          control={control}
          error={errors.name}
          rules={{
            required: 'El nombre es requerido',
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caracteres'
            }
          }}
        />
      </div>
      <div className={styles.input}>
        <TextInput
          name="email"
          placeholder="Correo electrónico"
          control={control}
          error={errors.email}
          rules={{
            required: 'El correo electrónico es requerido',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
              message: 'El correo electrónico no es válido'
            }
          }}
        />
      </div>
      <div className={styles.input}>
        <TextInput
          name="phone"
          placeholder="Número de teléfono"
          control={control}
          error={errors.phone}
          rules={{
            required: 'El número de teléfono es requerido',
            pattern: {
              value: /^[0-9\-+]{9,15}$/,
              message: 'El número de teléfono no es válido'
            }
          }}
        />
      </div>

      <div className={styles.input}>
        <Password
          name="password"
          control={control}
          error={errors.password}
          rules={{
            required: 'La contraseña es requerida',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener al menos 8 caracteres'
            }
          }}
        />
      </div>
      <div className={styles.input}>
        <TextInput
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmar contraseña"
          control={control}
          error={errors.passwordConfirmation}
          rules={{
            required: 'La confirmación de contraseña es requerida',
            validate: (value) => value === getValues().password
          }}
        />
      </div>
      <Button
        disabled={isLoading}
        isLoading={isLoading}
        variant="primary"
        type="submit"
        color="white"
        backgroundColor={'#2F44A9'}
        className={styles.button}
      >
        CONTINUAR CON REGISTRO
      </Button>
    </form>
  )
}

export default PersonalDataForm
