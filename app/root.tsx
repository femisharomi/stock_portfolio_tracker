/*root.tsx*/
import React, {useState} from 'react';
import { Meta, Links, Outlet, Scripts, useNavigate } from "@remix-run/react";
import appStylesHref from "./app.css?url";
import {LinksFunction, redirect } from '@remix-run/node';

//Adding the stylesheet to all pages rendered.
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  const navigate = useNavigate(); //Initalises the useNavigate hook

  const login = async () => {
    //Enter login functionality here
    //for now there is a temp stub here 
    navigate('/PortfolioOverview');
  }

  const loginWithSocialMedia = (provider: string) => {
    // Logic for logging in with social media
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
