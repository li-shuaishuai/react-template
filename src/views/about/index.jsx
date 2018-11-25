import React from 'react'

{{#unless scss}}
import * as styles from './about.scss'
{{/unless}}
{{#unless less}}
import * as styles from './about.less'
{{/unless}}
{{#unless stylus}}
import * as styles from './about.styl'
{{/unless}}

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <p className={styles.blog}><a target="_Blank" href="https://lishuaishuai.com">lishuaishuai.com</a></p>
      </div>
    )
  }
}