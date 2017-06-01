import React from 'react'
import store from './redux/store'

class Action extends React.Component{
	constructor(){
		super()
		this.handleAll = this.handleAll.bind(this)
	}
	handleAll(){
		console.log('1')
		store.dispatch({type:'ALL',show:''})
	}
	handleShow(){
		console.log('2')
		store.dispatch({type:'SHOW',show:''})
	}
	render(){
		return(
			<div className='action'>
				<div className='all' onClick={this.handleAll.bind(this)}>
				</div>
				<div className='right' onClick={this.handleShow.bind(this)}></div>
			</div>
		)
	}
}
export default Action