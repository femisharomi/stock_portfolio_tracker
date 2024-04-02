/*PortfolioOverview.tsx*/
import React from 'react';
import { Meta, Links, Outlet, Scripts} from "@remix-run/react";

export default function PortfolioOverview() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        
        <header>
          <ul>
            <li id="home-button"> SPC </li>
            <li id="account-value"> Account Value: £10,320 </li>
            <li id="user-name"> Femi Sharomi </li>
          </ul>
        </header>

          <div className='overview-container'>
            <h1>Portfolio Overview</h1>
        
            <p>This is where the portfolio overview content will start to go.</p>
          </div>
          <Outlet />
          <Scripts />
      </body>
    </html>
  );
}
