import React from 'react'

export default class CustomerForm extends React.Component{
     constructor(props){
          super(props)
          this.state={
               name:'',
               email:'',
               mobile:''
          }
     }
     handleChange = (e) => {
          console.log('customerform handleChange')
          this.setState({
               [e.target.name] : e.target.value
          })
     }

     handleSubmit = e =>{
          console.log("Customerform handleSubmit",this.state)
          e.preventDefault()
          const formData = {
               name: this.state.name,
               email: this.state.email,
               mobile:this.state.mobile    
          }
          console.log(formData)
          this.props.handleSubmit(formData)
     }
     render(){
          console.log("customerform render", this.state)
          return(
               <div>
                    <form>
                         <label htmlFor="name"> Name: </label>
                         <input type="text" value={this.state.name} name="name" onChange={this.handleChange} id="name"/>
                         <br/>
                         <label htmlFor="email"> Email: </label>
                         <input type="text" value={this.state.email} name="email" onChange={this.handleChange} id="email"/>
                         <br/>
                         <label htmlFor="mobile"> Mobile: </label>
                         <input type="text" value={this.state.mobile} name="mobile" onChange={this.handleChange} id="mobile"/>
                         <br/>
                         <input type="submit"/>
                    </form>
               </div>
          )
     }
}