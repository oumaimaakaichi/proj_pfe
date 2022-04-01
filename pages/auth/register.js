import React from "react";

export default function Register() {

    return (
        <div>
            <div className="bg-gray-900 text-gray-900 py-16 h-screen">
                <p className="text-center text-3xl font-medium text-white my-10">
                    Welcome to
                    <br/>
                    Aghsalni
                </p>
                <p className="text-white text-center my-3 font-semibold">Super admin register invitation</p>
                <div className="max-w-xl m-auto bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Saisir votre email"/>
                    </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"
                        onChange={
                            (e) => {
                                setPassword(e.target.value);
                            }
                        }/>
                    <p className="text-red text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center">
                    <input type="checkbox"/>
                    <label className="ml-1 font-medium">Remember me</label>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <button className="text-white hover:bg-blue-dark bg-gray-900 font-bold py-2 px-4 rounded"
                        //   type="button"
                    >
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-medium text-sm text-blue hover:text-blue-darker" href="#">
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}
