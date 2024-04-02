/*PortfolioOverview.tsx*/
import React from 'react';
import { Meta, Links, Outlet, Scripts} from "@remix-run/react";

export default function PortfolioOverview() {

  return (
    <> 
          <div className='overview-container'>

            <div id="sidebar">
              
            </div>

            <div id="primary">
              <img src="account_summary.png"></img>
            </div>

            <div id="secondary">
            <img src="/investments.png"></img>
            </div>

          </div>
          <Outlet />
          <Scripts />
    </>
  );
}
