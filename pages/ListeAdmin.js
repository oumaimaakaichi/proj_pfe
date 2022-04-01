import React, {useEffect, useState} from "react";
import Layout from "../layout/Layout";


function Admin() {
    const [data , setData] = useState([]);
    useEffect(async() =>{
        getAdmin();
    } , [])

    


      async function getAdmin(){
        let result = await fetch("http://localhost:3001/utilisateur/getAllAdmin"); 
        result = await result.json();
        setData(result)
    

       }

      async function searchClient(key){
        console.warn(key)
        let result = await fetch('http://localhost:3001/searchAdmin/'+key);
        result= await result.json();
        console.warn(result)
       setData(result)
    }
   


    return (
        <div className="">
            <section className="py-1 bg-blueGray-50 pr-10 lg:pr-0">
                <div className="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-5 mt-12 mr-40 lg:mr-0">
                <h1 className="text-3xl my-2" size="10px"><i><b>Liste des administrateurs</b></i></h1><br />
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="lg:flex items-center">
                               
                            
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="items-center  w-full border-collapse rounded-xl">
                            <thead className="rounded-xl">
                                <tr className="bg-gray-900 rounded-xl text-gray-100">
                                    
                                   
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                       Nom
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                       Prenom
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Numéro de téléphone
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                       Email
                                    </th>
                                   
                                   
                                    
                                    
                                </tr>
                            </thead>
                            <tbody> {
                                data.map((item) => (
                                    <tr className="font-medium">
                                        
                                        
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {
                                            item.nom
                                        } </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {
                                            item.prenom
                                        } </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {
                                            item.Num_tel
                                        } </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {
                                            item.email
                                        } </td>
                                        
                                        
                                    </tr>
                                ))
                            } </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Layout(Admin);




