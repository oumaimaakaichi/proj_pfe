import  {useEffect, useState} from "react";
import Layout from "../layout/Layout";
import React, { Component } from 'react';


import axios from 'axios';
class  formm  extends Component {
    


    state= {
        name:'',
        lastname: '',
        email:'',
        message: '',
        sent: false,
      
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
        const link = "http://localhost:3000/fromulaire_d'inscription"
        let data ={
    name: this.state.name,
    lastname: this.state.lastname,
    email : this.state.email,
    link,
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
        <div className="">
            <section className="py-1  pr-10 lg:pr-0">
                <div className="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-5 mt-12 mr-40 lg:mr-0">
                    <h6 className="text-3xl my-3"><i><b><u>Inviter un admin</u></b></i></h6><br />
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">


                        <form  onSubmit={this.formSubmit}>
            <div className="bg-gray-200 text-gray-900 py-32"> 
                <div className="max-w-xl m-auto bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"> 
                <img src= "/image4.png" width={200} className="centered" />
                <div className="singleItem">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2">
                           Prenom
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  
                        name="name"
                        value={this.state.name}
                      onChange={this.handleName}
                        type="text" placeholder="Ecrire le Prenom de la futur admin "
                      
                        />
                        </div>
                    </div>
                    <div className="singleItem">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                          Nom 
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  type="text" placeholder="enter le nom de la futur admin  " 
                         name="lastname"
                        value={this.state.lastname}
                       onChange={this.handleLastname}
                     
      />
                    </div>
                    </div>

                    <div className="singleItem">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                           Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  type="email" placeholder="Ecrire l'email de la futur admin "
                       name="email"
                       value={this.state.email}
                        onChange={this.handleEmail}
        
                        /></div>
                    </div>
                    <div  className={this.state.sent?`msg msgAppear` : 'msg'}>Message envoyée avec succeé</div>
                    <button className="text-white hover:bg-blue-dark bg-black font-bold py-2 px-4 rounded">Ajouter</button>
                    
                   
                    </div>
                </div>
           
        </form>
                            
                    </div>

                 
                      
                            <tbody>  
                           



                            </tbody>
                            
                        
                    
                </div>
            </div>
        </section>
    </div>
    );
}
}
export default Layout(formm);




