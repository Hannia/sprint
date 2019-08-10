import React, { Component } from "react";
import { getCharacters } from "../services/characterService";
import _ from "lodash";

class Home extends Component {
  state = {
    characters: [],
    limitCharacters: 6,
    offsetCharacters: 0
  };

  componentDidMount = async () => {
    this.loadCharacters();
  };

  loadCharacters = async () => {
    let { offsetCharacters } = this.state;
    const { characters, limitCharacters } = this.state;
    const loadedcharacters = await getCharacters({ limit: limitCharacters, offset: offsetCharacters });
    const allCharacters = [...characters, ...loadedcharacters];
    offsetCharacters += limitCharacters;
    this.setState({ characters: allCharacters, offsetCharacters });
  };

  orderCharacters = attribute => {
    const { characters } = this.state;
    const orderedCharacters = _.orderBy(characters, attribute, "asc");
    this.setState({ characters: orderedCharacters });
  };

  render() {
    return (
      <div className="container home-container">
        <h4>SORT BY</h4>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              this.orderCharacters("name");
            }}
          >
            Name
          </button>
          {/* <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              this.orderCharacters("birthday");
            }}
          >
            Birthday
          </button> */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              this.orderCharacters("portrayed");
            }}
          >
            Portrayed
          </button>
        </div>

        <div>
          {this.state.characters.map(character => (
            <div className="character-container" key={character.char_id}>
              <strong> {character.portrayed}</strong>
              <br />
              <img className="character_image" src={character.img} />
              <br />
              <strong>Name: {character.name}</strong>
              <br />
              <span>Occupation: {character.occupation}</span>
              <br />
              <span>Status: {character.status}</span>
              <br />
              <span>Birthday: {character.birthday}</span>
            </div>
          ))}
        </div>

        <button className="btn btn-primary" onClick={this.loadCharacters}>
          More characters
        </button>
      </div>
    );
  }
}

export default Home;
