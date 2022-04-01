
export default function Login() {




    return (
        <form >
            <div className="bg-blue-100 text-gray-100 py-32"> <p className="text-center text-xl font-medium text-gray-100 my-3">Create Account</p>
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
                    <button className="text-white hover:bg-blue-dark bg-blue-100 font-bold py-2 px-4 rounded">Ajouter</button>
                    
                   
                    </div>
                </div>
           
        </form>
    );
}
