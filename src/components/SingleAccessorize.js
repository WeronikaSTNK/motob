import React from 'react'
import { ItemsImages } from "./ItemsImages";
import "../styles/styles.scss";

export const SingleAccessorize = ({accessorizes}) => {
    const {
    price,
    images,
    name,
    description
  } = accessorizes;
  return (
       <>
      <section id="accessorizes">
        <ItemsImages price={price} images={images} name={name} />
        <div className="descWrapper">
          <div className="descriptionMoto">
            <h4>Info: </h4>
            <b> {description}</b>
          </div>
        </div>
      </section>
    </>
  )
}
export default SingleAccessorize
