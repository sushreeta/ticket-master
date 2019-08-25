import React from 'react'
import axios from '../../config/axios';

export default class DepartmentForm extends React.Component{
     constructor(props){
          super(props)
          this.state={
               name:''
          }
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
     }

     handleChange(e){
          console.log(e.target)
          this.setState({
               [e.target.name]:e.target.value
          })

     }

     handleSubmit(e){
          e.preventDefault()
          const formData ={
               name: this.state.name
          }
          this.props.handleSubmit(formData)
     }

     render(){
          return(
               <div>
                    <form onSubmit={this.handleSubmit}>
                         <label htmlFor="name"> Name: </label>
                         <input 
                              type="text"
                              value={this.state.name}
                              onChange={this.handleChange}
                              name="name"
                              id="name"
                              />
                         <input type="submit"/>
                    </form>
               </div>
          )
     }
}