import blue2 from '../../assets/blue2.jpg';

import './style/login.css';

function Login() {
  return (
    <div className='login-page'>
      <div className="login-card">
        <div className="login-content">
            <h1>Welcome Back to</h1>
            <h1>Slate Board</h1>

            <form action="/" method='POST'>
                <div className="input-email">
                    <input type="text" name="email" id="login-email" placeholder='Email address'/>
                </div>
                <div className="input-passwd">
                    <input type="text" name="password" id="login-password" placeholder='Password'/>
                </div>
                <button className='login'>Log In</button>
            </form>
        </div>
        <div className="login-img">
            <img src= {blue2} className='login-card-image'/>
        </div>
      </div>
    </div>
  )
}

export default Login
