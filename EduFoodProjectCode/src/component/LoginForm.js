import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./LoginForm.css"

class Login extends Component{
    constructor(){
        super()

    }
    render(){
        return(
  <div>
            <div className="container">
                    <form>
               <div className="row">
                        <h2 >Login with Social Media or Manually</h2>
             <div class="vl">
                   <span class="vl-innertext">or</span>
              </div>

      <div class="col">
        <Link to="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </Link>
        <Link to="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </Link>
        <Link to="#" class="google btn">
          <i class="fa fa-google fa-fw"></i> Login with Google+
        </Link>
      </div>

      <div class="col">
        <div class="hide-md-lg">
          <p>or sign in manually:</p>
        </div>

        <input type="text" name="username" placeholder="Username" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <input type="submit" value="Login"/>
      </div>

    </div>
  </form>
</div>

<div class="bottom-container">
  <div class="row">
    <div class="col">
      <a href="#"  class="btn">Forgot password?</a>
    </div>
  </div>
</div>
</div>


        )
    }
}

export default Login;