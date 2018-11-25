import React from 'react'

{{#unless scss}}
import * as styles from './footer.scss'
{{/unless}}
{{#unless less}}
import * as styles from './footer.less'
{{/unless}}
{{#unless stylus}}
import * as styles from './footer.styl'
{{/unless}}
export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <span>© <a href="https://lishuaishuai.com">李帅帅空间</a></span>
      </div>
    )
  }
}