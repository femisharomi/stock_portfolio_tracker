/*_index.tsx*/
import { useNavigate } from "@remix-run/react";


export default function Index() {
    const navigate = useNavigate(); //Initalises the useNavigate hook

    const login = async () => {
      //Enter login functionality here
      //for now there is a temp stub here 
      navigate('/PortfolioOverview');
    }
  
    const loginWithSocialMedia = (provider: string) => {
      // Logic for logging in with social media
      navigate('/PortfolioOverview');
    }
    return (
        <div className="login-container">
        <h1>Login</h1>
        <div className="input-container">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <div className="button-container">
          <button className="login" onClick={login}>Login</button>
        </div>
        <div className="social-media">
          <button className="google-login-button" onClick={() => loginWithSocialMedia('google')} title="Login with Google"></button>
          <button className="microsoft-login-button" onClick={() => loginWithSocialMedia('microsoft')} title="Login with Microsoft"></button>
          <button className="yahoo-login-button" onClick={() => loginWithSocialMedia('yahoo')} title="Login with Yahoo"></button>
        </div>
      </div>
    );
  }
  