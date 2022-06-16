/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Transition from '@components/dialogs/transition'
import React from 'react'
import { Controller } from 'react-hook-form'
import { RenderProps, TextInputProps } from '../input'
import PasswordMeter from './password-meter'

const Password = ({
  name,
  error,
  control,
  rules,
  style,
  ...rest
}: TextInputProps) => {
  const [showPasswordMeter, setShowPasswordMeter] = React.useState(false)
  const dialogRef = React.useRef(null)
  const inputRef = React.useRef(null)
  const [show, setShow] = React.useState(false)

  const onExited = () => {
    setShowPasswordMeter(false)
  }

  const onFocus = () => {
    setShowPasswordMeter(true)
  }

  const handleClick = () => setShow(!show)

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }: RenderProps) => (
          <>
            {showPasswordMeter && (
              <Transition
                nodeRef={dialogRef}
                onExited={onExited}
                location={showPasswordMeter}
              >
                <PasswordMeter reference={dialogRef} password={field.value} />
              </Transition>
            )}
            <InputGroup size="md">
              <Input
                type={show ? 'text' : 'password'}
                {...rest}
                id={field.name}
                ref={inputRef}
                placeholder="Contraseña"
                style={
                  fieldState.error
                    ? { border: '1px solid red', ...style }
                    : { ...style }
                }
                {...field}
                onFocus={onFocus}
                onBlur={() => setShowPasswordMeter(false)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </>
        )}
      />
      {error && <p className="error">{error.message}</p>}
    </>
  )
}
export default Password
