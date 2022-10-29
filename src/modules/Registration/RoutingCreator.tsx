import React from "react";

import {RegistrationType, StateCreator, Step } from "types";
import { AccountType, AdditionalInfo, Confirmation, PersonalDetails } from "./routes";

export const createAccountType: StateCreator<RegistrationType> = (
  state) => <AccountType {...state.data}></AccountType>
export const createPersonalDetails: StateCreator<RegistrationType> = (
  state) => <PersonalDetails {...state.data}></PersonalDetails>
export const createAdditionalInfo: StateCreator<RegistrationType> = (
  state) => <AdditionalInfo {...state.data}></AdditionalInfo>
export const createConfirmation: StateCreator<RegistrationType> = (
  state) => <Confirmation {...state.data}></Confirmation>

export const RoutingCreator: (state: RegistrationType) => React.ReactNode = (state) => {
  switch (state.step) {
    case Step.ACCOUNT_TYPE:
      return createAccountType(state)
    case Step.PERSONAL_DETAILS:
      return createPersonalDetails(state)
    case Step.ADDITIONAL_INFO:
      return createAdditionalInfo(state)
    case Step.CONFIRMATION:
      return createConfirmation(state)
  }
}