import React, { Component } from 'react'

import s from './styles.css'
import getIndentPixels from './utils'
import fileSrc from '../../assets/images/file.svg'

class File extends Component {

  render() {
  	const pixels = getIndentPixels(this.props.indent)
  	const style = { paddingLeft: pixels + 'px' }
    return (
    	<div className={s.iconContainer}>
		    <img src={fileSrc} className={s.file} style={style}/>
		  </div>
    )
  }
}

export default File
