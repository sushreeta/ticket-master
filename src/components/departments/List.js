import React from 'react'
import _ from 'lodash'

import FormError from '../../../src/common/FormError'
import axios from '../../config/axios'
import DepartmentForm from '../departments/DepartmentForm'

export default class DepartmentList extends React.Component{

     constructor(){
          super()
          this.state={
               departments:[],
               errors:{}
          }
          this.handleSubmit = this.handleSubmit.bind(this)
          this.handleRemove = this.handleRemove.bind(this)
     }

     componentDidMount(){
          axios.get("/departments",{
               headers:{
                    'x-auth':localStorage.getItem('token')
               }
          })
               .then(response=>{
                    console.log(response.data)
                    const departments = response.data
                    this.setstate({departments})
               })
               .catch(err=>{
                    console.log(err)
               })
     }

     handleSubmit(formData){
          console.log('List formData', formData)
          axios.post('/departments',formData,{
               header:{
                    'x-auth': localStorage.getItem('token')
               }
          }).then(response=>{
               if(response.data.errors){
                    window.alert(response.data.message)
               } else {
                    const department = response.data
                    this.setState(prevState=>({
                         departments:[...prevState.departments , department]
                    }))
               }
          })
          .catch(err=>{
               console.log(err)
          })

     }
     handleRemove (id){
          axios(`/departments/${id}`,{
               headers:{
                    'x-auth':localStorage.getItem('token')
               }
          })
          .then(response=>{
               this.setState(prevState => ({
                    departments: prevState.departments.filter( department => 
                         department._id != response.data._id)
               }))
          })

     }

     render(){
          return(
               <div>
                    <h2>Department List - {this.state.departments.length}</h2>

                    {_.isEmpty(this.state.errors) && (<FormError errors={this.state.errors}/>)}
                    
                    <DepartmentForm handleSubmit={this.handleSubmit}/>

                    <ul>
                         {this.state.departments.map(department=>{
                              return <li key={department._id}>
                              {department.name}
                              <button onClick={()=>{
                                   this.handleRemove(department._id)
                              }}> X </button>
                              </li>
                         })}
                    </ul>

                    {/* <table>
                         <thead>
                              <tr>
                                   <th> # </th>
                                   <th> Dept. Name </th>
                              </tr>
                         </thead>
                         <tbody>
                              {this.state.departments.map((department,index)=>{
                                   return (
                                        <tr key={department._id}>
                                             <th>{index + 1}</th>
                                             <th></th>
                                        </tr>
                                   )
                              }}
                         </tbody>
                    </table> */}
               </div>
          )
     }
}