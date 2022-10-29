import React, {useState} from "react";

import styles from "./AdditionalInfo.module.scss";
import {Panel} from "../Panel";
import {BackButton, CheckBox, Input, Button} from "common";

import {StateData} from "types";
import {info} from "../../data/stateInfo";
import { validRegExp } from "../../data/validRegExp";

import { useValidation } from "utils/hooks";

import {useAppDispatch} from "store/hooks";
import {RegistrationSlice} from "store/reducers/RegistrationReducer";


export const AdditionalInfo = ( data: StateData) => {
  const [phone, setPhone, phoneValid] = useValidation(data.phone, validRegExp.phone)
  const [twoFactorAuth, setTwoFactorAuth] = useState(data.twoFactorAuth)


  const dispatch = useAppDispatch()
  const handleOnContinueClick = () => dispatch(RegistrationSlice.actions.addAdditionalInfo({phone, twoFactorAuth}))
  const handleOnBackClick = () => dispatch(RegistrationSlice.actions.back())

  return (<>
    <Panel { ...info.additionalInfo }>
      <div className={styles.userInfo}>
        <Input
          className={styles.Input}
          title='Phone number'
          placeholder='phone 10 characters '
          valid={phoneValid}
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e)}
        />
        <CheckBox
          checked={twoFactorAuth}
          label='Turn on 2 factor authentication'
          onClick={() => setTwoFactorAuth(!twoFactorAuth)}
        />
        <Button
          className={styles.Button_container}
          disabled={!phoneValid}
          onClick={() => handleOnContinueClick()}
        />
        <BackButton onClick={() => handleOnBackClick()}/>
      </div>
    </Panel>
  </>)

}