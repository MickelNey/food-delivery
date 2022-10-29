import {ActionContext, StateContext} from "modules/Registration/Registration";
import {useCallback, useContext} from "react";
import {
  ACTION_GO_PERSONAL_DETAILS_PAGE, ACTION_GO_ACCOUNT_TYPE_PAGE,
  ACTION_GO_ADDITIONAL_INFO_PAGE,
  Step
} from "../model/states";
import {
  AccountTypeInfo,
  AdditionalInfoInfo,
  PersonalDetailsInfo
} from "../model/stateInfo";

export const useOnBack = () => {
  const dispatch = useContext(ActionContext)
  const getState = useContext(StateContext)
  const state = getState()

  return useCallback(() => {
    switch (state.step) {
      case Step.PERSONAL_DETAILS: {
        dispatch({
          type: ACTION_GO_ACCOUNT_TYPE_PAGE,
          payload: {
            stateInfo: { ...AccountTypeInfo },
            userInfo: { ...state.data.userInfo },
          }
        })
        break;
      }
      case Step.ADDITIONAL_INFO: {
        dispatch({
          type: ACTION_GO_PERSONAL_DETAILS_PAGE,
          payload: {
            stateInfo: { ...PersonalDetailsInfo },
            userInfo: { ...state.data.userInfo },
          }
        })
        break;
      }
      case Step.CONFIRMATION: {
        dispatch({
          type: ACTION_GO_ADDITIONAL_INFO_PAGE,
          payload: {
            stateInfo: {...AdditionalInfoInfo},
            userInfo: { ...state.data.userInfo },
          }
        })
        break;
      }
    }
  }, [state])
}