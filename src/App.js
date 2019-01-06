import React, { Component } from "react";
import axios from "axios";
import AlbumList from "./components/albumlist";
import Navbar from "./components/navbar";
import Title from "./components/title";
import styled,{Grid} from "styled-components";

class App extends Component {
  state = { albums: [] };

  componentDidMount() {
    var self = this;
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(function(resp) {
        self.setState({ albums: resp.data });
      });
  }
  render() {
    return (
      <Container>
        <Navbar>
          <Title> Albums</Title>
        </Navbar>
        <Body>
          <AlbumList albums={this.state.albums} />
        </Body>
      </Container>
    );
  }
}

const Container = styled.div`{
  background:  #e1e9b7; 
}`;

const Body = styled.div`
`;

export default App;
