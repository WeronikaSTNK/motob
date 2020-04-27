import React, { Component } from "react";
import items from "./data";
const MotorcyclesContext = React.createContext();

class MotorcyclesProvider extends Component {
  state = {
    motorcycles: [],
    featuredMotorcycles: [],
    loading: true,
    sortedMotors: [],
    accessorizes: [],
    data: [],
    employees: [],
  };

  //getData about motorcycles
  async componentDidMount() {
    let motorcycles = this.formatData(items);
    let accessorizes = this.accData(items);
    let featuredMotorcycles = motorcycles.filter(
      (motorcycle) => motorcycle.featured === true
    );
    this.setState({
      motorcycles,
      featuredMotorcycles,
      loading: false,
      accessorizes,
    });

    // fetch data from api - random user - just example
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      data,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let motorcycle = { ...item.fields, images, id };
      return motorcycle;
    });
    return tempItems;
  }

  accData(items) {
    let motorcycles = this.formatData(items);
    let accessorizes = motorcycles.filter((moto) => moto.accessorize === true);
    // console.log(accessorizes);
    return accessorizes;
  }

  render() {
    return (
      <MotorcyclesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MotorcyclesContext.Provider>
    );
  }
}

const MotorcyclesConsumer = MotorcyclesContext.Consumer;
export { MotorcyclesProvider, MotorcyclesConsumer, MotorcyclesContext };

export function withMotorcycleConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <MotorcyclesConsumer>
        {(value) => <Component {...props} context={value} />}
      </MotorcyclesConsumer>
    );
  };
}
