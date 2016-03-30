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
				I am a TodoList.
			</div>

		)

	}
}

var TodoForm = React.createClass({
	render (){
		return  <div className='todoForm'>I am a TodoForm.</div>
	}

})


export default Test; 
