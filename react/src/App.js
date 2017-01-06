import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    var positions = this.props.positions;
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} 
            className="App-logo" 
            alt="logo" />

          <h2>Live in Bay Area</h2>
        </div>

        <FilterableMap positions={positions} />
      </div>
    );
  }
}

class FilterableMap extends Component {
  render() {
    var positions = this.props.positions;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-md-2">
              <SearchBar />
              <br/>
              <PositionList positions={positions}/>
          </div>

          <div className="col-sm-10 col-md-10">
          </div>
        </div>
      </div>  
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
     <form>
      <div className="checkbox"> 
            <label>
              <input type="checkbox"/> show visited 
            </label>
      </div>
      <div className="checkbox"> 
            <label>
              <input type="checkbox"/> show to visit 
            </label>
      </div>
      <input type="text" 
        className="form-control" 
        placeholder="Search…" />
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



export default App;
