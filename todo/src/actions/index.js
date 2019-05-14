export const ADDTODO = "ADDTODO"
export const REMOVETODO = "REMOVETODO"
export const CHANGETODO = "CHANGETODO"
export const UPDATE = "UPDATETODOS"


export const addTodo = todo =>
{
    return {type: ADDTODO, payload: todo}
}

export const removeTodo = id =>
{
    return {type: REMOVETODO, payload: id}
}


export const changeTodo = id =>
{
    return {type: CHANGETODO, payload: id}
}