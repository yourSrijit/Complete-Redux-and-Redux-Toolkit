import {createStore} from 'redux'

//Reducer
const reducer=(state={ammount:100},action)=>{
    if(action.type === 'increment'){
        return {ammount:state.ammount + 50}
    }
    return state;
}
//Store
const store=createStore(reducer);

//Global Store
const data=store.getState();
console.log(data);


store.dispatch({type:'increment'})

const updateData=store.getState();
console.log(updateData);
