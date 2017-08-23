import React, { Component } from "react"

class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: ""
    }
  }
  addToList = e => {
    e.preventDefault()
    // this.setState({
    //   userName: e.target.value,
    //   songTitle: e.target.value,
    //   songArtist: e.target.value,
    //   songNotes: e.target.value
    // })
    let listItem = JSON.stringify(this.state)

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay")
      })
      .catch(err => {
        console.log(err, "boo!")
      })
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="userInput">
        <form className="userName" onSubmit={this.addToList}>
          <p>User Name:</p>
          <input
            type="text"
            placeholder="Name or User Name"
            onChange={this.handleChange}
            name="userName"
            value={this.state.userName}
          />
          <p>Artist/Band:</p>
          <input
            type="text"
            placeholder="Artist or Band Name"
            onChange={this.handleChange}
            name="songArtist"
            value={this.state.songArtist}
          />
          <p>Song Title:</p>
          <input
            type="text"
            placeholder="Song Title"
            onChange={this.handleChange}
            name="songTitle"
            value={this.state.songTitle}
          />
          <p>Notes about Song:</p>
          <textarea
            rows="4"
            cols="40"
            onChange={this.handleChange}
            name="songNotes"
            value={this.state.songNotes}
          />
          <button type="Submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
export default PlayListForm
