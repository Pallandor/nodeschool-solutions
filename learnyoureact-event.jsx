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

/*
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
*/

var titleArr = [], detailArr = []; 

class TodoList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: this.props.data,
                titleValue: "",
                detailValue: ""
            };
            this.changeTitle = this.changeTitle.bind(this);
            this.changeDetail = this.changeDetail.bind(this);
            this.addTodo = this.addTodo.bind(this);
        }
    
        changeTitle(e) {
        
          this.setState({
          	titleValue: e.target.value
      		});
          }
    
        changeDetail(e) {
        	// so whenever change to input
        	// update titleValue state to include the input value; 
        	this.setState({
          		detailValue: e.target.value
      		});
        }
    
        addTodo() {
          
         // add the new stuff to the state.data by setData so it will render
         // with the additional obj 

         // this.state.data is an array of objs. 
         var newData = {
         	title: this.state.titleValue,
         	detail: this.state.detailValue
         };
         // merge current data and newdata
         var updatedData = this.state.data.slice().concat(newData);

         this.setState({
         	data: updatedData
         }, ()=>{
         	// once state has async-ly rendered the update, wipe the current values in the input boxes
         	this.setState({
         		titleValue: '',
         		detailValue: '' 
         	})
         }); // this should invoke a re-render on the todo with new stuff.


          
        }
    
        render() {
          let todo = this.state.data.map(function(obj) {
            return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>;
          });
          return (
            <div className = "todoList">
              <div>
                Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
                Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
                <button onClick={this.addTodo}>Add</button>
              </div>
              <table style={{border: "2px solid black"}}>
                <tbody>
                  {todo}
                </tbody>
              </table>
            </div>
          );
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

