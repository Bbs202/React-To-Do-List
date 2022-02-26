import React, { Component } from 'react';
const styles = {
    width: 350,
    fontSize: 12,
    fontFamily: "cursive"
    
};
const styles2 = {
    display: "block",
    fontFamily: "cursive",
    fontSize: 12,
    margin: 2   
}
const style3 = {
    width: 350,
    fontFamily: "monospace",
    fontWeight: 700
}
const style4 = {
    fontSize: 13,
    fontFamily: "cursive"
}
const style5 = {
    backgroundColor: "skyblue"
}
class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
            toDoList:[]
        }
       

    
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleClear = this.handleClear.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    };
    handleSubmit = () => {
       const itemArray = this.state.input.split(',');
      
       if(this.state.input === ""){
           return (alert("Enter what do you want to do!"))
       }
       else{
           return(
            this.setState({
                input: "",
                toDoList: itemArray
            })
           )
       }
       
    };
    handleClear() {
        let items=[];
        this.setState({
            toDoList: items
        })
    }
    handleReset(event) {
        this.setState({
            input: ""
        })
    }

    listItem(){
        let items= this.state.toDoList.map(item=><li>{item}</li>)
       if(this.state.toDoList.length === 0) {return null}
       else{
       return <ol style={styles2} className="list-group-item active m-2">{items}</ol>
       }
    }
       
    render() { 
       
        return  (<body><div>
           
            <h1 style={style3} className="navbar navbar-expand-lg navbar-light bg-white ml-2">My-To-Do-List</h1>
            <hr className="mt-5"/>
            
            <textarea style={styles} className={"md-textarea form-control form-control z-depth-1 m-2"}value={this.state.input} onChange={this.handleChange} placeholder="separate with comma" />
            <button style={style4} className="btn btn-secondary m-2" onClick={this.handleSubmit}>Submit</button>
            <button style={style4} className={"btn btn-primary"} onClick={this.handleReset}>Reset</button>
            <br />
            <hr className="mt-5"/>
            {this.state.toDoList.length===0 && <h3 style={{fontWeight: 700}} className={"m-2"}>What will you like to do?</h3>}
            {this.listItem()}
             <button style={style4} className={"btn btn-primary m-2"}onClick={this.handleClear}>Clear</button>
        </div>
        </body>);
    }
}
 
export default ToDoList;