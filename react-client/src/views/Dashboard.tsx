import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import DashboardPage2 from "./DashbaordPage2";
import DashboardHome from "./DashboardHome";
import DashboardPage1 from "./DashboardPage1";

export default function Dashbaord() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/dashboard'>
                            Dashboard Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/page1'>
                            Dashboard Page 1
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/page2'>
                            Dashboard Page 2
                        </Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/dashboard/page1'>
                    <DashboardPage1 />
                </Route>
                <Route path='/dashboard/page2'>
                    <DashboardPage2 />
                </Route>
                <Route path='/dashboard'>
                    <DashboardHome />
                </Route>
            </Switch>
        </div>
    );
}