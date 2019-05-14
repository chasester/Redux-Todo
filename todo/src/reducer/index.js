import {ADDTODO,REMOVETODO,CHANGETODO} from "../actions"

const initialState =
{
    todos: [
        {id: 0, name: "Hit the gym",            status: false},
        {id: 1, name: "Pay bills",              status: false},
        {id: 2, name: "Buy eggs",               status: false},
        {id: 3, name: "Read a book",            status: false},
        {id: 4, name: "Organize office",        status: false},
        {id: 5, name: "Clean the kitchen",      status: false},
        {id: 6, name: "Cook Dinner",            status: false}
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