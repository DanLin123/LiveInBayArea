import React, { Component } from 'react';
import './App.css';
import {Map, Marker} from 'google-maps-react'

class App extends Component {
  render() {
    const logo = "./bayarea.jpg";
    var positions = this.props.positions;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} 
            className="App-logo" 
            alt="logo" />
          <h2 style={{"margin": "10px"}}>Live in Bay Area</h2>
        </div>

        <FilterableMap positions={positions} />
      </div>
    );
  }
}

class FilterableMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      showVisited: true,
      showToVisit: true
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleToVisitCheckBox = this.handleToVisitCheckBox.bind(this);
    this.handleVisitedCheckBox = this.handleVisitedCheckBox.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  }

  handleToVisitCheckBox() {
    this.setState({showToVisit: !this.state.showToVisit});
  }

  handleVisitedCheckBox() {
    this.setState({showVisited: !this.state.showVisited});
  }

  render() {
    var positions = this.props.positions.filter((pos) => pos.name.toLowerCase()
                                        .startsWith(this.state.filterText.toLowerCase()));

    if(!this.state.showToVisit) {
      positions = positions.filter((pos) => !pos.visit);
    }

    if(!this.state.showVisited) {
      positions = positions.filter((pos) => pos.visit);
    }

    return (
      <div className="mapContainer">
        <div className="content side"> 
           <SearchBar 
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput}
            onToVisitCheckbox={this.handleToVisitCheckBox}
            onVisitedCheckbox={this.handleVisitedCheckBox}/>

          <PositionList positions={positions}/>
        </div>

        <div className="content map"> 
            <MyMap google={window.google} positions={positions}/>
        </div>
      </div>  
    );
  }
}

class SearchBar extends Component { 
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onUserInput(event.target.value);
  }

  render() {   
    return (
     <form style={{"padding": "10px"}}>
      <div className="checkbox"> 
            <label>
              <input type="checkbox"
                onChange={this.props.onVisitedCheckbox}/> show visited 
            </label>
      </div>

      <div className="checkbox"> 
            <label>
              <input type="checkbox" 
                onChange={this.props.onToVisitCheckbox}/> show to visit 
            </label>
      </div>

      <input type="text" 
        className="form-control" 
        placeholder="Search…" 
        onChange={this.handleChange}/>
     </form>
    );
  }
}

class PositionList extends Component {
  render() {
    var positions = this.props.positions;
    var listItem = positions.map((pos, index) =>
      <li key={index} 
        className="list-group-item list-group-item-action list-group-item-info" >
        {pos.name}
      </li>
    );

    return (
      <ul className="list-group">
        {listItem}
      </ul>
    );
  }
}

class MyMap extends Component {
  render() {
    var google = this.props.google;
    var positions = this.props.positions;
    var markers = positions.map((pos, index) => 
      <Marker key={index}
        name={pos.name}
        position={{lat: pos.latitude, lng: pos.longitude}}>
      </Marker>
      );

    return (
        <Map google={google} 
          zoom={10} 
          className="myMap">
          {markers}
        </Map>
    );
  }
}

export default App;
