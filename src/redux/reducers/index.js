import { combineReducers } from 'redux'

let todo = [
	{id:1,title:'遛狗',completed:false},
	{id:2,title:'跟朋友去吃饭',completed:true},
	{id:3,title:'快活呀',completed:true},
	{id:4,title:'打游戏',completed:true}
]

function todoReducer(state = todo,action){
	switch (action.type){		
		case 'COMPLETE':
			const i = action.index		
			return [...state.slice(0,i),{ ...state[i], completed: !state[i].completed }, ...state.slice(i + 1,state.length)]
		default:
			return state
	}
}
function allReducer(state = todo , action){
	switch(action.type){
		case 'ALL':
			return [...state,]
		default:
			return state
	}
}

const rootReducer = combineReducers({
	todo:todoReducer,
	display:allReducer
})

export default rootReducer