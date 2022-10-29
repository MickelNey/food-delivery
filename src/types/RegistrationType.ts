import React from 'react'
// Registration steps
export enum Step {
  ACCOUNT_TYPE,
  PERSONAL_DETAILS,
  ADDITIONAL_INFO,
  CONFIRMATION,
  FINAL
}

export type PointType = {
  name: string
  point: 'standard' | 'active' | 'done'
}

export interface StateInfo {
  title: string;
  points: Array<PointType>
}

export interface StateData {
  typeAccount: 'restaurant' | 'personal',
  email: string,
  password: string,
  phone: string,
  twoFactorAuth: boolean,
  rememberDevice: boolean
}
export interface RegistrationType {
  step: Step
  data: StateData
}

export type StateCreator<T extends RegistrationType> = (state: T) => React.ReactNode
