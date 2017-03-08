import React, { Component } from 'react'

// import local css as s.
import s from './styles.css'
// import global css as gs
import gs from './../../styles/grid.css'

class CodeBlock extends Component {

  render() {
    return (
        <pre>
          <code className={s.fontCode}>{this.props.children}</code>
        </pre>
    )
  }
}

export default CodeBlock
