import React from 'react';

export default class TodoBox extends React.Component {

  render(){
    return (
      <div className='todoBox'>
      	<h1>Todos</h1>
      	<TodoList data={this.props.data}/>
      	<TodoForm />
      </div>
      )
  }
}

class TodoList extends React.Component {
	render(){
	
		var todo = this.props.data.map(function(obj){
			return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
		}); 

		return (
			<div className='todoList'>
				<table style={style.tableContent}>
					<tbody>
						{todo}
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
				<td style={style.cellContent}>
					<input type='checkbox' checked={this.state.checked} onChange={this.handleChange}/>
				</td>
				<td style={style.cellContent}>
					{this.props.title}
				</td>
				<td style={style.cellContent}>
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

let style = {
	tableContent: {
		border: '2px solid black'
	},
	cellContent: {
		border: '1px solid black'
	}
}; 


// export default Test; 
