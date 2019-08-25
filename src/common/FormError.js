import React from 'react'

export default function FormError(props){
     return (<div style={{color:'red'}}>
                    <h2>These error/s are prohibitted the form being saved</h2>
                    <ul>
                         {Object.keys(props.errors).map((prop,index)=>{
                         return <li key={index}>{prop} - {this.state.errors[prop]['message']}</li>
                         })}
                    </ul>
          </div>
     )
}