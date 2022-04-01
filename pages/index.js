import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";

import Link from "next/link";
import swal from 'sweetalert';
import { useRouter } from "next/router";
function Index(props) {
  /* const[searchByName , setSearchByName] = useState([]);


    
    const[searchName ]=useState(["Nom_station"]);*/

    const [user, setUser] = useState()
    const router = useRouter()

  const [data, setData] = useState([]);
  useEffect(async () => {
    getStation();
  }, []);

  async function getStation() {
    let result = await fetch("http://localhost:3001/utilisateur/getAll");
    result = await result.json();
    setData(result);
  }
  async function deleteStation(_id) {
    if (window.confirm("Etes-vous sûr de  supprimer cette Station")) {
      let result = await fetch("http://localhost:3001/utilisateur/dl/" + _id, {
        method: "DELETE",
      });
      result = await result.json();
      console.warn(result);
     
      if(result){
        swal({
          title: "Supprimer avec succes",
          icon: "success",
          button: "Valider",
        });
      }
      else{
          swal({
              title: "Echec de suppression ",
             
              icon: "warning",
              buttons: true,
              dangerMode: true,
            });
      }
      getStation();
    }
  }

  async function Approuver(_id) {
    if (window.confirm("Etes-vous sûr de  confirmer cette Station")) {
      let result = await fetch("http://localhost:3001/utilisateur/mdf/" + _id, {
        method: "PUT",
      });
      result = await result.json();
      console.warn(result);
      getStation();
      if(result){
        swal({
          title: "Accepter avec succes",
          icon: "success",
          button: "Valider",
        });
      }
      else{
        swal({
          title: "Echec de confirmation ",
         
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
      }
    }
  }
  /* function search(items){
           return items.filter((item)=>{
                if(item.Nom_station == searchByName){
                    return searchName.some((NV)=>{
                        return (
                            item[NV]
                                .toString()
                                .toLowerCase()
                                .indexOf(q.toLowerCase()) > -1
                        );


                    })
                   

                }

           })
          

       }*/

  /* const [searchby, setSearchby] = useState("id");

   /* const [users, setUsers] = useState()
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const [status, setStatus] = useState("false")

    const router = useRouter()


    useEffect(() => {
        if (localStorage.getItem('token')) {
            setUser(JSON.parse(localStorage.getItem('user')))
            setToken(JSON.parse(localStorage.getItem('token')))
        } else {
            router.push("/auth/login")
        }
    }, [])

    useEffect(() => {
        setUsers(props.users)
        console.log({users : users})
    })

    const approveUser = (id) => {

        let payload = JSON.stringify({
          status: true,
        });
    
        fetch(
          process.env.REACT_APP_STRAPI_API_URL +
            "/users/" +
            id,
          {
            method: "PUT",
            headers: { Authorization: "Bearer " + token },
            body: payload,
          }
        ).then((res) => {
          console.log(res);
          if (!res.ok) {
            console.log("Probléme de modification")
          }
          if (res.ok) {
            console.log('Modification effectuée avec succeé')
    
            const payload = {
              identifier,
              password,
            };
    
            fetch(process.env.REACT_APP_STRAPI_API_URL + "/auth/local", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            })
              .then((res) => res.json())
              .then((res) => {
                if (res.user) {
                  localStorage.setItem("user", JSON.stringify(res.user));
                  localStorage.setItem("token", JSON.stringify(res.jwt));
                  router.push("/load#edit-data");
                }
              });
          }
        });
      }*/

  async function filtreData(key) {
    console.warn(key);
    let result = await fetch("http://localhost:3001/search/" + key);
    result = await result.json();
    console.warn(result);
    setData(result);
  }

  useEffect(() => {
    if(localStorage.getItem("user"))
      setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  useEffect(() => {
    if(user) {
      if(user.role != "admin") {
        router.push("l=/auth/login")
      }
    }
  }, [user])

  return (
    <div className="">
      <section className="py-1 bg-blueGray-50 pr-10 lg:pr-0">
        <div className="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-5 mt-12 mr-40 lg:mr-0">
        <h1 className="text-3xl my-2" size="10px"><i><b>Stations lavages</b></i></h1><br />
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="lg:flex items-center">
                <div className="relative w-full px-4 max-w-full flex">
                  <select className="p-2 rounded-tl-xl rounded-bl-xl   bg-gray-100 justify-start">
                    <option value="type">Nom</option>
                    <option value="type">ville</option>
                  </select>
                  <div className="flex gap-x-3 rounded-tr-xl rounded-br-xl  border border-gray-100 p-2  item-center">
                    {/* <figure className="w-5 h-5">
                                            <img src="/search_icon.svg" className="w-5 h-5"/>
                                </figure> */}
                    <input
                      type="text"
                      placeholder="Search"
                      className="placeholder-gray-500 w-full font-medium focus:outline-none"
                      onChange={(e) => filtreData(e.target.value)}
                    />
                  </div>
                </div>
                <Link href="/AddStation">
                  <div className=" w-full px-4 max-w-full gap-5">
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              
                    
                    <button className="text-white hover:bg-blue-dark bg-gray-900 font-bold py-2 px-4 rounded">
                      Ajouter une Station
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="items-center  w-full border-collapse rounded-xl" width="1000px">
                <thead className="rounded-xl">
                  <tr className="bg-gray-900 rounded-xl text-gray-100">
                    
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Nom  station
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Ville
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     Adresse
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      email
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     status
                    </th>
                    
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {" "}
                  {data.map((user, key) => (
                    <tr className="font-medium" key={key}>
                      
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {user.Nom_station}{" "}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {user.ville}{" "}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {user.adresse}{" "}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {user.email}{" "}
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {user.statut ? (
                          <div className="text-green-500 ">
                            <b> Accepter</b>
                          </div>
                        ) : (
                          <div className="text-blue-500">
                            <b>En Attente...</b>
                          </div>
                        )}{" "}
                      </td>
                      
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex">
                        <div className="rounded-full mx-1 p-2 white">
                          <span onClick={() => Approuver(user._id)}>
                            <figure>
                              <img src="/tik.jpg" width="20px" height="20px" />
                            </figure>
                          </span>
                        </div>
                        <div className="rounded-full mx-1 p-2 bg-white">
                          <span onClick={() => deleteStation(user._id)}>
                            <figure>
                              <img src="/d.jpg" width="20px" height="20px" />
                            </figure>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}{" "}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layout(Index);

/*export async function getServerSideProps(context) {

    let res = await fetch(process.env.REACT_APP_STRAPI_API_URL + "/utilisateur/getAll");
    let users = await res.json()
    if (!users) {
        return {
            redirect: {
                destination: '',
                permanent: false
            }
        }
    }
    return {props: {
            users
        }}

}*/
