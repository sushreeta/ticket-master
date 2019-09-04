import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios'

export default class EmplyeeList extends React.Component{
     constructor(){
          super()
          this.state={
               employees:[]
          }
     }
     componentDidMount(){
          console.log('Employee ComponentDidMount', this.state)
          axios.get('./employees',{
               headers:{
                    'x-auth':localStorage.getItem('token')
               }
          })
          .then( response => {
               console.log(response.data)
               const employees = response.data
               this.setState({employees})
          })
          .catch( err => {
               console.log(err)
          })

     }
     render(){
          console.log('EmployeeList', this.state)
          return (
               <div>
                    <h2>List of Employees - {this.state.employees.length}</h2>
                    <table>
                         <thead>
                              <tr>
                                   <th> # </th>
                                   <th> Name </th>
                                   <th> Department </th>
                              </tr>
                         </thead>
                         <tbody>
                              {this.state.employees.map((employee,index)=>{
                                   return (
                                        <tr key={employee._id}>
                                             <th>{index + 1}</th>
                                             <th><Link to={`employees/show/${employee._id}`}>{employee.name}</Link></th>
                                             <th>{employee.department.name}</th>
                                        </tr>
                                   )
                              })}
                         </tbody>
                    </table>
                    <Link to='/employees/new'>Add Employee</Link>
               </div>
          )
     }
}