import React from 'react'
{{#if router}}
import { NavLink } from 'react-router-dom'
{{/if}}
{{#with scss}}
import * as styles from './header.scss'
{{/with}}
{{#with less}}
import * as styles from './header.less'
{{/with}}
{{#with stylus}}
import * as styles from './header.styl'
{{/with}}

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        {{#if router}}
        <div className={styles.navBox}>
          <NavLink exact className={styles.navLink} activeClassName={styles.active} to="/">Home</NavLink>
          <NavLink className={styles.navLink} activeClassName={styles.active} to="/about">About</NavLink>
        </div>
        {{else}}
        <span>Header</span>
        {{/if}}
      </div>
    )
  }
}