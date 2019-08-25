import React from 'react'
import axios from '../../config/axios'
import {BrowserRouter, Link, Route} from 'react-router-dom'

export default class CustomerList extends React.Component {
     constructor(){
          super()
          this.state={
               customers:[],
               isLoading:true
          }
     }
     componentDidMount(){
          axios.get('/customers')
               .then(response=>{
                    console.log(response.data)
                    const customers = response.data
                    this.setState({customers, isLoading:false})
               })
               .catch(err=>{
                    console.log(err)
               })

     }
     render(){
          return (
               <div>
                    {/* { this.state.isLoading ? (<p>loading...</p>): (write here the whole code of the table) } */}
                    <h2>Listing Customers - {this.state.customers.length}</h2>
                    <table>
                         <thead>
                              <tr>
                                   <th> # </th>
                                   <th> Name </th>
                                   <th> Email </th>
                                   <th> Mobile </th>
                              </tr>
                         </thead>
                         <tbody>
                              {this.state.customers.map((customer,index) =>{
                                   return(
                                        <tr key={customer._id}>
                                             <th>{index + 1}</th>
                                             <th>{customer.name}</th>
                                             <th>{customer.email}</th>
                                             <th>{customer.mobile}</th>
                                        </tr>
                                   )
                              })}
                         </tbody>
                    </table>

                    <Link to="/customers/new"> Add Customer</Link>
               </div>
          )
     }
}