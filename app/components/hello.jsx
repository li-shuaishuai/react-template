import React from 'react';

import styles from './hello.less'

class Hello extends React.Component {
    render() {
        return (
            <div className={styles.big}>
                <p>Hello World!</p>
            </div>
        )
    }
}

export default Hello;