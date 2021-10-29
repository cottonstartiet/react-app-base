import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardPage2 from "./DashbaordPage2";
import DashboardHome from "./DashboardHome";
import DashboardPage1 from "./DashboardPage1";

export default function Dashbaord() {
    return (
        <DashboardLayout />
    );
}