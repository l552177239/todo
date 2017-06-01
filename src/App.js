import React from 'react'
import Main from './Main'
import store from './redux/store'
import { Provider } from 'react-redux'

class App extends React.Component{
	render(){
		return(
			<Provider store={store}>
				<Main />
			</Provider>
			)
	}
}
export default App