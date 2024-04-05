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
              <h1>Stocks</h1>
              <table>
                <tr>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>24H Gain</th>
                </tr>
                <tr>
                  <td id="stock-name">Apple</td>
                  <td id="stock-value">£161</td>
                  <td id="stock-gain">+108%</td>
                </tr>
              </table>
            </div>

          </div>
          <Outlet />
          <Scripts />
    </>
  );
}
