import { Input } from '@chakra-ui/react'
import React from 'react'
import {
  Control,
  Controller,
  FieldError,
  UseControllerProps
} from 'react-hook-form'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  error: FieldError | undefined
  control: Control<any>
  rules: UseControllerProps['rules']
}

export interface RenderProps {
  field: any
  fieldState: any
}

const TextInput = ({
  name,
  error,
  control,
  rules,
  style,
  ...rest
}: TextInputProps) => (
  <>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }: RenderProps) => (
        <Input
          {...rest}
          id={field.name}
          style={
            fieldState.error
              ? { border: '1px solid red', ...style }
              : { ...style }
          }
          {...field}
        ></Input>
      )}
    />
    {error && <p className="error">{error.message}</p>}
  </>
)
export default TextInput
