const Landing = () => {
    return ( 
      <section className="landing">
          <div className="dark-overlay">
            <div className="landing-inner">
              <h1 className="x-large">Developer DevNetwork</h1>  
              <p className="lead">
                Create a Developer profile/portfolio, share posts and get help 
                from other Developers    
              </p>  
              <div className="buttons">
                <a href="register.html" className="btn btn-primary">Sign up</a>
                <a href="login.html" className="btn btn-light">Login</a>
              </div>
            </div>    
          </div>
      </section>    
     );
}
 
export default Landing;