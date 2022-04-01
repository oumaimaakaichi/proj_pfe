
import Layout from "../layout/Layout";
import React, { useState } from 'react';


function a() {

   


    return (
        <div className="">
            <section className="py-1 bg-blueGray-50 pr-10 lg:pr-0">
                <div className="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-5 mt-12 mr-40 lg:mr-0">
                    <h6 className="text-5xl my-3"><i>Clients</i></h6><br />
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="lg:flex items-center">
                                <div className="relative w-full px-4 max-w-full flex">
                                  
                                    <div className="flex gap-x-3 rounded-tr-xl rounded-br-xl  border border-gray-100 p-2  item-center">
                                       
                                       
                                    </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="items-center  w-full border-collapse rounded-xl">
                            <thead className="rounded-xl">
                          
                            </thead>
                            <tbody>



                           






   
     
        <form >
            <div className="bg-blue-800 text-gray-900 py-32"> <p className="text-center text-xl font-medium text-gray-100 my-3">Create Account</p>
                <div className="max-w-xl m-auto bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"> 
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2">
                           cin
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  type="Number" placeholder="enter your cin "
                      
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                          Nom 
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  type="text" placeholder="enter your FirstName "
                      
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                           Prenom
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  type="Number" placeholder="enter your LastName  "
                      
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                         Numéro de télephone
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  type="Number" placeholder="enter your phone "
                      
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                           Adresse
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  type="text" placeholder="enter your username  "
                      
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"  type="password" placeholder="enter your password"/ >
                     
                    </div>
                    <button className="text-white hover:bg-blue-dark bg-blue-800 font-bold py-2 px-4 rounded">Ajouter</button>
                    
                   
                    </div>
                </div>
        </form>

























                                </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Layout(a);




