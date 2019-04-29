import { connect } from 'react-redux'
import { toggleTodo } from '../../redux/todo/actions'
import TodoList from '../todo/TodoList'

const getVisibleTodos = (todos) => {
    return todos
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const About = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default About;