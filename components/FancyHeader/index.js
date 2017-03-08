import React, { Component } from 'react'

import s from './styles.css'

class FancyHeader extends Component {

  render() {
    return (
  		<h1>
	    	<span className={s.fancyLine} />
	    		{this.props.children}
	    	<span className={s.fancyLine} />
    	</h1>
    )
  }
}

export default FancyHeader
