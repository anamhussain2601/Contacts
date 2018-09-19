import React, { Component } from "react";
import { filteringtheArray } from "./Utils";
import DisplayFilteredData from "./DisplayFilteredData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "salahuddin",
          catgory: "ansari",
          description: "He is awesome"
        },
        {
          id: 2,
          name: "nooruddin",
          catgory: "ansari",
          description: "He is awesome"
        },
        {
          id: 3,
          name: "saifuddin",
          catgory: "ansari",
          description: "He is awesome"
        },
        {
          id: 4,
          name: "anam",
          catgory: "bokrat",
          description: "He is awesome"
        },
        {
          id: 5,
          name: "waheeda",
          catgory: "ansari",
          description: "He is awesome"
        },
        {
          id: 6,
          name: "rokaiya",
          catgory: "ansari",
          description: "He is awesome"
        },
        {
          id: 7,
          name: "bablu",
          catgory: "khan",
          description: "He is awesome"
        },
        {
          id: 8,
          name: "laali",
          catgory: "khan",
          description: "He is awesome"
        },
        {
          id: 9,
          name: "pulpul",
          catgory: "ansari",
          description: "He is awesome"
        },
        {
          id: 10,
          name: "pulpuliya",
          catgory: "shekh",
          description: "He is awesome"
        }
      ],
      filterArray: [
        {
          id: 1,
          name: "salahuddin"
        },
        {
          id: 3,
          name: "saifuddin"
        },
        {
          id: 9,
          name: "pulpul"
        }
      ],
      filteredArray: [],
      showComponent: false
    };
  }

  filterTheProductData = (productData, filterData) => {
    let x = filteringtheArray(productData, filterData);
    console.log(x, "x");
    this.setState({
      filteredArray: x,
      showComponent: true
    });
    console.log(this.state.filteredArray, "this.state.filteredAray");
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.filterTheProductData(this.state.products, this.state.filterArray);
          }}
        >
          FILTER
        </button>
        {this.state.showComponent?
        <DisplayFilteredData filteredArray={this.state.filteredArray} /> : null}
      </div>
    );
  }
}

export default App;
