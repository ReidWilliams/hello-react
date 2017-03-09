import React, { Component } from 'react'

import s from './styles.css'
import FileTree from './FileTree'
import File from './File'
import Folder from './Folder'

class FileTreeWrapper extends Component {

  render() {
  	return (
  		<div className={s.treeContainer} >
  			<FileTree indent={0} tree={this.props.tree} />
  		</div>
  	)
  }
}

export default FileTreeWrapper
