import React, { Component } from 'react';


import axios from 'axios';

export default class invitation extends Component{


state= {
    name:'',
    lastname: '',
    email:'',
    message: '',
    sent: false
}

// handle inputs 

handleName=(e)=>{
    this.setState({
        name: e.target.value
    })
}

handleLastname=(e)=>{
    this.setState({
       lastname: e.target.value
    })
}


handleEmail=(e)=>{
    this.setState({
        email: e.target.value
    })
}
handleMessage=(e)=>{
    this.setState({
        message: e.target.value
    })
}








// end of handle inputs


formSubmit =(e)=>{
    e.preventDefault();
    let data ={
name: this.state.name,
lastname: this.state.lastname,
email : this.state.email,
message: this.state.message
    }

   axios.post('http://localhost:3001/api/forma',data) 
   .then(res =>{
this.setState({
    sent: true,
},this.resetFrom())

}).catch(()=>{
console.log("message not send");
})
}



// for reseting intial data

resetFrom=()=>{
    this.setState({
        name: '',
        lastname: '',
        email: '',
        message: ''
    })
setTimeout(()=>{
this.setState({
    sent: false,
})

},4000)
}






render () {
    return (
        <div className="container">
<form onSubmit={this.formSubmit}>

<div className="singleItem">
     <label htmlFor='name'>name</label>
     <input type="text" 
     className="name" 
     name="name"
      placeholder="your lastname .."
      value={this.state.name}
      onChange={this.handleName}
      />
</div>


<div className='singleItem'>
     <label htmlFor='lastname'>lastname</label>
     <input type="text" className="lastname"
      name="lastname"
       placeholder="your email .."
       value={this.state.lastname}
       onChange={this.handleLastname}
       />
</div>


<div className='singleItem'>
     <label htmlFor='email'>email</label>
     <input type="text" className="email"
      name="email" placeholder="your email .."
      value={this.state.email}
       onChange={this.handleEmail}
      required
      />

</div>





<div  className={this.state.sent?`msg msgAppear` : 'msg'}>Message has been sent</div>

<div className='btn'>

    <button type="submit">Submit</button>
</div>
</form>
        </div>
    );
}}