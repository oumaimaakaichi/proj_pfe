
function App() {
  return (
    <div className="main">
      <div className="sub-main">
<div>
  <div className="imgs">
<div className="container-image">

<img src={logo} alt="invi" className="profile"/>

</div>

  </div>

<br/><br/>
           <div>
             <img src='a.png' alt="Prenom" className="email" />
             <input type="text" placeholder="Prenom" className="name"/>
           </div>
           <div className="second-input">
             <img src='utilisateur.png' alt="pass" className="email"/>
             <input type="text" placeholder="Nom" className="name"/>
           </div>
           <div className="second-input">
             <img src='utilisateur.png' alt="pass" className="email"/>
             <input type="email" placeholder="Email" className="name"/>
           </div>


          <div className="login-button">
          <button>Envoyer</button>
          </div>
           
          
           


</div>



</div>

      </div>
   
    
  );
}

export default App;
