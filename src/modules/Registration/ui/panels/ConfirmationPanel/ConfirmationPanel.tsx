import React, {useState} from "react";
import {ProtoStateData} from "../../../model/states";

import styles from "./ConfirmationPanel.module.scss";
import {Panel} from "../Panel";
import {BackButton, CheckBox, Input, Button} from "@common";

import {useOnComplete, useValidation, useOnBack} from "../../../api/";
import { validRegExp } from "../../../model/validRegExp";
import { Link, useNavigate} from "react-router-dom";




export const ConfirmationPanel = (
  { stateInfo, userInfo }: ProtoStateData) => {
  const [code, setCode, codeValid] = useValidation('', validRegExp.code)
  const [rememberDevice, setRememberDevice] = useState(userInfo.rememberDevice)
  const handleOnBackClick = useOnBack()
  const handleCompleteClick = useOnComplete()
  const navigate = useNavigate()  // to FIX
  const routeChange = () =>{      //
    let path = `/main`;           //
    navigate(path);               //
  }                               //

  return (<>
    <Panel {...stateInfo}>
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
            handleCompleteClick(rememberDevice)
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