import React from 'react'
import store from './redux/store'
import { connect } from 'react-redux'

class Todolist extends React.Component{
	handClick(id){
		store.dispatch({ type: 'COMPLETE',index:id - 1})
	}
	render(){
		return(
			<div className='todolist'>
				<div className='container'>
					<ul>
						{
						
							this.props.todos.todo.map((item) =>
								<li key={item.id} 
								onClick={this.handClick.bind(this,item.id)} 
								className={item.completed ? 'completed' : ''}>{item.title}</li>
						 	)
						}
					</ul>
				</div>
			</div>
			)
	}
}
const mapStateToProps = (state) => (
  {
    todos:state
  }
)
export default connect(mapStateToProps)(Todolist)
