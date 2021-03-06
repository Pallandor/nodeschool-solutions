import React from 'react';

class Test extends React.Component {

  render(){
    return (
      <div className='todoBox'>
      	<h1>Todos</h1>
      	<TodoList />
      	<TodoForm />
      </div>
      )
  }
}

class TodoList extends React.Component {
	render(){
		return (
			<div className='todoList'>
				<table style={{border:'2px solid black'}}>
					<tbody>
						<Todo title='Shopping'>Milk</Todo>
						<Todo title='Hair cut'>13:00</Todo>
						<Todo title='Learn React'>15:00</Todo>
					</tbody>
				</table>
			</div>
		)
	}
}

//class Todo extends React.Component ({

	var Todo = React.createClass({
		getInitialState(){
			return {checked: false}; 
		},

		handleChange(e){
			this.setState({checked:e.target.checked});
		},

		render(){
		return(
			<tr>
				<td style={{border:'1px solid black'}}>
					<input type='checkbox' checked={this.state.checked} onChange={this.handleChange}/>
				</td>
				<td style={{border:'1px solid black'}}>
					{this.props.title}
				</td>
				<td style={{border:'1px solid black'}}>
					{this.props.children}
				</td>
			</tr>
		)
	}
})

//so it's a prop that takes an object with validators..
Todo.propTypes = {
	title: React.PropTypes.string.isRequired,
	//children: React.PropTypes.string.isRequired
};

var TodoForm = React.createClass({
	render (){
		return  <div className='todoForm'>I am a TodoForm.</div>
	}
});


export default Test; 
