import "../styles/Login.css";

function Login() {
   return (
      <div
         style={{
            marginTop: "10vh",
            height: "90vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
         }}>
         <div className="login-box">
            <h2>Login</h2>
            <h2>Credits to Soufiane Khalfaoui</h2>
            <form>
               <div className="user-box">
                  <input type="text" name="" required="" />
                  <label>Username</label>
               </div>
               <div className="user-box">
                  <input type="password" name="" required="" />
                  <label>Password</label>
               </div>
               <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
               </a>
            </form>
         </div>
      </div>
   );
}

export default Login;
