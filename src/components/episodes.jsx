import React, { Component } from "react";
import { getEpisodes } from "../services/episodesService";
import _ from "lodash";

class Episodes extends Component {
  state = {
    episodes: [],
    allEpisodes: [],
    limitEpisodes: 6,
    offsetEpisodes: 0,
    displayFilters: false,
    seasons: ["1", "2", "3", "4", "5"]
  };

  componentDidMount = async () => {
    const episodes = await getEpisodes();
    this.setState({ episodes, allEpisodes: episodes });
  };

  filterEpisodesBySeason = season => {
    const { allEpisodes } = this.state;
    const filteredEpisodes = _.filter(allEpisodes, episode => {
      return episode.season === season;
    });

    this.setState({ episodes: filteredEpisodes });
  };

  toggleFilters = () => {
    this.setState({ displayFilters: !this.state.displayFilters });
  };

  render() {
    return (
      <div className="container">
        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle" onClick={this.toggleFilters}>
            Seassons
          </a>

          <div style={{ display: this.state.displayFilters ? "block" : "none" }} className="dropdown-menu">
            {this.state.seasons.map(season => (
              <a
                onClick={() => {
                  this.filterEpisodesBySeason(season);
                }}
                className="dropdown-item"
              >{`Season ${season}`}</a>
            ))}
          </div>
        </div>

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
