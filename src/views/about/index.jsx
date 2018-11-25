import React from 'react'

{{#with scss}}
import * as styles from './about.scss'
{{/with}}
{{#with less}}
import * as styles from './about.less'
{{/with}}
{{#with stylus}}
import * as styles from './about.styl'
{{/with}}

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <p className={styles.blog}><a target="_Blank" href="https://lishuaishuai.com">lishuaishuai.com</a></p>
      </div>
    )
  }
}