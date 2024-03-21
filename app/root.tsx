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
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Content gets generated between here - will need to expand on how it all looks later...... */}
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
