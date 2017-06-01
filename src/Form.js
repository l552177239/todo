import React from 'react'

class Form extends React.Component{
	render(){
		return(
			<div className='form'>
				<form>
					<input type='text' placeholder='请输入' />
					<input type='submit' value='+'/><br />
				</form>
			</div>
			)
	}
}
export default Form