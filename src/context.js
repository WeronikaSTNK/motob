import React, { createContext, useState, useEffect, useCallback } from "react";
import items from "./data";
import PropTypes from 'prop-types';

const MotorcyclesContext = createContext({
  motorcycles: [],
  featuredMotorcycles: [],
  loading: true,
  accessorizes: [],
  data: [],
  employees: [],

});
const initialStateAuth = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const MotorcyclesProvider = ({ children }) => {
  const [motorcycle, setMotorcycles] = useState([]);
  const [accessorizes, setAccessorizes] = useState([]);
  const [featuredMotorcycles, setFeaturedMotorcycles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let motorcycles = formatData(items);
    let accessorizes = accData(items);
    let featuredMotorcycles = motorcycles.filter(
      (motorcycle) => motorcycle.featured === true
    );
    setMotorcycles(motorcycles);
    setAccessorizes(accessorizes);
    setFeaturedMotorcycles(featuredMotorcycles);
    setLoading(false);
  }, []);


  const accData = useCallback((items) => {
    let motorcycles = formatData(items);
    let accessorizes = motorcycles.filter((moto) => moto.accessorize === true);
    return accessorizes;
  }, []);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let motorcycle = { ...item.fields, images, id };
      return motorcycle;
    });
    return tempItems;

  };

 const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

  return (
    <MotorcyclesContext.Provider value={{initialStateAuth,  motorcycle, accessorizes, featuredMotorcycles, reducer }}>
      {children}
    </MotorcyclesContext.Provider>
  );
};

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
MotorcyclesProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
