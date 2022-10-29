import React from "react";

import styles from "./PersonalDetailsPanel.module.scss";
import {Panel} from "../Panel";
import {BackButton, Input, Button} from "@common";

import {ProtoStateData} from "../../../model/states";

import {useOnBack, useOnContinue, useValidation} from "../../../api/";
import { validRegExp } from "../../../model/validRegExp";

export const PersonalDetailsPanel = (
  { stateInfo, userInfo }: ProtoStateData) => {
  const [email, setEmail, emailValid] = useValidation(userInfo.email, validRegExp.email)
  const [password, setPassword, passwordValid] = useValidation(userInfo.password, validRegExp.password)
  const [confirmPass, setConfirmPass, confirmPassValid] = useValidation(userInfo.password, validRegExp.password)
  const handleOnClick = useOnContinue()
  const handleOnBackClick = useOnBack()

  return (<>
    <Panel {...stateInfo}>
      <div className={styles.userInfo}>
        <Input className={styles.Input}
               title='Email'
               placeholder='name@example.com'
               valid={emailValid}
               value={email}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e)}
        />
        <Input className={styles.Input}
               type='password'
               title='Password'
               valid={passwordValid}
               placeholder='min. 8 characters'
               value={password}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e)}
        />
        <Input className={styles.Input}
               type='password'
               title='Confirm password'
               valid={confirmPassValid}
               placeholder='min. 8 characters'
               value={confirmPass}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPass(e)}
        />
        <Button
          className={styles.Button_container}
          disabled={(!passwordValid || !emailValid) || (password !== confirmPass)}
          onClick={() => handleOnClick({...userInfo, email, password})}
        />
        <BackButton onClick={() => handleOnBackClick()}/>
      </div>
    </Panel>
  </>)
}