import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Background from "./img/shop.jpeg";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="main__wrap">
        <img
          src={Background}
          alt="background"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "-1",
            width: "100vw",
            height: "100vh",
            opacity: "0.2",
          }}
        />
        <main className="container">
          <div className="card__box">
            <NavBar
              totalCounters={
                this.state.counters.filter((c) => c.value > 0).length
              }
            />
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onRestart={this.handleRestart}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
