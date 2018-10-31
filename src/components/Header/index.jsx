import React from 'react'

import * as styles from './header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <span>header</span>
      </div>
    )
  }
}