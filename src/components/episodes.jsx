import React, { Component } from "react";
import { getEpisodes } from "../services/episodesService";

class Episodes extends Component {
  state = {
    episodes: [],
    limitEpisodes: 6,
    offsetEpisodes: 0
  };

  componentDidMount = async () => {
    const episodes = await getEpisodes();
    this.setState({ episodes });
  };

  // filterEpisodes = () => {
  //   const { episodes } = this.state;
  // };

  render() {
    return (
      <div className="container">
        {this.state.episodes.map(episode => (
          <div className="episode-container" key={episode.episode_id}>
            <strong>Title: {episode.title}</strong>
            <br />
            <span>Seasson: {episode.season}</span>
            <br />
            <span>Episode number: {episode.episode}</span>
            <br />
            <span>Air Date: {episode.air_date}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Episodes;
