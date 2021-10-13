const Navbar = () => {
    return (
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html"><i className="fa fa-code"></i>DevNetworks</a>    
        </h1>  
          <ul>
            <li><a href="profiles.html"></a>Developers</li> 
            <li><a href="register.html"></a>Register</li>
            <li><a href="login.html"></a>Login</li>
          </ul>
      </nav>
     );
}
 
export default Navbar;