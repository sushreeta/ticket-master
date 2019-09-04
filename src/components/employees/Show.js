import React from 'react'
import {Link} from 'react-router-dom'
import axios from './../../config/axios'

export default class EmployeeShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            employee:{}
        }
    }

    componentDidMount(){
        console.log('EmployeeShow ComponentDidMount',window.location.pathname)
        const path = '/employees'+window.location.pathname.slice(15)
        axios.get( path ,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then(response=>{
            console.log(response.data)
            this.setState({
                employee:response.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onClickBack=(e)=>{

    }

    render(){
        console.log('EmployeeRender', this.state)
        return (
            <div>
                <h2>Employee Show</h2>
                <h5>Name: {this.state.employee.name}</h5>
                {/* <h5>Department: {this.state.employee.department.name}</h5> */}
                <h5>Email: {this.state.employee.email}</h5>
                <h5>Mobile: {this.state.employee.mobile}</h5>
                <br/>
                <Link to='/employees' onClick={this.onClickBack}>Back</Link>
            </div>
        )
    }

}