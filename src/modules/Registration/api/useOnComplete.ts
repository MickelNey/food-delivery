import {useCallback, useContext} from "react";
import {ActionContext, StateContext} from "modules/Registration/Registration";
import {ACTION_GO_FINAL } from "../model/states";
import {useNavigate} from "react-router-dom";


export const useOnComplete = () => {
  const dispatch = useContext(ActionContext)
  const getState = useContext(StateContext)
  const state = getState()
  return useCallback((rememberDevice: boolean) => {
    dispatch({
      type: ACTION_GO_FINAL,
      payload: {
        stateInfo: state.data.stateInfo,
        userInfo: { ...state.data.userInfo, rememberDevice} }
    })
  }, [state])
}

// TO DO

export const useOnComplete32 = () => {
  const navigate = useNavigate()
  const routeChange = () =>{
    const path = `/main`;
    navigate(path);
  }
  return [routeChange]
}