import React from "react";
import styles from "./Panel.module.scss";

import { StateInfo } from "types";
import { Point } from "components";

interface PanelProps extends StateInfo{
  children?: any
}

export const Panel: React.FC<PanelProps> = ( { title, points, children}) => {
  return (<>
    <div className={styles.registration}>
      <div className={styles.steps}>
        {points.map(point => <Point {...point}/>)}
      </div>
      <div className={styles.title}>
        {title}
      </div>
      {children}
    </div>
   </>)
}