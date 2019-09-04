import React from 'react'

import DepartmentForm from './Form'
import axios from '../../config/axios'

export default class DepartmentList extends React.Component {
     constructor(){
          super()
          this.state={
               departments: []
          }
          this.handleSubmit = this.handleSubmit.bind(this)
     }

     componentDidMount(){
          axios.get('/departments',{
               headers:{
                    'x-auth':localStorage.getItem('token')
               }
          })
          .then(response => {
               console.log(response.data)
               this.setState({
                    departments:response.data
               })
          })
          .catch(err=>{
               console.log(err)
          })
     }

     handleSubmit(formData){
          console.log('DepartmentList Render', formData)
          axios.post('/departments',formData, {
               headers:{
                    'x-auth': localStorage.getItem('token')
               }
          })
          .then(response=>{
               console.log('DepartmentList response data',response.data)
               if(response.data.error){
                    window.alert(response.data.message)
               } else {
                    const department = response.data
                    this.setState(prevState => ({
                         departments : [...prevState.departments, department]
                    }))
               }
          })
          .catch(err=>{
               console.log(err)
          })
     }

     render(){
          console.log('DepartmentList Render', this.state)
          return(
               <div>
                    <h2>Department List - {this.state.departments.length}</h2>
                    <DepartmentForm handleSubmit={this.handleSubmit} />
                    <ul>
                         {this.state.departments.map(department =>{
                              return (
                                   <li>{department.name}</li>
                              )
                         })}
                    </ul>     
               </div>
          )
     }
}