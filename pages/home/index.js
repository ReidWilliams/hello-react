import React, { Component } from 'react'

// import local css as s.
import s from './styles.css'
// import global css as gs
import gs from './../../styles/grid.css'
import CodeBlock from '../../components/CodeBlock'

class HomePage extends Component {

  render() {
    return (
      <div>
        <CodeBlock>{'function() {blablah}'}</CodeBlock>
        <CodeBlock>{
          `function() {blablah}\n` +
          `  blah blah blah`
        }</CodeBlock>
      </div>
    )
  }

}

export default HomePage
