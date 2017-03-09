import React, { Component } from 'react'

import s from './styles.css'
import File from './File'
import Folder from './Folder'

class FileTree extends Component {
  render() {
    const indent = this.props.indent

    // tree is a file
  	if (this.props.tree.type === 'file') {
  		return <File indent={indent} />
  	}

    // otherwise its a folder
    const folderComponent = <Folder isOpen={this.props.tree.isOpen} indent={indent} />
    const children = this.props.tree.children

    if (this.props.tree.isOpen) {
      return (
        <div>
          { folderComponent }
          { 
            children.map((child) => {
              return <FileTree indent={indent+1} tree={child} />
            })
          }
        </div>
      )
    } else {
      return folderComponent
    }
  }
}

export default FileTree
