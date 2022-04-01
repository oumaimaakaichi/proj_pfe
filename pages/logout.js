import React , {useEffect} from 'react'
import {useRouter} from "next/router";

export default function Logout(){
    const router = useRouter()
    useEffect(()=>{
        if(localStorage.getItem("token") && localStorage.getItem("user")){
            
              
                  
                      console.log("logout successfully")
                      localStorage.removeItem("token")
                      localStorage.removeItem("user")
                      router.push('/auth/login')
                  
                 


              

        }

    },[])



return(
    <h1>  logout </h1>
)


}
