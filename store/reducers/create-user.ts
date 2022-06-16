/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersonalData } from 'interfaces/steps'
import type { RootState } from '../store'

interface CreateUserState {
  name: string | null
  email: string | null
  password: string | null
  passwordConfirmation: string | null
  phone: string | null
  isLoading: boolean
  error: string | null
}

// Define the initial state using that type
const initialState: CreateUserState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  phone: '',
  isLoading: false,
  error: ''
}

export const registerUser = createAsyncThunk(
  'registration/user',
  async (arg, thunkAPI) => {
    const { getState } = thunkAPI
    // const {
    //   createTutor: {
    //     name,
    //     email,
    //     major,
    //     password,
    //     passwordConfirmation,
    //     schedule: { firstPeriod, secondPeriod, thirdPeriod },
    //     subjects
    //   }
    // } = getState() as RootState;

    // const post = (data: any, url: string) =>
    //   fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data),
    //     cache: 'no-cache',
    //     credentials: 'same-origin'
    //     // mode: 'cors'
    //   });

    return {
      status: 200,
      data: {
        id: '1',
        name: 'Daniela Sánchez Hernández',
        email: '',
        token: ''
      }
    }

    // return post(
    //   {
    //     user: {
    //       password,
    //       confirm_password: passwordConfirmation
    //     },
    //     email,
    //     name,
    //     major,
    //     schedules: [
    //       ...firstPeriod.map(({ dia, inicio }: Period) => ({
    //         period: 0,
    //         day_week: days[dia],
    //         hour: inicio
    //       })),

    //       ...secondPeriod.map(({ dia, inicio }: Period) => ({
    //         period: 1,
    //         day_week: days[dia],
    //         hour: inicio
    //       })),

    //       ...thirdPeriod.map(({ dia, inicio }: Period) => ({
    //         period: 2,
    //         day_week: days[dia],
    //         hour: inicio
    //       }))
    //     ],
    //     subjects: [
    //       ...subjects.map(({ code }: { code: string }) => ({
    //         subject: code
    //       }))
    //     ]
    //   },
    //   'https://server-pae.azurewebsites.net/tutor/'
    // );
  }
)

export const createUserSlice = createSlice({
  name: 'createUser',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setPasswordConfirmation: (state, action: PayloadAction<string>) => {
      state.passwordConfirmation = action.payload
    },
    setRegisterForm: (state, action: PayloadAction<PersonalData>) => {
      state.name = action.payload.name?.trim() ?? ''
      state.email = action.payload.email?.trim() ?? ''
      state.phone = action.payload.phone?.trim() ?? ''
      state.password = action.payload.password?.trim() ?? ''
      state.passwordConfirmation =
        action.payload.passwordConfirmation?.trim() ?? ''
    },

    setDefaultValues: (state) => {
      state.name = ''
      state.email = ''
      state.phone = ''
      state.password = ''
      state.passwordConfirmation = ''
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { status } = action.payload
      if (status === 200 || status === 201 || status === 204) {
        state.isLoading = false
        state.name = ''
        state.email = ''
        state.phone = ''
        state.password = ''
        state.passwordConfirmation = ''
      } else {
        state.error = 'Error al registrar'
        state.isLoading = false
      }
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.error.message ?? 'Error'
      state.isLoading = false
    })
  }
})

export const {
  setName,
  setEmail,
  setPassword,
  setPasswordConfirmation,
  setRegisterForm,
  setDefaultValues,
  setIsLoading
} = createUserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectRegisterData = (state: RootState) => ({
  name: state.createUser.name,
  email: state.createUser.email,
  phone: state.createUser.phone,
  password: state.createUser.password,
  passwordConfirmation: state.createUser.passwordConfirmation
})

export const selectLoading = (state: RootState) => state.createUser.isLoading
export const selectError = (state: RootState) => state.createUser.error

export default createUserSlice.reducer
