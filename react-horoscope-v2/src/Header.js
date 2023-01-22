import React from "react";

import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="header mb-5">
      <img src={logo} className="App-logo" alt="Spinning react logo" />
      <h1 className="mt-1 page-title">React Horoscope App</h1>
      <hr className="mb-5" />
    </header>
  );
}
