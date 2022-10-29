import React, { useState} from "react";

import styles from "./AccountTypePanel.module.scss";

import {Panel} from "../Panel";
import {Select, Button} from "@common";

import {ProtoStateData} from "../../../model/states";
import {useOnContinue} from "../../../api";


export const AccountTypePanel = ( { stateInfo, userInfo }: ProtoStateData) => {
  const [typeAccount, setTypeAccount]  = useState(userInfo.typeAccount)
  const handleOnClick = useOnContinue()

  console.log(userInfo)
  return (<>
    <Panel {...stateInfo}>
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
          onClick={() => handleOnClick({...userInfo, typeAccount})}
        />
      </div>
    </Panel>
  </>)

}