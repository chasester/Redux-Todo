import {ADDTODO,REMOVETODO,CHANGETODO} from "../actions"

const initialState =
{
    todos: [
        {id: 0, name: "Get Somethign done", status:false},
        {id: 1, name: "Get Somethign done", status:false},
        {id: 2, name: "Get Somethign done", status:true}
    ]
}


export default (state = initialState, action) => {
    switch (action.type) {
      case ADDTODO:
      // Fill in the body of this case
      return {...state, todos: [...state.todos, {id: state.todos.length, name: action.payload, status: false}]}
      case REMOVETODO:
        return {...state, todos: state.todos.filter(x=> x.id !== action.payload)}
      // Fill in the body of this case
      case CHANGETODO:
        return {...state, todos: state.todos.map(x=> {x.status = x.id===action.payload ? !x.status : x.status; return x})}
      default:
        return state;
    }
  };