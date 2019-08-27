import React from 'react'
import axios from '../../config/axios';

export default class EmployeeForm extends React.Component{
     constructor(props){
          super(props)
          this.state={
               name:'',
               departments:{}
          }
     }
     
     componentDidMount(){
          axios.get('/departments',{
               headers:{
                    'x-auth':localStorage.getItem('token')
               }
          })
          .then(response =>{
               console.log(response.data)
               const departments = response.data
               this.setState({departments})
          })
          .catch(err=>{
               console.log(err)
          })
     }

     handleChange = (e)=>{
          this.setState({
               [e.target.name]:e.target.value
          })
     }

     handleSubmit = (e)=>{

     }

     render(){
          return (
               <div>
                    <form onSubmit={this.handleSubmit}>
                         <label>
                              Name:
                         </label>
                         <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                         <br/>
                         <label>
                              Department:
                         </label>
                         <input type='text' value={this.state.departments} onChange={this.handleChange} name="department"/>
                         <br/>
                         <input type='submit'/>
                    </form>
               </div>
          )
     }
}