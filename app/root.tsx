/*root.tsx*/
import React, {useState} from 'react';
import { Meta, Links, Outlet, Scripts, useNavigate } from "@remix-run/react";
import appStylesHref from "./styles/app.css?url";
import {LinksFunction, redirect } from '@remix-run/node';

//Adding the stylesheet to all pages rendered.
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
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
        {/* Content gets generated between here - will need to expand on how it all looks later...... */}
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
