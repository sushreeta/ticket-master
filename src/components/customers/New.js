import React from 'react'
import _ from 'lodash'
import axios from '../../config/axios';
import FormError from '../../common/FormError';
import CustomerForm from './CustomerForm'



export default class CustomerNew extends React.Component{
     constructor(props){
          super(props)
          this.state = {
               errors:{}
          }
          this.handleSubmit = this.handleSubmit.bind(this)
     }

     handleSubmit(FormData) {
          console.log('CustomerNew',FormData)
          axios.post('/customers',FormData, {
               headers:{
                    'x-auth': localStorage.getItem('token')
               }
          })
          .then(response => {
               console.log(response.data)
               if(response.data.errors){
                    //alert(response.data.message)
                    const {errors} = response.data.errors
                    this.setState({errors})
                    console.log('error in response')
               } else {
                    console.log(response)
                    this.props.history.push('/customers')
               }
          })
          .catch(err => {
               console.log(err)
          })

     }

     render(){
          console.log('Customer New render')
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