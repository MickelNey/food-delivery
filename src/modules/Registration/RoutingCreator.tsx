import {ProtoState, State, StateCreator, Step} from "./model/states";
import { AccountTypePanel, AdditionalInfoPanel, ConfirmationPanel, PersonalDetailsPanel } from "./ui";
import {Link} from "react-router-dom";
import React from "react";

export const createAccountType: StateCreator<ProtoState> = (
  state) => <AccountTypePanel {...state.data}></AccountTypePanel>
export const createPersonalDetails: StateCreator<ProtoState> = (
  state) => <PersonalDetailsPanel {...state.data}></PersonalDetailsPanel>
export const createAdditionalInfo: StateCreator<ProtoState> = (
  state) => <AdditionalInfoPanel {...state.data}></AdditionalInfoPanel>
export const createConfirmation: StateCreator<ProtoState> = (
  state) => <ConfirmationPanel {...state.data}></ConfirmationPanel>
export const createGoMainPage: StateCreator<ProtoState> = (
  state) => <div><Link to={'/main'}>hello</Link>
<h1> Hello</h1>

</div>

export const RoutingCreator: (state: State) => React.ReactNode = (state) => {
  switch (state.step) {
    case Step.ACCOUNT_TYPE:
      return createAccountType(state)
    case Step.PERSONAL_DETAILS:
      return createPersonalDetails(state)
    case Step.ADDITIONAL_INFO:
      return createAdditionalInfo(state)
    case Step.CONFIRMATION:
      return createConfirmation(state)
    case Step.FINAL:
      return createGoMainPage(state)
  }
}