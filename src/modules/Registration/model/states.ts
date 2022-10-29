import React from 'react'
import {AccountTypeInfo} from "./stateInfo";

export enum Step {
  ACCOUNT_TYPE,
  PERSONAL_DETAILS,
  ADDITIONAL_INFO,
  CONFIRMATION,
  FINAL
}
// types for state data
export type Point = 'standard' | 'active' | 'done'
export type PointName = {
  name: string
  point: Point
}
export interface StateInfo {
  title: string;
  points: Array<PointName>
}

export interface UserInfo {
  typeAccount: 'restaurant' | 'personal',
  email: string,
  password: string,
  phone: string,
  twoFactorAuth: boolean,
  rememberDevice: boolean
}

export interface ProtoStateData {
  stateInfo: StateInfo,
  userInfo: UserInfo
}
export interface ProtoState {
  step: Step
  data: ProtoStateData
}

// export interface AccountTypeData extends ProtoStateData{
//   points: ['active', 'standard', 'standard', 'standard']
// }
// export interface PersonalDetailData extends ProtoStateData{
//   points: ['done', 'active', 'standard', 'standard']
// }
// export interface AdditionalInfoData extends ProtoStateData{
//   points: ['done', 'done', 'active', 'standard']
// }
// export interface ConfirmationData extends ProtoStateData{
//   points: ['done', 'done', 'done', 'active']
// }
// export interface StateAccountType extends ProtoState{
//   step: Point.ACCOUNT_TYPE
//   data: AccountTypeData
// }
// export interface StatePersonalDetails extends ProtoState{
//   step: Point.PERSONAL_DETAILS
//   data: PersonalDetailData
// }
// export interface StateAdditionalInfo extends ProtoState{
//   step: Point.ADDITIONAL_INFO
//   data: AdditionalInfoData
// }
// export interface StateConfirmation extends ProtoState{
//   step: Point.CONFIRMATION
//   data: ConfirmationData
// }

export const ACTION_GO_PERSONAL_DETAILS_PAGE = 'ACCOUNT_TYPE' as const;
export const ACTION_GO_ADDITIONAL_INFO_PAGE = 'PERSONAL_DETAILS' as const;
export const ACTION_GO_CONFIRMATION_PAGE = 'ADDITIONAL_INFO' as const;
export const ACTION_GO_ACCOUNT_TYPE_PAGE = 'CONFIRMATION' as const;
export const ACTION_GO_FINAL = 'FINAL' as const;

export interface ActionAddAccountType {
  type: typeof ACTION_GO_PERSONAL_DETAILS_PAGE;
  payload: ProtoStateData
}
export interface ActionAddPersonalDetails {
  type: typeof ACTION_GO_ADDITIONAL_INFO_PAGE;
  payload: ProtoStateData
}
export interface ActionAddAdditionalInfo {
  type: typeof ACTION_GO_CONFIRMATION_PAGE;
  payload: ProtoStateData
}
export interface ActionPassConfirmation {
  type: typeof ACTION_GO_ACCOUNT_TYPE_PAGE;
  payload: ProtoStateData
}
export interface ActionGoFinal {
  type: typeof ACTION_GO_FINAL;
  payload: ProtoStateData
}

export type State = ProtoState
//   | StateAccountType
//   | StatePersonalDetails
//   | StateAdditionalInfo
//   | StateConfirmation

export type Action =
  | ActionAddAccountType
  | ActionAddPersonalDetails
  | ActionAddAdditionalInfo
  | ActionPassConfirmation
  | ActionGoFinal

export const appReducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ACTION_GO_PERSONAL_DETAILS_PAGE:
      return { step: Step.PERSONAL_DETAILS, data: action.payload}
    case ACTION_GO_ADDITIONAL_INFO_PAGE:
      return { step: Step.ADDITIONAL_INFO, data: action.payload}
    case ACTION_GO_CONFIRMATION_PAGE:
      return { step: Step.CONFIRMATION, data: action.payload}
    case ACTION_GO_ACCOUNT_TYPE_PAGE:
      return { step: Step.ACCOUNT_TYPE, data: action.payload}
    case ACTION_GO_FINAL:
      return { step: Step.FINAL, data: action.payload}
  }
}

export type StateCreator<T extends State> = (state: T) => React.ReactNode

export type GetState = () => State

export const INITIAL_STATE: ProtoState = {
  step: Step.ACCOUNT_TYPE,
  data: {
    stateInfo: {...AccountTypeInfo},
    userInfo: {
      typeAccount: 'personal',
      email: '',
      password: '',
      phone: '',
      twoFactorAuth: false,
      rememberDevice: false
    }
  }
}

