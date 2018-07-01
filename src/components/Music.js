import React, { Component } from 'react';
import _ from 'lodash';
import ReactAudioPLayer from 'react-audio-player';

const songList = [
  {
    name: "Hear",
    src: "/Track 1.wav"
  },
  {
    name: "Angel Baby",
    src: "/Track 2.wav"
  },
  {
    name: "Hey",
    src: "/Track 3.wav"
  },
  {
    name: "Dent in the Dashboard",
    src: "/Track 4.wav"
  },
  {
    name: "Summer",
    src: "/Track 5.wav"
  },
];

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedSong: { name: '', src: '' } };
  }

  renderSongList() {
    return _.map(songList, song => {
      return (
        <button 
          className="button"
          onClick={() => this.setState({ selectedSong: song })}
        >
          {song.name}
        </button>
      );
    });
  }

  playNextSong() {
    let newSong = {};

    _.map(songList, (song, i) => {
      if (song === this.state.selectedSong) {
        if (i === songList.length-1) {
          return newSong = songList[0];
        }

        return newSong = songList[i+1];
      }
    });

    return this.setState({ selectedSong: newSong });
  }

  render() {
    const { name, src } = this.state.selectedSong;

    return (
      <div className="container center">
        <h1>Music</h1>
        <hr />
        <h3>{name}</h3>
        <ReactAudioPLayer
          src={src}
          controls
          autoPlay
          onEnded={() => this.playNextSong()}
        />
        <div style={{ 
          display: "flex", 
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}>
          {this.renderSongList()}
        </div>
      </div>
    );
  }
}

export default Music;
