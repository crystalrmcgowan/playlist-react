import React, { Component } from "react"
import PlayListItem from "./PlayListItem"

class PlayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: []
    }
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
      return <PlayListItem song={song} />
    })
    return (
      <div className="wholePlayList">
        <div className="generatedContent">
          <button type="Submit" id="listSubmit" onClick={this.fetchData}>
            Update List
          </button>
        </div>
        {songs}
      </div>
    )
  }
}
export default PlayList
