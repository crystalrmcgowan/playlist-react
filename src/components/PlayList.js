import React, { Component } from "react"
import PlayListItem from "./PlayListItem"

class PlayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: []
    }

    this.fetchData = this.fetchData.bind(this)
  }

  fetchData = e => {
    e.preventDefault()
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({ songs: data })
      })
  }

  componentDidMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({ songs: data })
        console.log("state", this.state.songs)
      })
  }
  render() {
    let songs = this.state.songs.map(song => {
      return (
        <section className="songCards" key={song._id}>
          <p>
            User: {song.userName}
          </p>
          <p>
            Artist/Band: {song.artist}
          </p>
          <p>
            Title: {song.songTitle}
          </p>
          <p>
            Notes: {song.notes}
          </p>
        </section>
      )
    })
    return (
      <div className="wholePlayList">
        <div className="generatedContent">
          <button type="Submit" id="listSubmit">
            Update List
          </button>
        </div>
        {songs}
      </div>
    )
  }
}
export default PlayList
