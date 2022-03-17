import React, { useEffect, useState } from "react";

export const Tour = ({ id, name, info, image, price }) => {
  useEffect(() => {
    console.log({ id, name, info, image, price });
  }, [id]);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn">Delete</button>
      </footer>
    </article>
  );
};
