import styles from './Point.module.scss';
import {PointType} from "../../types/RegistrationType";
import React from "react";

type StepProps = PointType

export const Point: React.FC<StepProps> = ({ point, name }) => {
  const style = {
    'standard': styles.standard,
    'active': styles.active,
    'done': styles.done,
  }

  return (<div className={`${styles.step} ${style[point]}`}>
    <div className={styles.step_element}>
      <div className={styles.point}></div>
      <div className={styles.line}></div>
    </div>
    <div className=''>{name}</div>
  </div>)
}