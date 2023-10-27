import React, { Component } from 'react'
import './TodoApp.css'

export default class TodoApp extends Component {
    state={
        input:"",
        items: []
    }
    handleChange= event =>{
        this.setState({
            input:event.target.value
        })
    }

    storeItems = event => {
      event.preventDefault()
    const {input}=this.state;
    // const allItems = this.state.items

    // allItems.push(input);

    this.setState({
        items:[...this.state.items,input],
        input:""
    })
    }
    deleteItems = key =>{
      const allItems = this.state.items
      allItems.splice(key,1)
      this.setState({
        items:allItems
        
      })
    }
  render() {
    const {input,items}=this.state
    console.log(items);

    return (
      <div className='todo-container'>
      
         <h1 >TODO APP</h1>
         <form className='input-section'onSubmit={this.storeItems}>
            <input onChange={this.handleChange} value={input} type="text" placeholder='enter the item'/>
            {/* <button>ADD</button> */}
         </form>
         <ul>
          {items.map((data,index) => (

            <li key={index}>{data}  <i class="fa-solid fa-trash-can" onClick={ ()=> this.deleteItems(index)}></i></li>
          ))}
            </ul>
      </div>
    )
  }
}
