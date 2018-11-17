import React from 'react'

import * as styles from './about.scss'

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <p className={styles.blog}><a target="_Blank" href="https://lishuaishuai.com">lishuaishuai.com</a></p>
      </div>
    )
  }
}