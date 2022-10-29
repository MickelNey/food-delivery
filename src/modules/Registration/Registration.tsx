import React from 'react'
import {RegistrationType} from "types";
import {useAppSelector} from "store/hooks";
import { RoutingCreator } from "./RoutingCreator";

// TODO: realize post request after complete
// TODO: replace hooks useReducer and useContext on Redux toolkit

export const Registration = () => {
  const state: RegistrationType = useAppSelector(state => state.registration)
  return (<div>
      {RoutingCreator(state)}
  </div>
  )
}