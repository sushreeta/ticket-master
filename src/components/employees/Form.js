import React from 'react'
import axios from '../../config/axios';

export default class EmployeeForm extends React.Component{
     constructor(props){
          super(props)
          this.state={
               name:'',
               department:{},
               departments:[],
               email:'',
               mobile:''
          }
     }
     
     componentDidMount(){
          console.log('EmployeeForm ComponentDidMount')
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
          console.log('EmployeeForm handleSubmit',e)
          e.preventDefault()
          const formData = {
               name: this.state.name,
               department: this.state.department,
               email: this.state.email,
               mobile: this.state.mobile
          }
          this.props.handleSubmit(formData)
     }

     render(){
          console.log('EmployeeForm render',this.state)
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
                         <select name="department" onChange={this.handleChange} value={this.state.department}>
                              <option value="">Select</option>
                              {this.state.departments.map(department =>{
                                   return(
                                        <option key={department._id} value={department._id}>{department.name}</option>
                                   )
                              })}
                         </select>
                         <br/>
                         <label>
                              Email:
                         </label>
                         <input type='text' value={this.state.email} onChange={this.handleChange} name="email"/>
                         <br/>
                         <label>
                              Mobile:
                         </label>
                         <input type='text' value={this.state.mobile} onChange={this.handleChange} name="mobile"/>
                         <br/>
                         <input type='submit'/>
                    </form>
               </div>
          )
     }
}