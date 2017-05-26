import React from 'react'
import Todolist from './Todolist'

const Header = () => (
	<div className='header'>TODO</div>
)
// const Form = () => (
// 	<div className='form'></div>
// )
// const Action = () => (
// 	<div className='action'></div>
// )
class Main extends React.Component{
	render(){
		return(
			<div className='main'>
				<Header />
				<Todolist />
			</div>
			)
	}
}
export default Main