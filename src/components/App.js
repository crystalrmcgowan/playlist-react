import React, { Component } from "react"
import logo from "../logo.svg"
import "../App.css"
import NavBar from "./NavBar"
import PlayListForm from "./PlayListForm"
import PlayList from "./PlayList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <PlayListForm />
          <PlayList />
        </main>
      </div>
    )
  }
}

export default App
