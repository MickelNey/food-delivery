import React, {createContext, Dispatch, useCallback, useReducer} from 'react'
import { appReducer, INITIAL_STATE, Action, GetState } from "./model/states";
import { RoutingCreator } from "./RoutingCreator";

// TODO: REALIZE POST REQUEST AFTER COMPLETE FORM
// TODO: replace hooks useReducer and useContext on Redux toolkit

export const ActionContext = createContext<Dispatch<Action>>({} as Dispatch<Action>)
export const StateContext = createContext<GetState>({} as GetState)

export const Registration = () => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE)
  const getState: GetState = useCallback(() => state, [state])

  console.log(state)
  return (<>
    <ActionContext.Provider value={dispatch}>
      <StateContext.Provider value={getState}>
          {RoutingCreator(state)}
      </StateContext.Provider>
    </ActionContext.Provider>
  </>)
}