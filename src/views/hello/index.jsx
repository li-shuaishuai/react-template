import React from 'react'

import * as styles from './hello.scss'

export default class Hello extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <img className={styles.logo} src="../../assets/logo.svg" />
        <p className={styles.title}>Hello World!</p>
      </div>
    )
  }
}