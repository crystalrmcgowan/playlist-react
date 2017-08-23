import React, { Component } from "react"

class PlayListItem extends Component {
  render() {
    const { song } = this.props
    return (
      <section className="songCards" key={song._id}>
        <p>
          User: {song.userName}
        </p>
        <p>
          Artist/Band: {song.songArtist}
        </p>
        <p>
          Title: {song.songTitle}
        </p>
        <p>
          Notes: {song.songNotes}
        </p>
      </section>
    )
  }
}
export default PlayListItem
