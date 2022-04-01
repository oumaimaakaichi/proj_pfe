/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import {useRouter} from "next/router";
export default function EditUser(props) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
   
  })
  const[Nom_station , setNom_station]=useState("")
const[type_lavage , setType_lavage]=useState("")
const[email , setEmail]=useState("")
const[password , setPassword]=useState("")
const[longitude , setLongitude]=useState("")
const[latitude , setLatitude]=useState("")
const[Role , setRole]=useState("")
   
    async function Add(){
        let item = {Nom_station , type_lavage , email , password , longitude , latitude , Role}
        console.warn(item)
        let result = await fetch("http://localhost:3001/utilisateur/register" , {
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json();
       
       
       
    }

  
  return (
    <div>
      <button
        className="rounded-full focus:outline-none"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add station
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                     
                      <div className="mt-5 flex flex-col gap-3">
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b className="">Nom station</b>
                          <input
                            type="text"
                            onChange={(e)=>setNom_station(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>type lavage:</b>
                          <input
                            type="text"
                            onChange={(e)=>setType_lavage(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>Email :</b>
                          <input
                            type="text"
                            onChange={(e)=>setEmail(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>password :</b>
                          <input
                            type="text"
                            onChange={(e)=>setPassword(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>longitude:</b>
                          <input
                            type="text"
                            onChange={(e)=>setLongitude(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>Latitude :</b>
                          <input
                            type="text"
                            onChange={(e)=>setLatitude(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>Role :</b>
                          <input
                            type="text"
                            onChange={(e)=>setRole(e.target.value)}
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                       
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() =>Add}
                  >
                   AddStation
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
