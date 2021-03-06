import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./SettingNav.css";

const SettingNav = ({ showLeftNav, user }) => {
    const settingActiveStyle = {
        backgroundColor: "#131E2A"
    }

    const [settingActive, setSettingActive] = useState("profile");

    const handleSettingActive = (value) => {
        setSettingActive(value);
    }

    var leftNavClassName = "navbar navbar-expand-lg setting-nav bg-dark-content d-flex flex-column justify-content-center px-3";
    if (showLeftNav) leftNavClassName += " left-nav-active";

    return (
        <nav className={leftNavClassName}>
            <Link to="/setting/profile"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("profile")}
                style={settingActive === "profile" ? settingActiveStyle : {}}
            >
                <i className="fa fa-user fa-lg p-2"></i>
                <span className="p-2">Profile</span>
            </Link>
            <Link to="/setting/change"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("password")}
                style={settingActive === "password" ? settingActiveStyle : {}}
            >
                <i className="fa fa-shield fa-lg p-2"></i>
                <span className="p-2">Password</span>
            </Link>
            <Link to="/setting/favorite"
                className="nav-link btn w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                onClick={() => handleSettingActive("favorite")}
                style={settingActive === "favorite" ? settingActiveStyle : {}}
            >
                <i className="fa fa-heart fa-lg p-2"></i>
                <span className="p-2">Favorite</span>
            </Link>

            {/* If user is Admin, show button to access management page */}
            { user.isAdmin ?
            <>
                <Link to="/admin/dashboard"
                    className="nav-link btn btn-admin w-100 text-light d-flex flex-row justify-content-between align-items-center my-2"
                >
                    <i className="fa fa-user-secret fa-lg p-2"></i>
                    <span className="p-2">Admin</span>
                </Link>
            </>
            : "" }
            <a href="mailto:lprojekt7@gmail.com" className="btn btn-success" style={{ position:"fixed", bottom: "6%" }}>Contact Us</a>
        </nav>
    );
};

export default SettingNav;
