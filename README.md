HOMKWORK  

实现下面的 TODO 应用：

<img src='http://digicity-1253322599.costj.myqcloud.com/todo.png' alt="homework">

提示：
	<li>使用 redux/combineReducers/mapStateToProps 等技术来实现</li>
	<li>图标可以到 http://www.flaticon.com/ 下载 svg</li>
	<li>每次点最下面的对勾，只显示已完成事项</li>
	<li>点对勾右边的列表按钮，显示所有事项</li>

##### 第一步 #####

创建一个文件夹，里面写一个 README.md 文件，

```
cd Desktop && mkdir todo && cd todo && touch README.md
```

然后把它上传到 github.com ，

	初始化：git init  

	全选：git add .

	做版本：git commit -m 'new-demo'

	添加远程仓库：git remote add origin https://github.com/l552177239/todo.git

	上传：git push

使用 create-react-app创建react环境
	
	create-react-app todo

	//如果失败直接把别的项目中的拖过来

##### 第二步 #####

把各个大块功能合理分层，

	分为两大块：待办事项和下面按钮区的功能块

划分组件，

创建显示待办事项的Todolist.js组件
```
import React from 'react'

class Todolist extends React.Component{
	render(){
		return(
			<div className='todolist'>
				<div className='container'>
					<ul>
						<li>123</li>
						<li>123</li>
						<li>123</li>
						<li>123</li>
					</ul>
				</div>
			</div>
			)
	}
}
export default Todolist
```

创建内容区组件Main.js并导入Todolist组件
```
import React from 'react'
import Todolist from './Todolist'
//一些功能少的简单组件直接在里面创建
//头部显示TODO的组件Header
const Header = () => (
	<div className='header'>TODO</div>
)
//头部组件创建完成
 const Form = () => (
 	<div className='form'></div>
 )
 const Action = () => (
 	<div className='action'></div>
 )
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
```

创建App组件并导入组件
```
import React from 'react'
import Main from './Main'

class App extends React.Component{
	render(){
		return(
			<div>
				App
				<Main />
			</div>
			)
	}
}
export default App
```
修改index.js将App.js渲染到页面
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'

ReactDOM.render(<App />,document.getElementById('root'))
```
然后页面上不要写内容，但是画出各自所占空间。写出样式

创建App.css
```
*{
	box-sizing: border-box;
	-moz-box-sizing:border-box; /* Firefox */
	-webkit-box-sizing:border-box; /* Safari */
}
ul,li{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
body{
	margin: 0;
	color: #212121;	
	background:#6f9436;
}
.main{
	width:567px;
	height: 628px;
	background: white;
	margin: 100px auto;
	box-shadow: 1px 2px 4px;
}
.header{
	font-size: 38px;
	font-weight: bold;
	text-align: center;
	line-height: 128px;
	font-family: 'Arial Rounded MT Bold';
}
.todolist{
	height:280px;
}
.todolist .container{
	height: 240px;
	overflow: auto;
	margin: 20px 120px;
	border:1px solid green;
}
.todolist li{
	font-size: 24px;
	line-height: 54px;	
}
.form{
	height: 110px;
}
.action{
	height: 110px;
}
```