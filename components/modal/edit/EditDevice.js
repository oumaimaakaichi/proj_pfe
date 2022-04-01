/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function EditDevice(props) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <div>
      <button
        className="rounded-full focus:outline-none"
        onClick={() => {
          setOpen(true);
        }}
      >
        <figure className="w-3 h-3">
          <img src="/edit.svg" />
        </figure>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center pt-4 px-4 mt-12 pb-20 text-center sm:block sm:p-0">
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
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        <label className="flex gap-x-3">
                        <span>SSID</span>
                        <input type="text" 
                          className="text-gray-900"
                          defaultValue={props.device.router_name}
                          />
                          </label>
                      </Dialog.Title>
                      <div className="mt-5 flex flex-col gap-3">
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>Router model :</b>
                          <input
                            type="text"
                            defaultValue={props.device.router_model}
                            className="p-2 rounded-full bg-gray-300 float-right text-gray-900 cursor-not-allowed"
                            disabled
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b className="">address_mac :</b>
                          <input
                            type="text"
                            defaultValue={props.device.address_mac}
                            className="p-2 rounded-full bg-gray-300 float-right text-gray-900 cursor-not-allowed"
                            disabled
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>Company ID :</b>
                          <select className="p-2 rounded-full bg-gray-100 float-right text-gray-900">
                            <option className="">
                              {props.device.company_id} | Cofee & CO
                            </option>
                            <option className="">68468 | company name1</option>
                            <option className="">9846 | company name2</option>
                            <option className="">654897 | company name3</option>
                          </select>
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>Date joined :</b>
                          <input
                            type="text"
                            defaultValue={props.device.date_joined}
                            disabled
                            className="p-2 rounded-full bg-gray-300 float-right text-gray-900 cursor-not-allowed"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>Router admin password :</b>
                          <input
                            type="text"
                            value="123456789"
                            className="p-2 rounded-full bg-gray-100 float-right text-gray-900"
                          />
                        </p>
                        <p className="text-sm text-gray-700 grid grid-cols-2 ">
                          <b>Status :</b>
                          <select className="p-2 rounded-full bg-gray-100 float-right text-gray-900">
                            <option className="">Actif</option>
                            <option className="">Offline</option>
                          </select>
                        </p>
                        <p className="text-sm text-gray-700 grid gap-y-3">
                          <b>Log :</b>
                          <div className="w-full p-5 text-xs bg-gray-700 text-white rounded shadow-lg h-96 overflow-y-scroll">
                            <p>Router connected</p>
                            <p>Set new session time success</p>
                            <p>Set new limit down success</p>
                            <p>Set new limit up success</p>
                            <p>Router disconnected</p>
                            <p>Router connected</p>
                            <p>Set new session time success</p>
                            <p>Set new limit down success</p>
                            <p>Set new limit up success</p>
                            <p>Router disconnected</p>
                            <p>Router connected</p>
                            <p>Set new session time success</p>
                            <p>Set new limit down success</p>
                            <p>Set new limit up success</p>
                            <p>Router disconnected</p>
                            <p>Router connected</p>
                            <p>Set new session time success</p>
                            <p>Set new limit down success</p>
                            <p>Set new limit up success</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                            <p>Router disconnected</p>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Edit
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
