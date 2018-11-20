import React from 'react'
import { NavLink } from 'react-router-dom'
import * as styles from './header.scss'

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