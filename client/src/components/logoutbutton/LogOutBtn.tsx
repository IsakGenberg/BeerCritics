import React from "react";
import "./logoutbtn.css"

interface LogOutBtnProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

function LogOutButton({ onClick } : LogOutBtnProps) {
  return <button type="button" className="logoutbtn" onClick={onClick}>Log Out</button>;
}

export default LogOutButton;
