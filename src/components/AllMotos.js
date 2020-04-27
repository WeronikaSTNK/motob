import React, { Component } from "react";
import { MotorcyclesContext } from "../context";
import Loading from "./Loading";
import SingleAccessorize from "./SingleAccessorize";
import Title from "./Title";
import SingleMotorcycle from "./SingleMotorcycle";

export default class AllItems extends Component {
  static contextType = MotorcyclesContext;
  render() {
    let {
      loading,
      featuredMotorcycles: motorcycle,
      accessorizes,
    } = this.context;
    motorcycle = motorcycle.map((item) => {
      return <SingleMotorcycle key={item.id} motorcycle={item} />;
    });
    accessorizes = accessorizes.map((item) => {
      return <SingleAccessorize key={item.id} accessorizes={item} />;
    });
    return (
      <section>
        <Title title="Motocykle" />
        {loading ? <Loading /> : motorcycle}
        <Title title="Akcesoria" />
        {loading ? <Loading /> : accessorizes}
      </section>
    );
  }
}
