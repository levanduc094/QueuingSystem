import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from "./styles.module.css";
export default function Roles() {
  const location = useLocation()
  return (
    <div>
      <div className={styles.contentMain}></div>
    </div>
  )
}
