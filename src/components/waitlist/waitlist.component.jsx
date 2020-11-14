import React from 'react'

import firebase from '../../firebase/firebase.utils'
class WaitList extends React.Component{
    constructor(){
            super()
            this.state={
                email:""
            }
    }
    handleChange=e => {
      
            const { name, value } = e.target
            console.log(value)
            this.setState({ [name]: value })
    
    }
  
    handleSubmit= async(e) =>{
        e.preventDefault();
        const db = firebase.firestore();
        
       const userRef = db.collection("waitlist").add({
           email:this.state.email
       })
       if(this.state.email === ""){
        alert("Email Address is required");
        }else{
            const userRef = db.collection("waitlist").add({
                email:this.state.email })
            alert(this.state.email+" Subscribed Succesfully");
            this.setState({

                email: ""
              });
        }
       
      
    }

  
    render(){
        return (
            <form>
                <input className="Enter_email"  type="email" placeholder="Enter Email" onChange={this.handleChange} name="email" value={this.state.email} /><br></br><br></br>
                <button className="submit_btn" type="submit" onClick={this.handleSubmit} >
                    <span className="submit"> Submit</span></button>
            </form>
        )
    }
}
export default WaitList