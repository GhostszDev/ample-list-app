import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Content from "./components/Content";
import ReactDOM from "react-dom/client";

function App() {

  return (
    <div className="App">
        <Nav></Nav>
        <Content></Content>
    </div>
  );
}

export default App;
