import React, { Component } from 'react'

// import local css as s.
import s from './styles.css'

import CodeBlock from '../../components/CodeBlock'
import FancyHeader from '../../components/FancyHeader'
import FileTree from '../../components/FileTree'

const fileTreeData = {
  type: 'folder',
  name: 'a folder',
  isOpen: true,
  children: [
  {
    type: 'folder',
    name: 'a folder',
    isOpen: true,
    children: [
    {
      type: 'file',
      name: 'a file' 
    },
    {
      type: 'file',
      name: 'another file'
    }]
  },
  {
    type: 'file',
    name: 'a file' 
  }]
}


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


        <div className={s.slide}>
          <FancyHeader>Why declarative is better than imperative</FancyHeader>
          <div className={s.paragraphs}>
            <p>Imperative: what to do and how to do it</p>
            <p>Declarative: what to do</p>
            <p>Making a reservation at a restaurant is declarative. Imagine if it was imperative.</p>
            <p>Declarative makes life simpler.</p>
          </div>
        </div>
        

        <div className={s.slide}>
          <FancyHeader>JavaScript example: a to do list UI</FancyHeader>
          <div className={s.paragraphs}>
             <p>Imperative (tell the browser how to change the document)</p>
             <CodeBlock>{
                `let list = document.getElementById(‘todo-list’)\n` +
                `let newItem = document.createElement(‘li’)\n` +
                `list.appendChild(newItem)`}
            </CodeBlock>
            <p>Declarative (say how you want it to look right now)</p>
            <CodeBlock>{
              `render() {\n` +
              `  toDoItems.foreach(function(item) {\n` +
              `    return (\n` +
              `      <ListItem text=“item”>\n` +
              `    )\n` +
              `  })\n` +
              `}` 
            }</CodeBlock>
          </div>
        </div>
        
        <div className={s.slide}>
          <FancyHeader>A second benefit: create reusable components</FancyHeader>
          <div className={s.paragraphs}>
            <CodeBlock>{
              `<ToDoList items={itemList} displayLength=“5” mode=“detailed”/>`
            }</CodeBlock>
            <p>{`This means you’re not limited to the existing HTML elements 
              (<div>, <h1>, <p>, etc). You can create your own elements like 
              <ToDoList> that encapsulate HTML, CSS, and JavaScript`}</p>
          </div>
        </div>
        
        <div className={s.slide}>
          <FancyHeader>Hands on part 1: JSX</FancyHeader>
          <div className={s.paragraphs}>
            <p>JSX lets us write JavaScript that renders HTML and our own components.</p>
            
          </div>
        </div>
        
        <div className={s.slide}>
          <FancyHeader>{`Let’s make a todo list component`}</FancyHeader>
          <div className={s.paragraphs}>
            <FileTree tree={fileTreeData}/>
          </div>
        </div>
        
        <div className={s.slide}>
          <FancyHeader>Components should be dumb</FancyHeader>
          <div className={s.paragraphs}>
          </div>
        </div>
        
        <div className={s.slide}>
          <FancyHeader>Style</FancyHeader>
          <div className={s.paragraphs}>
          </div>
        </div>
        
        <div className={s.slide}>
          <FancyHeader>CSS components</FancyHeader>
          <div className={s.paragraphs}>
          </div>
        </div>
        




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
