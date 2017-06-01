在src文件夹创建redux文件夹创建store.js文件

Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
```
import { createStore } from 'redux'

const store = createStore(rootReducer)
//拿数据：const state = store.getState()
reducers /index.js
export default store
//createStore函数接受另一个函数作为参数，返回新生成的 Store 对象。
```
一般在redux里创建一个reducers文件夹在里面创建index.js
创建一个reducer函数

数据
let todos =	[
	'123',
	'123'
]
```
import { connect } from 'react-redux'
import store from './store'
//导入数据

const mapStateToProps = (state) => (
//state为状态树
  {
    todos:state.todos
  }
)
export default connect(mapStateToProps)(Todolist)
//映射出
```
```
import React from 'react'
import Main from './Main'
import store from './redux/store'
import { Provider } from 'react-redux'


class App extends React.Component{
	render(){
		return(
			<Provider store={state}>
			//给所有组件传入store
				<Main />
			</Provider>
			)
	}
}
export default App
```