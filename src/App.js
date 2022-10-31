import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    console.log(darkTheme)
  })
  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme)
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
