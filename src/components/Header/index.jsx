import React from 'react'
{{#if router}}
import { NavLink } from 'react-router-dom'
{{/if}}
{{#unless scss}}
import * as styles from './header.scss'
{{/unless}}
{{#unless less}}
import * as styles from './header.less'
{{/unless}}
{{#unless stylus}}
import * as styles from './header.styl'
{{/unless}}
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