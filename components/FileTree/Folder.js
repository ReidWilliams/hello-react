import React, { Component } from 'react'

import s from './styles.css'
import getIndentPixels from './utils'

import triangleRightSrc from '../../assets/images/triangle-right.svg'
import triangleDownSrc from '../../assets/images/triangle-down.svg'
import folderOpenSrc from '../../assets/images/folder-open.svg'
import folderClosedSrc from '../../assets/images/folder-closed.svg'

class File extends Component {
  render() {
  	const isOpen = this.props.isOpen

  	let folder = <img src={folderClosedSrc} className={s.folderClosed} />
  	let triangle = <img src={triangleRightSrc} className={s.triangleRight} />

  	if (isOpen) {
  		folder = <img src={folderOpenSrc} className={s.folderOpen} />
  		triangle = <img src={triangleDownSrc} className={s.triangleDown} />
  	}

  	const pixels = getIndentPixels(this.props.indent)
  	const style = { paddingLeft: pixels + 'px' }

    return (
    	<div className={s.iconContainer} style={style}>
    		{triangle}
    		{folder}
	    </div>
    )
  }
}

export default File
