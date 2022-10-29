import React, {useState} from "react";

import styles from "./AdditionalInfoPanel.module.scss";
import {Panel} from "../Panel";
import {BackButton, CheckBox, Input, Button} from "common";

import {ProtoStateData} from "../../../model/states";
import {useOnBack, useValidation, useOnContinue} from "../../../api/";
import { validRegExp } from "../../../model/validRegExp";

export const AdditionalInfoPanel = (
  { stateInfo, userInfo }: ProtoStateData) => {
  const [phone, setPhone, phoneValid] = useValidation(userInfo.phone, validRegExp.phone)
  const [twoFactorAuth, setTwoFactorAuth] = useState(userInfo.twoFactorAuth)

  const handleOnContinueClick = useOnContinue()
  const handleOnBackClick = useOnBack()

  return (<>
    <Panel {...stateInfo}>
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
          onClick={() => handleOnContinueClick({...userInfo, phone, twoFactorAuth})}
        />
        <BackButton onClick={() => handleOnBackClick()}/>
      </div>
    </Panel>
  </>)

}