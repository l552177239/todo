import React from 'react'
import Todolist from './Todolist'
import Form from './Form'
import Action from './Action'

const Header = () => (
	<div className='header'>TODO</div>
)
class Main extends React.Component{
	render(){
		return(
			<div className='main'>
				<Header />
				<Todolist />
				<Form />
				<Action />
			</div>
			)
	}
}
export default Main