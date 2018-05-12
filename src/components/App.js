import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    //init state
    this.state = {
      fishes: {}, //no state
      order: {}
    };
  }

  addFish(fish) {
    //update state
    const fishes = { ...this.state.fishes };
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    //this.setState({ fishes: fishes });
    this.setState({ fishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age="5000" cool={true} />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
