import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// 1 Stateful Components:
// - Class
// - State
// - Lifecycle methos

// 2. Stateless Componenets (Functional Components):
// - Functions
// - No statement
// - No lifecycle methods



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      todos: []
    };
  };

  updateValue = event => {
    this.setState({ value: event.target.value });
  };

  saveTodo = () => {
    if (this.state.value) {
      this.setState({
        todos: [
          ...this.state.todos, 
          { value: this.state.value, completed: false}
        ],
        value: ''
      });
    }
  };

  deleteTodo = index => {
    this.setState({ todos: this.state.todos.filter((_, i) => i !== index) });
  }

  toggleCompleted = index => {
    const todos = this.state.todos

    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Typography align='center' variant='h2' gutterBottom>
          To-Do App
        </Typography>
  
        <Grid container justify='center'>
          <Grid item>
            <TodoForm 
              value={this.state.value}
              updateValue={this.updateValue}
              saveTodo={this.saveTodo} 
            />
          </Grid>
        </Grid>
  
        <Grid container justify='center'>
          <Grid item md={8}>
            <TodoList
              todos={this.state.todos}
              toggleCompleted={this.toggleCompleted}
              deleteTodo={this.deleteTodo}
            />        
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

// es lo mismo que la function de arriba
// function App () {
//   const h1 = document.createElement('h1');
//   h1.innerHTML = 'Hello World';

//   return h1;
// }

export default App;

// npx create-react-app react-todo
// npm run
// npm run eject (habilita todo lo de la configuracion)
// manifest.json en public es parte de las progresive web apps
// serviceworker va ligado al manifest es para las progresive web apps
// npm install @material-ui/core
// npm install @material-ui/icons