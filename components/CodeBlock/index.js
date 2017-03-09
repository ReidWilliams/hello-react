import React, { Component } from 'react'

import s from './styles.css'

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
