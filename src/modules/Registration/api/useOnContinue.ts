import {ActionContext, StateContext} from "modules/Registration/Registration";
import {useCallback, useContext} from "react";
import {
  ACTION_GO_PERSONAL_DETAILS_PAGE,
  ACTION_GO_CONFIRMATION_PAGE,
  ACTION_GO_ADDITIONAL_INFO_PAGE,
  Step, UserInfo
} from "../model/states";
import {
  AdditionalInfoInfo,
  ConfirmationInfo,
  PersonalDetailsInfo
} from "../model/stateInfo";

export const useOnContinue = () => {
  const dispatch = useContext(ActionContext)
  const getState = useContext(StateContext)
  const state = getState()

  return useCallback((items: UserInfo) => {
    switch (state.step) {
      case Step.ACCOUNT_TYPE: {
        dispatch({
          type: ACTION_GO_PERSONAL_DETAILS_PAGE,
          payload: {
            stateInfo: {...PersonalDetailsInfo},
            userInfo: { ...state.data.userInfo, ...items},
          }
        })
        break;
      }
      case Step.PERSONAL_DETAILS: {
        dispatch({
          type: ACTION_GO_ADDITIONAL_INFO_PAGE,
          payload: {
            stateInfo: {...AdditionalInfoInfo},
            userInfo: { ...state.data.userInfo, ...items },
          }
        })
        break;
      }
      case Step.ADDITIONAL_INFO: {
        dispatch({
          type: ACTION_GO_CONFIRMATION_PAGE,
          payload: {
            stateInfo: {...ConfirmationInfo},
            userInfo: { ...state.data.userInfo, ...items },
          }
        })
        break;
      }
    }
  }, [state])
}