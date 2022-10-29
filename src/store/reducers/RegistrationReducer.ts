import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {StateData, RegistrationType, Step} from "types";

const initialData: StateData = {
  typeAccount: 'personal',
  email: '',
  password: '',
  phone: '',
  twoFactorAuth: false,
  rememberDevice: false
}

const initialState: RegistrationType = {
  step: Step.ACCOUNT_TYPE,
  data: initialData
}

export const RegistrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    addAccountType: (state, action: PayloadAction<'personal' | 'restaurant'>) => {
      state.data.typeAccount = action.payload
      state.step = Step.PERSONAL_DETAILS
    },
    addPersonalDetails: (state, action) => {
      const { email, password } = action.payload
      state.data.email = email
      state.data.password = password
      state.step = Step.ADDITIONAL_INFO
    },
    addAdditionalInfo: (state, action) => {
      const { phone, twoFactorAuth} = action.payload
      state.data.phone = phone
      state.data.twoFactorAuth = twoFactorAuth
      state.step = Step.CONFIRMATION
    },
    complete: (state, action) => {
      const { rememberDevice } = action.payload
      state.data.rememberDevice = rememberDevice
      state.step = Step.FINAL
    },
    back: (state) => {
      switch(state.step) {
        case Step.PERSONAL_DETAILS: {
          state.step = Step.ACCOUNT_TYPE
          break
        }
        case Step.ADDITIONAL_INFO: {
          state.step = Step.PERSONAL_DETAILS
          break
        }
        case Step.CONFIRMATION: {
          state.step = Step.ADDITIONAL_INFO
          break
        }
      }
    }
  }
})

export default RegistrationSlice.reducer