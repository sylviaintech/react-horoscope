import React from "react";

import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="header-style mb-5">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="mb-5 mt-1">Your React Horoscope</h1>
    </header>
  );
}
