import React from 'react'
import axios from '../../config/axios'

export default class EmplyeeList extends React.Component{
     constructor(){
          super()
          this.state={
               employees:[]
          }
     }
     componentDidMount(){
          axios.get('./employees',{
               headers:{
                    'x-auth':localStorage.getItem('token')
               }
          })
          .then( response => {
               console.log(response.data)
          })
          .catch( err => {
               console.log(err)
          })

     }
     render(){
          return (
               <div>
                    <h2>List of Employees - {this.state.employees}</h2>
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
                                        <tr key>
                                             <th>{index + 1}</th>
                                             <th>{employee.name}</th>
                                             <th>{employee.department}</th>
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