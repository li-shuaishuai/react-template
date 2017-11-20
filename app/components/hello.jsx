import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './hello.less'

class Hello extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className={styles.big}>
        <p>Hello World!</p>
      </div>
    )
  }
}

export default Hello;