import React from 'react'

import * as styles from './footer.scss'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <span>© <a href="https://lishuaishuai.com">李帅帅空间</a></span>
      </div>
    )
  }
}