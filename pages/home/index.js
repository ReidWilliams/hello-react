import React, { Component } from 'react'

// import local css as s.
import s from './styles.css'

import CodeBlock from '../../components/CodeBlock'
import FancyHeader from '../../components/FancyHeader'

class HomePage extends Component {

  render() {
    console.log(s)
    return (
      <div>
        <div className={s.slide}>
          <FancyHeader>First, what is React.js anyway?</FancyHeader>
          <div className={s.paragraphs}>
            <p>“A JavaScript library for building user interfaces”</p>
            <p>{`It forces you to think differently about how you build with HTML, CSS, and JavaScript. It’s a good thing.`}</p>
            <p>{`We mostly use it for web apps but JavaScript is kinda taking over the world, so you can use React Native to build mobile apps too.`}</p>
          </div>
        </div>

        <div className={s.slide}>
          <FancyHeader>{`What’s different about React?`}</FancyHeader>
          <div className={s.paragraphs}>
            <p>Makes building UIs declarative not imperative</p>
            <p>Makes it easy to create reusable components that package HTML, CSS, and JavaScript so they live and play happily together.</p>
          </div>
        </div>


       

       
      </div>
    )
  }

}

export default HomePage
