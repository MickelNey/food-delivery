import React from "react";

import styles from "./PersonalDetails.module.scss";
import {Panel} from "../Panel";
import {BackButton, Input, Button} from "common";

import {StateData} from "types";

import { useValidation} from "utils/hooks";
import { validRegExp } from "../../data/validRegExp";

import {useAppDispatch} from "store/hooks";
import {RegistrationSlice} from "store/reducers/RegistrationReducer";
import {info} from "../../data/stateInfo";

export const PersonalDetails = ( data: StateData) => {
  const [email, setEmail, emailValid] = useValidation(data.email, validRegExp.email)
  const [password, setPassword, passwordValid] = useValidation(data.password, validRegExp.password)
  const [confirmPass, setConfirmPass, confirmPassValid] = useValidation(data.password, validRegExp.password)

  const dispatch = useAppDispatch()
  const handleOnClick = () => dispatch(RegistrationSlice.actions.addPersonalDetails({email, password}))
  const handleOnBackClick = () => dispatch(RegistrationSlice.actions.back())

  return (<>
    <Panel { ...info.personalDetails}>
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
          onClick={() => handleOnClick()}
        />
        <BackButton onClick={() => handleOnBackClick()}/>
      </div>
    </Panel>
  </>)
}