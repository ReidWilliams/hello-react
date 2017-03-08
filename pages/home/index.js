import React, { Component } from 'react'

// import local css as s.
import s from './styles.css'

import CodeBlock from '../../components/CodeBlock'

class HomePage extends Component {

  render() {
    return (
      <div className={s.post}>
        <h1>Nesting</h1>
        <p>This is just some text of the post yeah yeah yea</p>
        <p>{`Here's another paragraph`}</p>
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
