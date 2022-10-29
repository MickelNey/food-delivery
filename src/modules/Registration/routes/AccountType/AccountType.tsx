import React, { useState} from "react";

import styles from "./AccountType.module.scss";
import {Panel} from "../Panel";
import {Select, Button} from "common";

import {StateData} from "types";
import {info} from "../../data/stateInfo";

import {useAppDispatch} from "store/hooks";
import { RegistrationSlice } from "store/reducers/RegistrationReducer";


export const AccountType = ( data: StateData) => {
  const [typeAccount, setTypeAccount]  = useState(data.typeAccount)
  const dispatch = useAppDispatch()
  const handleOnClick = () => dispatch(RegistrationSlice.actions.addAccountType(typeAccount))

  return (<>
    <Panel { ...info.accountType }>
      <div className={`${styles.userInfo}`}>
        <Select
          active={typeAccount === 'restaurant'}
          className='_icon-cart'
          onClick={() => setTypeAccount('restaurant')}
          label='Account'
          secondLabel='Manage your own restaurant'
        />
        <Select
          active={typeAccount === 'personal'}
          className='_icon-user'
          onClick={() => setTypeAccount("personal")}
          label='Personal'
          secondLabel='Keep your orders in one place'
        />
        <Button
          className={styles.Button_container}
          onClick={() => handleOnClick()}
        />
      </div>
    </Panel>
  </>)

}