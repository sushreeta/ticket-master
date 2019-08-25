import React from 'react'
import _ from 'lodash'
import axios from '../../config/axios';
import FormError from '../../common/FormError';
import CustomerForm from './CustomerForm'



export default class CustomerNew extends React.Component{
     constructor(){
          super()
          this.state = {
               errors:{}
          }
          
     }

     handleSubmit = (FormData) => {
          console.log('new',FormData)
          axios.post('/customers',FormData, {
               headers:{
                    'x-auth': localStorage.setItem('token')
               }
          })
          .then(response => {
               if(response.data.errors){
                    //alert(response.data.message)
                    const {errors} = response.data.errors
                    this.setState({errors})
               } else {
                    this.props.history.push('/customers')
               }
          })
          .catch(err => {
               console.log(err)
          })

     }

     render(){
          return(
               <div>
                    <h2>Add Customer</h2>
                    {
                         !_.isEmpty(this.state.errors) && <FormError errors={this.state.errors}/>
                    }
                    <CustomerForm handleSubmit = {this.handleSubmit} />
               </div>
          )
     }
}