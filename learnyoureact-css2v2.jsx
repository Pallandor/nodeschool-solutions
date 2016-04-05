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
	
		var todo = this.props.data.map(function(obj, i){
			return <Todo key={i} title={obj.title} key={obj.title}>{obj.detail}</Todo>
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



	var Todo = React.createClass({
		getInitialState(){
			return (
			{
				checked: false,
				todoStyling: style.notChecked
			}
			) 
		},

		handleChange(e){
			this.setState({checked:e.target.checked}); 
			// i assume e.target.checked choice of flag because 
			// state updates dont confidently update? 
			this.setState({todoStyling: (e.target.checked ? style.checked: style.notChecked)}); 
		},

		render(){
			
		return(
			// previous soln: had to do opposite way because didn't render fast enough? for vals? 
			//<tr style={!this.state.checked ? style.notChecked : style.checked}>

			// completely component state managed soln:
			<tr style={this.state.todoStyling}>
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

Todo.propTypes = {
	title: React.PropTypes.string.isRequired
};

var TodoForm = React.createClass({
	render (){
		return  <div className='todoForm'>I am a TodoForm.</div>
	}
});


let style = {
	checked: {
		textDecoration: 'line-through'
	},
	notChecked: {
		textDecoration: 'none'
	},
	tableContent: {
		border: '2px solid black'
	},
	cellContent: {
		border: '1px solid black'
	}
}; 

