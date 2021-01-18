import { Container } from 'unstated'

interface TodoState {
    todos: string[],
    todo: string
}

class  TodoContainer extends Container<TodoState> {
    state: TodoState = {
        todos: ['sleep'],
        todo:''
    }

    handleDelTodo = (todo: string) => {
        this.setState(({todos})=>({todos: todos.filter(item=> item!== todo)}))
    }
}

export default TodoContainer

export const todoContainer = new TodoContainer()