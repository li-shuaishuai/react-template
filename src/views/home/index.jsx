import React from 'react'
import { connect } from 'react-redux'

import { updateTitle } from '../../actions/title'
import * as styles from './home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <img className={styles.logo} src={require('../../assets/logo.svg')} />
        <p onClick={() => updateTitle('欢迎使用react脚手架')} className={styles.title}>{this.props.title}</p>
      </div >
    )
  }
}

export default connect((state) => {
  return {
    title: state.title
  }
})(Home)