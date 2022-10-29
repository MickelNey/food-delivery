import React, {useState} from "react";

import styles from "./Confirmation.module.scss"
import {Panel} from "../Panel";
import {BackButton, CheckBox, Input, Button} from "common";

import {StateData} from "types";

import {info} from "../../data/stateInfo";
import { validRegExp } from "../../data/validRegExp";

import { useValidation } from "utils/hooks";
import { Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "store/hooks";
import {RegistrationSlice} from "store/reducers/RegistrationReducer";

export const Confirmation = ( data: StateData) => {
  const [code, setCode, codeValid] = useValidation('', validRegExp.code)
  const [rememberDevice, setRememberDevice] = useState(data.rememberDevice)

  const dispatch = useAppDispatch()
  const handleOnBackClick = () => dispatch(RegistrationSlice.actions.back())
  const handleCompleteClick = () => dispatch(RegistrationSlice.actions.complete(rememberDevice))

  const navigate = useNavigate()  // FIX
  const routeChange = () =>{      //
    let path = `/main`;           //
    navigate(path);               //
  }                               //

  return (<>
    <Panel { ...info.confirmation }>
      <div className={styles.userInfo}>
        <Input className={styles.Input}
               title='Phone number'
               placeholder='enter 5 code numbers'
               valid={codeValid}
               value={code}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e)}
        />
        <CheckBox checked={rememberDevice}
                  label='Remember this device'
                  onClick={() => setRememberDevice(!rememberDevice)}/>
        <Button
          className={styles.Button_container}
          disabled={!codeValid}
          onClick={() => {
            handleCompleteClick()
            routeChange()
          }}
        >
          <Link to={'/main'}>Complete</Link>
        </Button>
        <BackButton onClick={() => handleOnBackClick()} />
      </div>
    </Panel>
  </>)

}