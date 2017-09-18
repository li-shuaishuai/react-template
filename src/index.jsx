import React from 'react'
import ReactDom from 'react-dom'
import Hello from 'components/hello'

import 'common/style/lss.base.min.css'

ReactDom.render(
    <Hello />,
    document.getElementById('root')
);